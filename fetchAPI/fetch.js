/* How to Use the Fetch API for GET Requests */
// 1. // Define the API URL
/*
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// make a GET request
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('response network was not ok');
        }
        return response.json()
    })
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error('Error', error)
    
    });

// displaying the API data in an HTML element:
const apiUrl2 = 'https://api.openweathermap.org/data/2.5/weather?q=sweden&appid=abf418b44e6f58c40e6819f49d423a35';

const container = document.querySelector('.container');

fetch(apiUrl2)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.')
        }
        return response.json();
        
    })
    .then(data => {
        container.textContent = JSON.stringify(data, null, 2);
        //console.log(apiUrl2)
    })
    .catch(error => {
        console.error('Error', error);
        
    })

/* Error Handling in API Calls */
/* In addition to the catch block, you can also check the HTTP status code using response.status to determine the nature of the error. Here's how you can do it: */
/*
const apiUrl3 = 'https://api.openweathermap.org/data/2.5/weather?q=sweden&appid=abf418b44e6f58c40e6819f49d423a35';

const output = document.querySelector('.output');

fetch(apiUrl3)
    .then(response => {
        if (response.status === 400) {
        throw new Error('Data not found')
        } else if (response.status === 500) {
            throw new Error('Server error')
        } else {
            throw new Error('Network respose was not ok.')
        }
        return response.json();
    })
    .then(data => {
    output.textContent = JSON.stringify(data, null, 2);
    })
    .catch (error => {
    console.error('Error:', error)
    })

/* How to Make POST Requests */


/* How to Work with API Keys */
/*
const apiKey = 'abf418b44e6f58c40e6819f49d423a35';
const apiUrl4 = 'https://api.openweathermap.org/data/2.5/weather?q=sweden';

const requestObtions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiKey}`
    },
};

fetch(apiUrl4, requestObtions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network request was not ok.')
        }
        return response.json();
    })
    .then(data => {
        weatherData.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => { 
        console.error('Error:', error)
    })
    */

/* Example 1: Fetching Weather Data */

const apiKey = 'abf418b44e6f58c40e6819f49d423a35';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}`;


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
            ` <div>
                <p> Temperature in ${location}: ${temperature}°C</p>
                <p>Weather: ${description}</p>
                <img src="./assets/sun.png" />
                </div>
                <div>
                <p> Temperature in ${location}: ${temperature}°C</p>
                <p>Weather: ${description}</p>
                <img src="./assets/sun.png" />
                </div>
            `
    })
    .catch(error => {
        console.error('Error:', error);
    })








