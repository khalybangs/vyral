const express = require('express');
const profiles = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

// EXTRACT USER FRIENDS
//----------------------
// followers
profiles.get('/getFlwrsp', (req, res) =>{
    db.getDB().collection(cltusers).find(req.session.userId).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents._id);
            res.json(documents);
        }
    });
});
// following
profiles.get('/getFlwnp', (req, res) =>{
    db.getDB().collection(cltusers).find(req.session.userId).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents._id);
            res.json(documents);
        }
    });
});

// get all users
profiles.get('/allUsers', (req, res) =>{
    db.getDB().collection(cltusers).find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('all users = '+documents.length);
            res.json(documents);
        }
    });
});

/**
 * --------------
 * FRIENDS FUNCS
 * --------------
 */
// follow user
profiles.put('/FollowUser', (req, res) =>{
    const dataId = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$push: {following: dataId}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(dataId.user)}, {$push: {followers: {user: req.session.userId}}} , {returnOriginal: true}, (err, result) => {
                console.log(req.session.userId + ' just followed ' + dataId.user + ' and added user to accepted list');
                console.log(result);
                res.json(result);
            });
        }
    });
});
// un-follow user
profiles.put('/UnFollow', (req, res) =>{
    const dataId = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(dataId.me)}, {$pull: {following: {user: dataId.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('unfollow!');
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(dataId.me)}).forEach(function(doc) {
                console.log('user to unfollow: '+dataId.user);
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(dataId.user)}, {$pull: {followers: {user: doc._id}}} , {returnOriginal: true}, (err, result2) => {
                    console.log(req.session.userId + ' just unfollowed ' + dataId.user + ' and removed user from accepted list');
                    console.log(result);
                    res.json(result);
                });
            });
        }
    });
});

module.exports = profiles;
