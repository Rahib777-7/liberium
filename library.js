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
  g404: function(key) {
  var htmlContent = `
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
      <title>Error 404 (Not Found)!!1</title>
      <style>
        * {
          visibility: hidden;
        }

        html,
        code {
          font: 15px/22px arial, sans-serif;
        }

        html {
          background: #fff;
          color: #222;
        }

        body {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          visibility: visible;
        }

        #overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #overlay-content {
          text-align: center;
          color: #fff;
        }

        #overlay-logo {
          width: 150px;
          height: 54px;
          background: url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;
          background-size: contain;
        }

        #overlay-message {
          margin-top: 30px;
          font-weight: bold;
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <div id="overlay">
        <div id="overlay-content">
          <div id="overlay-logo" aria-label="Google"></div>
          <p id="overlay-message"><b>404.</b> <ins>That’s an error.</ins></p>
          <p>The requested URL <code></code> was not found on this server. <ins>That’s all we know.</ins></p>
        </div>
      </div>
    </body>
  </html>
  `;

  var overlay = document.createElement("div");
  overlay.innerHTML = htmlContent;

  document.body.appendChild(overlay);

  document.addEventListener("keydown", function(event) {
    if (event.key === key) {
      document.body.removeChild(overlay);
    }
  });
},
};

window.Liberium = Liberium;
