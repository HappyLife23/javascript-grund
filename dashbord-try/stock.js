const apiKeyStock = '85ZTR7FN7XCDEKO4';
const apiUrlStock = `www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${apiKeyStock}`;


//const stockMarket = document.querySelector('.stock-market');

async function displayData() {
    const response = await fetch (apiUrlStock);
    
    if (response.ok) {
        const data = await response.json();
        renderData();
    } else {
        console.log('Error', response.status);
    }         
}

function renderData(datas) {
    const stockMarket = document.querySelector('.stock-market');
    stockMarket.innerHTML = '';

    datas.forEach(data => {
        stockMarket.innerHTML += `
            <h3 class='name'>${Time_Series_(Daily).open}</h3>
            <h5 class='price'>${Time_Series_(Daily).high}</h5>
            <h5 class='high'>${Time_Series_(Daily).low}</h5>
            <h5 class='low'>${Time_Series_(Daily).close}</h5>
            <h5 class='low'>${Time_Series_(Daily).volume}</h5>                
        `;
    });
}

displayData();



