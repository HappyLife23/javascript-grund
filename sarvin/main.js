// array, object,function, 
//---------- array object -----------

const items = [
    {
        id: 1,
        name: 'HTML',
        difficulty: 'middle',
        isComplited: false
    },
    {
        id: 2,
        name: 'CSS',
        difficulty: 'middle',
        isComplited: true
    }
]

console.log(items); // åtkomst till hela arrayen
console.log(items[0].name); // åtkomst till en specifik array-index

//för att ändra array objectet till en JSON
const result = JSON.stringify(items);
console.log(`ändras från JS till JSON: ` + result);


//---------- LOOP -----------  
// for loop
for (let i = 0; i <= items.length; i++){
    console.log('for-loop: ' + items[1].isComplited);
}

//------- while-loop-------
let i = 0;
while (i < items.length) {
    console.log('while-loop: ' +items[i].name);
    i++;
    }

//-------- for of-loop------
for (let item of items) {
    console.log('for of-loop: ' + item.isComplited);
}
    
/*----------------------------- 
high order array methods: de tar in en funktion:
// forEach, map, filter
//reduce, find, findIndex
-------------------------------*/

// forEach: liknar for of metoden, 
items.forEach(item => {
    console.log('forEach: '+ item.id);
});

//map: skriver ut en ny array baserat på din gamla array
const newItems = items.map(item => {
    return {
        id: item.id,
        name: item.name,
        isComplited: !item.isComplited
    }

});
console.log('map-function')
console.log(newItems);

/*----------------------- 
filter: returnar en ny array
-------------------------*/
const filteredItems = items.filter(item => {
    return item.isComplited === true;
}).map (function(items) {
    return items.name
});
console.log('filter-function');
console.log(filteredItems);



/*-------- 
reduce: 
---------*/
const sum = items.reduce((acc, item) => {
    return acc + item.id;
}, 0);
console.log('reduce-function');
console.log(sum);

 
    
/*-----------------------
ternary operator: 
-------------------------*/
const x = 10;
const color = x > 10 ? 'red' : 'blue';// detta betyder att om x är större än 10 så färgen ska bli röd annars blir den blå
console.log(color);

/**----------------------
//switch
------------------------**/
const colors = 'green';

switch (colors) {
    case 'red':                                
        console.log('its red');
        break;   
    case 'blue':
        console.log('its blue');
        break;
    default:
        console.log('color is not blue or red!')
}
/**----------------------
// function
------------------------**/
//arrow function
const addNum = num1 => num1;
console.log(addNum(20))
items.forEach(x => console.log(x))

/**--------------------
 * class in JavaScript
 -----------------------**/
class Person {
    constructor(fName,lName,age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    getFullname() {
        return `${this.fName} ${this.lName}`;    
    }    
}


const studens1 = new Person('David','Heidari',30);
console.log(studens1);

// skriver ut bara för och efetrnamn
console.log(studens1.getFullname());

// lägger till en ny person
const studens2 = new Person('Ali', 'Heidari', 20)
console.log(studens2);

/**--------------------*/
