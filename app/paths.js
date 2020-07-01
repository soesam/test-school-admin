function load(el, path) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       el.innerHTML = xhttp.responseText;
    }
}
xhttp.open('GET', path, true)
xhttp.send()
}



paths = {
  'root': '/views/test.html',
  'test': '/views/test.html',
  'say-hello': '/views/hello.html'
}



const root = document.querySelector('.root')



function update() {
  load(root, paths[window.location.hash.slice(2)] || paths['root'])
}



window.onhashchange = update
update()
