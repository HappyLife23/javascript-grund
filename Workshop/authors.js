  //------------------ny data att jobba med - authors -------------------  //

  const authors = [
    { first: 'Leo', last: 'Tolstoj', year: 1828, passed: 1910 },
    { first: 'Alexander', last: 'Pusjkin', year: 1799, passed: 1837 },
    { first: 'Fjodor', last: 'Dostojevski', year: 1821, passed: 1881 },
    { first: 'Anton', last: 'Tjechov', year: 1860, passed: 1904 },
    { first: 'Vladimir', last: 'Nabokov', year: 1899, passed: 1997 },
    { first: 'Maksim', last: 'Gorkij', year: 1868, passed: 1936 },
    { first: 'Koldan', last: 'Egorov', year: 1921, passed: 1821 }, // denna är fake
    { first: 'Nikolaj', last: 'Gogl', year: 1809, passed: 1852 },
    { first: 'Leonid', last: 'Andrejev', year: 1871, passed: 1919 },
    { first: 'Mirra', last: 'Lokhvitskaya', year: 1869, passed: 1905 },
    { first: 'Ivan', last: 'Krylov', year: 1769, passed: 1844 },
    { first: 'Michail', last: 'Lermontov', year: 1814, passed: 1841 },
    { first: 'Alexandr', last: 'Blok', year: 1880, passed: 1921 }
  ];

  // Array.prototype.findIndex() och Array.protype.splice() 
  // 4. Det finns en fake-författare i authors - som är död före den är född! Hitta elementet och ta bort det med Array.prototype.splice()!
//const findFake = authors.findIndex(author => author.first === 'Koldan');

const ul = document.createElement('ul');
const findFake = authors.findIndex(author => author.first === 'Koldan');

// Ta bort den falska författaren från arrayen på två olika sätt

//authors.splice(findFake, 1);

if (findFake !== -1) {
    authors.splice(findFake, 1);
}

const allFakeNames = authors.map(author => `<li>${author.first}</li>`).join('');

ul.innerHTML = allFakeNames; // innerHTML authors namn
document.body.appendChild(ul);
//ul.innerHTML = authors; // retunerar objects
//ul.innerHTML = findFake; // retunerar
//console.log(findFake); //  consol-loggar -1
//console.log(authors); //  consol-loggar authors
//console.log(show); // consol-loggar authors med li-style


  // Använd Array.prototype.map
  // 5. Skapa en array med varje författares för- och efternamn från arrayen authors
   
  
  
  // Array.prototype.filter()
  // 6. Filtrera arrayen authors utifrån författare som föddes på 1800-talet



  // Array.protoype.sort()
  // 7. Sortera arrayen i stigande ordning utifrån födelseår - äldst till yngst



  // Array.protoype.sort()
  // 8. Sortera arrayen utifrån hur många år varje författare har levt - från flest år till minst år
  
  
  
  
  // Array.protype.reduce()
  // 9. Beräkna hur totala antalet år som ALLA författare har levt