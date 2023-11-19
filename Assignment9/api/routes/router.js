const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller');

// Define your routes using the userController functions

router.get('/user/getAll', userController.getAllUsers);
router.post('/user/create', userController.createUser);
router.put('/user/edit', userController.editUser);
router.delete('/user/delete', userController.deleteUser);
router.post('/user/login', userController.loginUser);
module.exports = router;
