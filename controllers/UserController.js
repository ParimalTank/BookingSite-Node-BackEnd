const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Random 6 digit OTP Generator
let OTP = Math.random();
OTP = OTP * 1000000;
OTP = parseInt(OTP);

const register = async (req, res) => {

    const userData = await req.body;
    console.log("userData: ", userData);

    await User.find({ email: userData.email })
        .then((user) => {
            if (user.length >= 1) {
                res.status(409).json({
                    message: "Already Hava a Account Using This Email , Try Another One",
                });
            } else {
                bcrypt.hash(userData.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                        });
                    } else {
                        const user = new User({
                            username: userData.username,
                            email: userData.email,
                            password: hash,
                            otp: OTP
                        });
                        user
                            .save()
                            .then((result) => {

                                res.status(201).json({
                                    message: "User Created Successfully",
                                });
                            })
                            .catch((err) => {
                                console.log(err);

                                res.status(400).json({
                                    error: err,
                                });
                            });
                    }
                });
            }
        });
}

// User Login

const login = async (req, res) => {

    const userData = await req.body;

    User.findOne({ email: userData.email })
        .then(user => {
            if (user.length < 1) {
                return res.status(404).json({
                    message: "Auth Fail"
                })
            } else {

                bcrypt.compare(userData.password, user.password, (err, result) => {

                    if (err) {

                        res.status(401).json({
                            message: 'Auth Failed'
                        })
                    }
                    if (result) {

                        const token = jwt.sign(
                            {
                                id: user._id,
                                email: user.email,
                                password: user.password
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            }
                        );

                        res.cookie("token", token, { httpOnly: true }).send();

                    } else {

                        res.status(400).json({
                            message: 'Auth Failed'
                        });
                    }
                })
            }
        })
        .catch(err => {
            return res.status(400).send();
        })
}

//logout user
const logout = (req, res, next) => {

    try {
        res.clearCookie("token");


        res.render('login');

    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

// also Required a Token But for now use OTP  // This is Remaining 
// const verification = (req, res) => {

//     const { otp } = await req.body;
// }


module.exports = {
    logout,
    login,
    register
}