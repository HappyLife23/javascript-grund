//localStorage.setItem('link', JSON.stringify(linkList));
let notes = document.querySelector('.notes');
let userNotes = document.getElementById('userNotes')

let test = JSON.parse(localStorage.getItem('userNotes'));
userNotes.value = test;

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





