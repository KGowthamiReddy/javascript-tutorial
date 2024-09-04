// type conversion and type coercion
let num = String(5);
console.log(num, typeof num);               // 5 string

let num2 = 3;
let num3 = String(num2 - 2);                
console.log(num3, typeof num3);             // 1 string

let j = String(null);
console.log(j, typeof j);                   // null string

let k = String(undefined);
console.log(k, typeof k);                   // undefined string 

let s2 = String(true);
console.log(s2, typeof s2);                 // true string

let num1 = Number(5 + '')
console.log(num1, typeof num1);             // 5 number

let s = Number('abd' + 1);
console.log(s, typeof s);                   // NaN number

let str = Number('gowthami 10');
console.log(str, typeof str);               //  NaN number

let i = Number(null);
console.log(i, typeof i);                   // 0 number

let x = Number(null + 1);
console.log(x, typeof x);                   // 1 number

let n = Number(undefined);
console.log(n, typeof n);                   // NaN number

let n1 = Number(false);
console.log(n1, typeof n1);                 // 0 number

let b5 = Number(NaN);
console.log(b5, typeof b5);                 // NaN number

let b = Boolean(2);
console.log(b, typeof b);                   // true boolean

let a = Boolean(null);
console.log(a,  typeof a);                  // false boolean

let b1 = Boolean(undefined);
console.log(b1, typeof b1);                 // false boolean

let b2 = Boolean('virat');
console.log(b2, typeof b2);                 // true boolean

let b3 = Boolean(0 + true);
console.log(b3, typeof b3);                 // true boolean

let b4 = Boolean('javascript' + 1);         
console.log(b4, typeof b4);                 // true boolean

let b6 = Boolean(NaN);
console.log(b6, typeof b6);                 // false boolean
