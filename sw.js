/* Ru-Board++ MV3 service worker.
   Держит открытым offscreen-документ с фоновой логикой (bg.js)
   и выполняет для него вызовы API, недоступные в offscreen. */
"use strict";
const OFF = "offscreen.html";
let creating = null;

async function ensureOffscreen() {
  try {
    if (await chrome.offscreen.hasDocument()) return;
  } catch (e) {}
  if (!creating) {
    creating = chrome.offscreen.createDocument({
      url: OFF,
      reasons: ["LOCAL_STORAGE", "DOM_PARSER"],
      justification: "Фоновая проверка тем, почты и закладок Ru-Board: хранение настроек и разбор страниц форума"
    }).catch(e => {
      if (!/single offscreen|already/i.test(String(e && e.message))) console.warn(e);
    }).finally(() => { creating = null; });
  }
  return creating;
}

function clean(o) {
  if (o && typeof o === "object" && !Array.isArray(o)) {
    for (const k of Object.keys(o)) if (o[k] === null || o[k] === undefined) delete o[k];
  }
  return o;
}

/* ---- вкладки, в которые надо подставить переменную wlp ---- */
async function getWatch() {
  return (await chrome.storage.session.get("watch")).watch || {};
}
async function setWatch(w) { await chrome.storage.session.set({ watch: w }); }

function injectWlp(tabId, url) {
  return chrome.scripting.executeScript({
    target: { tabId },
    func: u => { window.wlp = u; },
    args: [url]
  }).catch(() => {});
}

chrome.tabs.onUpdated.addListener(async (tabId) => {
  const w = await getWatch();
  if (w[tabId]) injectWlp(tabId, w[tabId]);
});
chrome.tabs.onRemoved.addListener(async (tabId) => {
  const w = await getWatch();
  if (w[tabId]) { delete w[tabId]; setWatch(w); }
});

/* ---- контекстное меню ---- */
const FORUM = ["*://forum.ru-board.com/*"];
function createMenus(cq) {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({ id: "Link", title: "Копировать адрес ссылки и текст", contexts: ["link"], documentUrlPatterns: FORUM });
    chrome.contextMenus.create({ id: "COPY", title: "Выделить часть текста ссылки", contexts: ["link"], documentUrlPatterns: FORUM });
    chrome.contextMenus.create({ id: "HTML", title: "Копировать текст с тегами", contexts: ["selection"], documentUrlPatterns: FORUM });
    if (cq) chrome.contextMenus.create({ id: "cq", title: "Копировать цитату", contexts: ["selection"], documentUrlPatterns: ["*://*/*"] });
    void chrome.runtime.lastError;
  });
}

function copyQuote() {
  var a = window.getSelection(), b = document.createElement("div");
  document.body.appendChild(b);
  b.innerHTML = "[q]" + a + "[/q][url=" + document.location.href.split("#sc=")[0] + "#sc=" + window.pageYOffset + "&vsfp=" + a + "]источник[/url]";
  a.selectAllChildren(b);
  document.execCommand("copy");
  b.remove();
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!tab) return;
  if (info.menuItemId === "cq") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id, frameIds: [info.frameId || 0] },
      func: copyQuote
    }).catch(() => {});
  } else {
    chrome.tabs.sendMessage(tab.id, { [info.menuItemId]: 1 }).catch(() => {});
  }
});

/* ---- принудительный http вместо https (опции prch / iprch) ---- */
const TYPES = ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object",
  "xmlhttprequest", "ping", "media", "websocket", "other"];
async function setRedirects(forum, img) {
  const rule = (id, host) => ({
    id, priority: 1,
    action: { type: "redirect", redirect: { regexSubstitution: "http://" + host + "/\\1" } },
    condition: { regexFilter: "^https://" + host.replace(/\./g, "\\.") + "/(.*)$", resourceTypes: TYPES }
  });
  const add = [];
  if (forum) add.push(rule(1, "forum.ru-board.com"));
  if (img) add.push(rule(2, "i.ru-board.com"));
  await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [1, 2], addRules: add });
}

/* ---- вызовы от offscreen ---- */
async function api(name, a) {
  switch (name) {
    case "action.setBadgeBackgroundColor": return chrome.action.setBadgeBackgroundColor(a[0]);
    case "action.setBadgeText": return chrome.action.setBadgeText(a[0]);
    case "action.setIcon": return chrome.action.setIcon(a[0]);
    case "action.setTitle": return chrome.action.setTitle(a[0]);
    case "cookies.set": return chrome.cookies.set(clean(a[0]));
    case "cookies.get": return chrome.cookies.get(a[0]);
    case "cookies.remove": return chrome.cookies.remove(a[0]);
    case "notifications.create": return chrome.notifications.create(a[0], clean(a[1]));
    case "notifications.clear": return chrome.notifications.clear(a[0]);
    case "tabs.create": return chrome.tabs.create(a[0]);
    case "tabs.sendMessage": return chrome.tabs.sendMessage(a[0], a[1]).catch(() => {});
    case "watchTab": {
      const w = await getWatch(); w[a[0]] = a[1]; await setWatch(w);
      return injectWlp(a[0], a[1]);
    }
    case "menus": return createMenus(a[0]);
    case "redirects": return setRedirects(a[0], a[1]);
  }
  throw new Error("unknown api " + name);
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || typeof msg !== "object" || msg.__fwd || msg.__evt) return;
  if (msg.__api) {
    api(msg.__api, msg.args || []).then(
      r => sendResponse(r === undefined ? null : r),
      e => sendResponse({ __err: String(e && e.message || e) })
    );
    return true;
  }
  if (sender.url && sender.url.indexOf("/" + OFF) !== -1) return;
  /* сообщение от content script или popup — передаём фоновой логике */
  (async () => {
    await ensureOffscreen();
    try {
      const r = await chrome.runtime.sendMessage({
        __fwd: msg,
        sender: { url: sender.url, tab: sender.tab ? { id: sender.tab.id, url: sender.tab.url } : undefined }
      });
      sendResponse(r);
    } catch (e) {
      sendResponse(null);
    }
  })();
  return true;
});

chrome.notifications.onClicked.addListener(async id => {
  await ensureOffscreen();
  chrome.runtime.sendMessage({ __evt: "notif", id }).catch(() => {});
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("keepalive", { periodInMinutes: 1 });
  ensureOffscreen();
});
chrome.runtime.onStartup.addListener(ensureOffscreen);
chrome.alarms.onAlarm.addListener(ensureOffscreen);
ensureOffscreen();
