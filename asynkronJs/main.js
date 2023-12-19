
/*------------ asynkron och synkron -----------------*/
/*-------------- setTimeout (first in last out) ------------*/
console.log('Börja varma upp vattnet!');

setTimeout(function () {
    console.log('Vattent har kokat klart, nu gör vi kaffe!')
}, 1000);
    
setTimeout(function () {
    document.body.style.backgroundColor = 'lightblue';
}, 2000);

setTimeout(function () {
    document.body.style.backgroundColor = 'lightyellow';
}, 1000);


console.log('Förbredd en kopp!');

console.log('Ta fram mjölken från kylskåpet!');

/* -------------------- setInterval  ----------------------*/
console.log('Bilracet börjar snart!');

let counter = 0;
const maxRounds = 4;
const interval = 200;

const intervalId = setInterval(() => {
    counter ++;
    console.log(`Rundan ${counter} avklarat.`)
    if (counter >= maxRounds) {        
        //return 
        clearInterval(intervalId);
        console.log('Bilracet är klart!');
    }      
},interval);

/*------------ event-loop (first in first out) ---------*/

/*------------------------- promise --------------------*/