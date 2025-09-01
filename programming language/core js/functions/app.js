// Functions : function declaration , parameters & arguments , return statemnet , function expression and arrow function
// Hoisting for functions : func declaration hoisted work but fnc expression not

// 🔥 Functions Basic Strong Foundation
// ✅ Stage 1 (Basics)
// Ek function banao jo "Hello World" print kare.
// Ek function banao jo 2 numbers le aur unka sum print kare.
// Ek function banao jo ek number le aur uska square return kare.
// Ek function banao jo user ka naam parameter me le aur "Hello <name>" print kare.
function sayHello(){
    console.log('Hello')
}
sayHello()

function sum(v1,v2){
    console.log(v1+v2)
}
sum(12,34)

function sqaure(num){
    return num ** 2
}
console.log(sqaure(12))

function greet(name){
    console.log(`Hello ${name}`)
}
greet('Hamza')
greet('Owais')

// ✅ Stage 2 (Return Statement practice)
// Ek function banao jo 2 numbers le aur bada number return kare.
// Ek function banao jo 2 numbers le aur sabse chota return kare.
// Ek function banao jo ek number le aur check kare ke wo even hai ya odd (true/false return karo).
// Ek function banao jo ek number ka factorial return kare.
function greater(num1,num2){
    if(num1 > num2) return num1
    else return num2
}
let greaterNum = greater(90,45)
console.log(greaterNum)

function lesser(v1,v2){
    if(v1 < v2) return v1
    else return v2
}
let lessNum = lesser(14,67)
console.log(lessNum)

function checkNum(num){
    if(num % 2 === 0) return true
    else return false
}
console.log(checkNum(114))

function factorial(val){
    let prod = 1
    for(let i = 1; i <= val; i++){
        prod *= i
    }
    return prod
}
console.log(factorial(6))

// ✅ Stage 3 (Expression & Arrow Functions)
// Function Expression ka use karke ek function likho jo cube return kare.
// Arrow function ka use karke ek function likho jo ek number ka square return kare.
// Arrow function ka use karke ek function likho jo "Good Morning <name>" return kare.
let cube = function(val){
    return val ** 3 
}
console.log(cube(3))

let square = (val)=>{
    return val ** 2
}
console.log(square(9))

let greeting = (msg,name)=>{
    return `${msg} ${name}`
}
console.log(greeting('Good morning','Hamza'))

// Default Param , Rest Param , First Class Functions

// 📝 Problems on Default Parameters
function msg(name = 'Hamza'){
    console.log(`Hello ${name}`)
}
msg()

function powerBase(num,power = 2){
    return num ** power
}
console.log(powerBase(5,))

function calculatePrice(price,tax = 1.2){
    return Math.round(price * tax)
}
console.log(calculatePrice(100))

// 📝 Problems on Rest Parameters
function calculateSum(...val){
    let sum = 0
    val.forEach((val)=>{
        sum += val
    })
    return sum
}
console.log(calculateSum(1,2,3,4,5,6,7,8))

function calculateProd(...val){
    let mul = 1
    val.forEach((val)=>{
        mul *= val
    })
    return mul
}
console.log(calculateProd(1,2,3,4,5,2))

function introduce(firstName, lastName, ...hobbies){
    console.log(firstName , lastName , hobbies)
}
introduce('Hafiz', 'Hamza' , 'coding' , 'cricket' , 'reading' , 'teaching')

function findMax(...nums){
    let max = nums[0]
    nums.forEach((val)=>{
        if(val > max){
            max = val
        }
    })
    return max
}
console.log(findMax(20,34,677,15,90,56))