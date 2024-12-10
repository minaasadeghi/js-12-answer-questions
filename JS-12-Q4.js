//? Question-4:Explain these things in the new EcmaScript 
//standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring



/* Before ES6, JavaScript only used var to define variables. let and const are new features with different behaviors:
let is used for variables whose value may change.
const is used for variables whose value cannot change.*/
let a = 5;
a = 12; 
const b = 7.1;
// b = 7; //TypeError: Assignment to constant variable.


//Arrow functions provide a shorter way to write functions.
function sum(a , b) {
    return a + b;
} //>>>regular function

const arrowFunc = ((a , b) => a + b);


//template string
//Template strings let us combine variables and strings in an easier way.
const firstName ="Mina";
console.log("Hi everyone! this is " + firstName +".") //>> without using template string
console.log(`Hi everyone! this is ${firstName}.`)// >> using template string


//Destructuring
let numbers = [1,2,3,4,5]
const [e, f, g] = numbers;
console.log(e, f, g);
