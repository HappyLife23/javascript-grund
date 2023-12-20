// bäst practice är att använda try- catch

async function fetchData() {
    try {
        // vänta på att ett fetch-anrop slutförs tack vare await
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        // kontrollera om svaret är ok
        if (!response.ok) {
            // om inte, kasta ett fel
            throw new Error(`HTTP error! status: ${response.status}`);
            
        }

        // vänta på att svaret konveryeras till sjon
        const data = await response.json();

        console.log('mottagen data:', data.value);
        return data;

    } catch {
        console.error('ett fel inträffade:', error)
        
    }
}

fetchData();