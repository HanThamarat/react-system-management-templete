const express = require('express');
const { 
    createBoatPackage 
} = require('../controller/boatpackages-controller');

const router = express.Router();

router.post('/boatpackages', createBoatPackage);

module.exports = router;
