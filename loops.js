// loops : while loop, do-while loop, for loop
// while loop
let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
let n = 5;
while(j <= 10) {
    console.log(n * j);
    j++;
}

// sum of numbers from 1 to n
let m = 1;
let num = 5;
let sum = 0;
while (m < num) {
    sum = sum + m;
    m++;
}
console.log(`sum of numbers ${sum}`);

// factorial of a number
let z = 1;
let factNum = 5
let fact = 1;
while(z <= factNum) {
    fact = fact * z;
    z++;
}
console.log(`factorial of a number ${factNum} is ${fact}`);

// palindrome or not
let number1 = 535;
let p;
let reverseNum = 0;
let palindromeNum = number1;
while(number1 > 0) {
    p = number1 % 10;
    reverseNum = reverseNum * 10 + p;
    number1 = Math.floor(number1 / 10);
}
console.log(reverseNum);

if(palindromeNum === reverseNum) {
    console.log(`${palindromeNum} is a palindrome`);
} else {
    console.log(`${palindromeNum} is not a palindrome`);
}

// do-while loop
let apple = 1;
do {
    console.log('eat apple');
    apple++;
}while(apple <= 3);

//  Sum of digits of a number 12345
let number2 = 12345;
let sumNum = 0;
let digit;
do {
    digit = number2 % 10;
    sumNum = sumNum + digit;
    number2 = Math.floor(number2 / 10);
}while(number2 > 0);
console.log(sumNum);                // 15 

// sum of even numbers
let number3 = 5;
let sumEven = 0;
do {
    if(number3 % 2 === 0) {
        sumEven = sumEven + number3;
    }
    number3--;
}while(number3 > 0);
console.log(sumEven);               // 6

// for loop
for(let i = 1; i <= 3; i++) {
    console.log(i);
}

// Print numbers from N down to 1
for(let i = 5; i > 0; i--) {
    console.log(i);
}

// Find the average of numbers from 1 to 5
let average = 0;
let avgNum;
for(let i = 1; i <= 5; i++) {
    average = average + i;
    avgNum = Math.floor(average / 5)
}
console.log(avgNum);

// fibonancci series
let fib1 = 0, fib2 = 1, fib;
let n1 = 6;
for(let i = 1; i <= n1; i++) {
    console.log(fib1);
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
}

// nested for loop
for(let i = 1; i <= 3; i++) {
    console.log('i: ', i);
    for(let j = 1; j <= 3; j++) {
        console.log('j: ', j)
    }
}

// multiple of 3 using nested loop
for(i = 1; i <= 30; i++) {
    for(j = 1; j <= i; j++) {
        if(i % 3 === 0) {
            console.log(i);
            break;
        }        
    }
}

// multiple of 8 using for loop
let mul = 8;
for(let i = 1; i <= 10; i++) {
    console.log(mul * i);
}
