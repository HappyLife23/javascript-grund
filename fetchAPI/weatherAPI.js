/* Example 1: Fetching Weather Data */

const apiKey = 'abf418b44e6f58c40e6819f49d423a35';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=göteborg&appid=${apiKey}`;


const container = document.querySelector('.container');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;
        container.innerHTML = 
            ` 
                <div class="first">
                    <p> Temperature in ${location}: ${temperature}°C</p>
                    <p>Weather: ${description}</p>
                    <img src="./assets/sun.png" />  
                </div>    
                <div class="second">       
                    <p> Temperature in ${location}: ${temperature}°C</p>
                    <p>Weather: ${description}</p>
                    <img src="./assets/rain.png" />
                </div>  
                <div class="third">
                    <p> Temperature in ${location}: ${temperature}°C</p>
                    <p>Weather: ${description}</p>
                    <img src="./assets/cloud.png" />
                </div>
            
                
            `
    })
    .catch(error => {
        console.error('Error:', error);
    })