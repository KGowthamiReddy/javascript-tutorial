// more on arrays

//const arrNum = [];

const arrNum = [1, 3, 5, 7, 9];
console.log(arrNum);

const num = new Array(2, 4, 6);
console.log(num);

const n = new Array(5);
console.log(n);

const n1 = Array.of(1, 2);
console.log(n1);

//const ele = Array.from(2);
const ele = Array.from([1, 3, 5]);
console.log(ele);

const mesg = Array.from('hi gowthami!');
console.log(mesg);

// eg
const hobbies = ['cooking', 'listening to music', 'playing cricket'];
console.log(hobbies);
console.log(hobbies[2]);

// eg
const differentNum = [[2, 1.5], [6, 3.2, 1.3]];
console.log(differentNum);

for(let num of differentNum) {
    for(let n of num) {
        console.log(n);
    }
}

// eg
const arrayObject = ['Pawan Kalyan', 53, {moreDetails: ['deputy CM']}];
console.log(arrayObject);
console.log(arrayObject[2]);

// push(), pop(), unshift() & shift()
const games = ['cricket', 'volleyball', 'chess'];
console.log(games);

games.push('hockey');
console.log(games);

console.log(games.length);

games.pop();
console.log(games);

games.unshift('basketball');
console.log(games);

games.shift();
console.log(games);

// splice()
const fruits = ['apple', 'guava', 'orange'];
fruits.splice(0, 1);
console.log(fruits);

fruits.splice(1, 0, 'banana', 'papaya');
console.log(fruits);

fruits.splice(-1, 1);
console.log(fruits);

// slice()
const rangeNumbers = [2, 1.5, 3, 5.5, -2, -6.3, 8];
console.log(rangeNumbers);

const storeNumbers = rangeNumbers.slice();
rangeNumbers.push(10);
console.log(rangeNumbers, storeNumbers);

let range = rangeNumbers.slice(2);
console.log(range);

// includes
console.log(rangeNumbers.includes(3));

console.log(rangeNumbers.includes(1));

let s = rangeNumbers.slice(3, 5);
console.log(s);

let slicedNegativeNumbers = rangeNumbers.slice(-4);
console.log(slicedNegativeNumbers);

let sliced = rangeNumbers.slice(-4, -2);
console.log(sliced);

// concat()
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

let result = arr1.concat(arr2);
console.log(result);

let result1 = arr1.concat(7, 9);
console.log(result1);

const stringArray = ['d', 'g', 'n'];
const concatString = stringArray.concat('r', 's', ['a', 'b']);
console.log(concatString);

// indexOf() & lastIndexOf()
const animals = ['lion', 'rabbit', 'cow', 'tiger', 'rabbit'];
const a = animals.indexOf('rabbit');
console.log(a);

console.log(animals.indexOf('tiger'));

console.log(animals.lastIndexOf('rabbit'));

// find() & findIndex()
const arrayElements = [9, 3, 5, 10, 2];
const findEle = arrayElements.find(num => num > 5);
console.log(findEle);

// eg
const user = [
    {name : 'Theju', age : 20, role : 'developer'},
    {name : 'Damini', age : 18, role : 'developer'},
    {name : 'Kavi', age : 22, role : 'tester'},
];

function userNameValid(u) {
    return u.role === 'developer';
}

console.log(user.find(userNameValid));

// eg
let array = [10, 30, 37, 41, 35];
function findIndexNum(element) {
    return element > 25;
}

console.log(array.findIndex(findIndexNum));

// forEach()
const prices = [2, 10, 25, 20, 30];
const tax = 1.20;
const taxPrices = [];

prices.forEach((num, i, p) => {
    let price = {index: i, taxPrices : num * (1 + tax)};
    taxPrices.push(price);
})

console.log(taxPrices);

// 
const frnds = ['damu', 'harsha', 'naveen', 'dinesh'];

frnds.forEach((frnd, index) => {
    console.log(`${index} : ${frnd}`);
})

// eg
frnds.forEach((frnd, index, array) => {
    array[index] = frnd.toUpperCase();
})

console.log(frnds);

// eg
let numbers = [1, 3, 4, 2, 5, 8];

numbers.forEach((num, index, array) => {
    if(num % 2 === 0) return;

    console.log(num);
})

// Square Each Number
numbers.forEach((num, index, array) => {
    num = num ** 2;
    console.log(num);
});

// Count the Occurrences of a Value
const values = [1, 2, 3, 2, 2, 4, 5, 6];
let occurenceValue = 2;
let count = 0;

values.forEach((num, index, array) => {
    if(num === occurenceValue) count++;
})

console.log(count);

// map()
// Square Each Number using map
let num1 = [1, 3, 5, 7];

let square = num1.map(num => num ** 2);
console.log(square);

// Convert Strings to Uppercase
let stingsUppercase = frnds.map(str => {
    let s = str.toUpperCase();
    return s;
});
console.log(stingsUppercase);

// Extract First Name from Objects
let persons = [
    {firstName : 'Gowthami', lastName : 'Reddy'},
    {firstName : 'Damu', lastName : 'Reddy'},
    {firstName : 'Harsha', lastName : 'Reddy'},
];

let obj = persons.map(name => name.firstName);
console.log(obj);

// Create Objects with Key-Value Pairs
let object = num1.map(num => ({value : num}));
console.log(object);

// sort() and reverse()
let sortNum = [8, 10, 9, 1, 5];
sortNum.sort((a, b) => a - b);
console.log(sortNum);

// eg
persons.sort((a, b) => {
    if(a.firstName < b.firstName) {
        return -1
    } 
    if(a.firstName > b.firstName ) {
        return 1;
    }
    return 0;
});
console.log(persons);

// reverse()
// eg
sortNum.reverse();
console.log(sortNum);

// eg
persons.sort((a, b) => {
    if(a.firstName < b.firstName) {
        return -1
    } 
    if(a.firstName > b.firstName ) {
        return 1;
    }
    return 0;
}).reverse();
console.log(persons);

// Sort an Array of Strings by Length
function sortArray(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortArray(['banana', 'kiwi', 'orange', 'mango', 'guva']));

// Sort Words in a Sentence
function sortSentence(str) {
    let words = str.split(' ');
    words.sort((a, b) => a.length - b.length);
    return words.join(' ')

}

console.log(sortSentence('welcome to India'));

// Reverse Words in a Sentence
function reverseWords(str) {
    let words = str.split(' ');
    words.reverse((a, b) => a.length - b.length);
    return words.join(' ');
}

console.log(reverseWords('welcome to india'));

// filter()
function filterArray(arr) {
    return arr.filter(n => n % 2 === 0);
}

console.log(filterArray([1, 3, 10, 4, 5]));

// Filter Positive Numbers
function posiveNumber(arr) {
    return arr.filter(n => n > 0);
}

console.log(posiveNumber([-1, -5, 2, 5, -6, 8]));

// Filter Words Starting with a Specific Letter
function startWithLetter(arr, str) {
    return arr.filter(s => s.startsWith(str));
}

console.log(startWithLetter(['banana', 'kiwi', 'orange', 'mango', 'guva', 'biscuit'], 'b'));

// reduce() 
// Count Occurrences of Items in an Array
function countOccurences(arr) {
    return arr.reduce((a, item) => {
        a[item] = (a[item] || 0) + 1;
        return a;
    }, {});
}
console.log(countOccurences(['banana', 'kiwi', 'orange', 'mango', 'guva', 'biscuit', 'banana', 'orange']));

// spread()
let arrEle1 = [1, 2, 3];
let arrEle2 = [3, 4, 5];
let arrayEle = [...arrEle1, ...arrEle2];
console.log(arrayEle);

// Spread an Array into Function Arguments
function arrayFun(a, b, c) {
    return a + b + c;
}

const array1 = [1, 2, 3];
console.log(arrayFun(...array1));

// Spread Operator to Copy and Modify Objects
function updateObject(obj) {
    return {...obj, age: obj.age + 1};
}
const obj1 = {
    name : 'gowthami',
    age : 20
}
console.log(updateObject(obj1));

// Merging Two Objects
function mergeObjects(obj1, obj2) {
    let obj3 = {...obj1, ...obj2};
    return obj3;
}
let user1 = {
    name : 'virat', 
    age : 35,
    role : 'backend developer'
}
let user2 = {
    name : 'chahal',
    age : 28,
    role : 'frontend developer'
}

console.log(mergeObjects(user1, user2));

//  Remove the First Element of an Array Using Spread
function removeFirstEle(arr) {
    return [...arr.slice(1)];
}
console.log(removeFirstEle([3, 5, 7, 9]));

// Basic Array Destructuring
function swapFirstTwo(arr) {
    [arr[1], arr[0]] = [arr[0], arr[1]];
    
    return arr;
}
console.log(swapFirstTwo([3, 2, 10, 5]));

// Write a function sumAndProduct([a, b]) that takes an array of two numbers as input, 
// and returns an object containing both their sum and product, 
// using destructuring in the function parameters.
function sumAndProduct([a, b]) {
    let sum = a + b;
    let product = a * b;

    return `sum : ${sum}, product : ${product}`;
}
console.log(sumAndProduct([3, 4]));

// Destructure with Rest and Default Values
function restDefaultValues(arr) {
    const [first = 'default',  ...rest] = arr;
    return {first, rest};
}
console.log(restDefaultValues([9, 3, 1, 5, 2]));
console.log(restDefaultValues([]));

// get nested second value
function getNestedValue(arr) {
    const [, [, secondValue]] = arr;
    return secondValue;
}
console.log(getNestedValue([3, [2, 4], 1]));


