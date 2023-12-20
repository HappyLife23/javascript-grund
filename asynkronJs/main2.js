/** synkron programmering
 * linjärt arbete - 'En sak i taget'
 * 
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => {
                if (!response.ok) {
                    // om negativ hämtning, avvisa Promise med ett fel
                    reject(new Error(`HTTP-fel: Status ${response.status}`))
                } else {
                    //Annars, fortsätt att konvertera responsen
                    return response.json();
                
                }
                
            })
            .then(data => {
                // när datan är mottagen, resolva promiset
                resolve(data)
                console.log("Joke of the day: " + data.value);
            
            })
            .catch(error => {
                reject(error);
                console.error('Error:', error)
             })
    })
}

fetchData()
    
    /*
    .then(data => {
        // hantera framgångsrik data
    console.log("Joke of the day: " + data.value);
    })
    .catch(error => {
        // hantera errror 
        console.error('Error:', error)
    })
    */
    