// High Order Functions , IIFE , Pure vs Impure Function , Closures , Lexical Scoping

// IIFE : code turant chlana bina --- usecase : private var store krskte ho IIFE me
// Stage 1 (Easy)
// 🔹 Ek IIFE banao jo console me turant "Welcome to JavaScript IIFE" print kare.
(function() {
    console.log('Welcome to JavaScript IIFE')
})() // nomal IIFE Function

// (()=>{
//     console.log('IIFE Arrow Function')
// })()

// Stage 2 (Medium)
// 🔹 Ek IIFE banao jo ek private variable count rakhe aur return kare ek object jisme do functions ho:
// increment() → count +1 return kare
// reset() → count ko 0 par le aaye
const counter = (function(){
    // private var
    let count = 0
    // return object 
    return {
        increment:()=>{
            count++
            return count
        },
        reset:()=>{
            count = 0
            return count
        }
    }
})()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.increment())

// Stage 3 (Real-world Use Case)
// 🔹 Ek IIFE likho jo turant execute hote hi:
// Ek random number generate kare (1–100 ke beech).
// Usko variable ke andar private rakhe.
// Aur return kare ek object jisme ek method guess(num) ho jo bataye:
// "Too High" --- "Too Low" ---- "Correct!"
const guessNumber = (function(){
    let randomNum = Math.floor(Math.random() * 100)
    return {
        guess:(num)=>{
            if(num > randomNum) return 'Too High'
            else if(num < randomNum) return 'Too Low'
            else if(num === randomNum) return 'Correct'
            else return 'Invalid number'
        }
    }
})()
console.log(guessNumber.guess(58))

// Lexical Scoping Example
function abcd(){
    let a = 12
    function efg(){
        let b = 20
        function xyz(){
            let c = 40
            console.log(a)
            console.log(b)
            console.log(c)
        }
        xyz()
    }
    efg()
}
abcd()

//Pure vs Impure Function
let count = 0
function sayHi(){
    console.log('Hi')
}
sayHi() // pure func bahar ki value ko na badle

let myCount = 0
function myCounter(){
    return myCount++
}
console.log(myCounter())
console.log(myCounter())
console.log(myCounter()) // impure func jo bhar ki value ko badal de

//  High Order Functions : aisa function jo return kre aik function ya phr accept kre parametr me aik function
function sayHello(fnc){
    fnc()
}
sayHello(()=>{
    console.log('Hello , How are your ??')
})

// 📝 HOF Problems (Stage-wise)
// Stage 1: Function ko as Argument Pass Karna
// Ek function executeTwice banao jo ek function ko accept kare aur usko do dafa run kare.
function executeTwice(fnc){
    console.log('Running')
    fnc()
}
executeTwice(()=>{
    console.log('Running...')
})
// Ek function withGreeting banao jo ek function ko accept kare aur uske call se pehle "Hello User" print kare.
function withGreeting(fnc){
    console.log('Hello Hamza')
    fnc()
}
withGreeting(()=>{
    console.log('Welcome to the Website')
})

// Stage 2: Function ko Return Karna
// Ek function createMultiplier(factor) banao jo ek function return kare. Return hone wala function ek number accept kare aur usko factor se multiply kare.
function createMultiplier(factor){
    return (num)=>{
        return num * factor
    }
}
let double = createMultiplier(2)
console.log(double(5))

let tripple = createMultiplier(3)
console.log(tripple(5))
// Ek function makeCounter banao jo ek function return kare. Har dafa jab wo return wala function call ho, "Counter running..." print kare.
// (counting ki zarurat nahi abhi, bas message print karna hai.)
function makeCounter() {
    return ()=>{
        console.log('Counter running...')
    }
}
let incrementCounter = makeCounter()
incrementCounter()
incrementCounter()
incrementCounter()

// Stage 3: Combine (Argument + Return)
// Ek function createGreeter(name) banao jo ek function return kare.Jab wo return function call ho to "Hello <name>" print kare.
function createGreeter(name) {
    return ()=>{
        return `Hello ${name}`
    }
}
let fnc = createGreeter('Owais')
console.log(fnc())
// Ek function applyOperation banao jo: Ek number aur ek function accept kare.Number ko function ke andar bheje aur result return kare.
function applyOperation(num,fnc) {
    return fnc(num)
}
function sq(num){
    return num * num
}
console.log(applyOperation(6,sq))

// Closures : aisa function jo return kre aik or function return hone wala fnc parent var ki value ko use kre
function closures() {
    let x = 25
    return ()=>{
        console.log(x)
    }
}
closures()()

// 🔹 Stage 1: Basic Closure
// Ek function banao createGreeting jo ek naam accept kare aur ek function return kare. Wo inner function jab call ho to print kare: Hello, <name></name>
function createGreeting(name) {
    return ()=>{
        return `Hello ${name}`
    } 
}
let res = createGreeting('Hassan')
console.log(res())

// 🔹 Stage 2: Counter Closure
// Ek function createCounter banao jo ek counter variable ko apne andar rakhe. Har baar jab returned function call ho, counter +1 ho kar value return kare.
function createCounter() {
    let counter = 0
    return ()=>{
        counter++
        return counter
    }
}
let meraCounter = createCounter()
console.log(meraCounter())
console.log(meraCounter())
console.log(meraCounter())

// 🔹 Stage 3: Multiplier Closure
// Ek function banao Multiplier jo ek number accept kare aur ek function return kare.Wo function dusre number ko multiply kare pehle wale se.
function Multiplier(value) {
    return (num)=>{
        return value * num
    }
}
let db = Multiplier(9)
console.log(db(2))
