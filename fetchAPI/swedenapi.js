/* Example 1: Fetching Weather Data */

const apiKey = '0f6869a37d6f4d38b7d111034230912';
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=spain&days=3&aqi=no&alerts=no`;

const container = document.querySelector('.container');

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        const dateDays = data.forecast.forecastday.map(day => day.date_epoch * 1000);
        
        container.innerHTML = `
        <h3>${data.location.name}</h3>
            <div class="first">
                <img src="" class='weather-icon'/>
                <div class = 'weather-info'>
                <h4>${new Date(dateDays[0]).toLocaleDateString()}</h4>
                    <h4>Idag</h4>  
                    <div class='current-weather'>
                        <p>${data.current.temp_c}°C</p>
                        <p>${data.current.condition.text}</p>
                    </div> 
                </div>                            
            </div>
            <div class="second">
                <img src="" class='weather-icon'/>
                <div class = 'weather-info'>
                <h4>${new Date(dateDays[1]).toLocaleDateString()}</h4>
                
                    <h4>Imorgon</h4> 
                    <div class='current-weather'>
                        <p>${data.current.temp_c}°C</p>
                        <p>${data.current.condition.text}</p>
                    </div>
                </div>                                
            </div>
                <div class="third">
                <img src="" class='weather-icon'/>
                <div class = 'weather-info'> 
                <h4>${new Date(dateDays[2]).toLocaleDateString()}</h4>
                    <h4>Fredag</h4>
                    <div class='current-weather'>
                        <p>${data.current.temp_c}°C</p>
                        <p>${data.current.condition.text}</p> 
                    </div>
                </div>               
            </div>
            `;
            
        let weatherIcon = document.querySelectorAll('.weather-icon');
        data.forecast.forecastday.forEach((day, index) => {
            const description = day.day.condition.text;
            if (
              description === 'Rain' ||
              description === 'Patchy rain possible' ||
              description === 'Light rain shower'
            ) {
              weatherIcon[index].src = './assets/rain.png';
            } else if (description === 'Sunny' ||
                description === 'Clear') {
              weatherIcon[index].src = './assets/sun.png';
            } else if (description === 'Snow') {
              weatherIcon[index].src = './assets/snow.png';
            } else if (description === 'Windy') {
              weatherIcon[index].src = './assets/wind.png';
            } else if (description === 'Cloudy' || description === 'Partly cloudy') {
              weatherIcon[index].src = './assets/cloud.png';
            }
          });
        })
 
    .catch(error => {
        console.error('Error:', error);
    })

    /** 
     * <h4>Date ${new Date(dateDays[0]).toLocaleDateString()}</h4>
     * <h4>Date ${new Date(dateDays[1]).toLocaleDateString()}</h4>
     * <h4>Date ${new Date(dateDays[2]).toLocaleDateString()}</h4>
     */

    