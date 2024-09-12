// Arithmetic opeators +, -, *, /, %

let num1 = 2;
let num2 = 3;
let result = num1 + num2;
console.log(result);                // 5

console.log(num1 - num2);           // -1

console.log(num1 * num2);           // 6

console.log(num1 / num2);           // 0.6666666666666666

console.log(num1 % num2);           // 2

num2 = 4;
++num2;                             // pre increment
console.log(num2);                  // 5

let num3 = num2++;                  // post increment
console.log(num3);                  // 5
console.log(num2);                  // 6

let num4 = num1++ + ++num2;
console.log(num4);                  // 9

console.log(--num4);                // 8    (pre decrement)

console.log(num4--);                // 8    (post decrement)

let res = 5 + --num4 - (num1 * num3);         
console.log(res);                   // -4

// squre of a number
let input = 5;
//let square = input * input;       // 25
//let square = Math.pow(5, 2);      // 25
let square = 5 ** 2;                // 25
console.log(square);

