//! What is a Function in JavaScript?

// A function in JavaScript is a block of code designed to perform a specific task. We can reuse a function whenever we need it by calling it.

// function greet() {
//     console.log("Hello World!");
// }

// greet();



// Example with a Return Value
// A function can return a result using the return keyword.

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);

// console.log(result);


//! Function Invocation

// The code inside a function is NOT executed when the function is defined.

// The code inside a function will execute when "something" invokes the function:

// When it is called from JavaScript code
// When an event occurs (a user clicks a button)
// Automatically (self invoked)


// Example

// function sayHello() {
//   return "Hello World";
// }

// sayHello();


//! Parameters (Function Input)
// Parameters allow you to pass (send) values to a function.

// Parameters are listed inside the parentheses in the function definition.

//? Parameter Rules
// JavaScript function definitions do not specify data types for parameters.

// JavaScript functions do not perform type checking on the arguments.

// JavaScript functions do not check the number of arguments received.

// Example

// function multiply(a, b) {
//   return a * b;
// }

// let result = multiply(4, 5);

//? Default Parameter Values
// ECMAScript 2015 allows function parameters to have default values.

// The default value is used if no argument is provided.

// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }


//? Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

//? Arguments are Passed by Value
// The parameters, in a function call, are the function's arguments.

// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

// If a function changes an argument's value, it does not change the parameter's original value.

// Changes to arguments are not visible (reflected) outside the function.

//? Objects are Passed by Reference
// In JavaScript, object references are values.

// Because of this, objects will behave like they are passed by reference:

// If a function changes an object property, it changes the original value.

// Changes to object properties are visible (reflected) outside the function.


//! Types Of Function 


//? 1. Named Function

// A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.

// function greet() {
//   return "Hello!";
// }
// console.log(greet());

//? 2. Anonymous Function

// A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.

// const greet = function() {
//   return "Hi there!";
// };
// console.log(greet());


//? 3. Function Expression

// When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling that variable.

// const add = function(a, b) {
//   return a + b;
// };
// console.log(add(2, 3));


//? 4. Arrow Function (ES6)

// A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.

// const square = n => n * n;
// console.log(square(4));

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 20));


//? 5. Immediately Invoked Function Expression (IIFE)

// IIFE functions are executed immediately after their definition. They are often used to create isolated scopes.

// (function () {
//     console.log("This runs immediately!");
// })();


//? 6. Callback Functions

// A callback function is passed as an argument to another function and is executed after the completion of that function.

// function num(n, callback) {
//     return callback(n); 
// }
// const double = (n) => n * 2;
// console.log(num(5, double));

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Rahul", sayBye);



//? 7. Constructor Function

// A special type of function used to create multiple objects with the same structure. It’s called with the new keyword.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const user = new Person("Neha", 22);
// console.log(user.name);


//? 8. Async Function

// Functions that handle asynchronous tasks. Declared with async, they return a Promise, and you can use await inside them to pause until another Promise resolves.

// async function fetchData() {
//   return "Data fetched!";
// }
// fetchData().then(console.log);


//? 9. Generator Function

// Declared with an asterisk *, these functions can pause execution using yield and resume later. Useful for lazy loading values or handling iterators.

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = numbers();
// console.log(gen.next().value); 
// console.log(gen.next().value);



//? 10. Recursive Function

// A function that calls itself until a condition is met. Very useful for problems like factorial, Fibonacci, or tree traversals.

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));



//? 11. Higher-Order Function

// A function that either takes another function as a parameter or returns another function. These are common in JavaScript (e.g., map, filter, reduce).

// function multiplyBy(factor) {
//   return function(num) {
//     return num * factor;
//   };
// }
// const double = multiplyBy(2);
// console.log(double(5));


//? 12. Nested Functions

// Functions defined within other functions are called nested functions. They have access to the variables of their parent function.

// function outerFun(a) {
//     function innerFun(b) {
//         return a + b;
//     }
//     return innerFun;
// }
// const addTen = outerFun(10);
// console.log(addTen(5));


//? 13. Pure Functions

// Pure functions return the same output for the same inputs and do not produce side effects. They do not modify state outside their scope, such as modifying global variables, changing the state of objects passed as arguments, or performing I/O operations.

// function pureAdd(a, b) {
//     return a + b;
// }
// console.log(pureAdd(2, 3));



//? 14. Default Parameter Function

// A function where parameters have default values if no argument is passed. Helps avoid undefined issues.

// function greet(name = "Guest") {
//   return "Hello, " + name;
// }
// console.log(greet());
// console.log(greet("Aman"));


//? 15. Rest Parameter Function

// Uses ... to collect all remaining arguments into an array. Very useful when you don’t know how many arguments will be passed.

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4));



//! 1. What is this in JavaScript?

// Definition: The this keyword refers to a value, usually an object, that depends on how a function is called.

// Simple meaning: this tells us which object a function is working with.

//? 2. this in an Object Method

// When a regular function is called as an object method, this refers to the object before the dot.

// const person = {
//   name: "Rahul",

//   greet: function() {
//     console.log(this.name);
//   }
// };

// person.greet();


// Output:
// Rahul


// Explanation: person.greet() calls the method through person, so this refers to person.



//? 3. this in a Regular Function

// In a regular function, this depends on how the function is called.

// function greet() {
//   console.log(this);
// }

// greet();


// - In a browser's non-strict script, this is usually window.

// - In strict mode, this is undefined when the function is called directly like this.

// - In Node.js, the behavior depends on the module system and how the function is called.

// Strict-mode example:

// "use strict";

// function greet() {
//   console.log(this);
// }

// greet();


// Output:
// undefined



//? 4. this in the Global Scope

// At the top level of a traditional browser script, this refers to window.

// console.log(this === window);


// Output in a browser script:
// true


// Important: This is different in some environments. For example, top-level this in an ES module is undefined.


//? 5. What is globalThis?

// globalThis provides a standard way to access the global object across JavaScript environments.

// console.log(globalThis);


// - In browsers, globalThis refers to window.

// - In Node.js, it refers to the global object.



//? 6. this in Event Handlers

// In a regular function used as a DOM event listener, this refers to the element that received the event.

/*
<button id="btn">Click Me</button>

<script>
  document.getElementById("btn").addEventListener("click", function() {
    this.textContent = "Clicked!";
  });
</script>
*/



// Output: When you click the button, its text changes to Clicked!.

// Here, this refers to the button.


//? 7. this in Arrow Functions

// An arrow function does not have its own this. It inherits this from its surrounding scope.

// const person = {
//   name: "Rahul",

//   greet: function() {
//     const sayHello = () => {
//       console.log(this.name);
//     };

//     sayHello();
//   }
// };

// person.greet();


// Output:
// Rahul


// Explanation: The arrow function inherits this from greet(), where this refers to person.




//? 8. Arrow Functions as Object Methods

// Arrow functions are usually not suitable as object methods when you need this to refer to the object.

// const person = {
//   name: "Rahul",

//   greet: () => {
//     console.log(this.name);
//   }
// };

// person.greet();


// Output: Usually undefined in a browser's traditional script, assuming the global object has no name property with a value.

// Why? The arrow function inherits this from its surrounding scope instead of using person.


// Use a regular method instead:

// const person = {
//   name: "Rahul",

//   greet() {
//     console.log(this.name);
//   }
// };

// person.greet();


// Output: Rahul


//? 9. this with call(), apply(), and bind()

// These methods let you explicitly set this for a regular function.

// function greet() {
//   console.log(this.name);
// }

// const person = { name: "Rahul" };

// greet.call(person);
// greet.apply(person);

// const newGreet = greet.bind(person);
// newGreet();


// Output:
// Rahul
// Rahul
// Rahul


// - call() calls the function immediately with the specified this.
// - apply() does the same but passes arguments as an array.
// - bind() returns a new function with this fixed to the specified object.
// These methods do not change an arrow function's this.


//! 1. JavaScript apply()


// apply() is a JavaScript function method used to call a function with a specific this value and pass arguments as an array.


//? Example
// function greet(city, country) {
//     console.log("Hello, " + this.name);
//     console.log(city, country);
// }

// const person = {
//     name: "Rahul"
// };

// greet.apply(person, ["Dehradun", "India"]);


// Output:
// Hello, Rahul
// Dehradun India


//? Simple Explanation

// - person becomes the value of this.
// - ["Dehradun", "India"] contains the arguments passed to the function.
// - apply() calls the function immediately.
// Here, this.name returns "Rahul" because this refers to person.


// Syntax
// functionName.apply(thisValue, [arg1, arg2, ...]);


// When do we use apply()?

// When we want to call a function with a specific this value and pass its arguments as an array or array-like object.



//! 2. JavaScript bind()

// bind() is a JavaScript function method that creates and returns a new function with a specific this value. It does not call the function immediately.


//? Example

// function greet() {
//     console.log("Hello, " + this.name);
// }

// const person = {
//     name: "Rahul"
// };

// const newGreet = greet.bind(person);

// newGreet();


// Output:
// Hello, Rahul


//? Simple Explanation
// - bind(person) creates a new function.
// - Inside that new function, this refers to person.
// - newGreet() executes the function.
// Important: bind() returns a function, so you need to call that function to execute it.


//? Example with Arguments

// function greet(city) {
//     console.log(this.name + " lives in " + city);
// }

// const person = {
//     name: "Rahul"
// };

// const newGreet = greet.bind(person, "Dehradun");

// newGreet();


// Output:
// Rahul lives in Dehradun


// Here, bind() sets both the this value and the first argument in advance.




//? Bonus: call() vs. apply() vs. bind()

// function introduce(city, country) {
//     console.log(this.name, city, country);
// }

// const person = { name: "Rahul" };

// introduce.call(person, "Dehradun", "India");

// introduce.apply(person, ["Dehradun", "India"]);

// const intro = introduce.bind(person, "Dehradun", "India");
// intro();


// All three produce:
// Rahul Dehradun India
// Rahul Dehradun India
// Rahul Dehradun India



//! Function Overloading in JavaScript


// Unlike other programming languages, JavaScript Does not support Function Overloading.

// Example: Here is a small code that shows that JavaScript does not support Function Overloading. 


// function foo(arg1) {
//     console.log(arg1);
// }

/* The above function will be  overwritten by the function  below, and the below function   will be executed for any number  and any type of arguments */


// function foo(arg1, arg2) {
//     console.log(arg1, arg2);
// }

// Driver code

// foo("Geeks")
// Output : Geeks undefined


//? Explanation:

// •	JavaScript does not natively support function overloading.
// •	In the above example, the second function foo(arg1, arg2) overwrites the first function foo(arg1). When you call foo("Geeks"), the function with two parameters is called, but the second argument remains undefined because only one argument was passed.

//! Example of function overloading

function add(a, b) {
    return a + b;
}

function add(a, b, c) {
    return a + b + c;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));