/* Ru-Board++ MV3: выполняется в контексте страницы (world: MAIN).
   В MV3 content script не может вставлять inline <script>, поэтому
   код для страницы передаётся сюда событием и выполняется здесь. */
(function () {
  if (window.__rbppMain) return;
  window.__rbppMain = 1;
  document.addEventListener("rbpp-exec", function (e) {
    var d = document.documentElement;
    try { (0, eval)(String(e.detail)); }
    catch (err) { d && d.setAttribute("data-rbpp-err", (err && err.message) || String(err)); }
  }, true);
})();
