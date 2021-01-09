// they are the way to handle reading writing file network comunication
// or any kind of information exchange 
// Advantages
// 1. Memory Efficiency
// 2. Time Efficiency

const http = require('http')
const fs = require('fs')

// const sever = http.createServer((req, res) => {
//     fs.readFile('test.json', (err, data) => {
//         res.end(data);
//     })
// })


// if file the big so we can use stream method
const sever = http.createServer((req, res) => {
    const stream = fs.createReadStream("test.json")
    stream.pipe(res)
})

sever.listen(3000, () => console.log("App is running on PORT 3000"))

// insted of sending the whole data once stream will send the data piece by piece