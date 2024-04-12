const express = require('express');
const router = express.Router();

const productContoller=require('../controllers/product')
router.get('/', productContoller.getProducts)
module.exports = router;