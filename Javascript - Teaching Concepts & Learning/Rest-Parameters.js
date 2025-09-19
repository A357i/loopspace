//  rest parametes =    (...rest) allow a function to work with a variable
//                      number of arguments by bundling them into an array

//                      spread = expands an array into seperate elements
//                      rest = bundles seperate elements into an array

function combineStrings(...string) {
    return string.join("");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);