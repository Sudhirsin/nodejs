
const express = require('express');
const app = express();
const cookies = require('cookie-parser')
const PORT = process.env.PORT || 3002;

// need to install cookie-parser
app.use(cookies());

let user = {
    name: 'Sudhir',
    age: 35
}

app.get('/', (req, res) => {
    res.send('Cookie Tutorials')
})

app.get('/setuser', (req, res) => {
    res.cookie("userdata", user)
    res.send('User data added to cookies')
})

app.get('/getuser', (req, res) => {
    res.send(req.cookies)
})


app.get('/logout', (req, res) => {
    res.clearCookie('userdata')
    res.send('User logout successfully')
})


app.listen(PORT, () => console.log(`Running on PORT ${PORT}`))