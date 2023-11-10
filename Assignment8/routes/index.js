const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { User } = require('../models/user');
// const User = mongoose.model('assignment8-api-crud');


console.log('User: ', User);
router.get('/user/getAll', (req, res) => {

    User.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
});


// save users
router.post('/user/create', async (req, res) => {
    try {
        console.log(req.body)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const usernameRegex = /^[a-zA-Z0-9\s]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\[\]`|~])(?!.*\s).{8,}$/;
        const email = req.body.email;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists', errorCode: 'USER_ALREADY_EXISTS' });
            return;
        }
        if(!emailRegex.test(req.body.email)){
            res.status(400).json({ error: 'Invalid email', errorCode: 'INVALID_INPUT' });
            return;
        }
        if(!usernameRegex.test(req.body.fullname)){
            res.status(400).json({ error: 'Full name allows min length of 2 characters and only alphanumeric characters and spaces', errorCode: 'INVALID_INPUT' });
            return;
        }
        if(!passwordRegex.test(req.body.password)){
            res.status(400).json({ error: 'Password policy requires a mix of uppercase and lowercase letters, at least one digit, at least one special character, and a minimum length of 8 characters.', errorCode: 'INVALID_INPUT' });
            return;
        }
        const user = new User();
        user.fullname = req.body.fullname;
        user.email = req.body.email;
        user.password = req.body.password;
        
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
    }

})

//Update user data
router.put('/user/edit', async (req, res) => {
    try {
        const email = req.body.email;
        const fullname = req.body.fullname;
        const password = req.body.password;
        const usernameRegex = /^[a-zA-Z0-9\s]{2,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>?/\\[\]`|~])(?!.*\s).{8,}$/;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            res.status(400).json({ error: 'User does not exists', errorCode: 'USER_DOES_NOT_EXISTS' });
            return;
        }
        if(!usernameRegex.test(fullname)){
            res.status(400).json({ error: 'Full name allows min length of 2 characters and only alphanumeric characters and spaces', errorCode: 'INVALID_INPUT' });
            return;
        }
        if(!passwordRegex.test(password)){
            res.status(400).json({ error: 'Password policy requires a mix of uppercase and lowercase letters, at least one digit, at least one special character, and a minimum length of 8 characters.', errorCode: 'INVALID_INPUT' });
            return;
        }
      
          // Update user details
          existingUser.fullname = fullname;
          existingUser.password = password;
      
          await existingUser.save();
      
          res.json({ message: 'User details updated successfully' });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }

})

router.delete('/user/delete', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
        res.status(400).json({ error: 'User not found', errorCode: 'USER_NOT_FOUND' });
        return;
        }

        // Delete the user
        await existingUser.remove();

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
    }
})

module.exports = router;