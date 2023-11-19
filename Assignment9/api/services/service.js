// service.js

const { User } = require('../models/model');
const bcrypt = require('bcrypt');

const userService = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({});
            res.send(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    createUser: async (req, res) => {
        try {
            // ...
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
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    editUser: async (req, res) => {
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
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { email } = req.body;

            const existingUser = await User.findOne({ email });

            if (!existingUser) {
                res.status(400).json({ error: 'User not found', errorCode: 'USER_NOT_FOUND' });
                return;
            }

            // Delete the user
            await existingUser.remove();

            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    loginUser: async (req, res) => {
        try {
            const {email,password} =req.body;
            User.findOne({email:email},(err,user)=>{
                if(user){
                    bcrypt.compare(password, user.password).then(isMatch => {
                        if (isMatch) {
                    res.send({message:"login success",user:user})
                        } else{
                            res.send({message:"You have entered wrong credentials, please check again."})
                        }
                    })
                }else{
                    res.send({message: "Please register"})
                }
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    }
};

module.exports = userService;
