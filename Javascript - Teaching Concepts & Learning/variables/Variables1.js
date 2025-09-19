//  variable =  A container that stores a value.
//              Behaves as if it were the value it contains.

//  1. declaration      let x   ;
//  2. assignment       x = 100 ;

let fullName = "Ajeti" ;
let age = 21 ;
let student = true ;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;