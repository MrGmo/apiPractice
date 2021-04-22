
document.querySelector('button').addEventListener('click', findMeal)


function findMeal(){
let foodChoice = document.querySelector('input').value
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + foodChoice

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('img').src = data.meals[0].strMealThumb
    document.querySelector('h2').innerText = data.meals[0].strMeal
    document.querySelector('h3').innerText = data.meals[0].strInstructions
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
}
