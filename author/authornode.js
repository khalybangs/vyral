const express = require('express');
const authornodes = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const authors = "authors";
const bjposts = "bjposts";

// get author Info
authornodes.get('/authorInfo', (req, res) => {
    db.getDB().collection(authors).find({_id : db.getPrimaryKey(adminId)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('specific auhor: '+result.mail);
            res.json(result);
        }
    });
});
// get all-author Info
authornodes.get('/allAuthors', (req, res) => {
    db.getDB().collection('authors').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('Author info extracted');
            res.json(documents);
        }
    });
});

//add posts node
authornodes.post('/addJournal', (req, res)=>{
    console.log(adminId + ' has placed a post');
    const postinfo = req.body;
    const carts  = postinfo.cartegory;
    db.getDB().collection('all_posts').insertOne(postinfo, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!');
            res.json(result);
        }
    });
});

// add link
authornodes.put('/addSrcs', (req, res) =>{
    const data = req.body;
    db.getDB().collection('authors').findOneAndUpdate({_id: db.getPrimaryKey(adminId)}, {$push: {my_srcs: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
});
// rem srcs
authornodes.put('/remSrc', (req, res) =>{
    const data = req.body;
    db.getDB().collection('authors').findOneAndUpdate({_id: db.getPrimaryKey(adminId)}, {$pull: {my_srcs: data.src}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(adminId + ' rem src ' + data.src);
            console.log(result);
            res.json(result);
        }
    });
});

// get existing posts
authornodes.get('/getbjPosts', (req, res) => {
    db.getDB().collection('all_posts').find({}).sort({ $natural: -1 }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents.length);
            res.json(documents);
        }
    });
});

// update post
authornodes.post('/updateJrn/:id', (req, res) => {
    const post = req.body;
    const id = req.params.id;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {heading: post.heading, body: post.body }} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log('updated jrn: ');
            console.log(result);
        }
    });
});

// delete post
authornodes.delete('/delete/:id', (req, res) => {
    const dataID = req.params.id;
    console.log(dataID);
    db.getDB().collection('all_posts').findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

//exports
module.exports = authornodes;