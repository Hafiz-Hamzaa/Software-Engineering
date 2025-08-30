// Operators : Arithmetic , Assignment , Unary , Logical , Comparision  , Ternary Operator
// ✅ Easy Level
// 2 numbers lo aur inka sum, difference, product aur remainder print karo
let num1 = 20
let num2 = 5
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1%num2)

// Ek variable x = 10 lo
// x me pehle 5 add karo, phir 2 se multiply karo
// final value print karo
let x = 10
x+=5
x*=2
console.log(x)

// Ek variable y = 7 lo
// ++y aur y-- dono print karo
let y = 7
++y
console.log(y) // 8
y--
console.log(y) // 8
console.log(y) // 7

// 🔥 Medium Level
// Ek function banao jo check kare ke ek number positive aur even dono hai ya nahi
function checkValue(num){
    if(num > 0 && num % 2 === 0) return 'number is positive or even'
    else return "number is not positive or even"
}
console.log(checkValue(14))

// 2 numbers compare karo aur bada number return karo (using comparison operators)
let num_1 = 12
let num_2 = 25
let result = num_1 > num_2 ? `${num_1} is greater` : `${num_2} is greater`

// Ek number input lo
// agar number 18 ya usse zyada ho to "Adult", warna "Minor" return karo
let no = 20
let output = no >= 18 ? 'Adult' : 'Minor'

// 🚀 Real-Life Style : Discount Calculator (Mix of Arithmetic + Logical + Ternary):
// Ek productPrice variable lo
// Agar price > 1000 hai to 10% discount do
// warna 5% discount do
// Final price print karo
let productPrice = 1200
let discount;
if(productPrice > 1000){
    discount = productPrice * 0.9
}else{
    discount = productPrice * 0.95
}
console.log(`Final price after discount : ${discount}`)