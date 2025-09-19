// let num1;
// let num2;
// Kto nuk duhen mos me pas vler duhet me ju bashkangjit vler. 

// num1 = window.prompt(`Input the first number :${num1}`)
// num2 = window.prompt(`Input the first number :${num2}`)

// Problemi asht se template literals
// Using template literals too early, before the variable 
// inside them (${num1}) has any meaningful value.

// Mundet me u shkru keshtu ; 
let num1 = window.prompt(`Input the first number :`)
let num2 = window.prompt(`Input the first number :`)

if (num1 > num2) {
    console.log(num1 , "is greater than", num2);
}
else if (num1 < num2) {
    console.log(num2 , "Is greater than" , num1 );
}
else {
    ("The numbers are equal")
}