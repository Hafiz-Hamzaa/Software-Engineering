// localStorage , sessionStorage and cookies --- sb ye data store kai liye use hota hai

// local storage : isme ham browser me data store krte hai or jb tak data ham khud se remove na krde ye data browser me hi rehta hai : 5mb
// session storage : isme bh data store hota hai but ye temporary data store hota hai jese hi tab close kia data bh chla jai ga : 5mb
// cookies : ye bh data store kai liye hota ha but isme ham less data store krskte hai like 4 kb

// local storage : data store krna , fetch krna , remove krna , update krna , clear krna 
localStorage.setItem("name","Umer") // store data
let val = localStorage.getItem("name") // get data
localStorage.removeItem("name") // remove data
localStorage.setItem("name","Hassan") // update data
localStorage.clear() // clear all data

// session storage : same isi trah work krega jese local storage me tha but ye data temporary hoga
sessionStorage.setItem("age",25) 

// cookies : jb bh data store hota hai jese hi page reload hoga data server per jai ga
// 👉 Cookies ke liye "EditThisCookie" jesa browser extension helpful hai.
document.cookie = "age=25"

// hamesha localstorage string format allow krta hai data stor lekin app kisi bh data ko string me bnaker use krkste hai or jb usko get krna ho to ap usko wapis original form me laskte hai : JSON.stringify() and JSON.parse()

localStorage.setItem("fruits",JSON.stringify(["apple","banna","pear"])) // string me convert hogya array
let value = JSON.parse(localStorage.getItem("fruits")) //get value in original form by using parse