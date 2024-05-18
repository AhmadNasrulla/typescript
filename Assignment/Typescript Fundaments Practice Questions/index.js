"use strict";
//Question 1:
console.log("Hello, World!");
//Question 2:
let temperature = 10;
if (temperature < 20) {
    console.log("it's cold!");
}
//Question 3:
let apples = 10;
apples -= 3;
console.log("Total apples: ", apples);
//Question 4:
let firstName = "Ahmad";
let lastName = "Nasrullah";
let fullName = firstName + " " + lastName;
console.log(fullName);
//Question 5:
if (5 > 3) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Question 6:
function calculateArea(r) {
    return 2 * 3.14 * r * r;
}
console.log(calculateArea(12));
//Question 7:
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//Question 8:
let temperatureArr = [10, 22, 32, 46, 51];
let max = temperatureArr[0];
for (let i = 0; i < 5; i++) {
    if (max < temperatureArr[i]) {
        max = temperatureArr[i];
    }
}
console.log("Max number is: ", max);
//Question 9:
let age = 17;
if (age <= 18) {
    console.log("You are minor");
}
else {
    console.log("You are adult");
}
//Question 10:
let arr1 = [-1, 2, 3, -5, 4, 2];
function countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
console.log("Number of positive numbers: ", countPositiveNumbers(arr1));
//Question 11:
let arr2 = ["ahmad", "ali", "haider"];
function a() {
    console.log("Names strating with a:");
    for (let i = 0; i < arr2.length; i++) {
        let newArr;
        if (arr2[i][0] == "a") {
            console.log(arr2[i], " ");
        }
    }
}
a();
//Question 12:
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
function secToLast(fruits) {
    for (let i = 1; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
secToLast(fruits);
//Question 13:
function squareNumbers(numbers) {
    let squaredArray = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredArray.push(numbers[i] * numbers[i]);
    }
    return squaredArray;
}
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareNumbers(numbers);
console.log("Squared numbers:", squaredNumbers);
//Question 14:
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);
console.log("Reversed Array:", reversedArray);
//Question 15:
function countScore(arr) {
    let maxScore = arr[0];
    let minScore = arr[0];
    let aboveMax = 0;
    let belowMin = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxScore) {
            maxScore = arr[index];
            aboveMax++;
        }
        else if (arr[index] < minScore) {
            minScore = arr[index];
            belowMin++;
        }
    }
    console.log("Above max: ", aboveMax);
    console.log("Below min: ", belowMin);
}
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countScore(scores);
// Question 16:
function removeFalsyValues(arr) {
    const result = [];
    for (const item of arr) {
        if (item !== false &&
            item !== null &&
            item !== 0 &&
            item !== "" &&
            item !== undefined &&
            !Number.isNaN(item)) {
            result.push(item);
        }
    }
    return result;
}
const arr = [false, null, 0, "", undefined, NaN, "hello", 42];
const filteredArr = removeFalsyValues(arr);
console.log(filteredArr);
// Question 17:
function joinArr(arr1, arr2) {
    let joinedArr = [...arr1, ...arr2];
    return joinedArr;
}
let Array1 = [1, 2, 3];
let Array2 = [4, 5, 6];
let joinedArr = joinArr(Array1, Array2);
console.log("joinedArr: ", joinedArr);
// Question 18:
function sumOfElements(arr, isEven) {
    let sum = 0;
    for (const num of arr) {
        if (isEven && num % 2 === 0) {
            sum += num;
        }
        else if (!isEven && num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of even numbers:", sumOfElements(numbersArr, true));
console.log("Sum of odd numbers:", sumOfElements(numbersArr, false));
// Question 19:
function elementExists(arr, anyNumber) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === anyNumber) {
            return i;
        }
    }
    return -1;
}
const array = [1, 2, 3, 4, 5];
console.log(elementExists(array, 3));
console.log(elementExists(array, 6));
// Question 20:
function findSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let num = [5, 3, 9, 1, 7];
console.log(findSmallestNumber(num));
// Question 21:
function calculateProduct(numbers) {
    let product = 1;
    for (const num of numbers) {
        product *= num;
    }
    return product;
}
calculateProduct([1, 2, 3, 4, 5]);
// Question 22:
// Function to filter strings based on length
function filterByLength(strings, n) {
    let arr = [];
    let j = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > n) {
            arr[j] = strings[i];
            j++;
        }
    }
    return arr;
}
const strings = ["apple", "banana", "cherry", "grapefruit"];
const filtered_strings = filterByLength(strings, 5);
console.log(filtered_strings);
// Question 23:
function findDuplicates(arr) {
    const elementCount = {};
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const key = element.toString();
        elementCount[key] = (elementCount[key] || 0) + 1;
    }
    for (const key in elementCount) {
        if (elementCount[key] > 1) {
            duplicates.push(key);
        }
    }
    console.log("Duplicates:", duplicates);
}
const exampleArray = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1];
findDuplicates(exampleArray);
// Question 24:
function incrementAll(arr) {
    return arr.map((num) => num + 1);
}
console.log(incrementAll([1, 2, 3, 4, 5]));
// Question 25:
function countOccurrences(arr, target) {
    return arr.filter((item) => item === target).length;
}
const count = countOccurrences([1, 2, 2, 3, 2, 4], 2);
// Question 26:
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];
console.log(isSorted(sortedArray));
console.log(isSorted(unsortedArray));
// Question 27:
function formatNames(names) {
    const length = names.length;
    if (length === 0) {
        return "";
    }
    else if (length === 1) {
        return names[0];
    }
    else if (length === 2) {
        return names.join(" and ");
    }
    else {
        const allButLastTwo = names.slice(0, length - 2).join(", ");
        const lastTwo = names.slice(length - 2).join(" and ");
        return `${allButLastTwo}, ${lastTwo}`;
    }
}
const names1 = ["Alice"];
const names2 = ["Alice", "Bob"];
const names3 = ["Alice", "Bob", "Charlie"];
const names4 = ["Alice", "Bob", "Charlie", "Dave"];
console.log(formatNames(names1));
console.log(formatNames(names2));
console.log(formatNames(names3));
console.log(formatNames(names4));
// Question 28:
function fahrenheitToCelsius(temperatures) {
    for (let i = 0; i < temperatures.length; i++) {
        temperatures[i] = (temperatures[i] - 32) * 5 / 9;
    }
    console.log("temperature in Celsius: ", temperatures);
}
fahrenheitToCelsius([77, 45, 675, 275]);
// Question 29:
function minMaxAverage(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return {
        min,
        max,
        average
    };
}
const exampleNumbers = [10, 20, 30, 40, 50];
const result = minMaxAverage(exampleNumbers);
console.log(result);
// Question 30:
function swapElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid indices");
    }
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log("Swaped Array ", arr);
}
swapElements([1, 2, 3, 4, 5, 6], 1, 3);
// Question 31:
function countChar(str, char) {
    return str.split(char).length - 1;
}
console.log(countChar("Hello, World!", "o"));
const todoList = [
    { task: "Buy groceries", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Finish the project", completed: false }
];
function logIncompleteTasks(tasks) {
    tasks.forEach(task => {
        if (!task.completed) {
            console.log(task.task);
        }
    });
}
logIncompleteTasks(todoList);
// Question 33:
function sortArray(numbers) {
    return numbers.sort((a, b) => a - b);
}
const numb = [5, 3, 8, 1, 2];
const sortedNumbers = sortArray(numb);
console.log(sortedNumbers);
// Question 34:
function logElementsInReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
const expArray = [1, 2, 3, 4, 5];
logElementsInReverse(expArray);
// Question 35:
function basicCalculator(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand2 !== 0 ? operand1 / operand2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}
const operand1 = 10;
const operand2 = 5;
const operator = '+';
const res = basicCalculator(operand1, operand2, operator);
console.log("Result ", res);
