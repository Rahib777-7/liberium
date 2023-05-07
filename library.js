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
                ], {
                    type: "text/html"
                }
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
        404: function(key) {
            var htmlContent = `
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
        <title>Error 404 (Not Found)!!1</title>
        <style>
          /* CSS styles for the error page content */
          * {
            margin: 0;
            padding: 0
          }

          html,
          code {
            font: 15px/22px arial, sans-serif
          }

          html {
            background: #fff;
            color: #222;
            padding: 15px
          }

          body {
            margin: 7% auto 0;
            max-width: 390px;
            min-height: 180px;
            padding: 30px 0 15px
          }

          *>body {
            background: url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;
            padding-right: 205px
          }

          p {
            margin: 11px 0 22px;
            overflow: hidden
          }

          ins {
            color: #777;
            text-decoration: none
          }

          a img {
            border: 0
  }
}
</style>
</head>
<body>
<a href="//www.google.com/"><span id="logo" aria-label="Google"></span></a>
<p><b>404.</b> <ins>That’s an error.</ins></p>
<p>The requested URL <code></code> was not found on this server. <ins>That’s all we know.</ins></p>
</body>
</html>
`;
            var overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.zIndex = "9999";
            overlay.innerHTML = htmlContent;

            document.body.appendChild(overlay);

            document.addEventListener("keydown", function(event) {
                if (event.key === key) {
                    document.body.removeChild(overlay);
                }
            });
        };

        window.Liberium = Liberium;
