const load = (el, path) => {
  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = () => {
    if (this.readystate === 4 && this.status === 200) {
      el.innerHTML = xhr.responseText
    }
  }

  xhr.open('GET', path, true)
  xhr.send()
}



const paths = {
  'root': '/views/test.html',
  'test': '/views/test.html'
}



document.body.innerHTML += '<div class="root"></div>'
const root = document.querySelector('.root')



const update = () => {
  load(root, paths[window.location.hash.slice('/#/')[1] || 'root'])
}



window.onhashchange = update
window.onload = update
