/*
! Variable initialized with let
* When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on.
* When reassigning a variable, you do not use the let keyword again.
* Statements end with semicolon(;) 
*/

let character = 'Hello';
/*
* The console allows you to print and view JavaScript output. You can send information to the console using console.log()
*/
console.log(character);
character='world';
console.log(character);
/*
* When variable names are more than one word, there are specific naming conventions for how you capitalize the words. 
* In JavaScript, the convention to use is camel case.
* Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased
*/
let secondCharacter;