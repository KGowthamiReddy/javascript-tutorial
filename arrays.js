// arrays
let a = [];
console.log(a);             // []

// eg
let array1 = [1, 3, 4, 5];
console.log(array1);                // [ 1, 3, 4, 5 ]

console.log(array1.length);         // 4

array1.push(2);
console.log(array1);                // [ 1, 3, 4, 5, 2 ]

// fetching elements
let animals = ['lion', 'rabbit', 'elephant'];
console.log(animals[1]);            // rabbit
console.log(animals[2]);            // elephant
console.log(animals[3]);            // undefined

// Different types of data in Array
let array2 = ['Gowthami', 35];
console.log(array2);                // ['Gowthami', 35]

// eg
let array3 = [true, false, 1, 0, 'a'];
console.log(array3);
console.log(array3[4]);             // a

// eg
let array4 = [undefined, null, 2];
console.log(array4);                // [ undefined, null, 2 ]
console.log(array4[0]);             // undefined

// matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);                // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix[1]);             // [ 4, 5, 6 ]

// eg
let user = [
    {name : 'Gowthami', age : 24},
    {name : 'Damu', age : 25},
];
console.log(user);                  // [ { name: 'Gowthami', age: 24 }, { name: 'Damu', age: 25 } ]
console.log(user[1]);               // { name: 'Damu', age: 25 }

// eg
let mixedArray = ['virat', 18, {role : 'batsman', runs : 200}, function() {console.log('mixed array')}];
console.log(mixedArray);            // [ 'virat', 18, { role: 'batsman', runs: 200 }, [Function (anonymous)] ]
mixedArray[3]();                    // mixed array
console.log(mixedArray[2]);         // { role: 'batsman', runs: 200 }

// array methods
let frnds = ['Damu', 'Harsha', 'Naveen', 'Sreenu', 'Dinesh'];
frnds.push('Raghava');
console.log(frnds);                 // [ 'Damu', 'Harsha', 'Naveen', 'Sreenu', 'Dinesh', 'Raghava' ]

frnds.pop();
console.log(frnds);                 // [ 'Damu', 'Harsha', 'Naveen', 'Sreenu', 'Dinesh' ]

frnds.shift();
console.log(frnds);                 // [ 'Harsha', 'Naveen', 'Sreenu', 'Dinesh' ]

frnds.unshift('Damu');
console.log(frnds);                 // [ 'Damu', 'Harsha', 'Naveen', 'Sreenu', 'Dinesh' ]

let c = [2, 3];
let d = [4, 5];
let e = c.concat(d);
console.log(e);                     // [ 2, 3, 4, 5 ]

let f = frnds.slice(2, 4);
console.log(f);                     // [ 'Naveen', 'Sreenu' ]

frnds.splice(2, 1);
console.log(frnds);                 // [ 'Damu', 'Harsha', 'Sreenu', 'Dinesh' ]

frnds.splice(2, 0, 'Naveen', 'Raghava');
console.log(frnds);                 // [ 'Damu', 'Harsha', 'Naveen', 'Raghava', 'Sreenu', 'Dinesh' ]

console.log(frnds.indexOf('Naveen'));           // 2

console.log(frnds.includes('Damu'));            // true

