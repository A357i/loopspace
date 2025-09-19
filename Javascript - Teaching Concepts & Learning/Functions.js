// Function -   a section of reusable code. 
//              Declare code once, use it whenever you want.
//              Call the function to execute that code.


// function happyBirthday() {
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear you!");
//     console.log("Happy birthday to you!");
// }
// happyBirthday();

// function happyBirthday(username, age) {
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy byrthday dear ${username}!`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old!`);
// }
// happyBirthday("Ajeti", 20); // These are called arguments
                            // we need to give parameters
// happyBirthday("Avd", 20);

//          return
// function add(x, y) {
//     let result = x + y;
//     return result;
// }
// let answer = add(2, 3);
// console.log(answer);

// example 1 ; 
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}
// console.log(divide(2,3));

//      More complex function Even numbers
// function isEven(number){

//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(4));

// Me operacionin Ternar
// function isEven(number){

//     return number % 2 === 0 ? true : false;
// }
// console.log(isEven(6));

function isValidEmail(email) {
    // if (email.includes("@")) {
    //     return true;
    // }
    // else {
    //     false;
    // }
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("avdiajeti0612gmail.com"));

