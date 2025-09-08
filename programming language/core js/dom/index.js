// DOM (Dcoument Object Model):
// Access Elements using id , class , tagName , querySelector & querySelectorAllelement
//  node (each html element is a node) , text node and comment node , innerText , textContent , innerHtml 
// Attributes :  get,set,remove attributes
// Dynamic DOM Manupulation : createElement , appendChild , prepend , removeChild
// Add style : .style attribute , classList(add,remove,toggle)

// 🔥 DOM Practice Pack (Events ke bina)
// 1. Access Elements
let h1 = document.getElementById('my-heading')
let p = document.getElementsByClassName('my-para')
let li = document.querySelectorAll('li')

// 2. Text Manipulation
let div = document.querySelector('div')
div.innerHTML = '<strong>Hello</strong> How are you ??'

// 3. Attributes
let img = document.querySelector('img')
img.getAttribute('src')
img.setAttribute('alt','New Alt Text')
img.removeAttribute('alt')

// 4. Styling & classList
// h1.style.color = 'yellow'
// h1.style.backgroundColor = 'black'
// h1.style.fontSize = '40px'
h1.classList.add('myClass')
h1.classList.remove('myClass')
h1.classList.toggle('myClass')

// 5. Dynamic DOM Manipulation
let ul = document.getElementById('myList')
let carBrand = ['BMW', 'Audi', 'Tesla', 'Toyota', 'Honda']
let idx = 0
for(let val of carBrand){
    let list = document.createElement('li')
    list.textContent = `${idx++} : ${val}`
    ul.appendChild(list)
}