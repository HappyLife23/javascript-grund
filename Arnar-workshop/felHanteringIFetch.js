// 2. Felhantering i fetch
fetch('https://jsonplaceholder.typicode.com/posts.')
    // Konvertera svaret till JSON
    .then(response => response.json())

    // Logga ut JSON-data
    .then(data => console.log(data))
    
    // Fånga och logga eventuella fel
    .catch(error => {console.error('Error', error)})