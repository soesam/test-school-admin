const name = 'school admin'
const view = document.querySelector('.view')



const paths = {
  '@': '/views/test.html'
}



const load = path => {
  fetch(path)
  .then(response => response.text())
  .then(text => view.innerHTML = text)
}



const refresh = () =>
  load(paths[window.location.hash.slice(2)] || paths['@'])



document.title = name
window.onhashchange = refresh
refresh()
