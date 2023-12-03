// ------------------ ARRAY AND OBJETS ---------------

let person = {
    firstname: 'David',
    lastname: 'Heidari'
}
console.log(person);
person['lastname']
person.lastname;


// varje 'key' omvandlas till sträng, om det är bolean eller siffror spelar ingen roll, de omvandlas till strängar 
const years = {
    1999: 'good',
    2020: 'bad'
}
years[1999]
years['1999']


const comments = [
    {username: 'David', class: 'first', age:'30'}, // index of zero
    {username: 'sofie', class: 'first', age:'30'} // index of one
]

comments[1].class; // targeting index of one, second key
// output = first



//------------ LOOPS -----------------

// FOR-LOOP
/*------------------
for (
    [initialExpressions]; let i = 0;
    [condition];          i <= 10;
    [incrementExpression] i++
)
------------------------*/
// ex.1
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// ex.2
for(let i = 0; i < 6; i++){
    console.log('Da ba dee da ba daa');    
}
// ex.3
for (let i = 100; i >= 0; i -= 10){
    console.log(i)
}