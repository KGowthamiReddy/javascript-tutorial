// given number is positive or negative.
let num = 1;
if(num < 0) {
    console.log(`negative number`);
} else {
    console.log('positive number');
}

// eg
let userCategory; // should be 'child', 'adult' or 'senior'
let age = 30;

function solve() {
    // Todo: Set userCategory conditionally
    // Important: You must put your condition into this solve function!
    if(age < 18) {
        console.log(userCategory = 'child');
    } else if(age < 65) {
        console.log(userCategory = 'adult'); 
    } else {
        console.log(userCategory = 'senior');
    }
}
solve();

// a number is even or odd.
let number = 22;
if(number % 2 === 0) {
    console.log('even number');
} else {
    console.log('odd number');
}

// to determine the greater of two number
let n1 = 10, n2 = 20;
if(n1 > n2) {
    console.log(`n1 is greater`);
} else {
    console.log(`n2 is greater`);
}

// Determine Leap Year
let year = 2000;

if(year % 4 === 0) {
    console.log('leap year');
} else if(year % 100 !== 0 || year % 400 === 0) {
    console.log(`not a leap year`);
}

// check if a number is divisible by 5 
let d = 20;
if(d % 5 === 0) {
    console.log(`divisible by 5`);
} else {
    console.log(`not divisible by 5`);
}

// Write a program that simulates a traffic light. 
// Depending on the input ('green', 'yellow', 'red'), 
// display a message: "Go", "Slow Down", or "Stop"
let trafficLight = 'red';

if(trafficLight === 'green') {
    console.log(`go`);
} else if(trafficLight === 'yellow') {
    console.log(`slow down`);
} else {
    console.log(`stop`);
}

// Beware When Comparing Objects & Arrays for Equality
let player1 = {
    name : 'Virat'
}

let player2 = {
    name : 'Virat'
}
console.log(player1 === player2);                       

let hobbies1 = ['reading', 'listening music'];
let hobbies2 = ['reading', 'listening music'];
console.log(hobbies1 === hobbies2)
let hobbies3 = hobbies1;
console.log(hobbies3 === hobbies1);

if(n1+n2 > 31) {
    console.log(`stop`);
} else {
    console.log(`stop1`);
}
