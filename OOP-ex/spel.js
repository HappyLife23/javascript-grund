/* Konstruktorfunktion Character: Skapa en konstruktorfunktion Character som initialiseras med egenskaper som name, health, och strength.*/

function Character(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    
}

/* Metod attack: Lägg till en metod attack som skriver ut "Character [name] attacks with strength [strength]". */

Character.prototype.attack = function() {
    
    return `${this.name} attacks with strength ${this.strength}. `
}

/* Skapa Instanser: Skapa två instanser av Character, till exempel en karaktär med namnet "Aragon" med health 100 och strength 30, och en annan med namnet "Legolas" med health 90 och strength 25. */

let heroOne = new Character('Batman', 100 ,50 );
let heroTwo = new Character('Superman', 100, 100)

/* Anropa attack: Anropa attack på båda instanserna och verifiera att utskriften är korrekt. */

console.log(heroOne.attack());
console.log(heroTwo.attack());

/**---------------------------------------------------------------------- */
// ES6 Classes

class Heros {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return `${this.name} attacks with strength ${this.strength}`
    }
}

let myHeroOne = new Heros('Doctor', 100, 100);
let myHeroTwo = new Heros('One punch man', 100, 10000);
console.log(myHeroOne.attack());
console.log(myHeroTwo.attack());

/*-------------------------------------------------------------------------*/

/* Extra uppgift: Skapa Underklasser till `Character`

Syfte: Öva på att använda arv i objektorienterad programmering genom att skapa underklasser till en huvudklass. Eleverna kommer att skapa två underklasser, `Warrior` och `Wizard`, som utökar `Character`-klassen. */


/* Bas Klass Character: Skapa en grundläggande klass Character med egenskaper som name, health och strength.*/
class karaktärer{
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
/* Underklass Warrior: Skapa en underklass Warrior som utökar Character. Warrior ska ha en extra metod charge som demonstrerar en speciell attack. */
    Warrior() {
        this.charge = this.charge;
    }

/* Underklass Wizard: Skapa en underklass Wizard som också utökar Character. Wizard ska ha en extra egenskap mana och en metod castSpell som använder mana för att utföra en magisk attack.*/
    Wizard() {
        
    }
}