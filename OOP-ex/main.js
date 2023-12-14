// exempel på OOP i JavaSscript
//  Med ES6 klasssyntax
class Bil {
    constructor(marke, model) {
        this.marke = marke;
        this.model = model;
    }
    visainfo(){
    return `${this.marke} ${this.model}`
    }
}

let minBil = new Bil('BMW', 'Tesla');
let minBil2 = new Bil('ferrari', 'lambo');

console.log(minBil.visainfo());
console.log(minBil2.visainfo());

// ex .2
class Food{
    constructor(food1, food2) {
        this.food1 = food1;
        this.food2 = food2;
    }

    visaInfon() {
        return `${this.food1} ${this.food2}`
    }
}

let minFood = new Food('tack', 'kebab');
let newFood = new Food('spagetti', 'meet')
console.log(minFood.visaInfon());
console.log(newFood.visaInfon());


/*--------------- Med konstruktorfunktioner --------------*/
function Bill(marke, modell) {
    this.marke = marke;
    this.modell = modell;
  }
  
  Bil.prototype.visaInfo = function() {
    return `${this.marke} ${this.modell}`;
  }
  
let minBill = new Bil("Volvo", "V60");
console.log(minBil.visaInfo()); // Skriver ut: Volvo V60
  
/*---Loopar och Iteration över Objekt--*/
let Objekt = {
    a: 'David',
    b: 'Sofie',
    c: 'Sara',
} 

for (let nyckel in Objekt) {
    console.log(nyckel, Objekt[nyckel]);
}

/**-------------------------------
 * object.keys()
 * object.values()
 * object.entries()
 *  ----------------------------**/
/* dessa metoder används för att skapa
arrayer av ett objects nycklar, värden
eller båda. Viktigt att första bokstaven 
i objectet ska vara stort.
*/
//ex
let objekt = {
    a: 'David',
    b: 'Sofie',
    c: 'Sara',
}

console.log(Object.keys(objekt))
console.log(Object.values(objekt));
console.log(Object.entries(objekt));

/**------------- Inkapsling --------------**/
/** inskapling är väldigt viktigt för 
 * att inte exponera ett objekts innehåll 
 * hur som helst till omvärlden.
 * det kanvi kontorllera med inskapling
*  Varför är inkapsling viktigt?
-- säkerhet:
-- underhållbarhet: 
-- abstraktion: 
https://qlok.notion.site/OOP-i-JavaScript-0b1d215001cd42ceaff06e0a11ffe922 
**/
// Exempel på inkapsling i JavaScript
// exempel med classes
class Bankkonto {
    #saldo //privat fält

    constructor(saldo) {
        this.#saldo = saldo;
    }

    insättning(belopp) {
        if (belopp > 0) {
            this.#saldo +=belopp
        }
    }
    taUt(belopp) {
        if (belopp <= this.#saldo) {
            this.#saldo -= belopp;
            return belopp;
        }
        return 0;
    }
    visaSaldo() {
        return this.#saldo;
    }
}

let mittKonto = new Bankkonto(1000);
mittKonto.insättning(500);
console.log(mittKonto.visaSaldo());

let mittNyaKonto = new Bankkonto(1000);
mittNyaKonto.insättning(2000);
console.log(mittNyaKonto.visaSaldo());

mittKonto.taUt(800);
console.log(mittKonto.visaSaldo());
