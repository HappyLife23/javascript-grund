//console.log(window);
const ul = document.querySelector('.items');
ul.lastElementChild.innerText = 'last item'; // med innerText ändrar vi bara innehållet 
ul.children[1].innerHTML = '<h4>second child</h4>' // men med innerHTML kan vi ändra html-stilen
//console.log(ul);


/*-----------------------------
-

 
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);// skriver ut classnamet på knappen
    e.target.className = 'newClassName'// eventet siktar på classnamnet och ändrar därefter classnamnet

    document.querySelector('#my-form').style.background = '#bbb';
});

// mouseout event, bra för input
btn.addEventListener('mouseout', (e) => {
    
});
/*-----------------------------

-------------------------------*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const users = document.querySelector('#users');
const msg = document.querySelector('.msg');


myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    //console.log(emailInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = '<h3>Please fill in all fields</h3>';
        msg.classList.add('error');

        setTimeout(() => {
            msg.innerHTML = '';
            msg.classList.remove();
        }, 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value + ' ' + emailInput.value));
        users.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
      
    }
    
}




