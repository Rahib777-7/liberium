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
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';

      xhr.onload = function() {
        if (xhr.status === 200) {
          var blobUrl = URL.createObjectURL(xhr.response);
          resolve(blobUrl);
        } else {
          reject(new Error('Failed to convert URL to blob.'));
        }
      };

      xhr.onerror = function() {
        reject(new Error('Failed to convert URL to blob.'));
      };

      xhr.send();
    });
  }
};

window.Gallium = Gallium;
