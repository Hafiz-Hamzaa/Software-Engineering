// words vs keywords : harsh is a word and var , let , if are keywords etc
// variables definition : var , let , const 
// Scoping : var global & functional scope hota hai | let & const block scope hota hai
// Hoisting : var hoist hojata hai undefined deta hai  | let and const hoist nh hota reference error deta cannot access bbefore initilization
// common confusion : using const objects properties changed are allowed but whole objects changed not allowed 

// Variable Declaration
var userName = 'Hamza'
let userAge = 12
let isMarried = false

// Redeclaration & Reassignment
var city = 'Lahore'
var city = 'Karachi'
// let city = 'Quetta' // throw an erro which city already declared same as const

// Hoisting
console.log(x)
var x = 12

// Scope Problem
function testScope(){
    var fruit = 'apple'
}
testScope()
// console.log(fruit) // throw an error qkai var functional scope hai or
{
    let myVar = 'hello world'
}
// console.log(myVar) // throw an error  qkai let b;lock scope hai

// Real life example
const name = 'Hamza'
let score = 90
var testingVar;