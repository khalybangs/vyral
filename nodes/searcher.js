const express = require('express');
const search = express.Router();
const db = require("../server");
const cltusers = "users";

const cors = require('cors');
search.use(cors({
    origin: 'http://localhost:5000'
}));

search.post('/searchFrnd', (req, res) => {
    const data = req.body;
    console.log(data.srch);
    db.getDB().collection('users').find({ user_name : new RegExp(data.srch, "i") }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents.user_name);
            res.json(documents);
        }
    });
});

search.post('/searchStr', (req, res) => {
    const data = req.body;
    console.log(data.srch);
    db.getDB().collection('all_posts').find({ name : new RegExp(data.srch, "i") }).toArray((err, documents) => {
        if (err)
            console.log(err);
        else{
            console.log(documents._id);
            res.json(documents);
        }
    });
    
});

search.post('/searchJBs', (req, res) => {
    const data = req.body;
    console.log(data.srch);
    db.getDB().collection('all_posts').find({ $or :[{heading : new RegExp(data.srch, "i")}, {title: new RegExp(data.srch, "i")}] }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents.heading);
            res.json(documents);
        }
    });
});

// exports
module.exports = search;