/** Woring with files */

// fs -> file system
const fs = require('fs');

// readFile method allow us to read the data from file
// asyncronous ways
// fs.readFile('test.txt', 'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log(data)
// })

// synchronous way
// const data = fs.readFileSync('test.txt', {encoding: 'utf-8', flag: 'r'});
// console.log(data)

// different stat of file
// fs.stat('test.txt', (error, stat) => {
//     if (error) {
//         console.log(error)
//         return
//     }

//     console.log(stat.isFile())
//     console.log(stat.isDirectory())
//     console.log(stat.isSymbolicLink())
//     console.log(stat.size)
// })


/** Working with write and uplate files */

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

// fs.writeFileSync('test.json', JSON.stringify(content))

// a+ (means) open the file reading and writing and file is created if its not exits
// a (means) open the file writing and file is created if its not exits
// w+
// r+
// fs.writeFile('test.txt', msg, { flag: 'a+'}, err => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     console.log('Successfuly Done')
// })


// Delete file

fs.unlink('test.txt', err => {
    if (err) {
        console.log(err)
        return 
    }

    console.log('File removed')
})
