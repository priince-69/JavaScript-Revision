//! JavaScript Objects

//? Interview Definition: An object in JavaScript is a collection of properties stored as key-value pairs. Each property has a key and a value. The values can be of any data type, including strings, numbers, booleans, arrays, functions, and other objects.


//! Basic Operations on JavaScript Objects

//* 1. Accessing Object Properties

//? You can access an object’s properties using either dot notation or bracket notation

// let obj = { name: "Sourav", age: 23 };

// Using Dot Notation
// console.log(obj.name);

// Using Bracket Notation
// console.log(obj["age"]);



//* 2. Modifying Object Properties

//? Properties in an object can be modified by reassigning their values.

// let obj = { name: "Sourav", age: 22 };
// console.log(obj);
// obj.age = 23;
// console.log(obj);




//* 3. Adding Properties to an Object

//? You can dynamically add new properties to an object using dot or bracket notation.

// let obj = { model: "Tesla" };
// obj.color = "Red";
// console.log(obj);



//* 4. Removing Properties from an Object

// The delete operator removes properties from an object.

// let obj = { model: "Tesla", color: "Red" };
// delete obj.color;
// console.log(obj);




//* 5. Checking if a Property Exists

//? You can check if an object has a property using the in operator or hasOwnProperty() method.

// let obj = { model: "Tesla" };
// console.log("color" in obj);
// console.log(obj.hasOwnProperty("model"));



//* 6. Iterating Through Object Properties

//? Use for...in loop to iterate through the properties of an object.

// let obj = { name: "Sourav", age: 23 };
// for (let key in obj) {
//     console.log(key + ": " + obj[key]);
// }



//* 7. Merging Objects

//? Objects can be merged using Object.assign() or the spread syntax { ...obj1, ...obj2 }.

// let obj1 = { name: "Sourav" };
// let obj2 = { age: 23};
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);



//* 8. Object Length

//? You can find the number of properties in an object using Object.keys().

// let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length);



//* Nested Objects

// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }


//* Recognizing a JavaScript Object

//? To check if a value is an object, use typeof and verify it's not null.

// let obj = { name: "Sourav" };
// console.log(typeof obj === "object" && obj !== null);



//* JavaScript this Keyword

//? The this keyword refers to an object.

//? In JavaScript, this is used to access the object that is calling a method.


//* this in an Object Method

//? When used inside an object method, this refers to the object.

//? Example

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };


//? In the example above:

// this.firstName refers to the firstName property of the person object

// this.lastName refers to the lastName property of the person object


//* Why Use this?

//? The this keyword makes it possible to use the same method with different objects.

//? Example

// const person1 = {
//   name: "John",
//   hello: function() {
//     return "Hello " + this.name;
//   }
// };

// const person2 = {
//   name: "Anna",
//   hello: function() {
//     return "Hello " + this.name;
//   }
// };

// document.getElementById("demo").innerHTML = person1.hello();



//* this Alone

//? When used alone, this refers to the global object.

//? In a browser, the global object is the window object.

//? Example

// let x = this;
// document.getElementById("demo").innerHTML = x;


//* this in a Function

//? In a regular function, this also refers to the global object.

//? Example

// function myFunction() {
//   return this;
// }

// document.getElementById("demo").innerHTML = myFunction();



//! JavaScript Display Objects

//* Using a For .. In Loop

//? The properties of an object can be collected in a loop:


//? Example

// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// Build a Text
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };



//* Using Object.values()

//? Object.values() creates an array from the property values:

// Create an Object

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// Create an Array
// const myArray = Object.values(person);

// Stringify the Array
// let text = myArray.toString();


//* Using Object.entries()

//? Object.entries() makes it simple to use objects in loops:

//? Example

// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }



//* Using JSON.stringify()

//? JavaScript objects can be converted to a string with JSON method JSON.stringify().

//? JSON.stringify() is included in JavaScript and supported in all browsers.

// The result will be a string written in JSON notation:

// {"name":"John","age":50,"city":"New York"}

//? Example

// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// Stringify Object
// let text = JSON.stringify(person);


//!  Javascript Object Methods

//* 1. Object.keys()

//? Object.keys() returns an array containing the names of an object's own enumerable string-keyed properties.

//? Example:
// const student = {
//     name: "Prince",
//     age: 22,
//     course: "BCA"
// };

// console.log(Object.keys(student));

// Output:
// ["name", "age", "course"]


//? Explanation:
// - name, age, and course are the keys.
// - The method returns those keys in an array.
// - It does not modify the original object.


//* Interview tip: Use Object.keys(obj).length to count an object's own enumerable string-keyed properties.



//* 2. Object.values()

//? Object.values() returns an array containing the values of an object's own enumerable string-keyed properties.

//? Example:
// const student = {
//     name: "Prince",
//     age: 22,
//     course: "BCA"
// };

// console.log(Object.values(student));

// Output:
// ["Prince", 22, "BCA"]

//? Explanation:
// The method returns the values associated with the object's keys.


//* Interview tip: Object.values() returns values, whereas Object.keys() returns property names.



//* 3. Object.entries()
 
//? Object.entries() returns an array of key-value pairs. Each pair is itself an array containing the property name and its value.

//? Example:
// const student = {
//     name: "Prince",
//     age: 22,
//     course: "BCA"
// };

// console.log(Object.entries(student));

// Output:
// [
//     ["name", "Prince"],
//     ["age", 22],
//     ["course", "BCA"]
// ]

//? Explanation:
// Each inner array contains:
// ["key", value]

// For example:
// ["name", "Prince"]

// Here, "name" is the key and "Prince" is its value.
 
 

//* Interview tip: Object.entries() is useful when you need both keys and values while iterating over an object.



//* 4. Object.assign()

//? Object.assign() copies properties from one or more source objects into a target object.

//? Syntax: Object.assign(target, source);

//? - target: The object that receives properties.
//? - source: The object from which properties are copied.
//? - It returns the target object.

//? Example 1: Copy properties into another object
// const source = {
//     name: "Prince",
//     age: 22
// };

// const target = {};

// Object.assign(target, source);

// console.log(target);
// console.log(source);


//* Output:
// { name: "Prince", age: 22 }
// { name: "Prince", age: 22 }



//? Explanation:
// The properties from source are copied into target. The original source object remains unchanged.



//? Example 2: Updating an existing property

// const target = {
//     name: "Prince",
//     age: 22
// };

// const source = {
//     age: 23,
//     city: "Dehradun"
// };

// Object.assign(target, source);

// console.log(target);


//* Output:
// {
//     name: "Prince",
//     age: 23,
//     city: "Dehradun"
// }


//? Explanation:
// - age changes from 22 to 23.
// - city is added.
// - name remains unchanged.



//? Example 3: A common use case — shallow copying
// const student = {
//     name: "Prince",
//     age: 22
// };

// const copy = Object.assign({}, student);

// console.log(copy);

//* Output: { name: "Prince", age: 22 }


//! Important interview point: Object.assign() performs a shallow copy, not a deep copy. If an object contains nested objects, those nested objects are not independently cloned.



//* 5. Object.freeze()

//? Object.freeze() prevents changes to an object's own properties.

//? After an object is frozen, you cannot:
// - Add new properties.
// - Remove existing properties.
// - Change existing property values.
// It returns the same frozen object.


//? Example
// const student = {
//     name: "Prince",
//     age: 22
// };

// Object.freeze(student);

// student.age = 23;
// student.city = "Dehradun";
// delete student.name;

// console.log(student);

//* Output in a non-strict script:  { name: "Prince", age: 22 }

//? The attempted modifications fail silently in a non-strict script. In strict mode, attempts to modify frozen properties generally throw a TypeError.

//! How can you check whether an object is frozen?

// const user = {
//     name: "Prince"
// };

// Object.freeze(user);

// console.log(Object.isFrozen(user));

//* Output: true


//! Important: Object.freeze() is shallow

//? Consider this example:
// const student = {
//     name: "Prince",
//     address: {
//         city: "Dehradun"
//     }
// };

// Object.freeze(student);

// student.name = "Rahul";
// student.address.city = "Delhi";

// console.log(student);

//* Output:
// {
//     name: "Prince",
//     address: {
//         city: "Delhi"
//     }
// }


//? Why did city change?
// Object.freeze() freezes only the outer object. The nested address object remains mutable.

//? Interview tip: Freezing an object does not automatically freeze its nested objects.



//* 6. Object.seal()
 
//? Object.seal() prevents properties from being added to or removed from an object, but it generally allows existing writable properties to be modified.

//? Example
// const student = {
//     name: "Prince",
//     age: 22
// };

// Object.seal(student);

// student.age = 23;
// student.city = "Dehradun";
// delete student.name;

// console.log(student);

//* Output in a non-strict script:
// {
//     name: "Prince",
//     age: 23
// }

//? Explanation:
// - age changes to 23 because the existing property is writable.
// - city is not added because the object is sealed.
// - name is not deleted because the object is sealed.

//* In strict mode, attempts to add or delete properties on a sealed object generally throw a TypeError.


//! Check whether an object is sealed
// const user = {
//     name: "Prince"
// };

// Object.seal(user);

// console.log(Object.isSealed(user));

//* Output: true



//? Easy way to remember:
// - Freeze: Lock the object's properties against modification.
// - Seal: Lock the object's structure, but allow existing writable values to change.

//? These methods are shallow; they do not automatically lock nested objects.




//* 7. Object.hasOwn()
 
//? Object.hasOwn() checks whether a property exists directly on the object, rather than being inherited from its prototype.

//? It returns true or false.

//? Syntax: Object.hasOwn(object, propertyName);

//? Example 1: Property exists
// const student = {
//     name: "Prince",
//     age: 22
// };

// console.log(Object.hasOwn(student, "name"));
// console.log(Object.hasOwn(student, "age"));
// console.log(Object.hasOwn(student, "city"));

//* Output:
// true
// true
// false

//! Explanation:
// - "name" exists directly on the object.
// - "age" exists directly on the object.
// - "city" does not exist on the object.


//? Example 2: A property whose value is undefined
// const user = {
//     name: undefined
// };

// console.log(Object.hasOwn(user, "name"));
// console.log(user.name);
// console.log(Object.hasOwn(user, "age"));

//* Output:
// true
// undefined
// false

//! Important: A property can exist even if its value is undefined. That is why checking the value alone is not always enough.



//? Example 3: Own properties vs inherited properties
// const parent = {
//     city: "Dehradun"
// };

// const student = Object.create(parent);

// student.name = "Prince";

// console.log(Object.hasOwn(student, "name"));
// console.log(Object.hasOwn(student, "city"));
// console.log("city" in student);

//* Output:
// true
// false
// true

//? Here:
// - name is an own property of student.
// - city is inherited from parent.
// - The in operator checks both own and inherited properties.


//* Interview tip: Prefer Object.hasOwn() over the older obj.hasOwnProperty() pattern, especially when objects might not inherit from Object.prototype.



//! JavaScript Object Constructors — Short Notes

//? 1. A constructor function is used to create multiple objects with the same structure.

//? Example:
// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }

// const father = new Person("John", "Doe", 50);
// const mother = new Person("Sally", "Doe", 48);

// console.log(father.firstName); // John
// console.log(mother.age);       // 48

//* Explanation:
// - Person() is the constructor function.
// - new creates a new object.
// - this refers to the newly created object when the constructor is called with new.
// - Constructor function names conventionally start with a capital letter.


//! 2. Property Default Values

//? You can assign a default value to a property inside the constructor. Every newly created object receives that value.

// function Person(name) {
//     this.name = name;
//     this.nationality = "Indian";
// }

// const person1 = new Person("Prince");
// const person2 = new Person("Rahul");

// console.log(person1.nationality); // Indian
// console.log(person2.nationality); // Indian

//? Both objects have the same default nationality.



//* 3. Adding a Property to an Object

//? You can add a property to an individual object.

// function Person(name) {
//     this.name = name;
// }

// const father = new Person("John");
// const mother = new Person("Sally");

// father.nationality = "Indian";

// console.log(father.nationality); // Indian
// console.log(mother.nationality); // undefined

//? Remember: The property is added only to father, not to every Person object.




//* 4. Adding a Property Using prototype

//? If you want a property to be accessible to all objects created by a constructor, use its prototype.

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.nationality = "Indian";

// const person1 = new Person("Prince");
// const person2 = new Person("Rahul");

// console.log(person1.nationality); // Indian
// console.log(person2.nationality); // Indian

//? Explanation: Both objects can access nationality through their prototype.

//? Interview tip: Prototype properties are shared through inheritance; they are not copied as own properties into each object.



//* 5. Constructor Function Methods

//? A constructor can also define methods.

// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;

//     this.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     };
// }

// const person = new Person("Prince", "Kumar");

// console.log(person.fullName()); // Prince Kumar

//? Here, fullName() is a method that returns the person's full name.

//? Note: This approach creates a separate function for each object.




//* 6. Adding a Method to One Object

//? You can add a method to an individual object.

// function Person(name) {
//     this.name = name;
// }

// const mother = new Person("Sally");

// mother.changeName = function(name) {
//     this.name = name;
// };

// mother.changeName("Anna");

// console.log(mother.name); // Anna

//? The changeName() method belongs only to mother.




//? 7. Adding a Method Using prototype

//? To make a method available to all objects created by a constructor, add it to the prototype.

// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// Person.prototype.changeName = function(name) {
//     this.lastName = name;
// };

// const mother = new Person("Sally", "Rally");
// const father = new Person("John", "Doe");

// mother.changeName("Kumar");

// console.log(mother.lastName); // Kumar
// console.log(father.lastName); // Doe

//? Explanation:
// - Both objects can access changeName().
// - Calling it on mother changes only mother.lastName.
// - The method is shared through the prototype.


//? Important correction: You can add properties or methods to the constructor function itself, such as Person.someMethod = ..., but those become properties of Person, not methods automatically available on its instances.




//* 9. Why Prefer Literals?

//? Use these simpler forms when possible:

// const user = {};                // Instead of new Object()
// const numbers = [];             // Instead of new Array()
// const pattern = /abc/;           // Instead of new RegExp("abc")
// const greet = function() {};     // Instead of new Function()


//? They are generally shorter and easier to read.

//? Note: new Function() is valid JavaScript, but it dynamically creates functions from strings and has security and optimization drawbacks. Avoid it in ordinary application code.




//? 10. Primitive Values vs Objects

// const text = "Hello";          // String primitive
// const number = 10;             // Number primitive
// const isActive = true;         // Boolean primitive

// const user = {};               // Object
// const numbers = [];            // Array object
// const pattern = /abc/;         // RegExp object
// const greet = function() {};   // Function object

//? Remember: Strings, numbers, and booleans can be primitives. Arrays, regular expressions, and functions are objects.













//! Advance


//* JavaScript Objects are Mutable

//? Objects are mutable: They are addressed by reference, not by value.

//? If person is an object, the following statement will not create a copy of person:

//? const x = person;

//? The object x is not a copy of person. The object x is person.

//? The object x and the object person share the same memory address.

//? Any changes to x will also change person:

//? Example

//Create an Object
// const person = {
//   firstName:"John",
//   lastName:"Doe",
//   age:50, eyeColor:"blue"
// }

// Try to create a copy
// const x = person;

// This will change age in person:
// x.age = 10;




//! JavaScript this Keyword — Short Interview Notes

//* 1. What is this in JavaScript?

//? Interview definition: The this keyword refers to a value determined by how a function is called. In a regular object method, it usually refers to the object before the dot.

//? In simple English, this helps you access the properties and methods of the relevant object.



//* 2. this Inside an Object Method

// const person = {
//     firstName: "John",
//     lastName: "Doe",

//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName());

// Output: John Doe

//? Explanation: Because we call person.fullName(), this refers to person.

//* Therefore:
// - this.firstName means person.firstName.
// - this.lastName means person.lastName.


//* 3. Returning this

// const person = {
//     name: "John",

//     getPerson: function() {
//         return this;
//     }
// };

// console.log(person.getPerson());

// Output: The person object.

//? When called as person.getPerson(), this refers to person.




//* 4. Explicit Binding: call()

//? The call() method invokes a function immediately and lets you specify its this value.

// const person1 = {
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// };

// console.log(person1.fullName.call(person2));

// Output: John Doe


//? Explanation: Although fullName() belongs to person1, call(person2) makes this refer to person2 for this invocation.

//? Syntax: function.call(thisValue, arg1, arg2);




//* 5. Explicit Binding: apply()

//? apply() works like call(), but it passes function arguments as an array (or array-like object).

// function introduce(city, country) {
//     return `${this.name} lives in ${city}, ${country}`;
// }

// const person = {
//     name: "Prince"
// };

// console.log(introduce.apply(person, ["Dehradun", "India"]));

// Output: Prince lives in Dehradun, India

//! call() vs apply()

// myFunction.call(person, "Dehradun", "India");

// myFunction.apply(person, ["Dehradun", "India"]);

//? - call(): Arguments are passed individually.
//? - apply(): Arguments are passed in an array or array-like object.

//? Both invoke the function immediately.




//* 6. bind() — Function Borrowing

//? The bind() method returns a new function with a specified this value. It does not immediately execute that function.

// const person = {
//     firstName: "John",
//     lastName: "Doe",

//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// const member = {
//     firstName: "Prince",
//     lastName: "Kumar"
// };

// const getFullName = person.fullName.bind(member);

// console.log(getFullName());

// Output: Prince Kumar

//? Explanation: getFullName is a new function in which this is bound to member.
 

 


//* 7. this Inside a Regular Function

//? In a regular function, this depends on the calling context.

// Example: Strict mode
// "use strict";

// function show() {
//     console.log(this);
// }

// show();

// Output: undefined

//? In strict mode, a regular function called directly has this set to undefined.
//? In a non-strict browser script, the same call generally uses the global object as this.
//? Important: Do not assume that this always refers to the global object inside a function.




//* 8. this in Global Scope

// In a classic browser script:

// console.log(this);

// At the top level, this refers to the global object, usually window.

//? Important: Top-level this behaves differently in different environments. For example, in an ES module, top-level this is undefined.




//* 9. this in an Event Handler

//? In a regular DOM event-handler function, this generally refers to the element handling the event.

// <button id="myButton">Click Me</button>

// <script>
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log(this);
// });
// </script>

//? When you click the button, this refers to the button element.

//? Note: Arrow-function event handlers behave differently because they inherit this from their surrounding scope.




//* 10. this in Arrow Functions

//? Arrow functions do not have their own this. They inherit it from the surrounding lexical scope.

// const person = {
//     name: "Prince",

//     regularFunction: function() {
//         console.log(this.name);
//     },

//     arrowFunction: () => {
//         console.log(this.name);
//     }
// };

// person.regularFunction();
// person.arrowFunction();

//? Output: The first call prints "Prince". The second does not use person as this; its result depends on the surrounding scope.

//? Interview tip: Avoid using arrow functions as object methods when you need this to refer to the object itself.





//! JavaScript Object Accessors — Short Interview Notes


//* 1. What Are Getters and Setters?

//? Interview definition: Getters and setters are special object methods that allow you to read and update properties using property-like syntax.

//? - Getter (get): Retrieves a value.
//? - Setter (set): Updates a value.

//? They are useful for data validation, formatting, and controlling how properties are accessed.




//* 2. Getter (get)

//? A getter allows you to access a method like a property, without using parentheses.

// const person = {
//     firstName: "John",
//     lastName: "Doe",

//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName);

// Output: John Doe

//? Explanation: We use person.fullName, not person.fullName().




//* 3. Setter (set)

//? A setter allows you to update a value using assignment syntax.

// const person = {
//     language: "",

//     set lang(value) {
//         this.language = value;
//     }
// };

// person.lang = "en";

// console.log(person.language);

// Output: en

//? Explanation: Assigning "en" to person.lang automatically calls the setter, which updates person.language.





//* 4. Function vs Getter

//? Using a normal method

// const person = {
//     firstName: "John",
//     lastName: "Doe",

//     fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName());

//? Using a getter

// const person = {
//     firstName: "John",
//     lastName: "Doe",

//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName);

// Both output:
// John Doe







//* 5. Getters and Setters for Data Quality

//? They can format or validate data before returning or storing it.


//? Example: Getter converts text to uppercase
// const person = {
//     language: "english",

//     get lang() {
//         return this.language.toUpperCase();
//     }
// };

// console.log(person.lang);

// Output: ENGLISH




// The original language value remains "english".



//? Example: Setter stores uppercase text
// const person = {
//     language: "",

//     set lang(value) {
//         this.language = value.toUpperCase();
//     }
// };

// person.lang = "english";

// console.log(person.language);

// Output: ENGLISH



//? The setter converts the value before storing it.

//? Important: A setter can also validate data before accepting it.



// const user = {
//     _age: 0,

//     set age(value) {
//         if (value < 0) {
//             throw new Error("Age cannot be negative");
//         }

//         this._age = value;
//     },

//     get age() {
//         return this._age;
//     }
// };

// user.age = 22;
// console.log(user.age); // 22

//? Here, _age is a convention indicating an internal property; it is not automatically private.






//* 6. Object.defineProperty()


//? Object.defineProperty() lets you define a property on an object, including custom getter and setter behavior.

// Example:
// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// Object.defineProperty(person, "fullName", {
//     get: function() {
//         return this.firstName + " " + this.lastName;
//     }
// });

// console.log(person.fullName);

// Output:  John Doe

//? Explanation: We define fullName as a getter without writing it directly inside the object literal.

//? Interview tip: By default, a property created with Object.defineProperty() has enumerable: false and configurable: false unless you specify otherwise.






//* 7. Counter Example Using Object.defineProperty()

//? The example below uses getters and setters to perform counter operations.

// const obj = {
//     counter: 0
// };

// Object.defineProperty(obj, "reset", {
//     get() {
//         this.counter = 0;
//     }
// });

// Object.defineProperty(obj, "increment", {
//     get() {
//         this.counter++;
//     }
// });

// Object.defineProperty(obj, "decrement", {
//     get() {
//         this.counter--;
//     }
// });

// Object.defineProperty(obj, "add", {
//     set(value) {
//         this.counter += value;
//     }
// });

// Object.defineProperty(obj, "subtract", {
//     set(value) {
//         this.counter -= value;
//     }
// });

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;

// console.log(obj.counter);


// Output: 4

 

//* 8. Advantages of Getters and Setters

// 1. Simple syntax: Access methods like properties.
// 2. Data validation: Reject invalid values.
// 3. Data formatting: Convert values before returning or storing them.
// 4. Encapsulation: Control how internal values are accessed or changed.





//! JavaScript Object Management — Simple Interview Notes


//? JavaScript provides several methods to create properties, modify property settings, inspect objects, and access prototypes.

 
//* 1. Object.defineProperty()

//? Purpose: Adds a property to an object or changes the settings of an existing property.

//? Example: Add a new property
// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// Object.defineProperty(person, "age", {
//     value: 25
// });

// console.log(person.age);

// Output: 25

//? Here, we added the age property to person.



//* Understanding property descriptors

//? Every ordinary data property has three important attributes:


//? Attribute  ------> 	Meaning

// writable ------->	Whether the property's value can be changed
// enumerable --------> Whether the property appears in operations such as Object.keys()
// configurable ------->	Whether the property can be deleted or reconfigured


//? Important: When you create a property using Object.defineProperty() and omit these attributes, they default to false.



//? For example:
// const person = {};

// Object.defineProperty(person, "language", {
//     value: "English",
//     writable: false,
//     enumerable: true,
//     configurable: false
// });

// console.log(person.language); // English

// person.language = "Hindi";

// console.log(person.language); // English

// The value remains "English" because writable is false. In strict mode, attempting this assignment throws a TypeError.




//* What does each attribute do?

//? A. writable: false — Prevents value changes

// const user = { name: "John" };

// Object.defineProperty(user, "name", {
//     writable: false
// });

// user.name = "Prince";

// console.log(user.name); // John




//? B. enumerable: false — Hides the property from enumeration

// const person = { name: "John" };

// Object.defineProperty(person, "age", {
//     value: 25,
//     enumerable: false
// });

// console.log(Object.keys(person)); // ["name"]
// console.log(person.age);          // 25

//? The property still exists and can be accessed. It simply doesn't appear in Object.keys().



//? C. configurable: false — Prevents reconfiguration

// const person = {};

// Object.defineProperty(person, "id", {
//     value: 101,
//     configurable: false
// });

// delete person.id;

// console.log(person.id); // 101

//? The property cannot be deleted. You also cannot change its descriptor freely.

// Interview tip: writable controls value changes, enumerable controls visibility in enumeration, and configurable controls deletion and reconfiguration.




//* 2. Object.defineProperties()

// Purpose: Defines multiple properties on an object in one operation.

// const person = {};

// Object.defineProperties(person, {
//     name: {
//         value: "Prince",
//         writable: true,
//         enumerable: true
//     },

//     age: {
//         value: 22,
//         writable: true,
//         enumerable: true
//     }
// });

// console.log(person.name); // Prince
// console.log(person.age);  // 22



//? Remember:
// - Object.defineProperty() defines one property.
// - Object.defineProperties() defines multiple properties.





//* 3. Object.getOwnPropertyDescriptor()

//? Purpose: Returns the descriptor of one own property, showing its settings.

// const person = {
//     name: "John"
// };

// console.log(
//     Object.getOwnPropertyDescriptor(person, "name")
// );

// Output:
// {
//     value: "John",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

//? These attributes are true because name was created using an object literal.

//? Interview tip: Use this method when you need to inspect a property's configuration.






//* 4. Object.getOwnPropertyDescriptors()

//? Purpose: Returns descriptors for all of an object's own properties.

// const person = {
//     name: "John",
//     age: 25
// };

// console.log(Object.getOwnPropertyDescriptors(person));

//? It returns an object containing the descriptors for both name and age.

//? Difference:
// - Object.getOwnPropertyDescriptor(obj, "name") → descriptor for one property.
// - Object.getOwnPropertyDescriptors(obj) → descriptors for all own properties.




//* 5. Object.getOwnPropertyNames()

//? Purpose: Returns an array of all an object's own string-keyed property names, including non-enumerable properties.

// const person = {
//     name: "John",
//     age: 25
// };

// Object.defineProperty(person, "secret", {
//     value: "12345",
//     enumerable: false
// });

// console.log(Object.getOwnPropertyNames(person));

// Output: ["name", "age", "secret"]

//? Even though secret is non-enumerable, this method includes it.





//* 6. Object.keys()

//? Purpose: Returns an array of an object's own enumerable string-keyed property names.

// const person = {
//     name: "John",
//     age: 25
// };

// Object.defineProperty(person, "secret", {
//     value: "12345",
//     enumerable: false
// });

// console.log(Object.keys(person));

// Output: ["name", "age"]

//? The secret property is excluded because enumerable is false.

 


 

//* 7. Adding Getters Using Object.defineProperty()

//? You can define a getter without writing it inside the original object.


// const person = {
//     firstName: "John",
//     lastName: "Doe"
// };

// Object.defineProperty(person, "fullName", {
//     get: function() {
//         return this.firstName + " " + this.lastName;
//     }
// });

// console.log(person.fullName);

// Output: John Doe


//? Notice that we use person.fullName, not person.fullName().
//? The getter calculates and returns the full name when the property is accessed.
//? You can also define a setter using the set descriptor.






//* 8. Counter Example

//? Your notes show how getters and setters can control a counter.

// const obj = {
//     counter: 0
// };

// Object.defineProperties(obj, {
//     reset: {
//         get() {
//             this.counter = 0;
//         }
//     },

//     increment: {
//         get() {
//             this.counter++;
//         }
//     },

//     decrement: {
//         get() {
//             this.counter--;
//         }
//     },

//     add: {
//         set(value) {
//             this.counter += value;
//         }
//     },

//     subtract: {
//         set(value) {
//             this.counter -= value;
//         }
//     }
// });

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;

// console.log(obj.counter);

// Output:
// 4
 


//? Important: This example uses getters for actions that change state. Although valid JavaScript, normal methods such as obj.increment() and obj.reset() would usually make the code clearer.




//* 9. Object.getPrototypeOf()

//? Purpose: Returns the prototype of an object.
//? A prototype is an object from which another object can inherit properties and methods.

// const parent = {
//     greet() {
//         return "Hello!";
//     }
// };

// const child = Object.create(parent);

// console.log(Object.getPrototypeOf(child) === parent);
// console.log(child.greet());

// Output:
// true
// Hello!

//? Here:
// - parent contains the greet() method.
// - child inherits access to that method.
// - Object.getPrototypeOf(child) returns parent.

//? Interview tip: JavaScript uses prototypes to implement inheritance.




//* 10. Understanding Prototype Properties and delete

//? The delete operator removes an object's own property. It does not delete a property inherited from its prototype.


//? Example
// const parent = {
//     city: "Dehradun"
// };

// const child = Object.create(parent);

// child.name = "Prince";

// console.log(child.city); // Dehradun

// delete child.city;

// console.log(child.city); // Dehradun


//? Why is city still available?

// Because city belongs to parent, not child. Deleting child.city doesn't remove the inherited property.
// To remove city from the prototype itself:

// delete parent.city;

// console.log(child.city); // undefined


//? Now city is unavailable through child because it has been removed from parent.
//? Important: Deleting a property from a shared prototype affects every object that inherits that property from that prototype.







//! JavaScript Object Protection — Short Interview Notes

//? JavaScript provides methods to control whether an object's properties can be added, deleted, or modified.
 


//* 1. const — Prevents Reassignment

//? Using const does not make an object immutable. It prevents you from assigning a different object to the same variable.

// const person = {
//     name: "Prince",
//     age: 22
// };

// person.age = 23;          // Allowed
// person.city = "Dehradun"; // Allowed
// delete person.name;       // Allowed

// console.log(person);

// Output: { age: 23, city: "Dehradun" }


//? But this is not allowed:
// const person = { name: "Prince" };
// person = { name: "Rahul" }; // TypeError

// Remember: const protects the variable binding, not the object's properties.






//* 2. Object.preventExtensions()

//? Purpose: Prevents adding new properties to an existing object.

// const person = {
//     name: "Prince",
//     age: 22
// };

// Object.preventExtensions(person);

// person.age = 23;          // Allowed
// person.city = "Dehradun"; // Not allowed
// delete person.name;       // Allowed

// console.log(person);

// Output in non-strict mode:
// { age: 23 }

//? Explanation:
// - Adding properties: ❌
// - Modifying existing properties: ✅
// - Deleting existing properties: ✅
// In strict mode, attempting to add a property throws a TypeError.


//* What about arrays?
// const fruits = ["Apple", "Mango"];

// Object.preventExtensions(fruits);

// fruits.push("Banana"); // TypeError

// push() fails because it needs to add a new array index.




//* 3. Object.isExtensible()

//? Purpose: Checks whether new properties can be added to an object.

// const person = { name: "Prince" };

// console.log(Object.isExtensible(person));

// Object.preventExtensions(person);

// console.log(Object.isExtensible(person));

// Output:
// true
// false

//? Remember:
// - true: The object can be extended.
// - false: The object cannot be extended.




//* 4. Object.seal()

//? Purpose: Prevents adding or deleting properties, but allows modifying existing writable properties.

// const person = {
//     name: "Prince",
//     age: 22
// };

// Object.seal(person);

// person.age = 23;          // Allowed
// person.city = "Dehradun"; // Not allowed
// delete person.name;       // Not allowed

// console.log(person);

// Output in non-strict mode: { name: "Prince", age: 23 }


 

//* 5. Object.isSealed()

//? Purpose: Checks whether an object is sealed.

// const person = { name: "Prince" };

// console.log(Object.isSealed(person));

// Object.seal(person);

// console.log(Object.isSealed(person));

// Output:
// false
// true

//? Remember: Object.isSealed() checks the object's status; it does not seal the object itself.




//* 6. Object.freeze()

//? Purpose: Prevents adding, deleting, or modifying existing own data properties.

// const person = {
//     name: "Prince",
//     age: 22
// };

// Object.freeze(person);

// person.age = 23;          // Not allowed
// person.city = "Dehradun"; // Not allowed
// delete person.name;       // Not allowed

// console.log(person);

// Output in non-strict mode: { name: "Prince", age: 22 }

//? In strict mode, these invalid operations generally throw a TypeError.
 


//! Important: Freeze is shallow

// const user = {
//     name: "Prince",
//     address: {
//         city: "Dehradun"
//     }
// };

// Object.freeze(user);

// user.address.city = "Delhi";

// console.log(user.address.city);

// Output:
// Delhi

//? Why? Because Object.freeze() freezes only the outer object. The nested address object is still mutable.




//* 7. Object.isFrozen()

//? Purpose: Checks whether an object is frozen.

// const person = { name: "Prince" };

// console.log(Object.isFrozen(person));

// Object.freeze(person);

// console.log(Object.isFrozen(person));

// Output:
// false
// true

//? Remember: Object.isFrozen() checks the status; Object.freeze() applies the protection.






//! JavaScript Object Prototypes (Simple Explanation)


//* 1. What is a Prototype?

//? A prototype is an object from which another object can inherit properties and methods.


//? For example:
// - Arrays inherit methods from Array.prototype.
// - Dates inherit methods from Date.prototype.
// - Most built-in objects ultimately inherit from Object.prototype.

// const numbers = [10, 20, 30];

// console.log(numbers.toString());

// Output:
// 10,20,30

//? The array can use toString() because it inherits that method through its prototype chain.



//! Prototype Chain

// numbers
//    ↓
// Array.prototype
//    ↓
// Object.prototype
//    ↓
// null

//? This is how JavaScript looks for properties and methods when they aren't found directly on an object.



//* 2. Adding Properties to a Constructor

//? Consider this constructor function:

// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// const father = new Person("John", "Doe");
// const mother = new Person("Sally", "Rally");

//? Each object has its own firstName and lastName properties.



//!  Adding a property directly to the constructor

// Person.nationality = "English";

// console.log(Person.nationality); // English
// console.log(father.nationality); // undefined

//? Why? Because nationality is a property of the Person constructor function itself. It is not automatically available on instances created using new Person().



//* Adding a property to every instance

// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.nationality = "English";
// }

// const father = new Person("John", "Doe");

// console.log(father.nationality);

// Output: English

//? Here, each new instance gets its own nationality property.



//* 3. Using prototype to Add Properties

//? You can add a property to the constructor's prototype so that its instances can inherit it.

// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// Person.prototype.nationality = "English";

// const father = new Person("John", "Doe");
// const mother = new Person("Sally", "Rally");

// console.log(father.nationality);
// console.log(mother.nationality);

// Output:
// English
// English

//? Both objects can access the same inherited property.

//? Important difference:

// - this.nationality = "English" creates a property on each instance.
// - Person.prototype.nationality = "English" creates one shared property on the prototype.




//* 4. Adding Methods Using prototype

//? You can also add methods to the prototype.


// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }

// Person.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
// };

// const father = new Person("John", "Doe");
// const mother = new Person("Sally", "Rally");

// console.log(father.fullName());
// console.log(mother.fullName());

// Output:
// John Doe
// Sally Rally


//! How does it work?

// 1. JavaScript looks for fullName() on father.
// 2. It doesn't find the method directly on father.
// 3. It looks at Person.prototype.
// 4. It finds fullName() and executes it.
// 5. Inside the method, this refers to the object that called it.


// This approach avoids creating a separate copy of the same method for every instance.





//* 5. Why Should You Avoid Modifying Built-in Prototypes?

//? Avoid adding custom properties or methods to built-in prototypes such as Array.prototype, Object.prototype, and String.prototype.

// For example, avoid:
// Array.prototype.myMethod = function() {
//     console.log("Hello");
// };

//? Modifying built-in prototypes can cause naming conflicts, unexpected behavior, and compatibility problems with other libraries.

//? Best practice: Modify prototypes of constructors you own when necessary, rather than built-in JavaScript prototypes.
