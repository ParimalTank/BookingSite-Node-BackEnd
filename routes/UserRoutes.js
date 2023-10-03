const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController")

// For User Registration
router.post('/signup', UserController.signup);

// for User login
router.post('/login', UserController.login);

// for admin logout
// router.get('/logout' , auth, UserController.logout);

// default route
// router.post('/')

module.exports = router;