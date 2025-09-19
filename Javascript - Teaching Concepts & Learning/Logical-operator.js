// logical operators =  used to combine or manipulate boolean values
//                      (True or False)

//                      AND = &&    = use to check if 2 conditions are TRUE
//                      OR  = ||    = atleast 1 condition to be TRUE
//                      NOT = !     = opposite 

// const temp = 31;
// if (temp > 0 && temp <= 30 ) {
//     console.log("The weather is GOOD");
// }
// else {
//     console.log("The weather is BAD");
// }

//          ||
// if (temp <= 0 || temp > 30 ) {
//     console.log("The weather is BAD");
// }
// else {
//     console.log("The weather is GOOD");
// }

//          !
const isSunny = true ;

if (!isSunny) {
    console.log("It is CLOUDY")
}
else {
    console.log("It is SUNNY")
}