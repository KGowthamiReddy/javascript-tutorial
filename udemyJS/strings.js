const num = 0;
let sum = num;

let output = `(${num} + 5) * 10 / 2 - 1`;
console.log(output);                        // (0 + 5) * 10 / 2 - 1 (using backticks)

let u = '(num + 5) * 10 / 2 - 1';
console.log(u);                             // (num + 5) * 10 / 2 - 1 (using single quotes)

let t = "'('num + 5) * 10 / 2 - 1";
console.log(t);                             // '('num + 5) * 10 / 2 - 1 (using double quotes)

let o = (num + 5) * 10 / 2 - 1;
console.log(o);                             // 24

let str = `javas\tcript \\udemy \ncourse`;
console.log(str);                           // javas   cript \udemy
                                            // course


// Assignment - Variables, Operators, Data Types
// Create two variables: One that holds a fictional user input (a number of your choice) and one that holds no value initially (e.g. "result").
// Set the result variable to 18 plus the value stored in user input.
// Add three additional lines of code where you change the result variable again (by subtracting a value of your choice, multiplying it and dividing it).
// Think about the value stored in the user input variable you also created - did that value change?
// alert() the result and the user input variables (in two separate alert() calls).

const userInput = 3;
let result = 18 + userInput;

result = result - 4;
result = result * 2
result = result / 3;

console.log(userInput);             //3
console.log(result);                //11.333
