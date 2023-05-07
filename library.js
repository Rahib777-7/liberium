var Gallium = {
  cloak: function(url) {
    var win = window.open();
    var f = win.document.createElement("iframe");
    window.focus();

    if (!url) return;

    f.style.width = "100%";
    f.style.height = "100%";
    win.document.body.appendChild(f);
    f.src = url;
    win.document.body.style.margin = '0';
    f.style.border = 'none';
    f.style.margin = '0';
    win.document.body.style.height = '100vh';
  },
  blob: function(url) {
    var page = new Blob([`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="${url}"></iframe>`], { type: "text/html" });
    window.open(URL.createObjectURL(page));
  }
};

window.Gallium = Gallium;
