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
