/**----------- 
 * function varianter 
 * -----------**/

//en function som skrivs på två olika sätt
// Exempel 1
function sum(a, b) {
    return a + b;
}
// arrow function
let sum1 = (a, b) => a + b;
/*-------------------------------------------------------------------------------*/
// Exempel 2
function isPositiv(number) {
    return number >= 0;
}
// arrow function
let isPositiv1 = (number) => number >= 0; // om det är bara en parameter behöver man ingen parantes, men man kan ha om man vill

/*-------------------------------------------------------------------------------*/
// Exempel 3
function randomNumber() {
    return Math.random(); // tar iinte emot några parametrar
}

// arrow function
let randomNumber1 = () => Math.random(); // om det inte finns några parameter så måste vi ha parantes

/*-------------------------------------------------------------------------------*/
// Exempel 4
document.addEventListener('click', function () {
    console.log('click');
});
// arrow function
document.addEventListener('click', () => console.log('click'));

/*-------------------------------------------------------------------------------*/
/**------------------------- 
 * filter() and map() metoder 
 * ------------------------**/

const products = [
     {
        name: "UltraHD 4K Smart TV",
        description: "55-inch 4K UHD Smart LED TV with HDR10 and Alexa Compatibility",
        price: 499.99,
        category: "Electronics",
        rating: 4.5,
        inStock: true
    },
    {
        name: "Bluetooth Wireless Headphones",
        description: "Noise Cancelling Over-Ear Headphones with Microphone and Touch Control",
        price: 129.99,
        category: "Electronics",
        rating: 4.3,
        inStock: false
    },
   {
        name: "Portable External Hard Drive",
        description: "2TB USB 3.0 Portable External Hard Drive for File Backup",
        price: 79.99,
        category: "Computer Accessories",
        rating: 4.7,
        inStock: true
    },
   {
        name: "Ergonomic Wireless Mouse",
        description: "Bluetooth Ergonomic Mouse with Adjustable DPI and Rechargeable Battery",
        price: 35.99,
        category: "Computer Accessories",
        rating: 4.2,
        inStock: true
    },
    {
        name: "Smartphone with Dual Camera",
        description: "Latest model 128GB Smartphone with 48MP Dual Camera and OLED Display",
        price: 699.99,
        category: "Mobile Phones",
        rating: 4.6,
        inStock: false
    }
];


// filter() metoden med hjälp av arrow-function (price)   
let priceQuery = 200;
let filterProducts = products.filter(product => product.price < priceQuery);
console.log(filterProducts);


localStorage.setItem("userCart", JSON.stringify(filterProducts))
let userCart = JSON.parse(localStorage.getItem("userCart")); // så skriver man alltid
console.log(userCart);

// map-metoden
let mapResult = userCart.map(product => {
    return`
    <div class="product">
        <h3>${product.name}</h3>
        <p>Price:${product.price}</p>
        <p>Description:${product.description}</p>
    </div>
    `
});

let dataDiv = document.getElementById('data-display');
dataDiv.innerHTML = mapResult.join('');

let totalPrice = userCart.reduce((totalPrice, currentElement) => {

    let price = totalPrice + currentElement.price
    console.log(price);
    return parseFloat(price.toFixed(2));

}, 0); // total ska börja med noll

console.log(totalPrice);


/*
const words = ['c#', 'är', 'bättre än JS'];
let sentence = words.reduce((total, currentValue) => {
    return total + ' ' + currentValue;
});
console.log(sentence);
*/
