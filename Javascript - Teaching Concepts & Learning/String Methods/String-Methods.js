// string methods = allow you to manipulate and work with text (strings)

//      .charAt
// let userName = "Ajeti" ;
// userName.charAt(0)
// console.log(userName.charAt(2));    //  The charAt() method returns the character 
//                                      at a specified index (position) in a string.

//      .indexOf()
// let userName = "Ajeti" ;
// userName.indexOf("e")
// console.log(userName.indexOf("e"));
// console.log(userName.lastIndexOf("i"))

//      .length
// let userName = "Ajeti" ;
// console.log(userName.length);

//      .trim()
// let userName = "        Ajeti" ;
// userName = userName.trim();
// console.log(userName);

//      .toUpperCase()
// let userName = "Ajeti" ;
// userName = userName.toUpperCase();
// console.log(userName);

//      .toLowerCase()
// let userName = "Ajeti" ;
// userName = userName.toLowerCase();
// console.log(userName);

//      .repeat()
// let userName = "Ajeti" ;
// userName = userName.repeat(3);
// console.log(userName);

//      .startWith()    // to determine if a string start with a given character we can use this ; this will return a boolean.
// let userName = "Ajeti" ;
// let result = userName.startsWith(" ");
// console.log(result);

// This dcould be useful within an if statement
// if(result) {
//     console.log("Your username can't begin with ' '");
// }
// else {
//     console.log(userName);
// }

//      .endsWith()
let userName = "Ajeti " ;
let result = userName.endsWith(" ");
// console.log(result);

if(result) {
    console.log("Your username can't end with ' '");
}
else {
    console.log(userName);
}