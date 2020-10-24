console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const dataMessage = document.querySelector('#dataMessage')
const errorMessage = document.querySelector('#errorMessage')

weatherForm.addEventListener('submit', (event) => {

    event.preventDefault()

    dataMessage.textContent = 'Loading Data, Please Wait'
    errorMessage.textContent = ''

    const url = 'http://localhost:3001/weather?address='+searchTerm.value
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error){
                console.log(data.error)
                errorMessage.textContent = data.error
            }
            else{
                console.log(data)
                dataMessage.textContent = 'Search Term: ' + data.address + '\n' +' Location: ' + data.location + ' Forecast: ' + data.forecast
            }
            
        })
    })
})