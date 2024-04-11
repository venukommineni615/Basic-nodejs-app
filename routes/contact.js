const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path')
router.get('/contactus', function (req, res){
    res.sendFile(path.join(rootDir, 'views','contact.html'));
})
router.post('/success', function (req, res){
    res.send( "Form successfuly filled");
})
module.exports = router;