// Async-Await : async function always returns a promise.
// await pauses the execution of its surrounding async function until the promise is settled. await always used in async function

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data...")
            resolve(200) // success data means
        }, 3000);
    })
}

// ab yaha hame function banna par rha hai 
// async function getWeatherData() {
//     await api()
//     await api()
// }
// getWeatherData() // or yaha call krna par rh hai 

// is se bachnee kai liyee IIFE use kro immediateky nvoked withount function name calling
(async function() {
    await api()
    await api()
})()