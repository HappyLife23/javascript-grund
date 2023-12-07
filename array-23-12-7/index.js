/**-------  function varianter----**/
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
// Exempel 3, en function som skrivs på två olika sätt 
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


