
document.querySelector('button').addEventListener('click', getCat)

function getCat(){

  const url = 'https://api.thecatapi.com/v1/images/search'

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data[0].breeds
      document.querySelector('img').src = data[0].url
    })
    .catch(err => {
      console.log(`err ${err}`)
    })
}
