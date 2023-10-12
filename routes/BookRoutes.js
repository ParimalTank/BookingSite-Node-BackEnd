const express = require('express');
const router = express.Router();
const BookingController = require("../controllers/BookingController")

// For User Registration
router.post('/booking', BookingController.booking);

// for User login
// router.post('/login', UserController.login);

// for admin logout
// router.get('/logout' , auth, UserController.logout);

// default route
// router.post('/')

module.exports = router;