//!  JavaScript String Methods

//? A string is a sequence of characters used to store text.

// let str = "Hello World";
// console.log(str);


//! Important concept: Strings are immutable

//? Immutable means you cannot change the original string directly. String methods generally return a new string instead.

// let str = "hello";
// str.toUpperCase();

// console.log(str);

// Output:hello


//? Why? Because toUpperCase() returns a new string. To save the result, assign it to a variable:

// let str = "hello";
// str = str.toUpperCase();

// console.log(str);

// Output:HELLO


//! 1. length

//? Purpose: Returns the number of UTF-16 code units in a string.

//? Syntax: string.length

 
// let str = "JavaScript";
// console.log(str.length);

// Output:10

// Explanation: "JavaScript" contains 10 characters.

// Interview tip: length is a property, not a method. Therefore, we use str.length, not str.length().



//! 2. charAt()

//? Purpose: Returns the character at a specified index.

 
// let str = "JavaScript";

// console.log(str.charAt(0));
// console.log(str.charAt(4));
// console.log(str.charAt(20));

// Output:
// J
// S


// The last result is an empty string because index 20 does not exist.

// Remember: String indexing starts from 0.


//! 3. charCodeAt()

//? Purpose: Returns the UTF-16 code unit of the character at a specified index.

// let str = "ABC";

// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(2));

// Output:
// 65
// 66
// 67

// Explanation:
// - A → 65
// - B → 66
// - C → 67

// Real-world use: Working with character encodings or performing character-level operations.




//! 4. codePointAt()

//? Purpose: Returns the Unicode code point of the character starting at a specified index.

// let str = "ABC";

// console.log(str.codePointAt(0));
// console.log(str.codePointAt(1));

// Output:
// 65
// 66

// For ordinary English letters, codePointAt() and charCodeAt() usually return the same values.

// However, Unicode characters outside the Basic Multilingual Plane can require two UTF-16 code units.

// let emoji = "😀";

// console.log(emoji.length);
// console.log(emoji.charCodeAt(0));
// console.log(emoji.codePointAt(0));

// Output:
// 2
// 55357
// 128512

//! Key difference:

// - charCodeAt() returns a UTF-16 code unit.
// - codePointAt() returns the full Unicode code point when called at the start of a character.



//! 5. concat()

//? Purpose: Joins two or more strings.

// let firstName = "Prince";
// let lastName = "Kumar";

// let fullName = firstName.concat(" ", lastName);

// console.log(fullName);

// Output: Prince Kumar


//? You can achieve the same result using the + operator or a template literal.

// let name = "Prince";
// let city = "Dehradun";

// console.log(`${name} lives in ${city}`);

// Output:Prince lives in Dehradun

//? Interview tip: concat() does not modify the original strings.




//! 6. at()

//? Purpose: Returns the character at a specified index. It also supports negative indexes.

 
// let str = "JavaScript";

// console.log(str.at(0));
// console.log(str.at(4));
// console.log(str.at(-1));
// console.log(str.at(-2));

// Output:
// J
// S
// t
// p

// Explanation:
// - at(0) → first character
// - at(4) → character at index 4
// - at(-1) → last character
// - at(-2) → second-last character

//? Interview question: What is the difference between at() and charAt()?

// let str = "Hello";

// console.log(str.at(-1));
// console.log(str.charAt(-1));

// Output:o

//? at() supports negative indexes, whereas charAt() does not.



//! 7. [] — Bracket Notation

//? Purpose: Accesses a character using its index.

 
// let str = "JavaScript";

// console.log(str[0]);
// console.log(str[4]);
// console.log(str[9]);
// console.log(str[20]);

// Output:
// J
// S
// t
// undefined


//? Important difference:

// - str[20] returns undefined if the index does not exist.
// - str.charAt(20) returns an empty string.
// Bracket notation does not support negative indexing as a way to access characters from the end.


// let str = "Hello";

// console.log(str[-1]);

// Output: undefined

// Use str.at(-1) to access the last character.



//! 8. slice()

//? Purpose: Extracts part of a string and returns it as a new string.

//? Syntax: string.slice(start, end)

//? The end index is excluded

 
// let str = "JavaScript";

// console.log(str.slice(0, 4));
// console.log(str.slice(4, 10));
// console.log(str.slice(4));

// Output:
// Java
// Script
// Script

//? Negative indexes

// let str = "JavaScript";

// console.log(str.slice(-6));
// console.log(str.slice(-6, -3));

// Output:
// Script
// Scr

//? Explanation: Negative indexes count backward from the end of the string.

//? Real-world use: Extracting usernames, file extensions, codes, or parts of text.
 

// let email = "prince@gmail.com";
// console.log(email.slice(email.indexOf("@") + 1));

// Output: gmail.com



//! 9. substring()

//? Purpose: Extracts characters between two indexes.

//? Syntax: string.substring(start, end)


// let str = "JavaScript";
// console.log(str.substring(0, 4));
// console.log(str.substring(4, 10));

// Output:
// Java
// Script

// //? Difference between slice() and substring()

// let str = "JavaScript";
// console.log(str.slice(-6));
// console.log(str.substring(-6));

// Output:
// Script
// JavaScript


//!  Why?

//? - slice(-6) counts from the end.

//? - substring(-6) treats the negative index as 0.

//? Another difference is that substring() swaps the arguments if the first index is greater than the second, whereas slice() generally returns an empty string in that situation.


// let str = "Hello";
// console.log(str.slice(4, 1));
// console.log(str.substring(4, 1));

// Output: ell

//? Interview tip: Prefer slice() when you need negative indexes.




//! 10. substr()

//? Purpose: Extracts a substring using a starting index and a length.

// Syntax: string.substr(start, length)

// Example:

// let str = "JavaScript";
// console.log(str.substr(0, 4));
// console.log(str.substr(4, 6));
// console.log(str.substr(-6, 3));

// Output:
// Java
// Script
// Scr

//! Explanation:

// - substr(0, 4) → starts at index 0, takes 4 code units.
// - substr(4, 6) → starts at index 4, takes 6 code units.
// - substr(-6, 3) → starts 6 code units from the end, takes 3.

//? Important: substr() is a legacy, deprecated feature. Avoid using it in new code. Use slice() or substring() instead.



//! 11. toUpperCase()

//? Purpose: Converts letters to uppercase.

//? Example:

// let str = "Hello JavaScript";
// console.log(str.toUpperCase());

// Output: HELLO JAVASCRIPT

//? Real-world use: Case normalization and formatting text.

// let username = "prince";
// console.log(username.toUpperCase());

// Output: PRINCE


//! 12. toLowerCase()

//? Purpose: Converts letters to lowercase.

//? Example:

// let str = "HELLO JAVASCRIPT";
// console.log(str.toLowerCase());

// Output: hello javascript

// Real-world use: Case-insensitive comparisons.
// let userInput = "ADMIN";
// console.log(userInput.toLowerCase() === "admin");

// Output: true

// Interview tip: toUpperCase() and toLowerCase() return new strings; they do not change the original string.



//! 13. isWellFormed()

//? Purpose: Checks whether a string contains any unpaired UTF-16 surrogate code units.

//? It returns a Boolean: true or false.

//? Example:

// let str1 = "Hello";
// let str2 = "😀";
// let str3 = "\uD800";

// console.log(str1.isWellFormed());
// console.log(str2.isWellFormed());
// console.log(str3.isWellFormed());

// Output:
// true
// true
// false

//? Explanation:

// - "Hello" is well-formed.
// - "😀" is well-formed because its surrogate pair is valid.
// - "\uD800" contains an unpaired high surrogate, so it is not well-formed.

//? Interview tip: isWellFormed() checks Unicode string validity; it does not check whether a sentence is grammatically correct.


//! 14. toWellFormed()

//? Purpose: Returns a string in which unpaired surrogates are replaced with the Unicode replacement character � (U+FFFD).

//? Example:

// let str = "Hello \uD800 World";

// console.log(str.isWellFormed());

// let fixed = str.toWellFormed();

// console.log(fixed);
// console.log(fixed.isWellFormed());

// Output:
// false
// Hello � World
// true


//? Explanation: The invalid surrogate is replaced with �, making the returned string well-formed.

//? Difference:

// - isWellFormed() checks the string.
// - toWellFormed() returns a corrected string.


//! 15. trim()

//? Purpose: Removes whitespace from both the beginning and end of a string.

//? Example:

// let str = "   Hello World   ";
// console.log(str.trim());

// Output:
// Hello World

//? Real-world use: Cleaning user input.

// let username = "   prince   ";
// console.log(username.trim());

// Output:
// prince

//? Important: trim() does not remove spaces between words.

// console.log("Hello   World".trim());

// Output:
// Hello   World



//! 16. trimStart()

//? Purpose: Removes whitespace from the beginning of a string only.

//? Example:

// let str = "   Hello World   ";
// console.log(str.trimStart());

// Output:
// Hello World   

// The trailing spaces remain.

//? Note: trimLeft() is an alias for trimStart().



//! 17. trimEnd()

//? Purpose: Removes whitespace from the end of a string only.

//? Example:

// let str = "   Hello World   ";
// console.log(str.trimEnd());

// Output:
//    Hello World

//* The leading spaces remain.

//? Note: trimRight() is an alias for trimEnd().


//! 18. padStart()

//? Purpose: Adds characters to the beginning of a string until it reaches the specified length.

//? Syntax: string.padStart(targetLength, padString)

//? Example:

// let str = "5";

// console.log(str.padStart(3, "0"));
// console.log(str.padStart(5, "*"));

// Output:
// 005
// ****5


//* Explanation:

// - padStart(3, "0") adds zeros until the total length is 3.
// - padStart(5, "*") adds asterisks until the total length is 5.

// Real-world use: Formatting numbers with leading zeros.

// let invoiceNumber = "42";
// console.log(invoiceNumber.padStart(5, "0"));

// Output:
// 00042

// Important: padStart() returns a string, not a number.



//! 19. padEnd()

//? Purpose: Adds characters to the end of a string until it reaches the specified length.

//* Example:

// let str = "5";
// console.log(str.padEnd(3, "0"));
// console.log(str.padEnd(6, "*"));

// Output:
// 500
// 5*****


//* Real-world use: Formatting text or creating simple aligned output.

// let name = "Prince";
// console.log(name.padEnd(10, ".") + "Developer");

// Output:
// Prince....Developer


//! 20. repeat()

//? Purpose: Repeats a string a specified number of times.

//* Example:

// let str = "Hi! ";
// console.log(str.repeat(3));

// Output:
// Hi! Hi! Hi! 

//? Real-world use: Creating separators or repeated patterns.

// console.log("-".repeat(10));
// console.log("Hello ".repeat(2));

// Output:
// ----------
// Hello Hello 

//* Important:
// - repeat(0) returns an empty string.
// - A negative number throws a RangeError.
// - The repeat count must be finite.



//! 21. replace()

//? Purpose: Replaces the first match of a search value with a replacement value.

//? Example:

// let str = "I like Java. Java is powerful.";
// console.log(str.replace("Java", "JavaScript"));

// Output:
// I like JavaScript. Java is powerful.
// Only the first occurrence is replaced.


//! Using a regular expression

// let str = "cat cat cat";

// console.log(str.replace(/cat/, "dog"));

// Output:
// dog cat cat

//* A regular expression without the g flag replaces only the first match.

//* Real-world use: Replacing a word, fixing a value, or formatting text.



//! 22. replaceAll()

//? Purpose: Replaces all matches of a search string.

//* Example:

// let str = "cat cat cat";
// console.log(str.replaceAll("cat", "dog"));

// Output:
// dog dog dog

//! Difference between replace() and replaceAll():

// let str = "apple apple apple";

// console.log(str.replace("apple", "orange"));
// console.log(str.replaceAll("apple", "orange"));

// Output:
// orange apple apple
// orange orange orange

//* Important: When using a regular expression with replaceAll(), the expression must have the global (g) flag.

// console.log("cat cat".replaceAll(/cat/g, "dog"));

// Output:
// dog dog



//! 23. split()

//? Purpose: Splits a string into an array using a separator.

//? Syntax: string.split(separator, limit)

//* Example 1: Split by spaces

// let str = "I love JavaScript";
// console.log(str.split(" "));

// Output:
// ["I", "love", "JavaScript"]

//* Example 2: Split by commas

// let str = "apple,banana,mango";
// console.log(str.split(","));

// Output:
// ["apple", "banana", "mango"]

//* Example 3: Split into individual UTF-16 code units

// let str = "Hello";
// console.log(str.split(""));

// Output:
// ["H", "e", "l", "l", "o"]

//*  Important: Splitting an emoji using split("") can separate its surrogate pair. To iterate over Unicode code points, use the spread syntax:

// console.log([..."😀"]);

// Output:
// ["😀"]

//* Example 4: Using the limit

// let str = "apple,banana,mango";
// console.log(str.split(",", 2));

// Output:
// ["apple", "banana"]

//? Real-world use: Converting comma-separated text into an array.



//! Most Important Interview Questions 

//* 1. Are JavaScript strings mutable or immutable?
// Answer: JavaScript strings are immutable. String methods return new strings instead of modifying the original string.

//* 2. What is the difference between slice() and substring()?
// Answer: slice() supports negative indexes. substring() treats negative indexes as zero and swaps the indexes if the first is greater than the second.

//* 3. What is the difference between replace() and replaceAll()?
// Answer: replace() replaces the first matching occurrence when searching with a string. replaceAll() replaces every occurrence of that string.

//* 4. What is the difference between charAt() and at()?
// Answer: at() supports negative indexes, while charAt() does not.

//* 5. What is the difference between split() and concat()?
// Answer: split() converts a string into an array. concat() joins strings and returns a string.

//* 6. What is the difference between trim(), trimStart(), and trimEnd()?

//* Answer:
// - trim() removes whitespace from both ends.
// - trimStart() removes whitespace from the beginning.
// - trimEnd() removes whitespace from the end.

//* 7. Does length count every visible character?
// Answer: Not always. JavaScript's length property counts UTF-16 code units. For example, "😀".length is 2, even though it appears as one emoji.


//! 1. indexOf()

//? The indexOf() method returns the index of the first occurrence of a specified value in a string.

//? If the value is not found, it returns -1.

//* Example 1: Find a character

// let str = "Hello JavaScript";

// console.log(str.indexOf("J"));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("Python"));

// Output:
// 6
// 8
// -1


//* Explanation:
// - "J" is at index 6.
// - The first "a" is at index 8.
// - "Python" does not exist, so the result is -1.


//* Example 2: Find a word

// let str = "I love JavaScript. JavaScript is easy.";

// console.log(str.indexOf("JavaScript"));
// console.log(str.indexOf("easy"));

// Output:
// 7
// 30


//* Example 3: Start searching from a particular index

// let str = "apple apple apple";

// console.log(str.indexOf("apple"));
// console.log(str.indexOf("apple", 1));

// Output:
// 0
// 6

//? The second argument specifies where to start searching. Here, the search starts at index 1, so the first occurrence at index 0 is skipped.
//? Real-world use: Finding a word in a sentence or checking where a character appears.
//? Interview tip: indexOf() returns the index of the first occurrence, not true or false.



//! 2. lastIndexOf()

//? The lastIndexOf() method returns the index of the last occurrence of a specified value.
//? If the value is not found, it returns -1.

//* Example

// let str = "apple apple apple";

// console.log(str.indexOf("apple"));
// console.log(str.lastIndexOf("apple"));

// Output:
// 0
// 12

//? Explanation:

// - indexOf() finds the first "apple" at index 0.
// - lastIndexOf() finds the last "apple" at index 12.

//* Example with a character

// let str = "JavaScript";
// console.log(str.lastIndexOf("a"));
// console.log(str.lastIndexOf("z"));

// Output:
// 3
// -1

//? The last "a" occurs at index 3. The character "z" is not present.

//! Real-world example: Find the file extension

// let file = "resume.pdf";

// console.log(file.lastIndexOf("."));

// Output:
// 6

// This helps locate the final dot in a filename.

// Interview tip: indexOf() searches from the beginning, while lastIndexOf() searches backward from the end.


//! 3. search()

//? The search() method searches a string for a match and returns the index of the first match.
//? It commonly uses a regular expression.

// If no match is found, it returns -1.

//* Example 1: Search for a word

// let str = "I love JavaScript";
// console.log(str.search("JavaScript"));
// console.log(str.search("Python"));

// Output:
// 7
// -1

//* Example 2: Search using a regular expression

// let str = "My age is 25";
// console.log(str.search(/[0-9]/));

// Output:
// 10

//* Explanation: /[0-9]/ searches for the first digit from 0 to 9. The first digit, 2, is at index 10.


//* Example 3: Case-insensitive search

// let str = "I love JAVASCRIPT";
// console.log(str.search(/javascript/i));

// Output:
// 7

//* Here, i means case-insensitive matching.

//* Real-world use: Finding patterns such as digits, letters, or specific text.

//* Interview tip: search() returns an index. It does not return the matched text.



//! 4. match()

//? The match() method searches a string using a regular expression and returns the matching result.
//? Its output depends on whether the regular expression uses the global (g) flag.

//* Example 1: Find the first match

// let str = "I love JavaScript";
// console.log(str.match(/JavaScript/));

// Output:
// ["JavaScript"]

//? The returned value is actually an array containing the match and additional properties, such as its index.

//* Example 2: Find all matches

// let str = "cat dog cat bird cat";
// console.log(str.match(/cat/g));

// Output:
// ["cat", "cat", "cat"]

//? The g flag means global matching, so all occurrences are returned.


//* Example 3: Find all digits

// let str = "My phone number is 98765";
// console.log(str.match(/[0-9]/g));

// Output:
// ["9", "8", "7", "6", "5"]

//* Example 4: No match found

// let str = "Hello World";
// console.log(str.match(/Python/));

// Output:
// null

//? Real-world use: Extracting digits, words, or patterns from text.

//? Interview tip:
// - match() without g returns details about the first match.
// - match() with g returns an array of all matches, or null if none are found.




//! 5. matchAll()
 
//? The matchAll() method returns an iterator containing all matches of a regular expression.
//? It is useful when you need to find multiple matches and access details about each match.

//? Important: matchAll() requires a global (g) regular expression.

//* Example 1: Find all occurrences

// let str = "cat dog cat bird cat";
// let result = str.matchAll(/cat/g);

// console.log([...result]);

// Output:
// [
//   ["cat"],
//   ["cat"],
//   ["cat"]
// ]

//? The spread operator (...) converts the iterator into an array.


//* Example 2: Get the index of each match

// let str = "cat dog cat bird cat";
// let result = [...str.matchAll(/cat/g)];

// result.forEach(match => {
//     console.log(match[0], match.index);
// });

// Output:
// cat 0
// cat 8
// cat 17

//? Explanation:
// - match[0] contains the matched text.
// - match.index contains its starting index.


//* Example 3: Extract numbers and their positions

// let str = "Age 25, marks 90";
// let result = [...str.matchAll(/\d+/g)];

// result.forEach(match => {
//     console.log(match[0], match.index);
// });

// Output:
// 25 4
// 90 14

//? Here, \d+ matches one or more digits.

//? Real-world use: Extracting multiple values and their positions from text.

//? Interview tip: matchAll() returns an iterator, while match() returns an array or null for a global search.


//! 6. includes()
 
//? The includes() method checks whether a string contains a specified value.
//? It returns a Boolean: true or false.

//* Example 1

// let str = "I love JavaScript";
// console.log(str.includes("JavaScript"));
// console.log(str.includes("Python"));

// Output:
// true
// false

//* Example 2: Case sensitivity

// let str = "Hello World";
// console.log(str.includes("Hello"));
// console.log(str.includes("hello"));

// Output:
// true
// false

//? The search is case-sensitive.


//* Example 3: Start searching from a particular index

// let str = "apple banana mango";
// console.log(str.includes("banana"));
// console.log(str.includes("apple", 1));

// Output:
// true
// false

//? The second argument specifies the index at which searching begins. Since "apple" occurs before index 1, the second result is false.


//! Real-world use: Checking whether a message contains a particular word.

// let message = "Your payment was successful";

// if (message.includes("successful")) {
//     console.log("Payment completed");
// }

// Output:
// Payment completed

//? Interview tip: Use includes() when you only need to know whether a string contains something, rather than its position.


//! 7. startsWith()
 
//? The startsWith() method checks whether a string begins with a specified value.
//? It returns true or false.


//* Example 1

// let str = "JavaScript is easy";
// console.log(str.startsWith("JavaScript"));
// console.log(str.startsWith("Python"));

// Output:
// true
// false



//* Example 2: Case sensitivity

// let str = "Hello World";

// console.log(str.startsWith("Hello"));
// console.log(str.startsWith("hello"));

// Output:
// true
// false


//* Example 3: Start searching from an index

// let str = "Hello JavaScript";
// console.log(str.startsWith("JavaScript", 6));

// Output:
// true

//? The second argument specifies the position from which the string should be checked.


//! Real-world use: Checking URL prefixes or filename prefixes.

// let url = "https://example.com";
// console.log(url.startsWith("https://"));

// Output:
// true

//? Interview tip: startsWith() checks the beginning of a string, not whether the value appears anywhere in it.



//! 8. endsWith()

// The endsWith() method checks whether a string ends with a specified value.
// It returns true or false.

//* Example 1

// let str = "Hello JavaScript";

// console.log(str.endsWith("JavaScript"));
// console.log(str.endsWith("Hello"));

// Output:
// true
// false


//* Example 2: Check a file extension

// let file = "resume.pdf";

// console.log(file.endsWith(".pdf"));
// console.log(file.endsWith(".docx"));

// Output:
// true
// false


//* Example 3: Check a string ending at a specified length

// let str = "JavaScript";
// console.log(str.endsWith("Java", 4));

// Output:
// true

//? The second argument specifies the length of the string to consider. Here, only "Java" is considered.
//? Real-world use: Checking file extensions or whether a message ends with a particular suffix.
//? Interview tip: startsWith() checks the beginning; endsWith() checks the end.


