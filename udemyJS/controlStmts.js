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
let year = 2023;
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

// Beyond true/ false: "Truthy" and "Falsy" Values
let age1 = 10;
if(age1 === 10) {
    console.log(age1);
}
// (or)
if(age1) {
    console.log(age1);
}

// eg
let x = false && "hello";                   
let y = true || "world";                    
let z = "" || 42 && "hi";                   

console.log(x);                             // false
console.log(y);                             // true
console.log(z);                             // hi

// eg
function isTruthy(value) {
    return !value;
  }
  
// Test cases
console.log(isTruthy(0));           // true
console.log(isTruthy("hello"));     // false
console.log(isTruthy(undefined));   // true
console.log(isTruthy(1));           // false
console.log(isTruthy(""));          // true
console.log(isTruthy([]));          // false

/*Example: Rock, Paper, Scissors Win Condition
a Rock, Paper, Scissors game, the player wins if their choice beats the opponent’s choice according to the rules:
Rock beats Scissors
Scissors beats Paper
Paper beats Rock*/

function checkIn(teamPlayer1, teamPlayer2) {
    if(teamPlayer1 === teamPlayer2) {
        return `draw`;
    }

    if(
        (teamPlayer1 === 'rock' && teamPlayer2 === 'scissors') || 
        (teamPlayer1 === 'scissors' && teamPlayer2 === 'paper') || 
        (teamPlayer1 === 'paper' && teamPlayer2 === 'rock')
    ) {
        return `player 1 wins`;
    } else {
        return `player 2 wins`
    }

}
let teamPlayer1 = 'rock';
let teamPlayer2 = 'scissors';

let result = checkIn(teamPlayer1, teamPlayer2);
console.log(result);

const enteredValue = 'Max';
const userName = enteredValue && '';
console.log(userName);
console.log(!!enteredValue);

//  Valid Login
function myLogin(username, pswd) {
    return username && pswd ? `successfully login` : `please enter valid credentials`;
}
let valid = myLogin('gowthami', 123456);
console.log(valid);

// Max of Two Numbers
function maxNum(a, b) {
    return a > b ? a : b
}
let m = maxNum(4, 5);
console.log(m);

// Valid Range
function validRange(num) {
    return num > 1 && num < 100;
}
let v = validRange(6);
console.log(v);

// switch case
// Basic Calculator
// let operator = '+';
function basicCal(a, b, operator) {
    switch(operator) {
        case '+': 
            let add = a + b;
            console.log(add)
        break;
        case '-': 
            let sub = a - b;
            console.log(sub);
        break;
        case '*':
            let mul = a * b;
            console.log(mul);
        break;
        case '/':
            let div = Math.floor(a / b);
            console.log(div);
        break;
        case '%':
            let rem = a % b;
            console.log(rem);
        break;
        default:
            let msg = 'can not perform any arithmetic operation';
            console.log(msg);        
    
    }

}
basicCal(5, 2, '/');

// Write a function that takes a year as input and returns whether the year is a leap year or not 
// using a switch statement. 
// Use logic that divides the year by 4, 100, and 400 to determine if it's a leap year.

let year1 = 2024;
function isLeapYear(year) {
    switch(true) {
        case year % 4 === 0:
            console.log(`${year} is a leap year`);
            break; 
        case year % 100 !== 0:
            console.log(`${year} is not a leap year`);
            break;
        case year % 400 === 0:
            console.log(`${year} is a leap year`);
            break;
        default:
            console.log(`${year} is not a leap year`);       
    }
}
isLeapYear(year1);

/* Season Finder
Write a function that takes a month number (1-12) as input and 
returns the corresponding season ("Winter", "Spring", "Summer", "Fall") 
using a switch statement.

Winter: December (12), January (1), February (2)
Spring: March (3), April (4), May (5)
Summer: June (6), July (7), August (8)
Fall: September (9), October (10), November (11)
*/

function seasonFind(num) {
    switch(num) {
        case 1:
        case 2:
        case 12:
            console.log('winter season');
            break;
        case 3:
        case 4:
        case 5:
            console.log('spring season');
            break;
        case 6:
        case 7:
        case 8:
            console.log('summer season');
            break;
        case 9:
        case 10:
        case 11:
            console.log('fall season');
            break;
        default:
            console.log('any other season');    
    }
}
seasonFind(9);

/* Grade Calculator
Write a function that takes a student's score as input (0-100) and 
returns their grade based on the following conditions:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
0-59: "F" 
*/

function gradeCal(num) {
    switch(true){
        case num >= 90:
            console.log('A grade');
            break;
        case num >= 80:
            console.log('B grade');
            break;
        case num >= 70:
            console.log('C grade');
            break;
        case num >= 60:
            console.log('D grade');
            break;
        case num > 0:
            console.log('F grade');
            break;
        default:
            console.log('no grade');
    }
}
gradeCal(90);