//  for loop = repeat some code a LIMITED amount of times.

//  start;     continue;
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }

//                          decrement
// for (let i = 10; i > 0; i-=2) {
//     console.log(i);
// }

// for (let i = 1; i <= 20 ; i++){
//     if (i == 13) {
//         continue;   // skip iteration of the loop (iterimin e LOOP)
//     }
//     else {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 20 ; i++){
    if (i == 13) {
        break;   // exits the FOR loop entirely.
    }
    else {
        console.log(i);
    }
}