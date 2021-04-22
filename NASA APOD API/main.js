//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPic)

function getPic(){
  let day = document.querySelector('input').value
  let url = `https://api.nasa.gov/planetary/apod?date=${day}&hd=true&api_key=P7SiBj4ySGu4mtyXTPR3PejyOptmqeaJJLh8baoK`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.copyright
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
