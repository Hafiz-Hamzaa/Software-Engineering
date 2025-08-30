// loops : for loop , while loop , do-while loop , break & continue
// Stage 1 – Basic Counting & Printing
// Print 1 to 10 (using for)
// Print 1 to 10 (using while)
// Print 1 to 10 (using do…while)
// Print even numbers 1–20
// Print odd numbers 1–20

for(let i = 1; i <= 10; i++){
    console.log(i)
}
console.log('------------')

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}
console.log('------------')

let j = 1
do {
    console.log(j)
    j++
} while (j <= 10);
console.log('----------')

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
console.log('----------')

for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

// Stage 2 – Summation Problems
// 👉 Loops + variables ka use.
// Sum of 1 to N (input N=10, output = 55) – try using for loop .
// Product of 1 to N (like factorial, but abhi uska naam mat lo).
// Sum of even numbers from 1 to 100
// Sum of odd numbers from 1 to 100
// Square of numbers 1–10 (print n^2 in each line)
console.log('----------')
let n = 10
let sum = 0
for(let i = 1; i <= n; i++){
    sum += i
}
console.log(`sum of 1 to 10 should be : ${sum}`)

console.log('----------')
let inp = 5
let factorial = 1
for(let i = 1; i <= inp; i++){
    factorial *= i
}
console.log(`factorial of 5 should be : ${factorial}`)

console.log('----------')
let sumVar = 0
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        sumVar+= i
    }
}
console.log(`sum of even number from 1 to 100 should be : ${sumVar}`)

console.log('----------')
let sum_var = 0
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        sum_var+= i
    }
}
console.log(`sum of odd number from 1 to 100 should be : ${sum_var}`)

console.log('----------')
for(let i = 1; i <= 10; i++){
    console.log(i**2)
}
console.log('----------')
// Stage 3 – Loop Control (break / continue)
// Print numbers 1–10, lekin jab 5 aaye to break kar do.
// Print numbers 1–10, lekin jab 5 aaye to skip (continue) kar do.
// Print numbers 1–20, lekin sirf multiples of 3 print karo
// Print numbers 1–20, lekin jab pehla multiple of 7 mile to break kar do.
// Print numbers 1–50, lekin sirf even print karo aur agar number 30 se bada ho jaye to break.
console.log('----------')
for(let i = 1; i <= 10; i++){
    if(i === 5) break
    console.log(i)
}

console.log('----------')
for(let i = 1; i <= 10; i++){
    if(i === 5) continue
    console.log(i)
}

console.log('----------')
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0) 
    console.log(i)
}

console.log('----------')
for(let i = 1; i <= 20; i++){
    if(i % 7 === 0) break
    console.log(i)
}

console.log('----------')
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        if(i > 30) break
        console.log(i)
    }
}

// 🔥 Extra Loop Problems
// 5 ka table print kro
let table = 18
for(let i = 1; i <= 10; i++){
    console.log(`${table} * ${i} = ${table * i}`)
}

// 10 se 1 tak reverse counting print karo.
for(let i = 10; i >= 1; i--){
    console.log(i)
}

// Ek number lo aur check karo ke wo palindrome hai ya nahi (e.g. 121 → Palindrome, 123 → Not palindrome).
let num = 121
let revNum = num.toString().split("").reverse().join("")
if(num === Number(revNum)){
    console.log('Palindrome')
}else{
    console.log('Not Palindrome')
}
// FizzBuzz banado → 1 se 20 tak numbers print karo:
// agar 3 se divisible → "Fizz"
// agar 5 se divisible → "Buzz"
// agar dono se divisible → "FizzBuzz"
// warna number print karo
console.log('------')
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
        console.log('Fizz')
    }else if(i % 5 === 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}

// Ek number lo, uska reverse nikaalo (e.g. 1234 → 4321).
let myNum = 1234
let reverse = Number(myNum.toString().split("").reverse().join(""))
console.log(reverse)

// Ek number lo, uske digits ka sum nikaalo (e.g. 123 → 6).
let numb = 145
let add = 0
numb.toString().split("").forEach((val)=>{
    add += Number(val)
})
console.log(add)