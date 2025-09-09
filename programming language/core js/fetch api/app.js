// Fetch API: The fetch api provides an interface for fetching (Sending/receving) resources. It uses Request and Response objects
// fetch() method is used to fetch a resource (Data)

let URL = "https://randomuser.me/api/"

// ----JB ham options nh bhejte bydefault GET request hoti hai jo kai data lati hai -- fetch(url,options[])
// ---- UNDERSTANDING TERMS : AJAX (pehle data ka formt ye hota tha ) , JSON(ab ajkl ye data format hota hai theek data ka response lane kai liye)
// json() method- ye bh asynchronous hota hai :  return a second a promise -

let p = document.querySelector("#para")
let btn = document.querySelector("button")
const getData = async ()=>{
    let respnse = await fetch(URL)
    console.log(respnse)
    console.log(respnse.status)
    let data = await respnse.json()
    console.log(data)
    p.textContent = data.results[0].email
}

btn.addEventListener("click",getData)
let promise = fetch(URL)

// --- HTTP Verbs : different type request hoti hai : GET , POST , PATCH , DELETE
// ---- Response Status Code : 200 (successful request) , 400 (Bad request) , 404(not found) , 500 (server error response)