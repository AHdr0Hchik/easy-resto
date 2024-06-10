const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/check_updates', apiController.check_updates);

module.exports = router;
