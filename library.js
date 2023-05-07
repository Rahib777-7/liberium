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
  }
};

window.Gallium = Gallium;
