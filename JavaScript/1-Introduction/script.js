/*
! Variable initialized with let
* When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on.
* When reassigning a variable, you do not use the let keyword again.
* Statements end with semicolon(;) 
* The console allows you to print and view JavaScript output. You can send information to the console using console.log()
* When variable names are more than one word, there are specific naming conventions for how you capitalize the words. 
* In JavaScript, the convention to use is camel case.
* Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased.
*/
let testChar = "Hello";
let testCount = 8;

/*
 * An array is a non-primitive data type that can hold a series of values.
 * Non-primitive data types differ from primitive data types in that they can hold more complex data.
 * Primitive data types like strings and numbers can only hold one value at a time.
 * You can access the values inside an array using the index of the value.
 * An index is a number representing the position of the value in the array, starting from 0 for the first value.
 * You can access the value using bracket notation, such as array[0].
 * Arrays are special in that they are considered mutable. This means you can change the value at an index directly.
 * .length property of an array returns the number of elements in the array.
 */
let test = ["Naomi", "Quincy", "CamperChan"];
test[2] = 10;
test[test.length - 2] = 5;

/*
 * A method in JavaScript is a function that's associated with certain values or objects.
 * Arrays have their own methods.
 * The .unshift() method of an array allows you to add a value to the beginning of the array.
 * push() adds the value at the end of the array.
 * Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element.
 */
test.push("freeCodeCamp");
let pushed = test.push();
/* 
 ! .push() returns the new length of the array, after adding the value you give it. 
*/
let popped = test.pop();
/*
 * const variables are special.
 * First, a const variable cannot be reassigned like a let variable.
 * A const variable also cannot be uninitialized.
 */

const character = "#";
const count = 8;
const rows = [];

/*
 * A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
 */
let inverted = true;
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
let result = "";
/*
 * The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
 * Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections).
 * As well as the arguments object, generators produced by generator functions, and user-defined iterables.
 */

for (const row of rows) {
  result += "\n" + row;
}
/*
 * A function is a block of code that can be reused throughout your application.
 * The function keyword tells JavaScript that the name variable is going to be a function. 
 * parameter is a variable that represents a value that is passed into the function when it is used. 
 * A function may have as many, or as few, parameters as you'd like. 
 * Like a for loop, the space between the curly braces is the function body.

 * In order to use a function, you need to call it. 
 * A function call tells your application to run the code from the function wherever you choose to call it. 
 * The syntax for a function call is the function name followed by parentheses.
 * All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.
 */
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

/*
 * Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.
 * The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope.
 * When a variable is in the global scope, a function can access it in its definition.
 
 * Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. 
 * A variable declared inside a function can only be used inside that function. 
 * If you try to access it outside of the function, you get a reference error.
 */

/*
 * A while loop will run over and over again until the condition specified is no longer true.
 * The equality operator == is used to check if two values are equal
 * The equality operator can lead to some strange behavior in JavaScript.
 * For example, "0" == 0 is true, even though one is a string and one is a number.
 * The strict equality operator === is used to check if two values are equal and share the same type.
 * As a general rule, this is the equality operator you should always use.
 * With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.
 * The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type.
 */
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

for (let i = count; i > 0; i--) {}
