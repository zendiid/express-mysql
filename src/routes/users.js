const express = require('express');

const userController = require('../controllers/users.js')

const router = express.Router();

// Create - POST
router.post('/', userController.createNewUser);

// Read - GET
router.get('/', userController.getAllUsers);

// Update - PATCH
router.patch('/:idUser', userController.updateUser);

// Delete - DELETE
router.delete('/:idUser', userController.deleteUser);

module.exports = router;