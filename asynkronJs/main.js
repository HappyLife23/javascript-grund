
/*------------ asynkron och synkron -----------------*/
/*-------------- setTimeout (first in last out) ------------*/
/*
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
*/

/* -------------------- setInterval  ----------------------*/
/*
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
*/
/*------------ event-loop (first in first out) ---------*/

/*------------------------- promise ---------------------
* ett promise, rent konkret är ett object som kommer att retunera ett värde i framtiden.den tar en callback funktion som argument, funktionen måste så ange minst en men vanligen två parameter för objekt 'resolve' och 'reject' som ka bestämma vad som händer om löfetet uppfylls eller ej. 
man kan utesluta 'reject' men vanligtvis är den med för att kunna skapa logik.
                <----------------------->

* pågående: pågår löftet tills vi får ett av de två alternativ: uppfyllt eller avvisat. det innebär att asynkrona operationen som löftet representerar ännu inte har slutförts.
* uppfyllt: då nås den via '.then()'
* avvisat: anledningen till misslyckandet nås via '.catch()'
* vad händer sen?: kan vi hantera den på olika sätt - vare sig den uppfylls eller ej.
-------------------------------------------------------*/
// använda fetch()
/* exempel-1: 
fetch('https://www.google.com/')
    .then(response => (response.json()))
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/
// exempel-2: 
const flipPromise = new Promise((resolve, reject) => {
    console.log('Fliping the coin!');

    setTimeout(() => {
        console.log('Done fliping!');
    }, 1000)

    let randomNum = Math.floor(Math.random());

    if (randomNum < 0.5) {
        resolve('Succeed, the coin has been flipped')
    } else {
        reject('Failed, the coin failed to flipped, from "catch"')
    }
    //console.log(randomNum);
});

console.log(flipPromise)
flipPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log('Error:', error)
})


