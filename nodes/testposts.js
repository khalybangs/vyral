const express = require('express');
const tester = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const test = "testposts";

// get/read todos
tester.get('/getTests', (req, res) =>{
    db.getDB().collection(test).find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            console.log(documents);
            res.json(documents);
        }
    });
});

module.exports = tester;
