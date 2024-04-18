// Question 1: 
let greeting = "Hello World";
console.log(greeting);

// Question 2:
let num1 = 2,
  num2 = 3;
let add = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let mul = num1 * num2;
console.log("Add: ", add);
console.log("Sub: ", sub);
console.log("Div: ", div);
console.log("Mul: ", mul);

// Question 3:
let a = 1,
  b = 2;
a = b + a; //3
b = a - b; //1
a = a - b; //2
console.log("a: ", a);
console.log("b: ", b);

// Question 4:
//let message: string = 2;
//error:  Type 'number' is not assignable to type 'string'.

// Question 5:
num1 = 2;
num2 = 2;
console.log("Remainder: ", num1 % num2);

// Question 6:
let counter = 0;
counter++;
counter += 1;
console.log("Counter: ",counter);

// Question 7:
let a1 = true, 
    b1 = false,
    c1 = true; 

    let andResult = a1 && b1 && c1;
    let orResult = a1 || b1 || c1;
    let notB = !b1;
console.log("And: ",andResult);
console.log("Or: ",orResult);
console.log("Not b: ",notB);


// Question 8:
let num = 10;

num += 5; // num = 15 (10 + 5)
num -= 3; // num = 12 (15 - 3)
num *= 2; // num = 24 (12 * 2)
num /= 4; // num = 6 (24 / 4)

// Question 9:
if (num % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Question 10:
let age = 18;
const votingAge = 18;

if (age >= votingAge) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote yet.");
}

// Question 11:
let score = 89;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Question 12:
let x = 1, y = 2, z = 0;
if (x >= y && x >= z) {
    console.log("The largest number is: " + x);
} else if (y >= x && y >= z) {
    console.log("The largest number is: " + y);
} else {
    console.log("The largest number is: " + z);
}

// Question 13:
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// Question 14:
let fahrenheit = 108;
let celsius = (5/9) * (fahrenheit - 32);
console.log(fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.");

// Question 15:
let number = -2;

// Assuming number is assigned some value here

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Question 16:
number = 2;
console.log("Multiplication table for " + number + ":");

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(number + " * " + i + " = " + result);
}

