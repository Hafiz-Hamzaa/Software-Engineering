// Objects : key-value pairs , dot vs square notation , Nesting and Deep Access , for in loop , Destructuring , Object.(keys - value - entrires) , Deep Copy , Computed Properties , Optional Chaining

// Create an object for a book (title, author, price)
const obj = {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    price: '$90'
}
let myVar = 'title'
console.log(obj)
console.log(obj.price)
console.log(obj['author'])
console.log(obj[myVar]) // dynamic

// Write a nested object (user with address and location)
const userInfo = {
    name: 'Hania',
    role: 'Developer',
    location: {
        city: 'Lahore',
        country: 'Pakistan',
    }
}
console.log(userInfo?.addresse?.city) // optional chaining -- undefined aiga error nh aiga 

// Loop through keys and values of an object
const studentData = {
    name: 'Hamza',
    role: 'Developer',
    score: 94
}
for(let key in studentData){
    console.log(`${key} : ${studentData[key]}`)
}

// Destructure name and age from a student object
const student = {
    name: 'Ayesha',
    age: 18,
    role: 'Designer'
}
const {name,age} = student

// Convert object to array using Object.entries()
const myObj = {
    product: 'T-Shirt',
    price: '$250',
    rating: '⭐4.5'
}
console.log(Object.entries(myObj))

// Use a variable as a key using computed properties
let setPrice = 'price'
const phone = {
    product: 'iPhone',
    [setPrice]: '$300'
}

// Copy an object using spread operator
const stationary = {
    pro: 'pencil',
    price: '$5',
    color: 'red'
}
const copyObj = {...stationary}

// Create a deep copy of an object with nested structure
let Student = {
  name: "Hamza",
  age: 20,
  address: {
    city: "Lahore",
    country: "Pakistan",
    zip: 54000
  }
};
let dataCopy = JSON.parse(JSON.stringify(Student))

// Ek products object banao aur Object.entries() ka use karke usko array me convert karke iterate karo
const productObj = {
    proudctName: 'Panel',
    price: '$120',
    rating: '4.7',
    color: 'white'
}
Object.entries(productObj).forEach((val)=>{
    console.log(`${val[0]} : ${val[1]}`)
})