// const age = 23;
// // age >= 18 ? console.log('You can drink alkohol!') : console.log('You can not drink alkohol')

// // ex.1
// const drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// //ex.2
// const bill = 275;

// // Skapar ett variabel (tip), om bill är störe än 50 och mindre än 300, bill multiplicerat med 15 % annars multiplecerat med 20 %
// const tip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill} and thr tip was ${tip} and the total was ${bill + tip}`);

// //ex.3

// const color = 'black';

// const car = color === 'black' ? 'red' : 'orange';
// console.log(car);
// console.log(color);

// // ex.4

// const firstName = '';

// const listName = firstName === '' ? 'Sofie' : 'Magda';
// console.log(listName);


// ex. 5
// const animals = [];

// const count = animals.push('cats');
// animals.push('dog', 'chicken')
// console.log(animals)
/*------------------------------------------------------------------*/





let colors = [];
let citys = [];
let names = [];



localStorage.setItem('color', 'blue');
console.log(localStorage.getItem('color'))

function favColors() {
    colors.push('Blue', 'Black', 'Orange'),
    citys.push('Göteborg', 'Visby', 'Stckholm');
    names.push('David', 'Sofie', 'Sara', 'Magda')

    const div = document.createElement('div')
    div.innerHTML = `
        <h1> Welcome to my first made website</h1>
        <div class = "first-div">
            <p class = "colors" >First push element: ${colors}</p>
            <p class = "citys" >Second push element: ${citys}</p>
            <p class = "names" >Second push element: ${names}</p>

        </div>
    `

    console.log(colors);
    console.log(citys);
    console.log(names);

    document.body.appendChild(div)
}

 favColors();

console.log(localStorage);
// localStorage.clear();


