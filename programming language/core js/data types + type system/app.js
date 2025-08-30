// Data Types + Type System
// 2 types of data : Primitive vs Reference --->> Primtive me value ko copy krskte hai but refernce me nh krskte
// Primitive Data: str,num,bool,null,undefined, (symboland biginit most rare use) 
// Reference Data : array,function,objects
// typeof , type coercion , quirks , truthy anf falsy value
// js dynamic typed language hai

// 🔹 Problem 1: Primitive vs Reference
// Step 1: Ek number variable banao "num1" aur uski copy "num2" me rakho
// Step 2: num1 ka value change karo
// Step 3: console me dono print karo -> kya dono change honge?
let num1 = 25
let num2 = num1
num1 = 30

// 🔹 Problem 2: Array Reference Check
// Step 1: Ek array banao "arr1 = [10, 20, 30]"
// Step 2: "arr2" me arr1 assign karo
// Step 3: arr1 me ek naya element add karo
// Step 4: console me arr2 print karo -> kya arr2 bhi change hua?
let arr1 = [10,20,30]
let arr2 = arr1
arr1[3] = 40

// 🔹 Problem 3: Type Coercion Madness
// Predict the outputs before running:
console.log("10" + 5);   // 105
console.log("10" - 5);   // 5
console.log("10" * "2"); // 20
console.log("abc" - 2);  // NaN

// 🔹 Problem 4: Truthy / Falsy
// Step 1: Ek function banao jo input value le
// Step 2: Agar value truthy hai to "Truthy" print karo warna "Falsy"
function checkValue(val){
    if(val) return 'Truthy'
    else return 'Falsy'
}
checkValue(12)
checkValue(0)

// 🔹 Problem 5: NaN Detector
// Ek function banao jo koi input number le
// Agar number NaN hai to "Not a Number" print kare
// warna "Valid Number"
function numbDetector(num){
    if(isNaN(num)) return 'Not a Number'
    else return 'Valid number'
}
console.log(numbDetector(40))

// 🔹 Problem 6: NaN with Arithmetic
function safeDivide(a, b){
    if(isNaN(a) || isNaN(b)){
        return 'Invalid Division'
    }else{
        return a / b
    }
}
console.log(safeDivide(120,10))

// 🔹 Problem 7: Swap Primitive Values
// Do number variables a aur b banao.
// Inka value swap karo ek temporary variable use karke.
// Console me dono print karo.
let a = 10
let b = 20
let c = b // 20
b = a  // 10
a = c // 20

// 🔹 Problem 8: Deep vs Shallow copy
// Step 1: Ek object banao "person" {name: 'Hamza', scores: [10, 20, 30]}
// Step 2: Shallow copy banao "personCopy" using spread operator
// Step 3: person.scores me ek value add karo
// Step 4: Console me personCopy.scores print karo
// Predict karo kya change hoga?
let person = {
    name: 'Hamza',
    scores:[10,20,30]
} 
let personCopy = {...person}
person.scores.push(40)