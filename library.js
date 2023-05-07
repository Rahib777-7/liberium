var Liberium = {
  cloak: function(url) {
    var win = window.open();
    var f = win.document.createElement("iframe");
    window.focus();

    if (!url) return;

    f.style.width = "100%";
    f.style.height = "100%";
    win.document.body.appendChild(f);
    f.src = url;
    win.document.body.style.margin = "0";
    f.style.border = "none";
    f.style.margin = "0";
    win.document.body.style.height = "100vh";
  },

  blob: function(url) {
    var page = new Blob(
      [
        `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="${url.startsWith(
          "https://"
        )
          ? url
          : "https://" + url}"></iframe>`,
      ],
      { type: "text/html" }
    );
    return window.open(URL.createObjectURL(page));
  },

  copen: function(id) {
    var url = `https://raw.githack.com/3kh0/3kh0-Assets/main/${id}/index.html`;
    this.cloak(url);
  },
 gopen: function(url, param, id) {
  var cleanUrl = url.trim();
  var cleanParam = param.trim();
  var cleanId = id.trim();

  var fullUrl = window.location.origin + "/" + cleanUrl + "?" + cleanParam + "=" + cleanId;
  window.location.href = fullUrl;
},
redirect: function(url) {
    window.location.href = url;
  },
  tabcloak: function(title, faviconurl) {
    if (title) {
      document.title = title;
    }
    if (faviconurl) {
      var favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
      favicon.type = "image/x-icon";
      favicon.rel = "icon";
      favicon.href = faviconurl;
      document.head.appendChild(favicon);
    }
  },
};

window.Liberium = Liberium;
