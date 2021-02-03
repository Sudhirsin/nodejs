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
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creatin the user"
            })
        })
}

// retrive all user / return single user
exports.find = (req, res) => {
    // for single user
    if (req.query.id) {
        const id = req.query.id
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `not found user with ${id}`
                    })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: 'error while retiving the single with' + id
                })
            })

    } else {
        // get all users
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ 
                    "message": "Error occured while retrieving user information"
                })
            })
    }
}

// update the user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: 'Data to update can not be empty' })
    }   

    const id = req.params.id; // url parameter

    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update user with ${id} may user not found`
                })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error update user information"
            })
        })

}

// delete user with id
exports.delete = (req, res) => {
    const id = req.params.id

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `cannot delet with id ${id} may be wrong`
                })
            } else {
                res.send({
                    message: "User deleted succefully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `could not delete with id ${id}`
            })
        })
}