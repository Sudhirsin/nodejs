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