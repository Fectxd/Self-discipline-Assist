var e = document.createElement('div');
var url = document.currentScript.getAttribute("src").split('?');
e.id = url.length == 1 ? "" : btoa(url[1]);
e.style.display = 'none';
document.body.appendChild(e);