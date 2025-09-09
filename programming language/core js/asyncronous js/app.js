//--------- Asyncronous JS
// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.(Syncronous)
// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow. (Asyncronous)

//-------- Callback: A callback is a function passed as an argument to another function.
function hello() {
    console.log("Hello JS...")
}
setTimeout(hello,2000)

// Callback Hell: Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
function getData(dataID,getNextData) {
    setTimeout(()=>{
        if(getNextData){
            getNextData()
        }
        console.log(`Data : ${dataID}`)
    },2000)
}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5)
            })
        })
    })
})