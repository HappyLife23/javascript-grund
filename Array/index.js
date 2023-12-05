/**-----------------
 *  ARRAY ÖVNINGAR
 ----------------**/
// map sparar den nya datan i en ny array och reunerar och den gamla arrayen är oförändrat, det blir en kopia 
// forEach: ändrar den gamla arrayen

const names = ['arnar', 'aldor', 'david', 'Sara']
/*
const namelist = [];
for (let i = 0; i < names.length; i++){ // 'i' i detta fall är names variabel egentligen och när man sätter i = 0: betyder det att det börjar från index 0
    const allCaps = names[i].toUpperCase();
    namelist.push(allCaps);
}
console.log(namelist);
*/
names.push('Ali','Mohammed');
const allCaps = names.map(function (name) {
    return name.toUpperCase();    
});

console.log(allCaps);
//console.log(names);


/**---------
 *  more practice wit array
 -----------*
const movies = [
    {
         title: '28 days later',
         release: '2002',
         director: 'Danny Boyle'
    },
    {
         title: 'The Last Voyage of the Demeter',
         release: '2023',
         director: 'André Ovredal'
    },
    {
         title: 'Escape Room',
         release: '2019',
         director: 'Adam Robitel'
    }
]


const movieTitels = movies.map(function (movie) {
    //return movie.title; // retunerar ett värde
    const data = [        // retunerar flera värden
        movie.title,
        movie.release
    ]
    return data;
});
console.log(movieTitels);
*/

/*-------------------- 
* filter-metoden:
- function:
- användning:
- returvärde:
----------------------*/
const nums = [1, 2, 3, 4, 5]
const filtered = nums.filter(function (num) {
    return num > 3; // retunerar värdet från index [3] och framåt 
                    // output: [4,5]

});
console.log(filtered);

//----------------------------

const movies = [
     {
        title: "Shadows in Silence",
        director: "Alexa Green",
        release: "2021-10-31",
        genre: "Horror"
     },
    {
        title: "The Haunting Echo",
        director: "Michael Rivera",
        release: "2019-04-13",
        genre: "Horror"
    },
    {
        title: "Midnight Whispers",
        director: "Sarah Lee",
        release: "2022-08-24",
        genre: "Horror"
    },
    {
        title: "Bursts of Laughter",
        director: "Jacob Martinez",
        release: "2018-07-20",
        genre: "Comedy"
    },
    {
        director: "Lily Thomas",
        release: "2020-12-11",
        genre: "Comedy"
    },
    {
        title: "The Funniest Tale",
        director: "Owen Scott",
        release: "2023-05-06",
        genre: "Comedy"
    },
    {
        title: "Chase the Horizon",
        director: "Emma Walker",
        release: "2017-09-15",
        genre: "Action"
    },
    {
        title: "Explosive Escape",
        director: "Ethan Johnson",
        release: "2024-02-22",
        genre: "Action"
    }

]


let word = 'Comedy'; // skapar ett variabel som ska sedan i sin tur ändra det till uppercase 
const horrorMovies = movies.filter(function (movie) {
    return movie.genre.toLocaleLowerCase().includes(word.toLocaleLowerCase()) || movie.genre.includes('Action');
});

console.log(horrorMovies);
