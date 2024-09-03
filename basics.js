// keywords in javascript: var, let const

studentName = 'virat';                 // initialise value 
console.log(studentName);

id = 18;
console.log(id);

var play;                              // declare a variable
console.log(play);                     // undefined

a = 10;
var a;
console.log(a);                        // 10   we can access variable 'a' value when we use var keyword 

var id1 = 3;
console.log(id1);
id1 = 4;                               // can be re-initialize value when we use 'var' keyword
console.log(id1);

// let & const are es6 features
let fruit = 'guava';
console.log(fruit);

// fruitId = 2;
// let fruitId;
// console.log(fruitId);               //ReferenceError: Cannot access 'fruitId' before initialization

let studentId = 17;
console.log(studentId);
studentId = 18;                        // can be re-initialize value when we use 'let' keyword
console.log(studentId);

let company;
company = 'wipro';
console.log(company);

// const stock;                        // can't be declare using const keyword

const stock = 5;
console.log(stock);

// stock = 10;
// console.log(stock);                 // can't be re-initialize value when we use const keyword

// find area of the circle
const pi = 3.14;                       // pi value should be constant that's why we use 'const' keyword
let r = 4;
let area;

area = pi * r * r;
console.log(area);

