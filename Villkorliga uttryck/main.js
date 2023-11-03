/*======================= Villkorliga uttryck =====================*/
//––––––––––––––––––––––––––– Övningar –––––––––––––––––––––––––––

// 1. Första if övning:
// Ta reda på om ett tal är positivt eller negativt med en enkel if/else sats. Använd HTML nedan för att ta in talet och console.log eller p taggen under för att besvara om det är positivt eller negativt.

const numberInput = document.getElementById('numberInput');

const checkNumberBtn = document.getElementById('checkNumberBtn');

const numberOutput = document.getElementById('numberOutput');

checkNumberBtn.addEventListener('click', function () {
    let number = numberInput.value;

    if (number > 0) {
        numberOutput.textContent = `Your number is positiv: ${number}`
        console.log(`Your number is positiv: ${number}`)
    } else {
        numberOutput.textContent = `Your number is negativ: ${number}`
        console.log(`Your number is negativ: ${number}`)
    }
});


//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 2. Barn eller vuxen
// Be användaren mata in sin ålder. Om åldern är under 18, skriv ut "Du är ett barn.", annars "Du är vuxen.". Du väljer om du skriver ut med console.log eller i p taggen som följer med HTML koden.
const ageInput= document.getElementById('ageInput');

const checkAgeBtn= document.getElementById('checkAgeBtn');

const ageOutput = document.getElementById('ageOutput');

checkAgeBtn.addEventListener('click', function () {
    const age = ageInput.value;
    
    if (isNaN(age)) {
        ageOutput.textContent = 'Vänligen ange ett giltig nummer!'
        console.log('Vänligen ange ett giltig nummber!')
    }
    else if (age >= 18) {
        ageOutput.textContent = `Du är vuxen. Age: ${age}`;
        console.log(`Du är vuxen. Age: ${age}`)
    } else {
        ageOutput.textContent = `Du är ett barn. Age: ${age}`;
        console.log(`Du är ett barn. Age: ${age}`)
    }
    
});


//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 3. Temperatur
// Be användaren mata in en temperatur. Om temperaturen är under 0, skriv ut "Det är kallt!". Om temperaturen är mellan 0 och 20, skriv ut "Det är svalt.". Annars, skriv ut "Det är varmt!".

const temperatureInput= document.getElementById('temperatureInput');
const checkTemperatureBtn= document.getElementById('checkTemperatureBtn');
const temperatureOutput= document.getElementById('temperatureOutput');

checkTemperatureBtn.addEventListener('click', function () {
    const temperatur = temperatureInput.value;

    if (temperatur < 0) {
        temperatureOutput.textContent = `Det är kallt. Tempersturen är bara ${temperatur} grader.`;
        console.log(`Det är kallt. Tempersturen är bara ${temperatur} grader.`)
    } else if (temperatur > 0 && temperatur < 20) {
        temperatureOutput.textContent = `Temperaturen är mellan 0 och 20. Current temperatur is: ${temperatur}`;
        console.log(`Temperaturen är mellan 0 och 20. Current temperatur is ${temperatur}`);
    } else {
        temperatureOutput.textContent = `Det är svalt. Temperaturen är ${temperatur} grader.`
        console.log(`Det är svalt. Temperaturen är ${temperatur} grader.`);
    }
    
});

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 4. Ternary operator
// Be användaren mata in ett tal. Använd ternary operatorn för att skriva ut om talet är jämnt eller udda.

const evenOddInput= document.getElementById('evenOddInput');
const checkEvenOddBtn= document.getElementById('checkEvenOddBtn');
const evenOddOutput = document.getElementById('evenOddOutput');

checkEvenOddBtn.addEventListener('click', function () {
    const ifNumber = evenOddInput.value;

    if (isNaN(ifNumber)) {
        evenOddOutput.textContent = 'Unvalid number';
    } else {
        //ifNumber % 2 === 0 utför en modulo-operation på ifNumber. Om resultatet är 0, betyder det att ifNumber är jämnt (delbart med 2).
        const result = ifNumber % 2 === 0 ? 'even' : 'odd';
        evenOddOutput.textContent = `Your number is ${result}`
        console.log(`Your number is ${result}`)
    }
    
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// 5. Kombinerade villkor
// Be användaren mata in två tal. Skriv ut "Båda talen är positiva" om båda talen är över 0, annars "Åtminstone ett av talen är negativt eller noll".

const num1Input= document.getElementById('num1Input');
const num2Input= document.getElementById('num2Input');
const checkNumbersBtn = document.getElementById('checkNumbersBtn');
const numbersOutput = document.getElementById('numbersOutput');

checkNumbersBtn.addEventListener('click', function () {

    const num1 = num1Input.value;
    const num2 = num2Input.value;

    if (num1 && num2 > 0) {
        numbersOutput.textContent = 'Båda talen är positiva!';
        console.log( 'Båda talen är positiva!');
    } else {
        numbersOutput.textContent = 'Åtminstone ett av talen är negativt eller noll';
        console.log('Åtminstone ett av talen är negativt eller noll');
    }
    
});















//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
   

