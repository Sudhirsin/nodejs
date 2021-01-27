// morgan is third party which is middleware for logger


const express = require('express');
const morgan = require('morgan');
const { v4:uuidv4 } = require('uuid');
const fs = require('fs')
const path = require('path')


const app = express();
const PORT = 3000;

// to create new token
morgan.token('id', function getId(req) {
    return req.id
})

morgan.token('param', function(req, res, param) {
    return "UserToken"
})

app.use(assignId);

// app.use(morgan('combined'))
// app.use(morgan('tiny'))
// app.use(morgan(':method :status :url')) // GET 200 /

let accessLog = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: 'a' })

app.use(morgan(':id :param :method :status :url')) // GET 200 /
app.use(morgan(':id :param :method :status :url', { stream: accessLog })) // GET 200 /

app.get('/', (req, res) => {
    res.end('Morgan logger app')
})


function assignId(req, res, next) {
    // generate unique id
    req.id = uuidv4();
    next();
}

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))