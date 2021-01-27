const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(function(req, res, next) {
    console.log("Request Date: "+ new Date())
    // res.send('Welocme middlware app')

    // 1. ways to server static file
    // res.sendFile("/static/cool.txt")

    // 2. way to server file with middle ware


    next();
})


app.use(function(req, res, next) {
    var filepath = path.join(__dirname, "static", req.url)

    fs.stat(filepath, function(err, fileinfo) {
        if (err) {
            next();
            return
        }

        if (fileinfo.isFile()) {
            res.sendFile(filepath)
        } else {
            next();
        }
    })
})

app.use(function(req, res) {
    res.status(404)
    res.send('File not found')
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))