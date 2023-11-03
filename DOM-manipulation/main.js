/*======================= DOM-manipulation =========================*/
//––––––––––––––––––––––––––– Övningar ––––––––––––––––––––––––––––––––

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Ändra Text:

//- Uppgift: Skriv kod som ändrar texten i ett **`<p>`** element till "Hej världen!".

const changeMe = document.getElementById('changeMe'); // Hämtar element med id 'changeMe' från DOM

changeMe.textContent = 'First step towards to JavaScript.';

console.log(changeMe);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 2. Ändra Färg:
// Uppgift: Skriv kod som ändrar bakgrundsfärgen på en <div> till blå.

const changeBg = document.getElementById('changeBg'); // Hämatr id-namn från DOM

changeBg.style.backgroundColor = 'lightblue';

console.log(changeBg);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 3. Lägg till Element:
// Uppgift: Skapa ett nytt <h2> element med texten "Ny Rubrik" och lägg till det i slutet av kroppen.

const newHeading = document.createElement('h2');
newHeading.textContent = 'Skapde denn h2 med JavaScript';
const body = document.body;
body.appendChild(newHeading);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 4. Ta Bort Element:

// - Uppgift: Ta bort det första `<li>` elementet från listan nedan.

const list = document.getElementById('list'); // hämtar parent-id

const firstListItem = list.querySelector('li:first-child'); // Använd querySelector på list-elementet för att hämta det första <li> inuti list

list.removeChild(firstListItem);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 5. Ändra Attribut:
// Uppgift: Ändra länken nedan så att den pekar på "https://www.google.se/" istället för "#".

const link = document.querySelector('a');

link.href = "https://www.google.se/";
