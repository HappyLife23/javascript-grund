/**The setItem() method allows you to store values in localStorage. It takes two parameters: a key and a value. The key can be referenced later to fetch the value attached to it. Here’s how it should look:

localStorage.setItem('name', 'Obaseki Nosa'); 

In the code above, you can see that the name is the key and Obaseki Nosa is the value. As we’ve already noted, localStorage can only store strings. To store arrays or objects, you would have to convert them to strings.

To do this, we use the JSON.stringify() method before passing to setItem(), like so:

const userArray = ["Obaseki",25]
localStorage.setItem('user', JSON.stringify(userArray));
------------
getItem() allows you to access the data stored in the browser’s localStorage object. This method accepts only one parameter, which is the key, and returns the value as a string.

localStorage.getItem('name');
This returns a string with a value of "Obaseki Nosa". If the specified key doesn’t exist in localStorage, it’ll return null. In the case of the array, we make use of the JSON.parse() method, which converts a JSON string into a JavaScript object.

JSON.parse(localStorage.getItem('user'));

Using the array we created above, here’s how to retrieve it from localStorage:

const userData = JSON.parse(localStorage.getItem('user'));
console.log(userData);

*/
//localStorage.setItem('link', JSON.stringify(linkList));
let notes = document.querySelector('.notes');
let userNotes = document.getElementById('userNotes')

// Försök att hämta befintliga anteckningar från localStorage
let noteStorage = JSON.parse(localStorage.getItem(''));

// Funktion för att spara anteckningar till localStorage
function saveNote() {
    localStorage.setItem('userNotes', JSON.stringify(noteStorage));

}

// Lyssna på ändringar i input-fältet för anteckningar
userNotes.addEventListener('input', function () {
    // Uppdatera anteckningar när användaren skriver
    noteStorage = userNotes.value;

    // Spara anteckningarna till localStorage
    saveNote();
});

//userNotes.value = noteStorage;





