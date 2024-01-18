const quickLinks = document.querySelector('.quick-links')
const linkInput = document.getElementById('linkInput');
const ulList = document.querySelector('.ulList');
const materialSymbolsOutlined = document.querySelector('.material-symbols-outlined');

// Enter EventListener
linkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItem();       
    } 
});

/* Lyssna på när dokumentet är helt laddat och 
redo för manipulation med JavaScript */

document.addEventListener('DOMContentLoaded', function () {
    getquickLinks();
});

// skapar en funktion där jag hämtar mina skrivna länkar från key som heter 'link'. För att det ska vara läslig för JavaScript måste jag 'parsa' den.
function getquickLinks() {
    let fastLinks = JSON.parse(localStorage.getItem('link'));
    
    fastLinks.forEach(link => {
        displayLocal(link);
    });  
}

linkList = []; // listan på min key value

// Skapar en funktion och i funktionen skapar jag mina li-element, a-element och appendar de till deras parent och de får varsit class namn för att kunna styla de enklare senare.
function addItem() {

    // skapar element inut min ulList
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    // Skapar en button och ger den en textContent
    const delBtn = document.createElement('button');
    delBtn.textContent = '-';

    // ger mina element ett class namn    
    li.className = 'list-group-item';
    a.className = 'link';
    delBtn.className = 'delBtn';
    
    // skall värdet på li och a synas på skärmen
    li.textContent = a.value;
    a.textContent = linkInput.value; 
    a.href = linkInput.value;

    // appendar    
    ulList.appendChild(li);
    li.appendChild(a);
    li.appendChild(delBtn);
    
    // event på knappen 
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.remove();
    });
    
    linkList.push(linkInput.value);

    // localStorage
    localStorage.setItem('link', JSON.stringify(linkList));
    
    // tömmer input
    linkInput.value = ''; 
}

function displayLocal(link) {
     // skapar element inut min quick-link
     const li = document.createElement('li');
     const a = document.createElement('a');
     
    const delBtn = document.createElement('button');
     delBtn.textContent = '-';
 
     // ger mina element ett class namn    
     li.className = 'list-group-item';
     a.href = link;
     a.className = 'link';
     delBtn.className = 'delBtn';
    

     delBtn.value = link;     
     a.textContent = link; 
 
     // appendar    
     ulList.appendChild(li);
     li.appendChild(a);
     li.appendChild(delBtn);
     
     // event på knappen 
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.remove();
        linkList = JSON.parse(localStorage.getItem('link'));
        //console.log(linkList)
        linkList = linkList.filter((link) => {
            return link !== e.target.value;            
        });
        localStorage.setItem('link', JSON.stringify(linkList));
    });     
}






