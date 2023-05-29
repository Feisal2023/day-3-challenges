/*
Welcome to Day 3: Functions and Scope Exercises!

In this exercise set, we will dive into functions and their scope in JavaScript. Functions are a powerful tool for organizing and reusing code, and understanding how scope works is crucial for writing efficient and bug-free programs.

Each exercise is designed to reinforce your understanding of functions, parameters, return values, function scope, and more. Remember, practice is key to mastery! Take your time to read each exercise carefully, experiment with different solutions, and test your code. Embrace the challenges, as they will help you grow as a developer.

Let's get started with the exercises:
*/

// Exercise 1: Function Basics
// Instructions: Write a function called `greet` that takes a name as a parameter and logs a greeting message to the console. The message should include the name passed to the function.

function greet(name) {
  console.log("Hello good Evening" + ' ' + name);
}
greet("Feisal");
// Exercise 2: Function Return Value
// Instructions: Write a function called `add` that takes two numbers as parameters and returns their sum. Log the result to the console.
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(4,5));
// Exercise 3: Function Scope
// Instructions: Declare a variable `count` outside of any function. Write a function called `incrementCount` that increments the value of `count` by 1 and logs the updated value to the console. Call the function multiple times and observe the output.
let count = 0;
function incrementCount() {
  count += 1;
  console.log(count);
}
incrementCount();
incrementCount();
incrementCount();
incrementCount();
incrementCount();

// Exercise 4: Function Parameters and Arguments
// Instructions: Write a function called `multiply` that takes two numbers as parameters and returns their product. Log the result to the console. Call the function with different arguments to test it.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 5));

// Exercise 5: Function Expression
// Instructions: Declare a function expression called `subtract` that takes two numbers as parameters and returns their difference. Log the result to the console. Call the function with different arguments to test it.
const subtract = function(num1, num2) {
  return num1 - num2;
}
console.log(subtract(20, 6));

// Exercise 6: Function Scope
// Instructions: Write a function called `calculateArea` that takes the radius of a circle as a parameter and returns the area of the circle. Log the result to the console. Use a constant value of `pi` as 3.141 for the calculation.
let pi = 3.142;
function calculateArea(radius) {
  return pi * radius * radius;
}
console.log(calculateArea(5));
// Exercise 7: Function Default Parameters
// Instructions: Write a function called `powerOf` that takes a number as the base and an exponent as the default parameter (set to 2 if no exponent is provided). The function should return the result of raising the base to the exponent. Log the result to the console. Test the function with different arguments.
function powerOf(base, exponent) {
return base ** exponent;
}
console.log(powerOf(2, 10));
// Exercise 8: Function Scope
// Instructions: Declare a variable `globalVar` outside of any function. Write a function called `localVsGlobal` that declares a variable `localVar` inside it. Log the values of both `globalVar` and `localVar` to the console. Observe the scope of the variables.
let globalVar = 10;
function localVsGlobal() {
  let localVar = 20;
  console.log(globalVar);
  console.log(localVar);

}
localVsGlobal();
// Exercise 9: Function Scope
// Instructions: Write a function called `calculateTotalPrice` that takes the price and quantity of a product as parameters. It should calculate the total price by multiplying the price and quantity. Log the result to the console. Test the function with different arguments.
function calculateTotalPrice(p, q) {
  return p * q;
}
console.log(calculateTotalPrice(40, 5));

// Exercise 10: Function Scope
// Instructions: Write a function called `convertTemperature` that takes a temperature in Celsius and converts it to Fahrenheit. Log the converted temperature to the console. Use the formula: Fahrenheit = Celsius * (9/5) + 32.


function convertTemperature(temperatureCelsius) {
  let temperatureFahrenheit = temperatureCelsius * 9/5 + 32;
  console.log(temperatureFahrenheit);
}
convertTemperature(20);
// Exercise 11: Function Scope and Return Value
// Instructions: Write a function called `isEven` that takes a number as a parameter and returns `true` if the number is even, and `false` otherwise. Log the result to the console. Test the function with different arguments.

function isEven(number) {
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));
// Exercise 12: Function Scope and Return Value
// Instructions: Write a function called `findMax` that takes an array of numbers as a parameter and returns the maximum value in the array. Log the result to the console. Test the function with different arrays.
function findMax(arrayOfNumbers) {
  let max = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) {
      max = arrayOfNumbers[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4, 5]));

// Exercise 13: Function Scope and Return Value
// Instructions: Write a function called `isPalindrome` that takes a string as a parameter and returns `true` if the string is a palindrome (reads the same forwards and backwards), and `false` otherwise. Log the result to the console. Test the function with different strings.
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// Exercise 14: Function Scope and Return Value
// Instructions: Write a function called `capitalizeString` that takes a string as a parameter and returns the same string with the first letter capitalized. Log the result to the console. Test the function with different strings.
function capitalizeString(str) {
  const firstLetter = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1);
  return firstLetter + restOfString;
}

console.log(capitalizeString("hello")); // Output: "Hello"
console.log(capitalizeString("world")); // Output: "World"

// Exercise 15: Function Scope and Return Value
// Instructions: Write a function called `randomNumberBetween` that takes two numbers, `min` and `max`, as parameters and returns a random number between `min` and `max` (inclusive). Log the result to the console. Test the function with different arguments.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumberBetween(1, 10)); // Output: Random number between 1 and 10 (inclusive)
console.log(randomNumberBetween(100, 200)); // Output: Random number between 100 and 200 (inclusive)

/*
Great job on completing the Day 3 exercises! Functions and scope are fundamental concepts in JavaScript, and practicing them will strengthen your understanding of how JavaScript code is organized and executed.

Remember to break down problems into smaller steps and test your code regularly. Embrace the challenges you encounter, as they are opportunities for growth. By working through these exercises, you're one step closer to becoming a proficient JavaScript developer.

Keep up the fantastic work, and stay tuned for more exciting exercises in the days to come!
*/
