function isValidNumber(n, base) {
    if (base < 2 || base > 36) return false 
    n = n.toUpperCase();

    for (let i = 0; i < n.length; i++) {
        let ch = n[i];
        let value;

        if (ch >= '0' && ch <= '9') {
            value = ch.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (ch >= 'A' && ch <= 'Z') {
            value = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else {
            return false;
        }

        if (value >= base) {
            return false;
        }
    }

    return true;
}

console.log(isValidNumber("10101", 2))
console.log(isValidNumber("10201", 2))
console.log(isValidNumber("76543210", 8))
console.log(isValidNumber("9876543210", 8))
console.log(isValidNumber("9876543210", 10))
console.log(isValidNumber("ABC", 10))
console.log(isValidNumber("ABC", 160))
console.log(isValidNumber("Z", 36)) 
console.log(isValidNumber("ABC", 20)) 
console.log(isValidNumber("4B4BA9", 16)) 
console.log(isValidNumber("5G3F8F", 16)) 
console.log(isValidNumber("5G3F8F", 17))
console.log(isValidNumber("abc", 10))
console.log(isValidNumber("abc", 16))
console.log(isValidNumber("AbC", 16))
console.log(isValidNumber("z", 36))