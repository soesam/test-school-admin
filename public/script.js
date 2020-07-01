const name = 'school admin'
const view = document.querySelector('body')



const paths = {
  '@': '/views/home.html',
  'test': '/views/test.html'
}



const page = content => `
<html>
  <head>
    <meta name="viewport" value="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
    <script src="/__/firebase/7.15.5/firebase-app.js" defer></script>
    <script src="/__/firebase/init.js" defer></script>
    <script src="/script.js" defer></script>
  </head>
  <body>
    ${content}
  </body>
</html>`



const load = path => {
  fetch(path)
  .then(response => response.text())
  .then(text => document.write(page(text)))
}



const refresh = () =>
  load(paths[window.location.hash.slice(2)] || paths['@'])



document.title = name
window.onhashchange = refresh
refresh()
