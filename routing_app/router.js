const express = require('express');
const route = express.Router();

const accounts = require('./database');

// Get req
route.get('/accounts', (req, res) => {
    res.json({ 'userdata': accounts })
})

// Post request
route.post('/accounts', (req, res) => {
    const incomingAccount = req.body
    accounts.push(incomingAccount)
    res.json(accounts);
})

route.get('/accounts/:id', (req, res) => {
    const accountId = Number(req.params.id)
    const getAccount = accounts.find((account) => account.id === accountId)

    if (!getAccount) {
        res.status(500).send('Account not find')
    } else {
        res.json({ userdata: getAccount })
    }
})

module.exports = route;