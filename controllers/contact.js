const path = require('path');
const rootDir = require('../utils/path')

exports.contact= function (req, res){
    res.sendFile(path.join(rootDir, 'views','contact.html'));
}

exports.postSuccess=function (req, res){
    res.send( "Form successfuly filled");
}