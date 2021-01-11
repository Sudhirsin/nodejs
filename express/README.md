### ExpressJs
ExpressJs is web application framework for nodejs.
It provides various feature 
1. Fast & Easy
2. Its similar to JQuery
3. Simplify Node APi
4. Simple web server
5. Middleware
6. Functional Programming
4. Restful Api
7. Template & database(NoSQL) we can use rational database also


## Nodemon --> used to run the file when any changes done in code.

### simple example
const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.send('Ponging')
});

app.listen(3001, () => console.log("Application is runnitn at PRT 3000"))

## Middleware
Middleware make 3 important task
1. making the changes in req & res and req and res cycle
2. end cycle

its important for making an aunthentication
app.use ==> use is used to call the middleware

const express = require('express');

const app = express();

const myLogger = function(req, res, next) {
    console.log("Logged")
    next();
}

const requestTime = function(req, res, next) {
    req.reqTime = Date.now();
    next()
}

app.use(myLogger)
app.use(requestTime)

app.get('/', (req, res) => {
    // res.send("Home route")
    res.send(`Current Time ${req.reqTime}`)
})

app.listen(3001, () => console.log("Ruunig on port"))

## Static file in express
const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.resolve(__dirname, 'public') // it will the current directory name

app.use(express.static('public'))
app.use(express.static('images'))

// 1st method
app.use('/public', express.static('static'))

// 2nd method
app.use(publicpath, express.static('static'))

app.get('/', (req, res) => {
    res.send("Home route")
})

app.listen(3001, () => console.log("Ruunig on port"))


## Routing
const express = require('express');

const app = express();

const PORT = 3001

const data = {
    id: 1,
    name: "Sudhir"
}

app.get('/', (req, res) => {
    res.send("Welcome to my home page")
});

app.get('/about', (req, res) => {
    res.send("Welcome to my about page")
})

app.get('/weather', (req, res) => {
    res.send("Welcome to my weather page")
})

app.get('/data', (req, res) => {
    // both are used to send the data
    // res.send(data)
    res.json(data)
})

app.listen(PORT, () => console.log(`Ruunig on ${PORT}`))


## VIews
install pug to sever the html
npm i pug


## Core of Express (Advance)
1. Session
2. Cookies
3. Core Middleware
4. Core Routing 
5. build own Api
6. Core Views
7. Database integration

## Session
Session are used to track the use activity.

const express = require('express');
const app = express();
const session = require('express-session')
const PORT = process.env.PORT || 3001;


// Session
// need to install esxpress-session
// to set the sesion module in express we have to use session as middleware
app.use(session({
    secret: 'Youre_secret_key',
    resave: true,  // force the session to be saved
    saveUninitialized: true // going to force the uninitialized to save and store
}))

app.get('/', (req, res) => {
    req.session.name = "Sudhir"
    return res.send('Session set')
});

app.get('/session', (req, res) => {
    console.log(req.session)
    var name = req.session.name
    return res.send(name)
})

// destroy the session
app.get('/destroy', (req, res) => {
    req.session.destroy(function(err) {
        console.log("Session Destroyed")
    })
    res.end();
})


app.listen(PORT, () => console.log(`Running on PORT ${PORT}`))

## Cookies
Cookies are small data that are store on client side and send to client along with server request
Cookies has various functionality.
maintaining session

