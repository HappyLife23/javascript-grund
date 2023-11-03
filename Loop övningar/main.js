/*======================= Loop - övningar =====================*/
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1. Basics med for:
//- Skriv ut alla tal från 1 till 10 med hjälp av en `for`loop i konsolen.
//- Vill du försvåra kan du printa ut talen i DOM-en på ett knapptryck.

const numbersList = document.getElementById('numbersList');
const printNumbersBtn = document.getElementById('printNumbersBtn');

printNumbersBtn.addEventListener('click', function () {
    // Skapa en tom sträng för att lagra talen
    let numbers = '';

    // denna kodrrad betyder att koden körs från 1-7
    for (let i = 0; i <= 7; i++){        
        numbers += i + '\n';

    }
    
    numbersList.value = numbers;
    console.log(numbers);

});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 2. while loop:
// Be användaren mata in ett lösenord. Använd en whileloop för att be användaren mata in lösenordet igen tills de matar in "javascript".

const passwordInput = document.getElementById('passwordInput');
const verifyPasswordBtn = document.getElementById('verifyPasswordBtn');
const passwordOutput = document.getElementById('passwordOutput');

verifyPasswordBtn.addEventListener('click', function () {
    const correctPassword = 'javascript';

    let attempts = 3;

    while (attempts > 0) {
        const userPassword = passwordInput.value;

        if (userPassword === correctPassword) {
            passwordOutput.textContent = 'Lösenordet är korrekt!'
            console.log('Lösenordet är korrekt!');
            break;
        } else if (attempts === 0) {
            passwordOutput.textContent = 'Inga fler försök kvar. Kontakta support.';
            verifyPasswordBtn.disabled = true;
        }else {
            passwordOutput.textContent = 'Lösenordet är fel!!!'
            passwordInput.value = '';
            attempts--;
            console.log('Lösenordet är fel!!!');           
            
        }        
        attempts--;
        attempts--;
        attempts--;
        
    }
});



















//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 
//





//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 
//





//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

//
// 