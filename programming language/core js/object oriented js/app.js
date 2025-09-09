// ---------- Object Oriented JS
// apne aik factory bnadi ab us factory se different different products sirf aik dafa blue print banado or us template se different obj mtlb different instance create krkste ho

function CreatePencil(name,color,price){
    this.name = name
    this.color = color
    this.price = price
    CreatePencil.prototype.write =  function(text){
        let h1 = document.createElement("h1")
        h1.textContent = text
        h1.style.color = color
        document.body.appendChild(h1)
    }
}
let pencil1 = new CreatePencil("oxford","black",10)
let pencil2 = new CreatePencil("amazon","red",20)

// Without prototype (tumhara pehla example): Har pencil ke sath write() method alag se create ho raha tha.
// Agar 1000 pencils banayi, to 1000 write() methods memory me banenge.

// do this thing but in modern code of oop
class Createbags {
    constructor (name,color,price){
        this.name = name
        this.color = color
        this.price = price
    }

    // ---- create a prototype of all bags
    // Shared method sabke liye (ek hi copy)
    write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
};

    erase(){
        document.querySelectorAll("h1").forEach(elem =>{
            if(elem.style.color === this.color){
                elem.remove()
            }
        })
    }
}
let bag1 = new Createbags("nikey","black",2000)
let bag2 = new Createbags("mac","blue",2500)


// now learn extends and super call()

class User{
    constructor(name,age,role,job){
        this.name = name
        this.age = age
        this.role = role
        this.job = job
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name,age,role,job){
//      Kya hota hai super()? : super() ka matlab hota hai: Parent class ka constructor call karo.
// Agar child class (Admin) ka apna constructor hai, to tumhe super(...) call karna hi padega, warna JavaScript error de deta hai.
// super() ki madad se parent class ke andar likhi hui properties aur logic child class me aa jate hain.
        super(name,age,role,job)
    }
    remove(){
        document.querySelectorAll("h1").forEach(el=>{
            el.remove()
        })
    }
}

let u1 = new User("ali",21,"designer","fullTime")
let u2 =  new User("adeel",20,"developer","partTime")
let admin = new Admin("admin","25","software engineer","nojob")


//------ Noted: Class Inheritance: aik class se uski tamam cheeze inherit krna
// ----- Prototypal Inheritance: aik obj ki tamam cheeze dosre obj me inherit krna 
let obj1 = {
    name: "ali",
    age: 30,
    role: "developer"
}
let obj2 = Object.create(obj1)
console.log(obj1);
console.log(obj2);