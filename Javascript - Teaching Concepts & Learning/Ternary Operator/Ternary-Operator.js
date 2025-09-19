//  ternary operator -  a shortcut to if{} and else{} statements
//                      helps to assign a variable based on a condition
//                      condion ? codeIfTrue : codeIfFalse ;

// let age = 13;
// let message = age >= 18 ? "You're an adult" : "You're a minor" ;
// console.log(message)

// equal to writing something like this
// let message; 
// if(age >= 18){
//     message = "You're an adult"
// }
// else {
//     message = "You're a minor"
// }

// let time = 2;
// let greeting = time < 12 ? "Good Morning" : "Good afternoon"
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You're a student" : "You are not a student"
// console.log(message)

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);