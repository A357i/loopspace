//  .map() =    accepts a callback and applies that function
//              to each element of an array, then return a new array

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// console.log(cubes);

// function square (element) {
//     return Math.pow(element, 2);
// }

// function cube (element) {
//     return Math.pow(element, 3);
// }

//       2. EXAMPLE
// const students = ["Ajeti", "Squid", "Bro"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper)

// function upperCase(element) {
//     return element.toUpperCase();
// }

//      3. EXAMPLE
const dates = ["2024-1-10", "2025-2-10", "2026-3-10"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates)

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]} /${parts[2]} /${parts[0]}`
}