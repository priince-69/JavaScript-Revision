//! length -->  The length property returns the number of elements in an array.

// let arr = [10, 20, 30, 40, 80];
// console.log(arr.length);


   
//! toString() -->  The toString() method converts an array into a comma-separated string.

// let arr = [10, 20, 30];
// console.log(arr)
// console.log(arr.toString());



//!  join() -->  The join() method combines array elements into a string using the specified separator.

// let arr = ["HTML", "CSS", "JavaScript"];
// console.log(arr.join(" - "));


  
//! push() -->  The push() method adds one or more elements to the end of an array and returns its new length.

// let arr = [10, 20];
// arr.push(30);
// console.log(arr);



//!  pop() --> The pop() method removes and returns the last element of an array.

// let arr = [10, 20, 30];
// console.log(arr.pop()); 
// console.log(arr);




//! unshift() -->  The unshift() method adds one or more elements to the beginning of an array.

// let arr = [20, 30];
// arr.unshift(10);
// console.log(arr);




//! shift() -->  The shift() method removes and returns the first element of an array.

// let arr = [10, 20, 30];
// console.log(arr.shift()); 
// console.log(arr);


 

//! concat() -->  The concat() method combines two or more arrays and returns a new array.

// let a = [1, 2], b = [3, 4];
// console.log(a.concat(b));



 
//! slice() -->  The slice() method returns a shallow copy of a selected portion of an array without modifying the original array.
// array.slice(start, end);

// let arr = [10, 20, 30, 40];
// console.log(arr.slice(1, 3));



 
//! splice() -->  The splice() method adds, removes, or replaces elements in an array and modifies the original array.
// array.splice(start, deleteCount, item1, item2, ...);


// let arr = [10, 20, 30];
// arr.splice(1, 1, 25);
// console.log(arr);



 
//! flat() -->  The flat() method creates a new array by flattening nested arrays to the specified depth. Its default depth is 1.
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



//! indexOf() -->  is a JavaScript method used to find the index of a specified element in an array or the position of a specified value in a string. It returns -1 if the value is not found.
 

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits.indexOf("Mango"));
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.indexOf("Grapes"));




//! find() --> The find() method returns the first element that satisfies a condition. It returns undefined if no element matches.

// let arr = [10, 20, 30, 40];
// console.log(arr.find(x => x > 20));




//! findIndex() -->  The findIndex() method returns the index of the first element that satisfies a condition, or -1 if none matches.

// let arr = [10, 20, 30, 40];
// console.log(arr.findIndex(x => x > 20));




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

// let arr = [30, 5, 20, 10];
// arr.sort((a, b) => a - b);
// console.log(arr);




//! reverse() -->  The reverse() method reverses the order of elements in an array and modifies the original array.

// let arr = [10, 20, 30];
// arr.reverse();
// console.log(arr);



//! values -->  The values() method returns an iterator containing the array's element values.

// let arr = ["HTML", "CSS", "JavaScript"];
// console.log([...arr.values()]);

 
//! delete  --> The delete operator is a JavaScript operator, not an array method. It removes an object's property, but using it on an array element leaves a hole without changing the array's length.
// For removing array elements, splice() is generally more appropriate because it also shifts the remaining elements.

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