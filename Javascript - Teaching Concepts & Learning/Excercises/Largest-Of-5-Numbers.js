//          LARGEST OF 5 NUMBERS;

let a = 101;
let b = 53;
let c = 44;
let d = 36;
let e = 28;

if (a > b && a > c && a > d && a > e) {
    alert(`${a} is the largest number`)
}
else if (a < b && b > c && b > d && b > e){
    alert(`${b} is the largest one`)
}
else if (a < c && b < c && c > d && c > e){
    alert(`${c} is the largest one`)
}
else if (a < d && b < d && d > c && d > e){
    alert(`${d} is the largest one`)
}
else if (a < e && b < e && e > c && d < e){
    alert(`${e} is the largest one`)
}
else {
    alert("Please input a number!")
}