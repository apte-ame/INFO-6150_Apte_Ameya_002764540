// controller.js

const userService = require('../services/service');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            // Controller-specific logic (if any)
            userService.getAllUsers(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    createUser: async (req, res) => {
        try {
            // Controller-specific logic (if any)
            userService.createUser(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    editUser: async (req, res) => {
        try {
            // Controller-specific logic (if any)
            userService.editUser(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            // Controller-specific logic (if any)
            userService.deleteUser(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

    loginUser: async (req, res) => {
        try {

            userService.loginUser(req, res);
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error', errorCode: 'SERVER_ERROR' });
        }
    },

};

module.exports = userController;
