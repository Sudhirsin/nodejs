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
npm uninstall lodash

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








