const express = require('express');
const router = express.Router();
const { 
    currentagentcy, 
    personalinfomation 
} = require('../controller/agency-controller');

router.get('/currentagentcy', currentagentcy);
router.post('/personalinfomation', personalinfomation);

module.exports = router;