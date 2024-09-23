let a = [];

let arrNum = [1, 3];
console.log(arrNum);

// eg
let array = [10, 3, -1];
function myArray() {
    array.push(8);
    array.push(2);
    console.log(array);
}
myArray();
array[5] = 1;
array[6] = 4;
console.log(array);

// eg
let cars = ['thar', 'BMW', 'Buggati'];
console.log(cars);
console.log(cars[1]);

// remove duplicates from an array
// [1, 2, 2, 3, 4, 4, 5]

let num = [1, 2, 2, 3, 4, 4, 5];
function duplicateArray(n) {
    let a = new Set(n);
    console.log(a);
}
duplicateArray(num);

// Find Intersection of Two Arrays
let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
let firstArray = new Set(arr2);
let secondArray = new Set(arr1);
let intersectionOfArrays = [...firstArray].filter(n => secondArray.has(n));
console.log(intersectionOfArrays);

// eg
function callMe() {
    console.log('Called!');
}

function solve() {
    // Todo: Add your loop here!
    // Important: Your solution code must go here!
    
    for(let i = 0; i < 100; i++) {
        callMe();
    }
}
//solve();

// eg Sum of First N Numbers
function sumOfNum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNum(5);

// Print Multiplication Table
function printMul(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
printMul(10);

// Reverse an Array
function reverseArray(arr) {
    let reverse = [];
    for(let i = arr.length-1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    console.log(reverse);

}
let array1 = [4, 5, 1, 6, 2];
reverseArray(array1);

// Find the Factorial of a Number
function factNum(n) {
    let fact = 1;
    while(n > 0) {
        fact *= n;
        n--;
    }
    console.log(fact);
}
factNum(4);

// Print Numbers from 1 to N
function printNum(n) {
    let i = 1;
    while(i <= n) {
        console.log(i);
        i++;
    }

    let sum = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 5; j > 2; j--) {
            sum = j + i;
        }
    }
    console.log(sum);
    
    
}
printNum(6);

// Sum of Array Elements
function sumofArray(arr) {
    let sum = 1;
    for(let a of arr) {
        sum = sum + a;
    }
    console.log(sum);
}
let arr = [3, 2, 1, 5, 6];
sumofArray(arr);

// Find Maximum Element in Array
function maxNumInArray(arr) {
    let max = arr[0];
    for (let a of arr) {
        if(a > max) {
            max = a;
        }
    }
    console.log(max);
}
let maxArray = [10, 4, 20, 2, 1];
maxNumInArray(maxArray);

// Count Vowels in a String
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
        // if(char === 'a' || 
        //     char === 'e' || 
        //     char === 'i' || 
        //     char === 'o' || 
        //     char === 'u' || 
        //     char === 'A' || 
        //     char === 'E' ||
        //     char === 'I' ||
        //     char === 'O' ||
        //     char === 'U'
        // ) count++
        
    }
    console.log(count);
}
let str = 'gOwthami rEddy';
countVowels(str);

// Print Object Properties and Values
let person = {
    firstName : 'Virat',
    lastName : 'Kohli',
    age : 35
}

function printObjectValues(obj) {
    for(let key in obj) {
        console.log(key, obj[key]);
    }
}
printObjectValues(person);

// Count Properties in an Object
function countObjectValues(obj) {
    let count = 0;
    for(let key in obj) {
        count++;
    }
    console.log(count);
}
countObjectValues(person);

// count objects in an array
let arrayObj = [
    {id : 1, name : 'damu', age : 24},
    {id : 2, name : 'harsha', age : 23},
    {id : 3, name : 'naveen', age : 24},
    {id : 4, name : 'dinesh', age : 25},
    {id : 5, name : 'raghava', age : 24}
];

function countArrayObj(arr) {
    // let count = 0;
    // for(let key in arr) {
    //     count++;
    // }
    // console.log(count);

    let p = arr.filter(a => a.id > 2)
    // let equal = arr.filter(a => a.age === 24)
    // console.log(equal);
    console.log(p);

    p.forEach(per => {
        console.log(`${per.name}, ${per.age}`);
    });



    
}
countArrayObj(arrayObj);

// capitalize first letter in an array object value
const capitalizeFirstLetter = arr => 
    arr.map(obj => 
      Object.keys(obj).reduce((acc, key) => {
        acc[key] = typeof obj[key] === 'string'
          ? obj[key][0].toUpperCase() + obj[key].slice(1).toLowerCase()
          : obj[key];
        return acc;
      }, {})
    );
console.log(capitalizeFirstLetter(arrayObj));  

// captitalize values in an array object
const capitalizeValues = (arr => {
    arr.map(obj => {
        for(let key in obj) {
            if(typeof obj[key] === 'string') {
                obj[key] = obj[key].toUpperCase();
            }
        }
        console.log(obj);
    })

});
capitalizeValues(arrayObj);
