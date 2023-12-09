//------------------ data att jobba med - tweets -------------------  //

const tweets = [
    { text: 'Elon Musk is ..', id: 523423 },
    { text: 'World Cup Quatar is ..', id: 823423 },
    { text: 'JavaScript array mathods are bad ..', id: 2039842 },
    { text: 'Meatballs, oh meatballs', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// Array.prototype.find()
// 1. Hitta kommentaren med id 823423

/**---- metod 1 -----
const findId = tweets.find(function (tweet) {
    return tweet.id === 823423;
});
*/
/* metod 2 - arrow function
const findId = tweets.find(tweet => tweet.id === 823423);
console.log(findId);*/ 


// Array.prototype.findIndex() och Array.prototype.splice()
// 2. Hitta kommentaren med id 2039842 och ta sedan bord den kommentaren

const findIndex = tweets.findIndex(tweet => tweet.id === 2039842);
tweets.splice(findIndex, 1);
console.log(findIndex);
console.log(tweets);


// Array.prototype.map() och Array.prototype.join()
// 3. Generera HTML för en ul-lista är varje li innehåller värdet i 'text'. Lägg till ul-listan på index.html

const ul = document.createElement('ul');

const maped = tweets.map(tweet => {
    return `<li>${tweet.text}`
});

ul.innerHTML = maped;
console.log(maped);
ul.innerHTML = maped.join(' ?')
//console.log(map.join('?'))
document.body.appendChild(ul);


/*
const listItems = tweets.map(tweet => `<li>${tweet.text}</li>`).join('');
const ulList = `<ul>${listItems}</ul>`;
*/
