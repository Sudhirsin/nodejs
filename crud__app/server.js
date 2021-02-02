const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080;


// log requests
app.use(morgan('tiny'))

// mongo db connectioin
connectDB()

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set the views engine
app.set("view engine", "ejs")

// if we move the ejs in different folder then we need to inform express to the paricular path
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))


// moved to routes folder
// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/add-user', (req, res) => {
//     res.render('add_user')
// })

// app.get('/update-user', (req, res) => {
//     res.render('update_user')
// })

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => console.log(` Server is running on http://localhost:${PORT}`))