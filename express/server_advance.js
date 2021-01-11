const express = require('express')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

// serialize the data otherwise will get error
app.use(express.urlencoded({
    extended: true
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index_html', { title: 'Form Handling' })
})


app.post('/form_submit', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    res.end(`You username is ${username} and email is ${email}`)
});

app.listen(3000, () => console.log(`Running on PORT ${PORT}`))