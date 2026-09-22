/* Ru-Board++ MV3: прослойка для bg.js, работающего в offscreen-документе.
   Здесь доступен только chrome.runtime, поэтому остальные API
   вызываются через service worker (sw.js). */
var C = (function () {
  "use strict";
  function call(name, args, cb) {
    chrome.runtime.sendMessage({ __api: name, args: args || [] }, function (r) {
      void chrome.runtime.lastError;
      if (r && r.__err) { console.warn("[Ru-Board++]", name, r.__err); r = undefined; }
      cb && cb(r);
    });
  }
  var notifListeners = [];
  chrome.runtime.onMessage.addListener(function (m) {
    if (m && m.__evt === "notif") notifListeners.forEach(function (f) { f(m.id); });
  });
  var version = "";
  try {
    var x = new XMLHttpRequest();
    x.open("GET", chrome.runtime.getURL("manifest.json"), false);
    x.send();
    version = JSON.parse(x.responseText).version;
  } catch (e) {}
  return {
    version: version,
    action: {
      setBadgeBackgroundColor: function (d) { call("action.setBadgeBackgroundColor", [d]); },
      setBadgeText: function (d) { call("action.setBadgeText", [d]); },
      setIcon: function (d) { call("action.setIcon", [d]); },
      setTitle: function (d) { call("action.setTitle", [d]); }
    },
    cookies: {
      set: function (d, cb) { call("cookies.set", [d], cb); },
      get: function (d, cb) { call("cookies.get", [d], cb); },
      remove: function (d, cb) { call("cookies.remove", [d], cb); }
    },
    notifications: {
      create: function (id, o, cb) { call("notifications.create", [String(id), o], cb); },
      clear: function (id, cb) { call("notifications.clear", [String(id)], cb); },
      onClicked: { addListener: function (f) { notifListeners.push(f); } }
    },
    tabs: {
      create: function (o, cb) { call("tabs.create", [o], cb); },
      sendMessage: function (id, m) { call("tabs.sendMessage", [id, m]); }
    },
    watchTab: function (id, url) { call("watchTab", [id, url]); },
    menus: function (cq) { call("menus", [!!cq]); },
    redirects: function (a, b) { call("redirects", [!!a, !!b]); },
    /* Сообщения от content script и popup приходят через sw.js в обёртке __fwd */
    onMsg: function (fn) {
      chrome.runtime.onMessage.addListener(function (m, snd, sR) {
        if (!m || !m.__fwd) return;
        var done = false;
        try {
          fn(m.__fwd, m.sender || {}, function (x) { done = true; sR(x); });
        } finally {
          if (!done) sR(null);
        }
      });
    }
  };
})();

/* Замена webRequestBlocking: следим за опциями «https → http» и
   включаем/выключаем правила declarativeNetRequest в sw.js */
(function () {
  var last = "";
  function sync() {
    var l = localStorage, a = l.prch == "true", b = l.iprch == "true", k = a + "|" + b;
    if (k !== last) { last = k; C.redirects(a, b); }
  }
  sync();
  setInterval(sync, 3000);
})();
