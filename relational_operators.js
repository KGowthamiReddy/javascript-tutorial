// relational operators <, >, <=, >=, ==, ===, !==

let num1 = 4;
let num2 = 5;
let num = num1 > num2;
console.log(num);                   // false

let num3 = 3;
let num4 = 2;
let num5 = num3 < num4;
console.log(num5);                  // false

let apple = 10;
let mango = 10;
let fruit =  apple >= mango;
console.log(fruit);                 // true

let fruit1 = apple <= mango;
console.log(fruit1);                // true

let name1 = 'virat';
let name2 = 18;
let p = name1 == name2;
console.log(p);                     // false

let personName ='damu';
let page = 24;
let person = personName > page;
console.log(person);                // false

let company1 = 'wipro';
let company2 = 'tcs';
let comapany = company1 === company2;
console.log(comapany);              // false

console.log('10' == 10);            // true

console.log('10' === 10);           // false

console.log('tcs' > 'wipro');       // false

console.log(10 > false);            // true

console.log('a' === 97);            // false

console.log('A' > 65);              // false

console.log('' === true);           // false

let flowerName1 = 'rose';
let flowerCost = 10;
let flowerColor = 'red';
let f = flowerName1 >= flowerColor;
console.log(f);                     // true

let hexa = 0x21;
let n = 20;
let t = hexa > n;
console.log(t);                     // true

console.log(2 !== 2);               // false

console.log(2 !== '2');             // true

console.log('' !== false);          // true

console.log('' !== '');             // false