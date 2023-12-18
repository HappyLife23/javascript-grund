/*---------------- array övningar - olika metoder----------------*/
/****************************** Methods **************************
 * concat()
 * filter()
 * find()
 * findIndex()
 * forEach()
 * includes()
 * indexOf()
 * join()
 * entries()
 * keys()
 * map()
 * pop()
 * push()
 * reduce()
 * shift()
 * slice()
 * sort()
 * splice()
 * toLocaleString()
 * unshift()
 * values()
 ******************************************************************/
/*------------------------------ concat()-----------------------------
-- The concat() method of Array instances is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.
*/
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = [1, 2, 3 ]

const array4 = array2.concat(array1, array3);
console.log(`Concat: ${array4}`);

/*------------------------------ filter()-----------------------------
-- filter metoden skapar en ytlig kopia av den befintliga arrayen, där endast
de element som passerar testet implementerat av den angivna funktionen ingår.
En ytkopia, vilket innebär att de faktiska sakerna i listan inte kopieras, 
bara de refereras till.
*/
const words = ['David', 'Sofie', 'Peterrrrr', 'Frank', 'Magdaaaa', 'Linda'];
const result = words.filter((word) => word.length < 6);

console.log(`\nfilter: ${result}`);


/*------------------------------ find()-----------------------------
-- find metoden letar efter den första elementet i arrayen och returnar den
om den inte hittar den i arrayen så retunerar den undefined
*/

const nums = ['Sofie', 'Daviiiid', 'Sarraaa', 'Magiiii', 'Frankiee'];

const found = nums.find((num) => num === 'Sofie');
// eller 
const found2 = nums.find((num) => num.length > 5);

console.log(`\nfind: ${found}`);
console.log(`\nfind: ${found2}`);

/*------------------------------ findIndex() -----------------------------
-- en metod för att hitta indexet för för det första elementet som uppfyller 
kraven om ingen sak uppfyller kraven så retuneras -1
*/
const nums1 = [1, 14, 17, 180];
const result1 = (nums) => nums > 17;


const names = ['sofie', 'david', 'sara', 'peter'];
const whichName = (name) => name === 'ali';

const sofieNames = ['david', 'ali', 'bob','balal']
const goSofie = (sofieName) => sofieName === 'bob';

console.log('\nfindIndex-metoden:');
console.log(nums1.findIndex(result1));
console.log(names.findIndex(whichName));
console.log(sofieNames.findIndex(goSofie));


/*------------------------------ forEach() -----------------------------
-- metoden utför en given funktion en gång för varje element i arrayen
 Du kan inte fortsätta att lägga på fler metoder efter forEach() i samma kedja.
*/
// ex.1
const colors = ['blue', 'red', 'pink', 'yellow'];
colors.forEach((color) => console.log(`forEeach: ${color}`));

// ex.2, skriver dock inte ut nåt
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

items.forEach((item) => {
    copyItems.push(item);
});


/*------------------------------ includes() -----------------------------
-- metoden avgör om arrayen innehåller det elementet som efterfrågas och 
retunerar true eller false
*/
console.log('\nincludes():');
const pets = ['cat', 'dog', 'lion', 'tiger'];
console.log(pets.includes('cat'));
console.log(pets.includes('elephant'));



/*------------------------------ indexOf() -----------------------------
-- 
*/
/*------------------------------ join() -----------------------------
-- 
*/
/*------------------------------ entries() -----------------------------
-- 
*/
/*------------------------------ keys() -----------------------------
-- 
*/
/*------------------------------ map() -----------------------------
-- 
*/
/*------------------------------ pop() -----------------------------
-- 
*/
/*------------------------------ push() -----------------------------
-- 
*/
/*------------------------------ reduce() -----------------------------
-- 
*/
/*------------------------------ shift() -----------------------------
-- 
*/
/*------------------------------ slice() -----------------------------
-- 
*/
/*------------------------------ sort() -----------------------------
-- 
*/
/*------------------------------ splice() -----------------------------
-- 
*/
/*------------------------------ toLocaleString() -----------------------------
-- 
*/
/*------------------------------ unshift() -----------------------------
-- 
*/
/*------------------------------ values() -----------------------------
-- 
*/









