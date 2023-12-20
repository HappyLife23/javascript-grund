// 1. Fetch data från ett API
function fetchData() {
    return new Promise((resolve, reject) => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                reject(new Error(`HTTP error ${response.status}`))
            } else {
                return response.json();
            }
        
        })
        .then(data => {
            resolve(data)
            console.log("Data: ", data);
            
            
        })
        .catch(error => {
            reject(error)
            console.error('Error:', error);
        })
    })
}

fetchData();

// eller lösning 2
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json()) // Konvertera svaret till JSON
.then(data => console.log(data)) // Logga ut JSON-data
.catch(error => console.error('Fel:', error)); // Fånga och logga eventuella fel