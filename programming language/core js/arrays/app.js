// Arrays : store multiple values
// Arrasy Topics : creating , access(index) , modify , basic(push,pop,shift,unshift,slice,splice) and advanced array methods(ma,filter,reduce,forEach,sort,find,some,every) ---- Destructuring & Spread Operator

// 📝 Stage 1 Problems (Basics of Arrays)
// Creating and Access
let fruits = ['apple','banana','mango','orange']
console.log(fruits[0])
console.log(fruits[3])
// Modify
let vehicles = ['car','bicycle','motorbike','bus']
vehicles[1] = 'train'
// Length 
let cities = ['karachi','lahore','quetta','islamabad']
console.log(cities.length)
// Looping with Arrays using for and for of
let pL = ['JavaScript','Python','Java','C++']
let idx = 0
for(let i = 0; i < pL.length; i++){
    console.log(`${idx++} : ${pL[i]}`)
}
console.log('-----')
for(let val of pL){
    console.log(val)
}

// Stage 2 – Problems (Arrays Methods Practice)
// Problem 1 – push() & pop()
let vegetables = []
vegetables.push('potato','tomato','turnip')
console.log(vegetables)
vegetables.pop()
console.log(vegetables)

// Problem 2 – splice()
let colors = ["red", "blue", "green", "yellow"]
colors.splice(2,0,'purple') // insert purple at index 1
colors.splice(1,1) // remove blue

// Problem 3 – forEach()
let num = [1,2,3,4,5,6]
num.forEach((v)=>{
    console.log(v*v)
})

// Problem 4 – map()
let userNames = ['Ayesha','Laiba','Amna','Areeba','Hania']
let newArr = userNames.map((val)=>{
    return `Mrs.${val}`
})

// Problem 5 – filter()
let nums = [10,15,20,25,30]
let myArr = nums.filter((val)=>{
    return val > 20
})

// Problem 6 – reduce()
let no = [12,34,89,67,90]
let sum = no.reduce((accum,pre)=>{
    return accum + pre
},0)

// Stage 1 – Array Destructuring
// Problem 1: Array se first 2 elements alag variables me store karo.
const animals = ['lion','tiger','monkey','zebra']
const [first,second] = animals

// Problem 2: Array ke 2nd aur 4th elements ko destructure karke variables second aur fourth me store karo.
const languages = ['JS','Python','Java','C++']
const [,sec,,four] = languages

// Problem 3: Array ka first element variable first me aur baaki elements ek array rest me store karo.
const students = ['Hamza','Owais','Kashan','Uzair','Hamid']
const [fir,...rest] = students

// Stage 2 – Spread Operator
// Problem 4: Do arrays ko combine karke ek new array banao.
const arr1 = [1,2,3,4,5,6]
const arr2 = [7,8,9,10]
const combineArr = [...arr1,...arr2]

// Problem 5: Ek array ka copy banao, original array ko change kiye bina.
const meraArr = ['chawal','roti','sabzi','roll']
const copyArr = [...meraArr]

// Problem 6: Ek array me naya element add karo bina original array ko modify kiye.
const hardware = ['pc','monitor','keyboard','ram']
const newItem = [...hardware,'pad']