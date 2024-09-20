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