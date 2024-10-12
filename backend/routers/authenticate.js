const express = require('express');
require('dotenv').config();
const { 
    signin, 
    createagentcy  
} = require('../controller/authenticate-controller');
const router = express.Router();

router.post('/signin', signin);
router.post('/createagentcy', createagentcy);

module.exports = router;