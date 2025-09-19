//  IF STATEMENTS = if a condition is true, execute some code
//                  if not, do something else.

// let age = 13;

// if(age >= 18){
//     console.log("You are old enough to enter this site")
// }
// else {
//     console.log("You must be 18+ to enter this site")
// }

// let time = 9;

// if (time < 12) {
//     console.log("Good Morning!")
// } 
// else {
//     console.log("Good afternoon!")
// }

// let isStudent = true;

// if(isStudent) {
//     console.log("You are a student!")
// }
// else {
//     console.log("You are not a student!")
// }

//                                      Nested IF
// let age = 18;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to drive!")

//     if(hasLicense){
//         console.log("You have your license!")
//     }
//     else {
//         console.log("You do not have you license yet!")
//     }
// }
// else {
//     console.log("You must be 16+ to have a license")
// }

let age = 0;

if(age >= 100) {
    console.log("You are too old to enter this site")
}
else if (age == 0) {
    console.log("You can't enter. You were just born.")
}
else if (age >= 18){
    console.log("You are old enough to enter this site");
}
else if(age < 0) {
    console.log("Your age can't be below 0");
}

else{
    console.log("You must be 18+ to enter this site");
}