// eg
function myFun() {
    console.log('display my message');
}
myFun();

// eg
function play() {                               // take function with functionName as play
    let game = 'cricket';                       // take variable as game and assign value with cricket
    console.log('i am playing', game);          // print the value of a game
}
play();                                         // call the function with their functionName
// console.log(game);                              // error: 

// eg
function myNum(n) {                             // take function with functionName as myNum and passing one parameter is n in it
    console.log(n);                             // print the value of n
}
myNum(5);                                       // call myName and passing with one argument

// add sum numbers
function add(a, b) {                            // take function with functionName as add and passing two parameters a, b
    let result = a + b;                         // perform addition of a & b and store it in result variale
    console.log(result);                        // print the result variable
}
add(3, 4);                                      // call add and passing two arguments
add(1, 5);

// exercise in udemy course
function subtract(a, b) {
    return a - b;
}

function stringify(n) {
    return `Result: ${n}`;
}

console.log(subtract(12, 10));
console.log(stringify(10));

// eg
function mul(n1, n2) {
    let m = n1 * n2;
    return m;
}
let m = mul(4, 8);
console.log(m);

// Sum of All Arguments
function myArg(...n) {                          // take function and myArg as functionName with passing parameters n
    let sum = 0;                                // assign sum = 0
    for(let a of n){                            // use for of loop (a to n)
        sum = sum + a;                          // perform addition with sum + a and store it in sum
    }
    return sum;                                 // return sum value
}
let arg = myArg(1, 2, 3, 4);                    // calling myArg with arguments and assign it to arg
console.log(arg);                               // print arg value

// example for functions 
function double(n) {
    return n * 2;
}

function transform(n, double) {
    return double(n);
}

console.log(double(2));
console.log(transform(10, double));

// eg
function addFun(a, b) {
    let result = a + b;
    return result;
}

function subtractFun(a, b) {
    let result = a - b;
    return result;
}

function multiplyFun(a, b) {
    let result = a * b;
    return result;
}

function divideFun(a, b) {
    let result = Math.floor(a / b);
    return result;
}

function getInput(a, b) {
    console.log(addFun(a, b));
    console.log(subtractFun(a, b));
    console.log(multiplyFun(a, b));
    console.log(divideFun(a, b));
}
getInput(10, 2);

// shallowed varibales
let name = 'Gowthami';

function myName() {
    let name = 'Kammannagari';
    console.log(name);              
}
myName();
console.log(name);

// function Vs methods
function cricketTeam() {
    return `welcome Indian cricket team`;
}
console.log(cricketTeam());

// methods
let employee = {
    name : 'Ramu',
    id : 1,
    greet : function() {
        return `welcome, ${this.name}`;

    }
}
console.log(employee.id);
console.log(employee.greet());

// eg
let sumNumbers = {
    a : 4,
    b : 6,
    result: function() {
        return this.a + this.b;
    }
}
console.log(sumNumbers.result());

// function expressions
//console.log(doingWork());                           // error
const doingWork = function() {
    return `i'm doing office work`;
}
console.log(doingWork());

// eg
console.log(sayHi());
function sayHi() {
    return `hii prendss!!!`;
}

// eg
const startGame = function start() {
    return `game started`;
}
console.log(startGame());
console.log(`game ended`);
//console.log(start())                                    // error

// eg
const start = function(name) {
    let result = name === 'cricket' ? 'started cricket game' : 'other game started';
    return result;
}
console.log(start('cricket'));
console.log(start('chess'));


// eg Small game
let rock = 'ROCK';
let paper = 'PAPER';
let scissor = 'SCISSOR';
let selection = paper;
let resultplayer_win = 'PLAYER_WINS';
let resultComputer_win = 'COMPUTER_WINS';
let resultDraw = 'DRAW';

const getPlayerChoice = () => {
    if(
        selection !== rock &&
        selection !== paper && 
        selection !== scissor
    ) {
        console.log(`invalid choice!! so we choose default as ${paper}`);
    }
    return `${selection}`;
}

const getComputerChoice = () => {
    let randomNum = Math.random();
    console.log(randomNum);
    if(randomNum < 0.34) {
        return rock;
    } else if(randomNum < 0.67) {
        return paper;
    } else {
        return scissor;
    }
}

const getWinner = (cChoice, pChoice) => {
    if(cChoice === pChoice) {
        return resultDraw;
    } else if(
        cChoice === rock && pChoice === paper ||
        cChoice === paper && pChoice === scissor ||
        cChoice === scissor && pChoice === rock
    ) {
        return resultplayer_win;
    } else {
        return  resultComputer_win
    }

}

function gameStarted() {
    console.log(`small game has been started`);
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(winner);

    let message = `player choice is ${playerChoice} and computer choice is ${computerChoice} `;
    if(winner === resultDraw) {
        message = message + `had a draw`;;
    } else if(winner === resultplayer_win) {
        message += 'win';
    } else {
        message += 'lose'
    }

    console.log(message);

}
gameStarted();

// rest operator
const sumNum = (...numbers) => {
    let sum = 0;
    for(let n of numbers) {
        sum += n;
    }
    return sum;
}
console.log(sumNum(1, 4, 6, 10, -5));

// Find Maximum Value
const maxNum = (...numbers) => {
    let max = numbers[0];

    for(let n of numbers) {
        if(n > max) {
            max = n;
        }
    }
    return max;
}
console.log(maxNum(1, 4, 10, 20, 5));

// Separate First Element
const separateNum = (a, ...numbers) => {
    return a;
}
console.log(separateNum(5, 6, 3, 2, 8));

// Concatenate Strings
const concateStrings = (...strings) => {
    return strings.join('');
}
console.log(concateStrings('gowthami', 'reddy'));

// Merge Objects
function mergeObjects(obj1, ...objects) {
    // return {...obj1, ...objects};
    return Object.assign(obj1, ...objects);
    
}
console.log(mergeObjects({name : 'Rahul'}, {age : 20}, {role: 'student'}));
console.log(mergeObjects({a: 1}, {b: 2}, {c: 3}));

// creating function inside function
function outerFunction() {
    let message = `outer function`;

    function innerFunction() {
        let message = `inner function`;;
        console.log(message);
    }
    innerFunction();
    console.log(message);
}
outerFunction();

// Create a Counter Function
function counterFun() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}
let c = counterFun();
console.log(c());
console.log(c());

// callback function
function myMesg(name) {
    console.log(`welcome, ${name}`);
}

function myGreet(fun) {
    let name = 'sita';
    fun(name);
}

myGreet(myMesg);

// eg
function myResult(a, b) {
    console.log(Math.floor(a / b));
}

function divedeNum(fn) {
    let a = 10;
    let b = 3;
    fn(a, b);
}
divedeNum(myResult);

// bind
function fullName() {
    return `${this.fname} ${this.lname}`;
}

const person1 = {
    fname : 'virat',
    lname : 'kohli',
}

const person2 = {
    fname : 'ab',
    lname : 'devilliers'
}

//console.log(person1.fullName());
let person = fullName.bind(person1);
console.log(person());

let p = fullName.bind(person2);
console.log(p());

// eg
function multiply(a, b) {
    return a * b;
}

const mul1 = multiply.bind(null, 5);
console.log(mul1(2)); 

// call 
const employeeDetails = {
    firstName : 'Raj',
    lastName : 'reddy',
    message: function(company) {
        return `hello, ${this.firstName} ${this.lastName} and working in ${company} company`;
    }
}
const otherEmployee = {
    firstName : 'Sachin',
    lastName : 'tendulkar'
}

console.log(employeeDetails.firstName);
console.log(employeeDetails.message('Wipro'));
console.log(employeeDetails.message.call(otherEmployee, 'TCS'));

//eg
const user = {
    fullName : function(age) {
        return `my name is ${this.firstName} ${this.lastName} and age is ${age}`;
    }
}
const user1 = {
    firstName : 'Gowthami',
    lastName : 'Kammannagari'
}
console.log(user.fullName.call(user1, 24));

// apply
const animals = {
    getDetails : function(age, nonveg) {
        return `i am ${this.name} and color is ${this.color} and age ${age} and eating ${nonveg}`;
    }
}

const animal1 = {
    name : 'Lion',
    color : 'Yellow'
}

const animal2 = {
    name : 'rabbit',
    color : 'white'
}
console.log(animals.getDetails.apply(animal1));
console.log(animals.getDetails.apply(animal2, [10]));
console.log(animals.getDetails.apply(animal1, [20, 'chicken']));

// get min value
function minValue(arr) {
    return Math.min.apply(null, arr);
    
}
let n = [4, 3, 2, 1]
console.log(minValue(n));

// get maxValue
// get min value
function maxValue(arr) {
    return Math.max.apply(null, arr);
    
}
let max = [4, 3, 2, 1]
console.log(maxValue(max));
