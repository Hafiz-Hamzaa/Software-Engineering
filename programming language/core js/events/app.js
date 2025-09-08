// Events & Event Listeners
// 🎯 Stage 1: Events Practice Problems
// 1. Button Click Event : 👉 Ek button banao. Jab user uspe click kare to console me "Button clicked!" print ho.
let btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    console.log('Button clicked!')
})

// 2. Double Click : 👉 Ek <p> tag lo. Jab uspe double click ho to uska text "Double clicked!" me change ho jaye.
let p = document.querySelector('p')
p.addEventListener('dblclick',()=>{
    p.textContent = 'Double clicked!'
})

// 3. Mouse Over : 👉 Ek div banao (100x100). Jab mouse uspe aaye to uska background color red ho jaye, aur jab mouse hataye to wapas blue ho jaye.
let div = document.querySelector('div')
div.addEventListener('mouseover',()=>{
    div.style.backgroundColor = 'red'
})
div.addEventListener('mouseout',()=>{
    div.style.backgroundColor = 'blue'
})

// 4. Input Event : 👉 Ek input box banao. Jaise hi user type kare, niche ek <p> tag me real-time uska text show ho.
let input = document.querySelector('input')
let submit = document.getElementById('submit')
submit.addEventListener('click',()=>{
    let p = document.createElement('p')
    p.textContent = input.value
    document.body.appendChild(p)
    input.value = ""
})

// 5. Key Press : 👉 Jab bhi user keyboard me koi key press kare to uska naam console me print ho. (e.g., "Key pressed: a")
window.addEventListener('keydown',(e)=>{
    if(e.key === " "){
        console.log(`key pressed: SPC`)
    }else{
        console.log(`key pressed: ${e.key}`)
    }
})

// Event Bubbling & Capturing
// Pehle Capturing phase chlta hai bydefault wo off hota hai dosra bad me bubbling phase chlta hai bydefault on hota hai
let a = document.querySelector('.a')
let b = document.querySelector('.b')
let c = document.querySelector('.c')
let myBtn = document.getElementById('my-btn')
myBtn.addEventListener('click',()=>{
    console.log('Button Clicked!')
})
c.addEventListener('click',()=>{
    console.log('C clicked')
},true)
b.addEventListener('click',()=>{
    console.log('B clicked')
})
a.addEventListener('click',()=>{
    console.log('A clicked')
},true)