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

// for of loop
let arr = [];
arr[0] = 1;
arr[50] = 6;
console.log(arr);                               // [ 1, <49 empty items>, 6 ]

// for(let a of arr) {
//     console.log(a);
// }

for(let key in arr) {
    console.log(key);
    console.log(arr[key]);
}

// eg
let fruits = ['guava', 'grapes', 'apple', 'pineapple', 'mango'];
console.log(fruits);

for(let f of fruits) {
    console.log(f);
}

for(let key in fruits) {
    console.log(key, fruits[key]);
}

// sort array elements
// for(let f of fruits) {
//     //console.log(fruits);
//     let b = fruits.sort();
//     console.log(b);
// }

for(let f of fruits.sort()) {
    console.log(f);
}

// print char in a string
let userName = 'virat kohli';

for(let user of userName) {
    console.log(user)
}

// Sum of Array Elements
let arraySum = [1, 2, 3, 4, 5];
let sum = 0;

for(let arr of arraySum) {
    sum = sum + arr;
}
console.log(sum);                       // 15 

//  Count Vowels in a String
let str = 'gowthami reddy';
let count = 0;

function countStr(str) {
    for(let s of str) {
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
            count++;
        }
    }
    console.log(count);                     // 4
}
//console.log(count);
countStr(str);

// Filter Even Numbers from an Array
let numbers1 = [2, 1, 6, 8, 5];

for(let n of numbers1) {
    if(n % 2 === 0) {
        console.log(n);                     // 2 6 8
    }
}

// for(let key in numbers1) {
//     if(key % 2 === 0){
//         console.log(key, numbers1[key]);        // 0 2 4 | 2 6 5 (even indexes and their values) so better to use for of loop
//     }
// }

//  Reverse Characters in a String
let str1 = 'gowthami';
let rev = '';

for(let s of str1) {
    rev = s + rev;
}
console.log(rev);                       // imahtwog

// Array destructuring
let ar = [3, 5, 6, 9];
let[a1, b1, c1, d1] = ar;

console.log(c1);                        // 6

// eg 
let color = ['black'];
let[p1, p2 = 'white'] = color;

console.log(color);                     // ['black']
console.log(p2);                        // white

// eg
let birds = ['parrot', 'pigeon', 'peacock', 'crow'];
let[bname1, ...bname2] = birds;
console.log(bname1);                    // parrot
console.log(bname2);                    // [ 'pigeon', 'peacock', 'crow' ]

// forEach
let n = [5, 6, 7, 3, 1];

n.forEach(function(num) {
    console.log(num);                   
});

// eg
let books = [
    'rich dad poor dad', 
    'one day life will change', 
    'the power of subconsious mind', 'lifes amazing secrets'
];

books.forEach((b, i) => {
    console.log(b, i);
});

// Double the Values in an Array
n.forEach((num, i, a) => {
    num = num * 2;
    console.log(num);               // 10 12 14 6 2
    // console.log(i);
    // console.log(a);
});

// Count Occurrences of Each Element in an Array
let bag = ['pens', 'books', 'chocalates', 'pens', 'books'];
let count1 = {};

bag.forEach((b) => {
    count1[b] = (count1[b] || 0) + 1;
});
console.log(count1);                // { pens: 2, books: 2, chocalates: 1 }

// Convert Strings to Uppercase
let words = [];
bag.forEach((b) => {
    words.push(b.toUpperCase());
});
console.log(words);                 // [ 'PENS', 'BOOKS', 'CHOCALATES', 'PENS', 'BOOKS' ]

// filter, map and reduce
let nums = [1, 2, 3, 4, 5, 6];
let f1 = nums.filter(n => n % 2 === 0);
console.log(f1);                    // [2, 4, 6]

// map
let m = nums.map(num => num * 2);
console.log(m);                     // [ 2, 4, 6, 8, 10, 12 ]

// reduce
let r = nums.reduce((a, n) => a + n, 0);
console.log(r);                     // 21

let s = nums.filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((a, n) => a + n);

console.log(s);                     // 24

// Get Strings Longer Than 4 Characters
let charString = bag.filter(char => char.length > 4);
console.log(charString);            // [ 'books', 'chocalates', 'books' ]

let book = bag.filter(char => char === 'books');
console.log(book);                  // [ 'books', 'books' ]

// remove duplicate elements in array
let removeDuplicate = bag.filter((s, i) => {
    return bag.indexOf(s) === i;
})
console.log(removeDuplicate);           // [ 'pens', 'books', 'chocalates' ]

// set
let set = new Set([1, 2, 3, 1, 3, 4, 2, 5]);
console.log(set);                       // Set(5) { 1, 2, 3, 4, 5 }

set.add(7);
console.log(set);                       // Set(6) { 1, 2, 3, 4, 5, 7 }

set.delete(7);
console.log(set);                       // Set(5) { 1, 2, 3, 4, 5 }

console.log(set.has(3));                // true

// Find the Union of Two Arrays
let union1 = [9, 8, 7];
let union2 = [7, 5, 4];
let u = new Set([...union1, ...union2]);
console.log(u);                         // Set(5) { 9, 8, 7, 5, 4 }

// Find the Intersection of Two Arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let s1 = new Set(arr2);
let i = arr1.filter(x => s1.has(x));
console.log(i);                         // [ 3, 4, 5 ]
