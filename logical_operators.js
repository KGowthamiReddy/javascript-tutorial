// logical operators &&, ||, !
// logical AND(&&)
let number1 = 4;
let number2 = 5;
let number3 = 9;
let output = number1 < number2 && number1 < number3;
console.log(output);                // true

// logical OR(||)
let company1 = 'wipro';
let company2 = 'apple';
let company3 = 'microsoft';
let mnc = company1 > company2 || company1 < company3;
console.log(mnc);                   // true

// logical NOT(!)
let emp1 = 2;
let emp2 = 10;
let emp3 = 1;
let employee = emp1 <= emp2 && emp1 >= emp3;
let o = !(employee);
console.log(employee, o);           // true false

let a = 10, b = 3, c = 5, d;
d = (a + b++) * (b + c);
console.log(d);                     // 117
let e = 'a' + d;
console.log(e);                     // a117
let f = d > e || e < a
console.log(f);                     // false