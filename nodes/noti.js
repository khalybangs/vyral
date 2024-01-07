const express = require('express');
const notinodes = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

const cors = require('cors');
notinodes.use(cors({
    origin: 'http://localhost:5000'
}));

// extract notifications
notinodes.get('/all_notis', (req, res)=>{
    db.getDB().collection(cltusers).find(req.session.userId).toArray((err, doc) => {
            if (err) console.log(err);
            else {
                var usr = '';
                for (let i = 0; i < doc.length; i++) {
                    if (doc[i]._id == req.session.userId) {
                        usr = doc[i];
                    }            
                }
                res.json(usr);
            }
    });
});

// extract ex-user data
notinodes.post('/exUser', (req, res)=>{
    const data = req.body;
    db.getDB().collection(cltusers).find(data).toArray((err, doc) => {
        console.log('exUser data '+doc[0].user_name);
        res.json(doc[0]);
    });
});

// NOTIFICATION ACTIONS
//-----------------------
// clean new_notis
notinodes.post('/cleanNew', (req, res) => {
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$pull: {new_notis: data}} , {returnOriginal: true}, (err, result) => {
            if (err) console.log(err);
            else {
                console.log(result);
                res.json(result);
            }
    });
});
// follow-back
notinodes.post('/followBack', (req, res) => {
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$push: {following: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just followed ' + data.user + ' back');
            console.log(result);
            db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.user)}, {$push: {followers: {user: req.session.userId}}} , {returnOriginal: true}, (err, result2) => {
                console.log(result2);
                res.json(result2);
            });
        }
    });
});
notinodes.post('/followBackMob', (req, res) => {
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.me)}, {$push: {following: data.following}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just followed ' + data.user + ' back');
            console.log(result);
            db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.user)}, {$push: {followers: {user: req.session.userId}}} , {returnOriginal: true}, (err, result2) => {
                console.log(result2);
                res.json(result2);
            });
        }
    });
});
// push to following-group
notinodes.post('/pushFlwn', (req, res) => {
    const data = req.body;
    
});
/* request */
// unfollow
notinodes.post('/unFollow', (req, res) => {
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$pull: {following: data}} , {returnOriginal: true}, (err, result) => {
            if (err) console.log(err);
            else {
                console.log(result);
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.user)}, {$pull: {followers: {user: req.session.userId}}} , {returnOriginal: true}, (err, result2) => {
                    console.log(result2);
                    res.json(result2);
                });
            }
    });
});
notinodes.post('/unFollowMob', (req, res) => {
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.me)}, {$pull: {following: data.following}} , {returnOriginal: true}, (err, result) => {
            if (err) console.log(err);
            else {
                console.log(result);
                db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.following.user)}, {$pull: {followers: {user: data.me}}} , {returnOriginal: true}, (err, result2) => {
                    console.log(result2);
                    res.json(result2);
                });
            }
    });
});
// Exuser remove friend from waiting list functions
notinodes.post('/remWaiting', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$pull: {waiting_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just removed ' + data.user + ' from waiting list');
            db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$push: {followers: {user: data.user}}} , {returnOriginal: true}, (err, result2) => {
                if (err) console.log(err);
                else {
                    console.log(req.session.userId + ' just added ' + data.user + ' to his/her follower');
                    console.log(result2);
                    userFollows(data, req.session.userId);
                    res.json(result2);
                }
            });
        }
    });
});
notinodes.post('/remWaitingMob', (req, res) =>{
    const data = req.body;
    var me = data.me;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(me)}, {$pull: {waiting_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(me + ' just removed ' + data.user + ' from waiting list');
            db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(me)}, {$push: {followers: {user: data.user}}} , {returnOriginal: true}, (err, result2) => {
                if (err) console.log(err);
                else {
                    userFollows(data, me);
                    res.json(result2);
                }
            });
        }
    });
});
const userFollows = (data, userId) => {
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.user)}, {$push: {following: {user: data.me}}} , {returnOriginal: true}, (err, result2) => {
        if (err) console.log(err);
        else {
            console.log(data.user + ' have been added to ' + userId + '\'s following list');
        }
    });
}

/**
 * NOTI-FUNCS
 */
// send needed ex-user info
var newEx = '';
notinodes.post('/sendNotiUser', (req, res) =>{
    newEx = req.body.user;
    res.json('newEx = '+newEx);
});
// add-Noti
notinodes.put('/addNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(newEx)}, {$push: {notifications: data, new_notis: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
})
notinodes.put('/addNotiMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$push: {notifications: data.noti, new_notis: data.noti}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
})
// remove from their notifications
notinodes.put('/remNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(newEx)}, {$pull: {notifications: data, new_notis: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just removed ' + newEx + ' from notifications');
            console.log(result);
            res.json(result);
        }
    });
});
notinodes.put('/remNotiMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.ex)}, {$pull: {notifications: data.noti, new_notis: data.noti}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

// requests
// Exuser Add to friend waiting list functions
notinodes.put('/AddReq', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.to)}, {$push: {waiting_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// add req/followed user to notificatinos
notinodes.put('/AddReqNoti', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.to)}, {$push: {new_notis: data.send, notifications: data.send}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Notified');
            console.log(result);
            res.json(result);
        }
    });
});
// Exuser remove friend from waiting list functions
notinodes.put('/RemReq', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.to)}, {$pull: {waiting_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// remove req/followed user from notificatinos
notinodes.put('/RemReqNoti', (req, res) =>{
    const data = req.body;
    console.log('rem this: '+data.to);
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.to)}, {$pull: {new_notis: data.send, notifications: data.send}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Pulled Notification!');
            console.log(result);
            res.json(result);
        }
    });
});

// extract new-notifications

module.exports = notinodes;