const express = require('express');
const shop = express.Router();
const db = require("../server");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
var axios = require('axios');
const session = require('express-session');

// AUTHOR'S SEC
//add posts node
shop.post('/addTops', (req, res)=>{
    console.log(adminId.mail + ' has placed a post');
    const postinfo = req.body;
    const carts  = postinfo.cartegory;
    const mail = adminId.mail;
    db.getDB().collection('top_shop').insertOne(postinfo, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!');
            res.json(result);
        }
    });
});

// USER's SEC
// get/read tops
shop.get('/getTops', (req, res) =>{
    db.getDB().collection('top_shop').find({}).sort({ $natural: -1 }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents.length);
            res.json(documents);
        }
    });
});

// check users by id
shop.post('/searchUsers', (req, res)=>{
    const dataID = req.body;
    console.log('check user- '+dataID.user);
    db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(dataID.user)}).toArray((err, doc) => {
        console.log(doc[0].user_name);
        res.json(doc[0]);
    });
});

// LIKE FUNCTIONALITIES
//---------------------------
// like post
shop.put('/:id', (req, res) =>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('top_shop').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: data} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just liked a post by ' + data.user);
            res.json(result);
        }
    });
});
// find if user liked post
shop.get('/:id', (req, res)=>{
    const dataID = req.params.id;
    db.getDB().collection('top_shop').find({_id: db.getPrimaryKey(dataID)}).forEach((doc) => {
        console.log('checking likes for this Post: '+doc);
            res.json(doc.likedBy);
        });
    });
// unlike
shop.put('/unlike/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    console.log(data);
    db.getDB().collection('top_shop').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: data}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Un-liked post '+ data.likedBy + ', for ' + dataID);
            console.log(result.result);
            res.json(result);
        }
    });
});

// COMMENT FUNCTIONALITIES
//-------------------------
// find comments
shop.get('/comments/:id', (req, res)=>{
    const dataID = req.params.id;
    db.getDB().collection('top_shop').find({_id: db.getPrimaryKey(dataID)}).forEach((doc) => {
        console.log('checking comments for this Post: '+doc);
        res.json(doc.comments);
    });
});
// push comment
shop.put('/comment/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('top_shop').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: {comments: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just commented on a post by ' + data.user);
            res.json(result);
        }
    });
});
// remove comment
shop.put('/remComment/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    console.log(data);
    db.getDB().collection('top_shop').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: data}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('removed comment by '+ data.likedBy + ', for ' + dataID);
            console.log(result.result);
            res.json(result);
        }
    });
});


module.exports = shop;