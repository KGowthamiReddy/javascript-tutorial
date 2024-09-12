// conditional statements : if, if-else, if-else-if
// if
let number1 = 4;
if(number1 > 3){
    console.log('number1 is greater');
}
console.log('end');

// if-else
let e = 6;
let o = 3;
if(e % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}

// if else-if
let number2 = 5;
let number3 = 1;
if(number1 > number2) {
    console.log('number1 is greatest');
} 
else if(number2 > number3) {
    console.log('number2 is greatest');
} else {
    console.log('number3 is greatest');
}

// leap year or not
let year = 2000;
if(year % 4 === 0) {
    console.log('leap year');
} else {
    console.log('not a leap year');
}

// eligible for vote or not
let age = 24;
if(age >= 18) {
    console.log('eligible for vote');
} else {
    console.log('not eligible for vote');
}

let p_age = 50;
if(p_age < 18) {
    console.log('child');
} else if(p_age < 45) {
    console.log('youth');
} else {
    console.log('old');
}

let marks = 85;
if(marks >= 90) {
    console.log('got A grade');
} else if(marks >= 80) {
    console.log('got B grade')
} else if(marks >= 70) {
    console.log('got c grade');
} else {
    console.log('got d grade');
}

// ternary operator (?:)
let emp_age = 25;
let emp = emp_age > 20 ? 'eligible to do work' : 'not eligible to do work';
console.log(emp);

let a = 35, b = 41;
let result = a > b ? 'a is bigger' : a < b ? 'b is bigger' : 'a and b are equal';
console.log(result);

let v = 1;
let r = v !== null && v !== undefined ? 'value exists' : 'no value';
console.log(r);

// assignment
let day = 'friday'
if(day === 'monday') {
    console.log('woke up at 7am');
} else if(day === 'tuesday' && day === 'wednesday' && day === 'thursday') {
    console.log('woke up at 4am');
} else if(day === 'saturday' && day === 'sunday') {
    console.log('woke up at 8am');
} else {
    console.log('woke up at 9am');
}

// switch statement
let month = 'july' ;
switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'july':
    case 'August':
    case 'october':
    case 'december':
        console.log('31 days');
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log('30 days');
        break;
    case 'february':
        console.log('28 or 29 days');   
}

let A = 65;
switch(A) {
    case A:
        console.log('case A will print');
        break;
    case 65: 
        console.log('ascii value of A is 67');
        break;
    case a:
        console.log('case a will print');
        break;
    case 97:
        console.log('ascii value of a is 91');
        break;
    default:
        console.log('end');
}

// negative ,0 or positive values
let value = -1;
switch(true) {
    case value < 0:
        console.log('negative value');
        break;
    case value === 0:
        console.log('zero');
        break;
    case value > 0:
        console.log('positive value');
        break;
    default:
        console.log('default value');
}

// template literals
let num1 = 5;
let num2 = 6;
let output = num1 + num2;
console.log(`the addition of ${num1} and ${num2} is ${output}`);

console.log(`my name is 
virat`);

console.log(`it is a feature of
\tjavascript`);
