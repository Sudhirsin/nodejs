// Node Script
// console.log('Hello')

// const a = 10
// const b = 20

// console.log("a is " + a, "b is " + b)

// const os = require("os");
// const { resolve } = require("path");
// console.log(os.type())
// console.log(os.platform())

// const car = require("./car")
// console.log(car);


// function getMsg(msg, callback) {
//     // console.log('Get message')
//     setTimeout(() => {
//         console.log(msg)
//         callback()
//     }, 1000)
// }

// function displayMsg() {
//     console.log('Display message')
// }

// getMsg("Get Message", displayMsg)

// Promise
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() =>  resolve("Run After"), 1000)
//     // setTimeout(() =>  reject(new Error('Ooops')), 1000)
// })


// promise.then(
//     result => {
//         console.log(result)
//     },
//     error => console.log(error)
// )



function clone() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hellllll"), 2000)
    })
}

async function msg(callback) {
    const msg = await clone()
    console.log('Message: ', msg)
    callback();
}

msg(getRes)

function getRes() {
    console.log("Execute After")
}