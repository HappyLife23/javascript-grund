//  Musikspelare
// Prototype Inheritance
// Konstruktorfunktion Song: Skapa en konstruktorfunktion Song som initieras med egenskaper som title, artist, och duration.

// Med konstruktorfunktionen
function Song(titel, artist) {
    this.titel = titel;
    this.artist = artist;
}       
//2. Metod `playSong`: Lägg till en metod `playSong`som skriver ut `"Playing [title] by [artist]"`.
Song.prototype.playSong = function() {
    return `Playing ${this.titel} by ${this.artist}`

}

//Skapa Instanser: Skapa två instanser av Song, till exempel en låt med titeln "Happy" av "Pharrell" och en annan med titeln "Imagine" av "John Lennon".

let minSong = new Song('Happy', 'Pharrell');
let minSong2 = new Song('Imagine', 'John Lennon');
/*Anropa playSong: Anropa playSong på båda instanserna och 
verifiera att utskriften är korrekt. */

console.log(Object.values(minSong));
console.log(Object.entries(minSong))
console.log(minSong.playSong())
console.log(minSong2.playSong());

/*---------------------------------------------------------------------------*/

// Med ES6 klasssyntax

class Latar{
    constructor(lat, artist) {
        this.lat = lat;
        this.artist = artist;
    }

    spelaLat() {
        return `Playing ${this.lat} by ${this.artist}`
    }

        
}

let minLat = new Latar('Loco', 'Enrique Iglesias');
let minNyLat = new Latar ('The great pretender', 'Sean Row')

console.log(minLat.spelaLat());
console.log(minNyLat.spelaLat());