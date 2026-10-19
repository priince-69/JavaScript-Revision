//! length -->  The length property returns the number of elements in an array.

// let arr = [10, 20, 30, 40, 80];
// console.log(arr.length);


   
//! toString() -->  The toString() method converts an array into a comma-separated string.
// Remember: It returns a string and does not modify the original array.

// let arr = [10, 20, 30];
// console.log(arr)
// console.log(arr.toString());



//!  join() -->  The join() method combines array elements into a string using the specified separator.

// let arr = ["HTML", "CSS", "JavaScript"];
// console.log(arr.join(" - "));


  
//! push() -->  The push() method adds one or more elements to the end of an array and returns its new length.
// Remember: push() adds elements at the end.

// let arr = [10, 20];
// arr.push(30);
// a.push(70, 80, 90);
// console.log(arr);



//!  pop() --> The pop() method removes and returns the last element of an array.
// Remember: pop() modifies the original array.

// let arr = [10, 20, 30];
// console.log(arr.pop()); 
// console.log(arr);




//! unshift() -->  The unshift() method adds one or more elements to the beginning of an array.
// Remember: unshift() adds elements at the beginning.

// let arr = [20, 30];
// arr.unshift(10);
// a.unshift(10, 20);
// console.log(arr);




//! shift() -->  The shift() method removes and returns the first element of an array.
// Remember: shift() modifies the original array.

// let arr = [10, 20, 30];
// console.log(arr.shift()); 
// console.log(arr);


 

//! concat() -->  The concat() method combines two or more arrays and returns a new array.
// Remember: splice(start, deleteCount, items) can remove existing elements and insert new ones.
// Remember: concat() returns a new array.

// let a = [1, 2], b = [3, 4];
// console.log(a.concat(b));



 
//! slice() -->  The slice() method returns a shallow copy of a selected portion of an array without modifying the original array.
// Remember: The starting index is included, but the ending index is excluded.
// array.slice(start, end);

// let arr = [10, 20, 30, 40];
// console.log(arr.slice(1, 3));



//! toSpliced() -->  Definition: Adds, removes, or replaces elements and returns a new array without modifying the original array.
// Remember: toSpliced() is the non-mutating alternative to splice(). It is a modern method and may not work in some older environments.

// let numbers = [10, 20, 30, 40];

// let result = numbers.toSpliced(1, 2, 99);

// console.log(result);
// console.log(numbers);

 
//! splice() -->  The splice() method adds, removes, or replaces elements in an array and modifies the original array.
// array.splice(start, deleteCount, item1, item2, ...);


// let arr = [10, 20, 30];
// arr.splice(1, 1, 25);
// console.log(arr);



 
//! flat() -->  The flat() method creates a new array by flattening nested arrays to the specified depth. Its default depth is 1.
// Remember: flat() removes one level by default. Use flat(Infinity) to flatten all levels.

// array.flat(depth);
// - depth: Specifies how many nested levels to flatten.


// let arr = [1, [2, [3, 4]]];
// console.log(arr.flat(2));





//! flatMap() -->  The flatMap() method maps each element and flattens the result by one level.

// let arr = [1, 2, 3];
// console.log(arr.flatMap(x => [x, x * 2]));




//! map()  -->  The map() method creates a new array by applying a callback function to every element.

// let arr = [1, 2, 3];
// console.log(arr.map(x => x * 2));




//! forEach() --> The forEach() method executes a callback function for each array element. It does not return a new array.

// let arr = [10, 20, 30];
// arr.forEach(x => console.log(x));




//! filter()  -->  The filter() method creates a new array containing elements that satisfy a specified condition.

// let arr = [10, 15, 20, 25];
// console.log(arr.filter(x => x > 15));




//! includes()  -->  The includes() method checks whether an array contains a specified value and returns true or false.

// let arr = [10, 20, 30];
// console.log(arr.includes(20));

// let fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits.includes("Mango"));
// console.log(fruits.includes("Orange"));


//! indexOf() -->  is a JavaScript method used to find the index of a specified element in an array or the position of a specified value in a string. It returns -1 if the value is not found.
 

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits.indexOf("Mango"));
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.indexOf("Grapes"));



//! lastIndexOf() --> Definition: lastIndexOf() returns the index of the last occurrence of a specified element.

// let arr = [10, 20, 30, 20, 40];
// console.log(arr.lastIndexOf(20));


//! find() --> The find() method returns the first element that satisfies a condition. It returns undefined if no element matches.

// let arr = [10, 20, 30, 40];
// console.log(arr.find(x => x > 20));




//! findIndex() -->  The findIndex() method returns the index of the first element that satisfies a condition, or -1 if none matches.

// let arr = [10, 20, 30, 40];
// console.log(arr.findIndex(x => x > 20));

// let numbers = [10, 15, 20, 25, 30];
// let result = numbers.findIndex(num => num > 20);
// console.log(result);



//! findLast() -->   Definition: findLast() searches an array from right to left and returns the last element that satisfies a condition.

// let numbers = [10, 15, 20, 25, 30];
// let result = numbers.findLast(num => num > 20);
// console.log(result);



//! findLastIndex()  --> Definition: findLastIndex() searches from right to left and returns the index of the last element that satisfies a condition. If no element matches, it returns -1.

// let numbers = [10, 15, 20, 25, 30];
// let result = numbers.findLastIndex(num => num > 20);
// console.log(result);



//! some() -->  The some() method checks whether at least one array element satisfies a condition.

// let arr = [10, 20, 30];
// console.log(arr.some(x => x > 25));




//! every()  -->  The every() method checks whether all array elements satisfy a condition.


// let arr = [10, 20, 30];
// console.log(arr.every(x => x > 5));




//! reduce()  -->  The reduce() method processes array elements to produce a single accumulated result.

// let arr = [10, 20, 30];
// console.log(arr.reduce((sum, x) => sum + x, 0));




//! fill() -->   The fill() method replaces array elements with a specified value within a selected range. It modifies the original array.
// array.fill(value, start, end);

// - value: The value to fill into the array.
// - start: The index where filling begins (included). Default is 0.
// - end: The index where filling stops (excluded). Default is the array length.

// let numbers = [1, 2, 3, 4, 5];
// numbers.fill(0);
// console.log(numbers);




//! sort() -->  The sort() method sorts array elements in place. Use a comparison function to sort numbers numerically.
// Remember: By default, sort() compares elements as strings. Use (a, b) => a - b to sort numbers in ascending order.

// Example: Numeric Sorting
// let arr = [30, 5, 20, 10];
// arr.sort((a, b) => a - b);
// console.log(arr);


// Example: Alphabetical Sorting
// let fruits = ["Mango", "Apple", "Banana"];
// fruits.sort();
// console.log(fruits);


 
//! toSorted() -->   Definition: The toSorted() method sorts an array and returns a new array without modifying the original array.

// Remember: toSorted() is the non-mutating alternative to sort().

// let numbers = [40, 5, 100, 20];

// let result = numbers.toSorted((a, b) => a - b);

// console.log(result);
// console.log(numbers);


//! reverse() -->  The reverse() method reverses the order of elements in an array and modifies the original array.
// Remember: reverse() reverses the existing order; it does not automatically sort the elements.

// let arr = [10, 20, 30];
// arr.reverse();
// console.log(arr);




//! toReversed() -->   Definition: The toReversed() method reverses an array and returns a new array without modifying the original array.
// Remember: toReversed() is the non-mutating alternative to reverse().

// let numbers = [10, 20, 30, 40];

// let result = numbers.toReversed();
// console.log(result);
// console.log(numbers);




//! Sorting Objects
// Definition: We can

// Example: Sort Students by Age

// let students = [
//   { name: "Rahul", age: 22 },
//   { name: "Aman", age: 19 },
//   { name: "Priya", age: 21 }
// ];

// students.sort((a, b) => a.age - b.age);
// console.log(students);


// Output:
// [
//   { name: "Aman", age: 19 },
//   { name: "Priya", age: 21 },
//   { name: "Rahul", age: 22 }
// ]

// Remember: a.age - b.age sorts objects by age in ascending order




//! Math.min()  -->  Definition: Math.min() returns the smallest number among the supplied arguments.

// console.log(Math.min(10, 5, 30, 2));




//!  Math.max()  -->  Definition: Math.max() returns the largest number among the supplied arguments.

// let numbers = [10, 5, 30, 2];

// console.log(Math.max(...numbers));



//! values -->  The values() method returns an iterator containing the array's element values.

// let arr = ["HTML", "CSS", "JavaScript"];
// console.log([...arr.values()]);




 
//! delete  --> The delete operator is a JavaScript operator, not an array method. It removes an object's property, but using it on an array element leaves a hole without changing the array's length.
// For removing array elements, splice() is generally more appropriate because it also shifts the remaining elements.

// Remember: delete leaves an empty slot. To remove an element and shift the remaining elements, use splice().

// let arr = [10, 20, 30];
// delete arr[1];
// console.log(arr); 
// console.log(arr.length);



//! at() -->  is an array method used to access an element at a specific index. It supports both positive and negative indexes.

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits.at(0));
// console.log(fruits.at(2));
// console.log(fruits.at(-1));



//! copyWithin() --> is an array method that copies elements from one part of an array to another position within the same array. It modifies the original array.
// Remember: copyWithin(target, start, end) copies elements beginning at start into the position target. The end index is excluded.


// array.copyWithin(target, start, end);


// - target: The index where copied elements will be placed.
// - start: The index from which copying begins.
// - end: The index where copying stops (excluded).
 
// let numbers = [10, 20, 30, 40, 50];
// numbers.copyWithin(1, 3);
// console.log(numbers);





//! toSpliced() --> is an array method used to add, remove, or replace elements in an array without modifying the original array. It returns a new array.

// It is the non-mutating alternative to splice().
 
// array.toSpliced(start, deleteCount, item1, item2);


// - start: The index where the operation begins.
// - deleteCount: The number of elements to remove.
// - item1, item2: The new elements to insert (optional).

// Example 1: Remove Elements

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// let result = fruits.toSpliced(1, 2);
// console.log(result);
// console.log(fruits);


// Example 2: Add an Element
// let numbers = [10, 20, 40];

// let result = numbers.toSpliced(2, 0, 30);

// console.log(result);



//! isArray() -->  Definition: Array.isArray() checks whether a value is an array and returns true or false.
// Remember: Use Array.isArray() instead of typeof to check whether a value is an array.

// console.log(Array.isArray([10, 20]));
// console.log(Array.isArray("Hello"));





//? JavaScript Array Iteration Methods


//!  1. for...of

// Definition: Used to access array values one by one.

// let arr = [10, 20, 30];

// for (let num of arr) {
//   console.log(num);
// }


// Output:
// 10
// 20
// 30



//!  2. for...in

// Definition: Used to access the enumerable property keys of an object. With arrays, it gives the indexes.

// let arr = [10, 20, 30];

// for (let index in arr) {
//   console.log(index);
// }


// Output:
// 0
// 1
// 2


// Remember: Prefer for...of for array values and for...in for object keys.



//!  3. forEach()

// Definition: Executes a callback function once for each array element.

// let arr = [10, 20, 30];

// arr.forEach(num => {
//   console.log(num);
// });


// Output:
// 10
// 20
// 30


// Remember: forEach() returns undefined and cannot be stopped using break.



//!  4. map()

// Definition: Creates a new array by transforming each element of the original array.

// let arr = [1, 2, 3];
// let result = arr.map(num => num * 2);
// console.log(result);


// Output:
// [2, 4, 6]


// Remember: Use map() when you want a new array containing transformed values.



//!  5. flatMap()

// Definition: Transforms each element and flattens the resulting array by one level.

// let arr = [1, 2, 3];
// let result = arr.flatMap(num => [num, num * 2]);
// console.log(result);


// Output:
// [1, 2, 2, 4, 3, 6]


// Remember: flatMap() combines mapping and one-level flattening.




//!  6. filter()

// Definition: Creates a new array containing only the elements that satisfy a condition.

// let arr = [10, 15, 20, 25, 30];
// let result = arr.filter(num => num > 20);
// console.log(result);


// Output:
// [25, 30]


// Remember: filter() returns all matching elements, not just the first one.





//!  7. reduce()

// Definition: Processes array elements to produce a single result, such as a sum or total.

// let arr = [10, 20, 30];
// let result = arr.reduce((total, num) => total + num, 0);
// console.log(result);


// Output:
// 60


// Simple explanation: total stores the running result, num is the current element, and 0 is the initial value.



//!  8. reduceRight()

// Definition: Works like reduce(), but processes elements from right to left.

// let arr = ["A", "B", "C"];
// let result = arr.reduceRight((acc, value) => acc + value, "");
// console.log(result);


// Output:
// CBA


// Remember: reduce() moves left to right; reduceRight() moves right to left.


//!  9. every()

// Definition: Checks whether every array element satisfies a condition. Returns true or false.

// let arr = [10, 20, 30];
// console.log(arr.every(num => num > 5));


// Output:
// true

// All numbers are greater than 5, so the result is true.



//!  10. some()

// Definition: Checks whether at least one array element satisfies a condition.

// let arr = [10, 20, 30];
// console.log(arr.some(num => num > 25));


// Output:
// true


// At least one number, 30, is greater than 25.




//!  11. Array.from()

// Definition: Creates a new array from an iterable or array-like object.

// let name = "CODE";
// let result = Array.from(name);
// console.log(result);


// Output:
// ["C", "O", "D", "E"]


// Remember: Array.from() is useful for converting strings, Sets, and other supported values into arrays.



//!  12. keys()

// Definition: Returns an iterator containing an array's indexes.

// let fruits = ["Apple", "Mango", "Banana"];
// console.log([...fruits.keys()]);


// Output:
// [0, 1, 2]

// Remember: keys() gives indexes, not the values themselves.



//!  13. entries()

// Definition: Returns an iterator containing key-value pairs for an array.

// let fruits = ["Apple", "Mango"];
// console.log([...fruits.entries()]);


// Output:
// [[0, "Apple"], [1, "Mango"]]

// Each pair contains the index followed by the value.



//!  14. with()

// Definition: Returns a new array with the element at a specified index replaced, leaving the original array unchanged.

// let arr = [10, 20, 30];
// let result = arr.with(1, 99);

// console.log(result);
// console.log(arr);


// Output:
// [10, 99, 30]
// [10, 20, 30]


// Remember: with() replaces an element without modifying the original array.



//!  15. Spread syntax (...)

// Definition: Expands an iterable's elements or an object's properties into another array or object.

// let arr1 = [10, 20];
// let arr2 = [30, 40];

// let result = [...arr1, ...arr2];

// console.log(result);


// Output:
// [10, 20, 30, 40]


// Remember: Spread is useful for combining arrays and making shallow copies.



//!  16. Rest parameters (...)

// Definition: Collects multiple function arguments into a single array.

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(10, 20, 30));


// Output:
// 60


// Remember: Spread expands values; rest collects values. The same ... syntax is used for both, depending on where it appears.