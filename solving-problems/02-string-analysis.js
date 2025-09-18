function isBalanced(s) {
  if (typeof s !== 'string') {
    console.log("Error")
    return false
  } 
const vowels = 'aeiou'
const cleaned = s.toLowerCase()
const len = cleaned.length          // Stores the length of the cleaned string. Calculate the halfway point 
                                    // Decide whether the length is even or odd
const half = Math.floor(len / 2)    // Finds the middle index of the string

let firstHalf = cleaned.slice(0, half)                              // Take the first half from i = 0
let secondHalf = cleaned.slice(len % 2 === 0 ? half : half + 1)     // Check if the half its even or odd,
                                                                    // even = start from that half and onward
                                                                    // odd = skip the middle index

const countVowels = (str) => [...str].filter(c => vowels.includes(c)).length    // Turns a string into an array of character
                                                                                // Loop through each character keep only vowels and count the founded
return countVowels(firstHalf) === countVowels(secondHalf)
}

console.log(isBalanced("racecar"))                      // true (1 vowel in each half)
console.log(isBalanced("Lorem Ipsum"))                  // true (2 vowels in each half)
console.log(isBalanced("Kitty Ipsum"))                  // false (1 vs 3 vowels)
console.log(isBalanced("string"))                       // true (0 vs 0)
// console.log(isBalanced("strangetrklj"))
console.log(isBalanced(" "))                            // true (0 vs 0)
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz"))   // true (2 vs 2 vowels)
console.log(isBalanced("123A#b!E&*456-o.U"))            // true (2 vs 2 vowels)

// racecar      len = 7     half = 3
// firstHalf = (0, 2) "rac" skip middle index = 1 vowel   secondHalf = (5) "ar" 1 vowel

// strangetrklj       len = 12     half = 6
// firstHalf = (0, 6) "strang" secondHalf = (6 till end) "etrklj"
