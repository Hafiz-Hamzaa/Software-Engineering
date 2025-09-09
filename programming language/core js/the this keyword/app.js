// ---- the this keyword
// ---- this aik special keyword hai baqi jitne bh keywords hote hai js me unka nature same rehta hai but this ka nature badalta rehta hai kai ap usko kaha per use kr rahe ho

// ---- this keyword ki kia kia value hoti hai agr ham is is kai ander use kre
// global scope 
console.log(this) // window hogi value

// function scope
function abcd(){
    console.log(this) // window hogi value iski bh
}
abcd()

// method kai ander this ki value object hai
// aisa function jo object kai ander use ho usko ham method kehte hai

let obj = {
    name: "ali",
    age: 20,
    sayFunc : function(){
        console.log(this) // pora obj
        console.log(this.name)
    }
}
obj.sayFunc()

// event handler kai ander this ki value wo hoti hai jisper event listener lga ho jese abhi h1 per lga hai to h1 ka element hi this ki value hai 
const h1 = document.querySelector("h1")
h1.addEventListener('click', function(){
    console.log(this.style.color = 'red')
})

// Class ke andar this hamesha us instance (object) ko refer karta hai jo us class se banaya gaya ho.
class Abcd{
    constructor(name){
        this.name = name
    }
}
let user = new Abcd("Ayesha")
console.log(user) // this.name = name → this refers to user object.

// ------- Noted : kbh bh arrow function kai ander this keyword nh use krna qkai ye this keyword loose hojata hai or wo window kai braber hojata hai
// ----- Noted : regular fnc kai ander arrow fnc ho to this ki value object hai q arrow fnc parent fnc ki value hold krta hai
// ---- Noted : or agr arrow fnc kai ander regular fnc ho qkai regular fnc ka parent object hoga or wo obj global hai to window mile ga

// ---- Manual binding : bind , call , apply
// function call krte waqt ap this ki value set krskte ho

let student = {
    name: "asma",
    age: 30
}

function efg(a,b,c){
    console.log(this,a,b,c)
}
efg.call(student,1,2,3) // ye bh fnc call krta hai call krte waqt hamne student pass krdia jokai obj tha ab this ki value obj ban gai or isme ham aik se zada parameter bhej skte hai

efg.apply(student,[1,2,3]) // apply bh caal ki trah krega but isme ham do se zada parameter nh se skte jbh hamne isko array me bnaa dia
let bindFnc = efg.bind(student,1,2,3) // ye alag hai ye caal nh krta bind fnc ko ye aik copy bnadega efg fnc ki or ham isko aik var me save krlegai
bindFnc()
