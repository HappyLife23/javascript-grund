/**------ 
 * Det gåt att lägga till eller ta bort flera element i en array med hjälp av de metoderna
    - push(): lägger till på slutet
    - pop(): tar bort från slutet
    - shift(): tar bort från början
    - unshift(): lägger till i början

    - concat(): mergar/kombinerar 2 elelr fler arrayer till en enda array.
    - slice(): skär en array från angiven index och 'retunerar' en array av innehållet. Går att 'kopiera'en array genom att inte ange ett värde.
    - splice(): tar emot 3 värden. Det går att lägga till flera element i arrayen.
        - splice(1, 0, 'banan')
        - 1: vart denska börja
        - 0: ta inte bort inga element
        - banan: läggs till i arrayen

* -----**/

// skapa en push() 

const colors = ['red', 'blue', 'orange']
const colorResult = colors.push('black', 'yellow', 'green');

console.log(colors);
console.log(colorResult); // skriver ut antalet i en array
/*
// skapa en pop()
const names = ['David', 'Sofie', 'Sara', 'Magda']
const nameResult = names.pop()

console.log(names);
console.log(nameResult)

*/
// skapa en shift()
//const numbers = [1, 2, 3, 4, 5]
//const numberResult = numbers.shift()

//console.log(numbers);
//console.log(numberResult);


// skapa en unshift()
const cars = ['Mercedes', 'Tesla', 'Polstar', 'Volkswagen']
const carResult = cars.unshift('Volvo', 'Mazaratti');

console.log(cars);
console.log(carResult);

// skapa en concat()
const languge = ['JavaScript', 'Python', 'C#', 'C++']
const framwork = ['React', 'mongoDB', '']
const langugeResult = 
// skapa en slice()
// skapa en splice()


/**---------- 
 * Array callback methods: 
 * -----------**/


/**-------------
 * map-metoden: 
 * function: det ska finnas en befintligt array
 * användning: när man vill använda med enskild element i en array och omvandla de till ngt nytt
 * returvärde: 
 * ------------*/

//const numbers = [1, 2, 3, 4, 5];

//const mapped = numbers.map(function (number) {
    //return number * 2;

//});
//console.log(mapped);


/**---------------
 * ÖVNINGAR 
 -----------------**/

 const names ['aldor', 'arnar',]

