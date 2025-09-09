// ----- Phase -03
// ------ Scope , Executon Context & Closures
// ----- scope : variables or function kaha tk use hoskte hai
// --- Types of Scope : functional scope , global scope , block scope

// --- Execution Context : jese ap function banate ho or js apka function dekhta hai or js bandeta hai execution context mtlb ye do process me chlta hai aik memory phase dosra execution phase ye aik js ka concept hai mtlb functiion kai ander variables bnaya to memory phase agya mtlb usne sapce lia or jb functio call huwa to code hamara run huwa o wo execution phase hoga smjo jese function dekho to aik zehan me box banao jo jo code liho gai wo us box me hi jai ga usi ko kehet hai execution context --- har function ka apna execution context hota hai

// ---- Closures Definiion and how variables are presreved
// Closure wo function hota hai jo apne parent scope ke variables ko yaad rakhta hai, chahe parent function execute ho chuka ho.
// JavaScript un variables ko ek hidden [[Environment]] mein preserve kar leta hai, jise closure ke through access kiya ja sakta hai.
function abcd(){
    let a = 12
    return function(){
        console.log(a)
    }
}
let fnc = abcd()
fnc()

// ---- use case : private counters
function counter(){
    let count = 0
    return function(){
        count++
        console.log(count);
    }
}
let myFnc = counter() // iska apna count hai
myFnc()
myFnc()
myFnc()
console.log("-------")
let myFnc2 = counter() // iska apna khud ka alag se count hai
myFnc2()
myFnc2()
myFnc2()

// use case : encapsulation ye sb closure kai zriye se hi hoga
function clickLimit(){
    let click = 1 // ye private variable hai iska access sirf is function kai ander hi hai aisa nh kai iski value ko ap chnage kr rahai ho bahir ye global nh hai yehi hota ai encapsulation
    return function(){
        if(click <= 5){
            console.log(`clicked : ${click++} times`)
        }else{
            console.log("Limit exceeded")
        }
    }
}

let userClick = clickLimit()
userClick()
userClick()
userClick()
userClick()
userClick()
userClick()


// --------- create a toaster

function createToaster(config){
    return function(str){
        let div = document.createElement("div")
        div.textContent = str
        div.className = `inline-block ${config.theme === 'dark' ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`

        document.querySelector(".parent").appendChild((div))

        if(config.positionX !== "left" || positionY !== "top"){
            document.querySelector(".parent").className +=
            `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`
        }

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
        }, config.duration * 1000);
    }
}
let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
})
toaster("Download  Done")
setTimeout(() => {
    toaster("Harsh accepted")
}, 2000);