//  spread operator =       "..." allows an iterable such as an
//                          array or string to be expanded
//                          into seperate elements
//                          (unpacks the element)

let fruits = ["Apple", "Banana", "Mango"];
let vegetables = ["Tomatoes", "Potatoes", "Carrots"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);