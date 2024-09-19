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