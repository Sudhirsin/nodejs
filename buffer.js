// if helps devloper to deal with binary data
// will return the array
// const buf = Buffer.from("hey")

const buf = Buffer.alloc(4)

console.log(buf.toString())
console.log(buf)
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])