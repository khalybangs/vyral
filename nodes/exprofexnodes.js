const express = require('express');
const exnodes = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

// extract external user data
exnodes.get('/getData', (req, res)=>{
    db.getDB().collection(cltusers).find(exUser).forEach(function(doc) {
        if (doc.user_name == exUser) {
            exUser2 = doc._id;
            console.log('external user ID: ' + exUser2);
            res.json(doc);
        }
    });
});

// EXTRACT EXT-USER POSTS
exnodes.get('/getPosts', (req, res) =>{
    db.getDB().collection('all_posts').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents);
            res.json(documents);
        }
    });
});

// FOLLOW/UNFOLLOW USER FUNCTIONALITIES
//--------------------------------------
// follow user
exnodes.put('/FollowUser', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$push: {following: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(req.session.userId)}).forEach(function(doc) {
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$push: {followers: {user: doc._id}}} , {returnOriginal: true}, (err, result) => {
                    console.log(req.session.userId + ' just followed ' + exUser2 + ' and added user to accepted list');
                    console.log(result);
                    res.json(result);
                });
            });
        }
    });
});
exnodes.put('/FollowUserMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.id)}, {$push: {following: data.following}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(data.id)}).forEach(function(doc) {
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$push: {followers: {user: doc._id}}} , {returnOriginal: true}, (err, result) => {
                    console.log(data.id + ' just followed ' + data.ex + ' and added user to accepted list');
                    console.log(result);
                    res.json(result);
                });
            });
        }
    });
});
// add followed user to notificatinos
exnodes.put('/FolToNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$push: {new_notis: data, notifications: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
})
exnodes.put('/FolToNotiMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$push: {new_notis: data.noti, notifications: data.noti}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
})
// un-follow user
exnodes.put('/UnFollow', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$pull: {following: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(req.session.userId)}).forEach(function(doc) {
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$pull: {followers: {user: doc._id}}} , {returnOriginal: true}, (err, result) => {
                    console.log(req.session.userId + ' just unfollowed ' + exUser2 + ' and removed user from accepted list');
                    console.log(result);
                    res.json(result);
                });
            });
        }
    });
});
exnodes.put('/UnFollowMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.id)}, {$pull: {following: data.following}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(data.id)}).forEach(function(doc) {
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$pull: {followers: {user: doc._id}}} , {returnOriginal: true}, (err, result) => {
                    console.log(data.id + ' just unfollowed ' + data.ex + ' and removed user from accepted list');
                    console.log(result);
                    res.json(result);
                });
            });
        }
    });
});
// remove followed user from notificatinos
exnodes.put('/UnFolToNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$pull: {new_notis: data, notifications: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Pulled Notification!');
            console.log(result);
            res.json(result);
        }
    });
});
exnodes.put('/UnFolToNotiMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$pull: {new_notis: data.noti, notifications: data.noti}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// Exuser Add to friend waiting list functions
exnodes.put('/AddReq', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$push: {waiting_list: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(exUser2 + ' just inserted ' + req.session.userId + ' into waiting list');
            console.log(result);
            res.json(result);
        }
    });
});
exnodes.put('/AddReqMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$push: {waiting_list: data.wait}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(data.ex + ' just inserted ' + data.id + ' into waiting list');
            console.log(result);
            res.json(result);
        }
    });
});
// add req/followed user to notificatinos
exnodes.put('/AddReqNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$push: {new_notis: data, notifications: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
});
exnodes.put('/AddReqNotiMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$push: {new_notis: data.noti, notifications: data.noti}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// Exuser remove friend from waiting list functions
exnodes.put('/RemReq', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$pull: {waiting_list: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(exUser2 + ' just removed ' + req.session.userId + ' from waiting list');
            console.log(result);
            res.json(result);
        }
    });
});
exnodes.put('/RemReqMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$pull: {waiting_list: data.wait}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(data.ex + ' just removed ' + data.id + ' from waiting list');
            console.log(result);
            res.json(result);
        }
    });
});
// remove req/followed user from notificatinos
exnodes.put('/RemReqNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$pull: {new_notis: data, notifications: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Pulled Notification!');
            console.log(result);
            res.json(result);
        }
    });
});
exnodes.put('/RemReqNotiMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$pull: {new_notis: data.noti, notifications: data.noti}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

// SUBS SETTINGS
// update-set
exnodes.post('/setUsrtp', (req, res) => {
    const prfp = req.body;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(prfp.id)}, {$set: {user_type: prfp.user_type}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
// subs
// add followed user to notificatinos
exnodes.put('/addSubnt', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(exUser2)}, {$push: {new_notis: data, notifications: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
});
exnodes.put('/addSubntMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$push: {new_notis: data.noti, notifications: data.noti}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
});

exnodes.post('/addSub', (req, res, next) => {
    const userName = req.body;

    db.getDB().collection('subscriptions').insertOne(userName, (err, result) => {
        if (err) {
            const error = new Error("Failed to insert sub Document");
            error.status = 400;
            next(error);
        }else {
            res.json({result : result, resultId: result.insertedId, document : result.ops[0], msg : "Successfully inserted sub Document!!!", error : null});
            console.log(result.insertedId);
            tut = 'Yes';
        }
    });
            
});

module.exports = exnodes;