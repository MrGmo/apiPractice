document.querySelector('button').addEventListener('click', findBrew)

function findBrew(){
let keyWord = document.querySelector('input').value
let url = 'https://api.openbrewerydb.org/breweries/autocomplete?query=' + keyWord

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data[0].name
    document.querySelector('h3').innerText = data[0].id
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
}
