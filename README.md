# nodejs
Learning nodejs

# Definition:
Node.js run-time-environment includes everything you need to execute a program written in JavaScript.

Node.js is runtime environment for executing javascript outside of browser.

Till 2009 js could run only in browser.

Inventor of nodejs Rayn Dahl introduces an amazing concept called nodejs
executing the js outside of browser or any machine.

Browser can convert js code in low level machine code so the machine can understand it.
There is different engine embbed in browser to convert the js code to machine code like V8.

Microsoft uses  -->  Charka
Firefox uses  --> Spider Monkey
Chrome  uses --> V8 engine

Rayn Dahl take the V8 engine and emebbedd in c++ called the program as node.

### speciality of node.
1. Easy, Fast and Scalable
2. having 3M libraries
3. Prototyping and Agile Dev
4. Uber, Paypal and NASA
5. event-driven, non-blocking I/O

### Single-Threded WebServer
### Non-Blocking Asynchronous I/O (Node follow the event Queue)


## What is REPL(Read Evalute Print Loop) 
os
path
numbers

## Node Script:
create js file and run in terminal with node.

## Module.
Node has built in module system.
we can create our own module also.
import module  use require.

const os = require("os");
console.log(os.type())

create the own module.

car.js

const car = {
    brand: "BMW",
    model: "Z4"
}

module.exports = car;  -> expose the object its point to
or 
exports.car = car;---> will get results like { car: {brand: "BMW", model: "Z4" }} will have car as key.

To use in another file like
const car = require("./car")
console.log(car);

## NPM (Node Package Manager) for Nodejs
npm init --> initial the packagejson file.
npm init -y -> to yes to default values (package)

intalling the new package.
npm install or i

npm i loadash -save  (-save means its intalling the package to dependencies) --> this project is depend on this package.

npm i uuid --save-dev  (--save-dev means its installing the package the devDependencies) --> this project depend only during the development.

## NPM Script and Type of Packages
In package.json we have script section where we can decide which command should in terminal.
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "execute": "node index.js",
    "watch": "node npm_script.js"
  },

### Type of Packages:
Local and Global
npm i lodash  -> default local

npm i lodash -g  -> global

to get the exact node root:
npm root -g

uninstall the package
npm uninstall lodash or
npm uninstall -S lodash


To uninstall the devDependencies packages
npm uninstall -D uuid or npm uninstall --save-dev uuid

unistall from global
npm uninstall -g lodash

## NPX
to used to install package

### Package.json
is kind of minifest.It is central repository for configuration of tool.

property:
name:-> it should be lowercase
version: "1.0.0",
description:
main: it enttry point
script:
keywords: 
author:
linces: 
dependecies: 
devDependencies:
engines:
browserslist: support
contributors:
bugs: 
homepage:
repository:
private: true by default


## Event Loop


## Callback Functions
callback allows us to do the asynchronous job.

function getMsg(msg, callback) {
    // console.log('Get message')
    setTimeout(() => {
        console.log(msg)
        callback()
    }, 1000)
}

function displayMsg() {
    console.log('Display message')
}

getMsg("Get Message", displayMsg)
getMsg("Get Message", () => console.log("Display Message"))

## Promises
Promises is way to deal with asynchronous code. It's introduce in ECMAScirpt 2015. and async await in 2017.

let promise = new Promise(function(resolve, reject) {
    setTimeout(() =>  resolve("Run Before"), 1000)
})


promise.then(
    result => {
        console.log(result)
    },
    error => console.log(error)
)

## Async Await
Its a combination of promises and generators.Asyn await build on promises.

function clone() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hellllll"), 2000)
    })
}

async function msg() {
    const msg = await clone()
    console.log('Message: ', msg)
}

msg()

## Create HTTP Server in node
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001;

// 1st method
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome to Http server")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

// 2st method
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})

    // same as above
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.write("Welcome to Http server");

    res.end()
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})


## Http Request

### Http get Request
const http = require('http');

// Takes two parameter url and callback with getting res from url
http.get('http://api.open-notify.org/astros.json', (res) => {
    let data = ''
    res.on('data', chunk => {
        data += chunk
    })

    res.on('end', () => {
        console.log('Mydata: ', JSON.parse(data))
    })
})

### Http POST Request
const http = require('https');

const data = JSON.stringify({
    name: 'Sidhir Singh',
    job: 'Software Engineer'
})


const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
}

// request
const req = http.request(options, (res) => {
    let body ='';
    console.log('status code', res.statusCode)

    res.on('data', (chunk) => {
        body += chunk;
    })

    res.on('end', () => {
        console.log('body:', JSON.parse(body))
    })
})

req.write(data);
req.end();


## Files
/** Woring with files */

// fs -> file system
const fs = require('fs');

// readFile method allow us to read the data from file
// asyncronous ways
fs.readFile('test.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    console.log(data)
})

// synchronous way
const data = fs.readFileSync('test.txt', {encoding: 'utf-8', flag: 'r'});
console.log(data)

// different stat of file
fs.stat('test.txt', (error, stat) => {
    if (error) {
        console.log(error)
        return
    }

    console.log(stat.isFile())
    console.log(stat.isDirectory())
    console.log(stat.isSymbolicLink())
    console.log(stat.size)
})


## Write and update Files
<!-- Synchronous -->
const content = {
    type: "Node Application"
}

fs.writeFileSync('test.json', JSON.stringify(content))

// important metthod

// fs.writeFile()
// fs.readFile();
// fs.unlink();

// or

// fs.writeFileSync();
// fs.readFileSync();
// fs.unlinkSync();


const content = {
    type: "Node Application"
}

const msg = "Hello there"

<!-- Asynchronous -->
// a+ (means) open the file reading and writing and file is created if its not exits
// a (means) open the file writing and file is created if its not exits
// w+
// r+
fs.writeFile('test.txt', msg, { flag: 'a+'}, err => {
    if (err) {
        console.log(err)
        return
    }

    console.log('Successfuly Done')
})


// Delete file
fs.unlink('test.txt', err => {
    if (err) {
        console.log(err)
        return 
    }

    console.log('File removed')
})


## Routing
