const express = require('express');
const login = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

var userId = '';

// check for user if forgot-password and assign general variable
var genUser = '';
login.post('/checkUser', (req, res) => {
    const data = req.body;
    console.log(data);
    db.getDB().collection(cltusers).find(data).toArray((err, doc) => {
        if (doc) {
            var info = '';
            if (doc.length < 1) {
                console.log('user does not exists');
                info = 'notExists';
                res.json(info);
            } else {
                if (data.user_name === doc[0].user_name) {
                    answer = 'false';
                    rando = false;
                    genUser = doc[0];
                    res.json(doc[0]);
                }
                else {
                    info = 'notExists';
                    res.json(info);
                    console.log('user data not correct');
                }
            }
        }else{
            console.log('none');
        }
    })
});

// check for mail
login.post('/checkMail', (req, res) => {
    const data = req.body;
    console.log(data);
    db.getDB().collection(cltusers).find(data).toArray((err, doc) => {
        if (doc) {
            var info = '';
            if (doc.length < 1) {
                console.log('email not assigned');
                info = 'notAssigned';
                res.json(info);
            } else {
                if (data.email === doc[0].email) {
                    answer = 'false';
                    rando = false;
                    res.json(doc[0]);
                }
                else {
                    info = 'notAssigned';
                    res.json(info);
                    console.log('email not assigned');
                }
            }
        }else{
            console.log('none');
        }
    })
});

// q/a send question
login.get('/getGenUser', (req, res) => {
    console.log('email: '+genUser.email);
    res.json(genUser);
});


// q/a send question
login.get('/getQuest', (req, res) => {
    console.log(genUser.Q);
    res.json(genUser.Q);
});
// check answer
var answer = 'false';
login.post('/answerVer', (req, res) => {
    var data = req.body;
    var send = '';
    console.log(data.answer);
    if (data.answer == genUser.A) {
        send = 'true';
        answer = 'true';
        res.json(send);
    }else {
        send = 'false';
        answer = 'false';
        res.json(send);
    }
});
// check answer checkAns
login.get('/checkAns', (req, res) => {
    res.json(answer);
});
// q/a fetch
login.post('/Q&A', (req, res) => {
    const data = req.body;
    db.getDB().collection(cltusers).find(data).forEach(function(doc){
        console.log(data.user_name+doc.user_name);
        if (doc) {
            if (data.user_name === doc.user_name) {
                res.json(doc)
                console.log('work!');
            }
            else {
                console.log('user data not correct');
            }
        }else{
            console.log('none');
        }
    })
});

// unHash
login.post('/findHash', (req, res)=>{
    const data = req.body;
    db.getDB().collection("hsh_pwd").find(data).forEach(function(doc){
        console.log(data.user_name+doc.user_name);
        if (doc) {
            if (data.user_name === doc.user_name) {
                res.json(doc)
                console.log('work!');
            }
            else {
                console.log('user data not correct');
            }
        }else{
            console.log('none');
        }
    })
});

// update password
login.put('/updatePwd', (req, res)=>{
    const data = req.body;
    console.log(data, genUser._id);
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(genUser._id)}, {$set: {pwd: data.pwd}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(genUser._id + ' just updated their pwd to ' + data.pwd);
            db.getDB().collection("hsh_pwd").find({}).toArray((err, doc) => {
                if (doc) {
                    for (let i = 0; i < doc.length; i++) {
                        if (doc[i].u_id == genUser._id) {
                            console.log(doc[i]);
                            db.getDB().collection('hsh_pwd').findOneAndUpdate({_id: db.getPrimaryKey(doc[i]._id)}, {$set: {main_hsh: data.gen, glob_multi: data.glb}} , {returnOriginal: true}, (err, result) => {
                                if (err) console.log(err);
                                else {
                                    console.log(genUser._id + ' just updated their hashes to ' + data.gen + ' & ' + data.glb);
                                    res.json(result);
                                }
                            });
                        }
                    }
                }else{
                    console.log('none');
                }
            })
        }
    });
});

// update password
login.put('/updatePwdMobile', (req, res)=>{
    const data = req.body;
    console.log(data, data.user);
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.user)}, {$set: {pwd: data.pwd}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(data.user + ' just updated their pwd to ' + data.pwd);
            db.getDB().collection("hsh_pwd").find({}).toArray((err, doc) => {
                if (doc) {
                    for (let i = 0; i < doc.length; i++) {
                        if (doc[i].u_id == data.user) {
                            console.log(doc[i]);
                            db.getDB().collection('hsh_pwd').findOneAndUpdate({_id: db.getPrimaryKey(doc[i]._id)}, {$set: {main_hsh: data.gen, glob_multi: data.glb}} , {returnOriginal: true}, (err, result) => {
                                if (err) console.log(err);
                                else {
                                    console.log(data.user + ' just updated their hashes to ' + data.gen + ' & ' + data.glb);
                                    res.json(result);
                                }
                            });
                        }
                    }
                }else{
                    console.log('none');
                }
            })
        }
    });
});

/* FOR VERIFICATION CODE
------------------------
*/
// check if code been ver
var rando = false;
login.get('/checkRan', (req, res)=>{
    res.json(rando);
});
// verify
login.post('/ranTrue', (req, res)=>{
    rando = true;
    res.json(rando);
});


//exports
module.exports = login;