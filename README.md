# liberium
A lightweight, open source, and free to use javascript library made for the unblocking community.
Updates will keep coming, please suggest things to add or open pull requests with new features!
## How to use
Put the Library url in your head tag
<script src="https://gitloaf.com/cdn/albibos/liberium/main/library.js"></script>
or (you can use any cdn, it doesnt matter)
<script src="https://cdn.jsdelivr.net/gh/albibos/liberium@main/library.js"></script>
Functions:

Liberium.cloak(url) - opens an about:blank tab using the specified url parameter

Liberium.blob(url) - opens a blob: url using the specified url parameter

Liberium.copen(id) - opens an about:blank tab with a 3kh0 assets game loaded via the id provided

Liberium.redirect(url) - redirects the user to the specified url

Liberium.tabcloak(title, faviconurl) - sets the title and favicon based on the specified params. Still works if only title or only faviconurl are set, just do (null, faviconurl) or (title, null)

In the works:
Liberium.gopen(src, param, id) - redirects to a page of your choice with a url param of your choice and a game id of your choice (only use if you know what you're doing)
