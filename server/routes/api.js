const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/check_updates', apiController.check_updates);

router.get('/download/:version', apiController.upload_update);

module.exports = router;
