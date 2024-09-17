// functions
function myFun() {
    console.log('start');
}
myFun();
console.log('end');
myFun();

//eg
function addNum() {
    let a = 5, b = 6;
    console.log(a + b);
}
addNum();

// eg
function fun1() {
    console.log(false || 0 || 'damu' || null || undefined);             // damu
}
fun1();

//eg 
function myFun1() {
    for(let i = 0; i <= 5; i++) {
        if(i % 2 === 0) console.log('even');
        else console.log('odd');
    }
}
myFun1();

// function return
function myName() {
    return `returning value`;
}
let op = myName();
console.log(op);                    // returning value

// eg
function mulFun() {
    return 4 * 8;                   
}
console.log(mulFun());              // 32

// eg
function stringFun() {
    return null;
}
console.log(stringFun());           // null

// function parsing
function addTwoNum(a, b) {
    return a + b;
}
let a = 3, b = 4;
let result = addTwoNum(a, b);
console.log(result);                // 7

// eg
function userDetails(name, age) {
    return `${name}, ${age}`;
}
let name1 = 'Virat', age = 35;
let user = userDetails(name1, age);
console.log(user);                          // Virat, 35

// eg
function factNum(num) {
    let fact = 1;
    // for(let i = 1; i <= num; i++) {
    //     fact = fact * i;
    // }
    // return fact;

    let i = 1;
    while(i <= num) {
        fact *= i;
        i++; 
    }
    return fact;
}
let num = 4;
let f = factNum(num);
console.log(f);                             // 24

// Find Maximum of Three Numbers
function maxNum(a, b, c) {
    return Math.max(a, b, c);
}
let x = 2, y = 10, z = 4;
let max1 = maxNum(x, y, z);
console.log(max1);                          // 10

// another way
function numMax(a, b, c) {
    if(a > b && a > c) {
        return a;
    } else if(b > c) {
        return b;
    } else {
        return c;
    }
}
let num1 = numMax(x, y, z);
console.log(num1);                          // 10

// function expression
let divide = function(a, b) {
    return Math.floor(a / b);
}
let result1 = divide(10, 3);
console.log(result1);                       // 3

// eg
let reverseNum = function(num) {
    let rem = 0;
    while(num > 0) {
        let digit = num % 10;
        rem = rem * 10 + digit;
        num = Math.floor(num / 10);
    }
    return rem;
}

let output = reverseNum(12345);
console.log(output);                        // 54321

// print digits of number
let digitNum = function(num) {
    let digit;
    while(num > 0) {
        digit = num % 10;
        num = Math.floor(num / 10);
        console.log(digit);
    }
}
let output1 = digitNum(93672);
//console.log(output1);

// add digits of number
let addDigit = function(num) {
    let sum = 0;
    while(num > 0) {
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
let r = addDigit(98765);
console.log(r);                             // 35

// Local-Global Variable | Default Value 
// global variable
let mesg = 'display mesg';
function myMesg() {
    console.log(mesg);                      // display mesg
}
myMesg();

// local variable
function myName() {
    let name = 'Naveen';
    console.log(name);                      // Naveen
}
myName();

// default value
function mul(a, b, c = 2) {
    return a + b + c;
}
console.log(mul(10, 5));                    // 17

// arrow functions
let squareNum = (num) => num ** 2;
console.log(squareNum(3));                  // 9

// assignment
let add = (num1, num2) => num1 + num2;
let num2 = Math.abs(5);
let num3 = Math.abs(-6);
console.log(add(num2, num3));               // 11

// methods and this keyword
let person = {
    firstName : 'Gowthami',
    lastName : 'Kammannagari',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;            // Gowthami Kammannagari
    }
}
//console.log(person);
console.log(person.fullName());

// eg
let car = {
    cName : 'Thar',
    cid : 1,
    start : function() {
        return `car started`;
    }
}
console.log(car.start());                   // car started

// eg
let rectangle = {
    width : 10,
    height : 6,
    area : function() {
        return this.width * this.height;
    }
}
console.log(rectangle.area());              // 60

// eg
let bankAccount = {
    actNum : '123456',
    balance : 1000,
    getBalance : function() {
        return this.balance;
    }
}
console.log(bankAccount.getBalance());      // 1000

// eg
let car1 = {
    cName : 'Thar',
    cCost : 150000,
    compare : function(c) {
        if(this.cCost > c.cCost) {
            console.log(this);
        } else {
            console.log(c);
        }
    },
    getDetails : function() {
        return this.cName
    }
}

let car2 = {
    cName : 'BMW',
    cCost : 200000,
    getDetails : function() {
        return this.cName;
    }
}

console.log(car1.getDetails());
console.log(car2.getDetails());

car1.compare(car2);

// constructor function
function Employee(name, role) {
    this.name = name;
    this.role = role;
}
let emp = new Employee('Gowthami', 'developer');
console.log(emp);                       // Employee { name: 'Gowthami', role: 'developer' }
console.log(emp.name);                  // Gowthami
console.log(emp.role);                  // developer
emp.role = 'backend developer';
console.log(emp);                       // Employee { name: 'Gowthami', role: 'backend developer' }

let emp1 = new Employee('Ram', 'testing');
console.log(emp1);                      // Employee { name: 'Ram', role: 'testing' }
console.log(emp1.role);                 // testing        

// eg
function Student(name, id) {
    this.name = name;
    this.id = id;
    this.mesg = function() {
        return `student details are : ${this.name} and ${this.id} `;
    }
}

let s = new Student('sita', 18);
console.log(s);
console.log(s.mesg());
let s1 = new Student('ram', 15);
console.log(s1.mesg());
