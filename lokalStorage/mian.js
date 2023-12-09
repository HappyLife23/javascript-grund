/*
localStorage.setItem('favColor', 'Blue');
localStorage.setItem('favColor', 'Red'); // skriver över den första om de har samma namn
localStorage.setItem('favAnimal', 'Bulldog');
localStorage.setItem('favPlace', 'Home');
*/
const products = [
    {
       name: "UltraHD 4K Smart TV",
       description: "55-inch 4K UHD Smart LED TV with HDR10 and Alexa Compatibility",
       price: 499.99,
       category: "Electronics",
       rating: 4.5,
       inStock: true
   },
   {
       name: "Bluetooth Wireless Headphones",
       description: "Noise Cancelling Over-Ear Headphones with Microphone and Touch Control",
       price: 129.99,
       category: "Electronics",
       rating: 4.3,
       inStock: false
   },
  {
       name: "Portable External Hard Drive",
       description: "2TB USB 3.0 Portable External Hard Drive for File Backup",
       price: 79.99,
       category: "Computer Accessories",
       rating: 4.7,
       inStock: true
   },
  {
       name: "Ergonomic Wireless Mouse",
       description: "Bluetooth Ergonomic Mouse with Adjustable DPI and Rechargeable Battery",
       price: 35.99,
       category: "Computer Accessories",
       rating: 4.2,
       inStock: true
   },
   {
       name: "Smartphone with Dual Camera",
       description: "Latest model 128GB Smartphone with 48MP Dual Camera and OLED Display",
       price: 699.99,
       category: "Mobile Phones",
       rating: 4.6,
       inStock: false
   }
];
   
localStorage.setItem('shoppingCart', JSON.stringify())

let itemsFormStorage = JSON.parse(localStorage.getItem('shoppingCart'))
console.log(itemsFormStorage);



//let place = localStorage.getItem('favPlace');
//console.log(place);
//localStorage.removeItem('favColor'); // tar bort från localStorage, bara den första
//localStorage.clear(); // tar bort alla element

/**---------------
 * reduce()
 *  -----------**/

