var Userdb = require('../model/model');


// create and save user
exports.create = (req, res) => {
    // validate reques
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty' })
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creatin the user"
            })
        })
}

// retrive all user / return single user
exports.find = (req, res) => {
    
}

// update the user by user id
exports.update = (req, res) => {
    
}

// delete user with id
exports.delete = (req, res) => {
    
}