console.log('hej')

// abf418b44e6f58c40e6819f49d423a35



let apiKey = 'a89401d9c5746074e8e411a50d63b7ac';
let city = 'london';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
 .then(response => response.json())
 .then(data => {
    console.log('Hourly Forecast Data:', data);
    // Use the data object to access the hourly forecast data
 })
 .catch(error => {
    console.error('Error:', error);
 });

function showData() {
    let container = document.querySelector('.container');
    let html = '';
    `
    <p class = 'para'>${city}</p>
    `
    container += html
     
 }
showData();
 