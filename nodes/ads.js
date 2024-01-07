const express = require('express');
const ads = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

// fetch to check user length
ads.get('/checkusers', (req, res)=>{
    db.getDB().collection(cltusers).find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
});

module.exports = ads;