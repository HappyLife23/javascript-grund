const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// output = 2009

console.log('10' * '2') // 20
console.log('10' - '10' - 3) // -3

/*------ switch-statement ----*/
const day = 'Friday';
switch (day) {
    case 'Monday':
        console.log('Today is Monday!');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday!')
        break;
    case '':
        console.log('Today is Friday!')
        break;
    default:
        console.log('Today is Saturday!')
        break;
}   

// Choose a value to variable and if you want to change it, you can choose 'default' nb 
