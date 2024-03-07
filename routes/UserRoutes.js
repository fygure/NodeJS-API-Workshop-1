const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUsers);
router.get('/search', UserController.searchUsers);
//TODO: add more routes here

module.exports = router;