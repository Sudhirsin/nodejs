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
        // res.redirect('/dashboard')
        res.end('Login Success')
    } else {
        res.send('Invalid User')
    }
})

module.exports = router;