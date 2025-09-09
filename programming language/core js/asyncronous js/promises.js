// Promises in JS....Promise is for “eventual” completion of task. It is an object in JS. It is a solution to callback hell.
// *resolve & reject are callbacks provided by JS
// A JavaScript Promise object can be:
// Pending : the result is undefined
// Resolved : the result is a value (fulfilled)
// Rejected : the result is an error object

// Promise create krna....
// let Promise = new Promise((resolve,reject)=>{
//     resolve("succes")
//     reject("some error occured")
// })

function getData(dataId,getNextData){
    console.log("getting data....")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`Data id:${dataId}`)
            resolve("success")
            // reject("sorry data is not coming ")
            if(getNextData){
                getNextData()
            }
        }, 5000);
    })
}
// let promise = getData(12)
// console.log(promise)

// Promise Handle krna mtlb use krna......
// .then(res) , .catch(err) : agr promise resolve hogya .then execute hoga wrna error aya to .catch
const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("success")
        // reject("network error")
    })
}
let promise = getPromise()
promise.then((res)=>{
    console.log("proimse fullfiled",res)
})
promise.catch((err)=>{
    console.log("promise rejected",err)
})

// Promise Chaining: .then inside .then
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("succes")
            console.log(`data id : ${dataId}`)
        }, 4000);
    })
}
console.log("getting data...")
getData(1).then((res)=>{
    getData(2).then((res)=>{
    })
})