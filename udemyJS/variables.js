// var keyword
var a;
console.log(a);                 // undefined

var ball = 10;
console.log(ball);

var id = 1;
function myFun() {
    console.log(id);
}
myFun();
console.log(id);

// eg
function myName() {
    var name = 'Damu';
    console.log(name);
}
myName();
//console.log(name);              // error: name not defined

// eg
var phone = 'Iphone';
function myPhone() {
    var phone = 'samsung';
    console.log(`i'm using:`, phone);
}
myPhone();
console.log(`my phone is:`, phone);

// eg
var pen = 5;
function penCost() {
    pen = 10;
    console.log(`pen:`, pen);
}
penCost();
console.log(`pen:`, pen);

// let keyword
let key;
console.log(key);                       // undefined

let girlName = 'Anshka Sharma';
console.log(girlName);

// eg
{
    let tv = 150000;
    console.log(tv);
}
//console.log(tv);                        // error: tv is not defined

// eg
let age = 24;
function myAge() {
    let age = 25;
    console.log(`my age is:`, age);
}
myAge();
console.log(`my correct age is:`, age);

//eg
let salary;
function myMontlySalary() {
    salary = 50000;
    console.log(`my montly salary:`, salary);
}
myMontlySalary();
console.log(`correct salary i got:`,salary);

// const keyword
const city = 'Bangalore';
console.log(city);

// eg
{
    const color = 'black';
    console.log(`I like:`, color);
}
//console.log(color);                         // error: color is not defined

// eg
function myLaptop() {
    const laptop = 'Macbook';
    console.log(`my favourite laptop is:`, laptop);
}
myLaptop();
//console.log(laptop);

// eg
const foodItems = ['biryani', 'kuska', 'kabab', 'veg rice', 'gibi rice'];
function birthdayParty() {
    console.log(`my birthday party foodItems are:`, foodItems);
}
birthdayParty();
console.log(foodItems);

// Hoisting
console.log(hostName);                          //  undefined
var hostName = 'Develliers';

// eg
//console.log(tabName);                           // error
let tabName = 'Ipad';
console.log(tabName);

// eg
//console.log(bookCost);                            // error
const bookCost = 100;
console.log(bookCost);

// strict
'use strict';
// console.log(i);                                     // error
i = 10;
console.log(i);

// primitive vs reference values
// primitive values
let play = 'cricket';
let p = play;
p = 'volleyball';

console.log(play);
console.log(p);

// eg
let isLoggedIn = true;
let loggedIn = isLoggedIn;
loggedIn = false;

console.log(isLoggedIn);
console.log(loggedIn);

// reference values
let fruit = {
    name : 'guava',
    cost : 50
}
let anotherFruit = fruit;
anotherFruit.name = 'Mango';

console.log(fruit.name);
console.log(anotherFruit.name);

// eg
let team1 = ['Virat', 'Develliers'];
let team2 = team1;
team2[3] = 'Maxwell';
team1.push('Dhoni');
team2[2] = 'Chahal';

console.log(`team1 players:`, team1);
console.log(`team2 players:`, team2);
 