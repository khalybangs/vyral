const express = require('express');
const transct = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

// extract new-notifications

//save reciept
transct.post('/reciept', (req, res, next) => {
    const reciept = req.body;
    db.getDB().collection('transactions').insertOne(reciept, (err, result) => {
        if (err) {
            const error = new Error("Failed to insert payment Document");
            error.status = 400;
            next(error);
        }else {
            res.json({result : result, resultId: result.insertedId, document : result.ops[0], msg : "Successfully inserted payment Document!!!", error : null});
            console.log(result.insertedId);
        }
    });
});

// get all trn
// get authors
transct.get('/getTrnsct', (req, res) =>{
    db.getDB().collection('transactions').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            console.log(documents._id);
            res.json(documents);
        }
    });
});

// trnsct to user notis
transct.put('/payUNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$push: {new_notis: data, notifications: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
});

module.exports = transct;