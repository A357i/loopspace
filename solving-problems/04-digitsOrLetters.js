function digitsOrLetters(str) {
    let digit_count = 0
    let letter_count = 0

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(/\d/.test(char)) {
                digit_count++
            } else if (/[a-zA-Z]/.test(char)) {
                letter_count++
            }
    }

    if (digit_count > letter_count) {
        return "digits"
    } else if (letter_count > digit_count) {
        return "letters"
    } else {
        return "tie"
    }
}

console.log(digitsOrLetters("abc123"))
console.log(digitsOrLetters("a1b2c3d"))
console.log(digitsOrLetters("1a2b3c4")) 
console.log(digitsOrLetters("abc123!@#DEF"))
console.log(digitsOrLetters("H3110 W0R1D"))
console.log(digitsOrLetters("P455W0RD"))