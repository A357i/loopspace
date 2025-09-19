// while loop = repeat some code WHILE some conditions is true.

// let username;

// while (username === "" || username === null) {
//     username = window.prompt(`Enter your name`)
// }
// console.log(`Hello ${username}`);

//      do-while
// do { 
//     username = window.prompt(`Enter your name`)
// } while (username === "" || username === null)
// console.log(`Hello ${username}`);

let loggedIn = true ;
let userName ;
let password ;

// while (!loggedIn ) {
//     userName = window.prompt(`Enter your username: `)
//     password = window.prompt(`Enter your password: `)

//     if (userName == "myUsername" && password === "myPassword") {
//         loggedIn = true;
//         console.log("You are logged in!")
//     } 
//     else {
//         console.log("Invalid credentials! Please try again")
//     }
// }

do {
    userName = window.prompt(`Enter your username: `)
    password = window.prompt(`Enter your password: `)

    if (userName == "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!")
    } 
    else {
        console.log("Invalid credentials! Please try again")
    }
} while (!loggedIn )