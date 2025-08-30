// Control Flow:  if,else-if,else,switch case,early return pattern

// ✅ Control Flow Practice Problems
// Easy Problems : Ek number input lo aur check karo: positive, negative, ya zero.
// Ek number input lo aur check karo: divisible by 3, 5, ya dono.
// Ek variable age lo aur print karo:
// Minor (<18) - Adult (18-60) - Senior (>60)

function checkPNZ(num){
    if(num > 0) return 'positive'
    else if(num < 0) return 'negative'
    else return 'zero'
}
console.log(checkPNZ(90))

function checkDivisible(num){
    if(num % 3 === 0 && num % 5 === 0) return `${num} is divisible by 3 or 5`
    else if(num % 3 === 0) return `${num} is divisible by 3`
    else if(num % 5 === 0) return `${num} is divisible by 5`
    else return `number is not divisible by 3 or 5`
}
console.log(checkDivisible(25))

let age = 64
if(age < 18) {
    console.log('Minor')
}else if(age >= 18 && age <= 60){
    console.log('Adult')
}else{
    console.log('Senior')
}

// Medium Problems : Ek number input lo aur print karo: even ya odd. Agar even, check karo 10 se bada hai ya nahi.
// Ek student marks input lo aur print karo grade:
// A: 90+ - B: 75-89 - C: 50-74 - F: <50
// Ek 3-digit number lo aur check karo kya ye Armstrong number hai ya nahi.

let randomNum = 7
if(randomNum % 2 === 0){
    if(randomNum > 10){
        console.log('even and greater then 10')
    }else{
        console.log('even but less then 10')
    }
}else{
    console.log('odd number')
}

let studentMarks = 76
if(studentMarks >= 90){
    console.log('A')
}else if(studentMarks >= 75 && studentMarks <=89){
    console.log('B')
}else if(studentMarks >=50 && studentMarks <= 74){
    console.log('C')
}else{
    console.log('F')
}


// Ek 3-digit number lo aur check karo kya ye Armstrong number hai ya nahi
let isNumber = 371
let sum = 0
isNumber.toString().split("").forEach((val)=>{
    sum += val ** 3
})
if(isNumber === sum){
    console.log('Number is Armstrong')
}else{
    console.log('Number is not Armstrong')
}

// Real Life Style : Ek traffic light simulator banao:
let trafficLight = 'green'
if(trafficLight === 'red'){
    console.log('stop')
}else if(trafficLight === 'yellow'){
    console.log('ready to go')
}else if(trafficLight === 'green'){
    console.log('go')
}else {
    console.log('invalid light')
}


// Build a calculator using switch statement
function calc(a, b, opt) {
  switch (opt) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("inavlid opt");
      break;
  }
}
calc(10, 20, "+");

// // Build a rock paper scissior game and early return patterns
function rps(user,comp){
    if(user === comp) return 'draw'
    else if(user === 'rock' && comp === 'scissor') return 'user win'
    else if(user === 'paper' && comp === 'rock') return 'user win'
    else if(user === 'scissor' && comp === 'paper') return 'user win'
    else return 'computer win'
}
let result = rps('rock','paper')