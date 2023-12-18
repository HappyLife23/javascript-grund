/* Scope:
- Globala 
- function
- Block : måsvingar 
*/
let globalScope = 'globalScope';

function greet() {
    let functionScope = 'functionScope';
    if (1 === 1) {
        let blockScope = 'blockScope';
        console.log(blockScope)
        console.log(functionScope)
    }

    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

    //console.log(blockScope)
}
greet();
//console.log(a + b)


