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
console.log(array4);

/*------------------------------ filter()-----------------------------
-- filter metoden skapar en ytlig kopia av den befintliga arrayen, där endast
de element som passerar testet implementerat av den angivna funktionen ingår.
En ytkopia, vilket innebär att de faktiska sakerna i listan inte kopieras, 
bara de refereras till.
*/
const words = ['David', 'Sofie', 'Peterrrrr', 'Frank', 'Magdaaaa', 'Linda'];
const result = words.filter((word) => word.length < 6);

console.log(result);


/*------------------------------ find()-----------------------------
-- find metoden letar efter den första elementet i arrayen och returnar den
om den inte hittar den i arrayen så retunerar den undefined
*/

const nums = ['Sofie', 'Daviiiid', 'Sarraaa', 'Magiiii', 'Frankiee'];

const found = nums.find((num) => num === 'Sofie');
// eller 
const found2 = nums.find((num) => num.length > 5);

console.log(found);
console.log(found2);

/*------------------------------ findIndex() -----------------------------
-- en metod för att hitta indexet för för det första elementet som uppfyller 
kraven om ingen sak uppfyller kraven så retuneras -1
*/
const nums1 = [1, 14, 17, 180];
const result1 = (nums) => nums > 17;


const names = ['sofie', 'david', 'sara', 'peter'];
const whichName = (name) => name === 'ali';

const sofieName = ['']



console.log(nums1.findIndex(result1));
console.log(names.findIndex(whichName));



/*------------------------------ forEach() -----------------------------
-- 
*/
/*------------------------------ includes() -----------------------------
-- 
*/
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









