const express = require('express');
const { registerUser, loginUser } = require('../controller/User.controller');
const Userrouter = express.Router();


Userrouter.post('/register', registerUser);
Userrouter.post('/login', loginUser);




module.exports = Userrouter;
