const express = require('express');
const createUser = require('../Controllers/userContollers');
const router = express.Router();

router.post('/createUser', createUser);

module.exports = router;
