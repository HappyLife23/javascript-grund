// console.log(localStorage)

// // tar emot två argument, den ena är 'key' och den andra är 'value'
// localStorage.setItem('Name', 'David'); 

// localStorage.setItem('Age', '30');

// console.log(localStorage.getItem('Age'));

// // Hämtar första key i local storage
// console.log(localStorage.key(1));



// localStorage.setItem('titel', 'Local Storage');

// const rubrik = document.createElement('h1');
// rubrik.innerHTML = 'Local Storage'

// // body.localStorage.getItem('titel')

// document.body.appendChild(rubrik)

// localStorage.removeItem('Name');
// localStorage.clear();

const inpKey = document.getElementById('inpKey');
const inpValue = document.getElementById('inpValue');
const btnInsert = document.getElementById('btnInsert');
const lsOutput = document.getElementById('lsOutput');

btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;

    // console.log(key);
    // console.log(value);


    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }

}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `
        ${key}: ${value}<br/>
    `
}