const path = require('path');


// will return the last portion of the path
// file = path.basename("test.json")
// file = path.basename("tutorial/test.json")

// will return the direction
// file = path.dirname('tutorials/test.json')
// file = path.isAbsolute('tutorials/test.json') // false

// joining the path
// let dir =  "tutorials"
// file = path.join("C:Users/Sudhir/Desktop", dir, "test.json")

// parse -> return object with all the 
// {
//   root: '',
//   dir: 'Sudhir/Desktop',
//   base: 'test.json',
//   ext: '.json',
//   name: 'test'
// }
file = path.parse("Sudhir/Desktop/test.json")


console.log(file)