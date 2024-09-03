// data types in javascript: primitive and object

// number
let num = 3;
console.log(num);

console.log(typeof num);                // number

let number = 3.50
console.log(typeof number);             // number

let num1 = 100920102838090n
console.log(num1 + 3n);                  // 100920102838093n
console.log(typeof num1);                // bigInt

let input = 1830983001983e10;
console.log(input)                       // 1.830983001983e+22
console.log(typeof input);               // number

let result = 0xf;                         // hexadecimal value f = 15
console.log(result);                      // 15

let value = 2.5e10;
console.log(value);                         // 25000000000
console.log(typeof value);                  // number

let num2 = 3/0;
console.log(num2);                          // Infinity
console.log(typeof num2);                   // number

let num3 = -3/0;
console.log(num3);                          // -Infinity
console.log(Number.MAX_VALUE);              // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);              // 5e-324

// string
let userName = 'virat';
console.log(typeof userName);            // string

let firstName = 'gowthami';
let lastName = 'reddy';
console.log(firstName + ' ' + lastName);        // gowthami reddy (concatination)

let employeeName = 'Vir\ta\vt \nKohl\bli';         // Vir     a    (\t: tab, \v: vertical, \n: new line, \b:  backspace)
console.log(employeeName);                      // t
                                                // Kohli


console.log(userName + 10);                     // virat10
console.log(userName * 10);                     // NaN
console.log(userName - 10);                     // NaN
console.log(userName / 10);                     // NaN
console.log(userName + 'reddy');                // viratreddy

// boolean
let bool1 = 3;
let bool2 = 2;
let bool = bool1 > bool2;
console.log(bool);                             // true
console.log(bool > true);                      // false
console.log(bool < true);                      // false
console.log(typeof bool);                       // boolean
console.log(bool > 'data');                     // false

// null
let result1 = null;
console.log(typeof result1);                    // object

console.log(true > null);                       // true
console.log(true < null);                       // false
console.log(null > 'text');                     // false
console.log(null < 1);                          // true
console.log(null > -1);                         // true
console.log(null + 'abd');                      // nullabd

// undefined
let s;
console.log(s);                                 // undefined
console.log(typeof s);                          // undefined

console.log(null + undefined);                  // NaN
console.log(undefined > true);                  // false
console.log(5 + undefined);                     // NaN
console.log('data' + undefined);                // dataundefined
console.log(typeof(2/'abc'));                   // number

console.log(typeof NaN);                        // number
console.log(isNaN(2))                           // false
console.log(isNaN('gowthami'));                 // true
console.log(isNaN(null));                       // false
console.log(isNaN(undefined));                  // true
console.log(typeof isNaN);                      // function