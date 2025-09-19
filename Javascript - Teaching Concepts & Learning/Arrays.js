//  array = a variable like structure that can hold
//          more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

// fruits[1] = "coconut";

// console.log(fruits[0]);          // You have to add an index number and enclose in brackets []
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

//                      ARRAY METHODS 
// fruits.push("coconut");          // to push an element to the end
// fruits.pop("");                  // removes the last element
// fruits.unshift("mango");         // will add an element to the beggining
// fruits.shift();                  // to remove an element from the beggining

//                      length  &  indexOf

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");

// console.log(index);

//                      iterate an array

// for(let i = 0; i < fruits.length ; i+2) {
//     console.log(fruits[i]);
// }

// enchanced for loop;
// for(let fruit of fruits){
//     console.log(fruit);
// }

//                      sort an array

fruits.sort();                  // Will sort them by alphabetical order;
fruits.sort().reverse();        // Reverse order

for(let fruit of fruits){
    console.log(fruit);
}