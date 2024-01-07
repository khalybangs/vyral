const express = require('express');
const logval = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

// Q/A validations
logval.post('/qaval', (req, res)=>{
    data = req.body;
    console.log(data.A + data.user_name);
    db.getDB().collection(cltusers).find(data.user_name).forEach(function(doc){
        console.log("from DB "+doc.pwd);
        res.json(doc);
    })
})

//exports
module.exports = logval;