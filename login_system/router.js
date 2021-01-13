const express = require('express');

var router = express.Router();


// stattic data
const credential = {
    email: 'admin@admin.com',
    password: 'admin'
}

// login user
router.post('/login', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
        // res.end('Login Success')
    } else {
        res.send('Invalid User')
    }
})

// route for dashboad
router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user })
    } else {
        res.send('Invalid User name')
    }
});

// route for logout
router.get('/logout', (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err)
            res.send('Error')
        } else {
            res.render('base', { title: "Express", logout: 'Logout Successfully..'})
        }
    })
})

module.exports = router;