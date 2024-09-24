let person = {
    firstName : 'Virat',
    lastName : 'Kohli',
    age : 35
}
console.log(person.firstName);
console.log(person.age);

// type of
console.log(typeof 5);
console.log(typeof 'develliers');
console.log(typeof true);
console.log(typeof 3.4);
console.log(typeof (5 + ''));
console.log(typeof NaN);
console.log(typeof 1234567890123456789012345678901234567890n);
console.log(typeof []);
console.log(typeof {name : 'daniel develliers'});
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol);

// null, undefined, NaN
let a;
console.log(a);

let b = null;
console.log(null);

let c = a + b
console.log(c);

console.log(2 * '');
console.log(3 * 'a');
console.log(1 - a);
console.log(2 + a);
console.log(3 + true);
console.log(8 - false);
console.log(9 / 'g');
console.log(true / 'kg');

// Object from Arrays
let key = ['id', 'name', 'age'];
let values = [1, 'virat', 35];
let obj = key.reduce((a, k, i) => {
    a[k] = values[i];
    return a;
}, {});
console.log(obj);

// Sum of Object Values
let objSum = {
    'virat' : 200, 
    'develliers' : 300, 
    'dhoni' : 100
};
let sum = 0;
for(let value of Object.values(objSum)) {
    sum += value;
}
console.log(sum);

// Delete Property
let player = {
    id : 1,
    name : 'Damu',
    runs : 50
}
delete player.id;
console.log(player);

// Nested Object
let car = {
    name : 'Thar',
    color : 'black',
    cost : 150000,
    address : {
        city: 'bangalore',
        pincode: 560037
    }
}
console.log(car);
console.log(car.address.city);

// Count Properties for car object
let count = 0;
for(let key in car) {
    count++;
}
console.log(count);

// Merge Two Objects: 
let obj1 = { a : 1, b : 2, c : 3};
let obj2 = { b : 3, c : 4, d : 5};

function mergeObjects(o1, o2) {
    let object  = {...o1, ...o2};
    console.log(object);
}
mergeObjects(obj1, obj2);


// Group Objects by a Property
let arrayObj = [
    {id : 1, name : 'damu', age : 24},
    {id : 2, name : 'harsha', age : 23},
    {id : 3, name : 'naveen', age : 24},
    {id : 4, name : 'dinesh', age : 25},
    {id : 5, name : 'raghava', age : 24}
];

function groupObject(obj) {
    let data = obj.reduce((acc, obj) => {
        let key = obj.age;

        if(!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);

        return acc;
    }, {});
    console.log(data);
}
groupObject(arrayObj);

// print the object where the age property is 24
function printAgeObject(obj) {
    let data = obj.filter(object => object.age === 24);
    console.log(data);
}
printAgeObject(arrayObj);