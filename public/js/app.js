
console.log("client javascript is loaded")

const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


messageOne.textContent= 'From javascript'

weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent= 'Loading...'
    messageTwo.textContent= ''

fetch('http://localhost:3000/weather?search=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            messageOne.textContent = data.cityName
            messageTwo.textContent = 'It is ' + data.temperature + '°C out'
            console.log(data)
        }
    })
})
   
})