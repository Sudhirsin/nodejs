const express = require('express');
const services = require('../services/render')

const route = express.Router();

const controller = require('../controller/controller');

// home routes
// route.get('/', (req, res) => {
//     res.render('index')
// })
// or
/**
 * @description Roote route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add user
 * @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 * @description update user
 * @method GET /update-user
 */
route.get('/update-user', services.update_user)



// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;