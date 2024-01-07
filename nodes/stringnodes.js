const express = require('express');
const strings = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

var xss = require("xss");

    // String_heads
    // Strings

// GET/READ STRINGS
strings.get('/getStrings', (req, res) =>{
    db.getDB().collection('all_posts').find({}).toArray((err, documents) => {
        if (err)
        console.log(err);
        else{
            console.log('all strings: '+documents.length);
            res.json(documents);
        }
    });
});
// get specific string
strings.post('/getSpecStr', (req, res)=>{
    const dataID = req.body;
    console.log(dataID);
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID._id)}).forEach((doc) => {
        console.log('getSpec Str: '+doc);
        res.json(doc);
    });
});
// get threads
strings.get('/getThreads', (req, res) =>{
    db.getDB().collection('all_posts').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('all threads: '+documents.length);
            res.json(documents);
        }
    });
});
// get specific threads
strings.post('/getSpecThread', (req, res) =>{
    const dataID = req.body;
    console.log(dataID);
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID._id)}).forEach((doc) => {
        console.log('getSpec thr: '+doc.user);
        res.json(doc);
    });
});
// check users by id
strings.post('/searchUsers', (req, res)=>{
    const dataID = req.body;
    console.log('check user- '+dataID.user);
    db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(dataID.user)}).toArray((err, doc) => {
        console.log(doc[0].user_name);
        res.json(doc[0]);
    });
});
// delete str
strings.delete('/deleteStr/:id', (req, res) => {
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
// update thr
strings.post('/updateThr/:id', (req, res) => {
    const post = req.body;
    const id = req.params.id;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: post} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log('updated thr: ');
            console.log(result);
        }
    });
});
// hang imgs
var hngImg = 0;
strings.post('/imgHang', (req, res) => {
    const post = req.body;
    console.log(post);
    hngImg = post.value;
});
strings.get('/getImgHang', (req, res) => {
    res.json(hngImg);
});
strings.get('/clrImgHang', (req, res) => {
    hngImg = 0;
});
// get now dif
var nw = '';
strings.post('/addThrNw', (req, res) =>{
    const dat = req.body.now;
    nw = dat;
    res.json(nw);
});
strings.get('/getAddThrNw', (req, res) =>{
    console.log('get nw: '+nw);
    res.json(nw);
});
// hang vids
var hngVid = 0;
strings.post('/vidHang', (req, res) => {
    const post = req.body;
    console.log(post);
    hngVid = post.value;
});
strings.get('/getVidHang', (req, res) => {
    res.json(hngVid);
});
strings.get('/clrVidHang', (req, res) => {
    hngVid = 0;
});
// update str
strings.post('/updateStr/:id', (req, res) => {
    const post = req.body;
    const id = req.params.id;
    var head = xss(post.head);
    var body = xss(post.body);
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {head: head, body: body}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log('updated thr: ');
            console.log(result);
        }
    });
});

/**
 * ----------------
 * ATTACH STR FUNCS
 * ----------------
 */
// attach search
var accssAtt = 'No';
var attCh = '';
strings.get('/accssAtt', (req, res)=>{
    res.json(accssAtt);
});
strings.post('/attachSrchd', (req, res)=>{
    const strId = req.body;
    accssAtt = 'Yes';
    attCh = strId.att;
    console.log(strId);
});
strings.get('/accssAttNo', (req, res)=>{
    accssAtt = 'No';
    res.json(accssAtt);
});
strings.get('/accssSrch', (req, res)=>{
    res.json(attCh);
});


// ADD PRIVATE Strings
// -----------------
// add Private head
strings.post('/addPrivate', (req, res)=>{
    const postinfo = req.body;
    var head = xss(postinfo.head);
    db.getDB().collection('all_posts').insertOne({type: 'Private', content_type: 'string', user: postinfo.user, head: head, body: postinfo.body, tied: postinfo.tied, date: postinfo.date}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + "result: ", result.insertedId + ' < Post added to \'all_posts\' table!');
            res.json(result.insertedId);
        }
    });
});
// add private tie
strings.post('/privateTie', (req, res)=>{
    const postinfo = req.body;
    var head = xss(postinfo.head);
    var img = []; var vid = [];
    if (postinfo.act == 'img') {
        img = postinfo.img;
    }
    if (postinfo.act == 'vid') {
        vid =  postinfo.vid;
    }
    db.getDB().collection('all_posts').insertOne({type: postinfo.type, content_type: 'thread', tied_to: postinfo.tied_to, user: postinfo.user, head: head, img: img, vid: vid, date: postinfo.date, comments: [], likedBy: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + "result: ", result.insertedId + ' < Post added to \'Strings\' table!');
            res.json(result.insertedId);
        }
    });
});
strings.post('/privateTieMob', (req, res)=>{
    const postinfo = req.body.add;
    var head = xss(postinfo.head);
    var img = []; var vid = [];
    if (postinfo.act == 'img') {
        img = postinfo.img;
    }
    if (postinfo.act == 'vid') {
        vid =  postinfo.vid;
    }
    db.getDB().collection('all_posts').insertOne({type: postinfo.type, content_type: 'thread', tied_to: postinfo.tied_to, user: postinfo.user, head: head, img: img, vid: vid, date: postinfo.date, comments: [], likedBy: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + "result: ", result.insertedId + ' < Post added to \'Strings\' table!');
            res.json(result.insertedId);
        }
    });
});

// ADD PUBLIC STR
//----------------------
// add public head
strings.post('/addPublic', (req, res)=>{
    const postinfo = req.body;
    var nam = xss(postinfo.name);
    db.getDB().collection('all_posts').insertOne({type: 'Public', content_type: 'string', user: postinfo.user, name: nam, date: postinfo.date }, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + "result: ", result.insertedId + ' < Post added to \'all_posts\' table!');
            res.json(result.insertedId);
        }
    });
});
// add public tie
strings.post('/publicTie', (req, res)=>{
    const postinfo = req.body;
    var hd = xss(postinfo.head);
    var img = []; var vid = [];
    if (postinfo.act == 'img') {
        img = postinfo.img;
    }
    if (postinfo.act == 'vid') {
        vid =  postinfo.vid;
    }
    db.getDB().collection('all_posts').insertOne({type: 'tied_public', content_type: 'thread', tied_to: postinfo.tied_to, user: postinfo.user, head: hd, img: img, vid: vid, date: postinfo.date, comments: [], likedBy: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + "result: ", result.insertedId + ' < Post added to \'Strings\' table!');
            res.json(result.insertedId);
        }
    });
});
strings.post('/publicTieMob', (req, res)=>{
    const postinfo = req.body.add;
    var hd = xss(postinfo.head);
    var img = []; var vid = [];
    if (postinfo.act == 'img') {
        img = postinfo.img;
    }
    if (postinfo.act == 'vid') {
        vid =  postinfo.vid;
    }
    db.getDB().collection('all_posts').insertOne({type: 'tied_public', content_type: 'thread', tied_to: postinfo.tied_to, user: postinfo.user, head: hd, img: img, vid: vid, date: postinfo.date, comments: [], likedBy: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + "result: ", result.insertedId + ' < Post added to \'Strings\' table!');
            res.json(result.insertedId);
        }
    });
});

/**
 * -----------------------------
 * THREADS FUNCTIONLITIES
 * ------------------------------
 */
// like post
strings.put('/:id', (req, res) =>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: data} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just liked a thread by ' + data.user);
            res.json(result);
        }
    });
});
// unlike
strings.put('/unlike/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    console.log(data);
    db.getDB().collection('all_posts').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: data}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Un-liked thread '+ data.likedBy + ', for ' + dataID);
            console.log(result.result);
            res.json(result);
        }
    });
});
// check thread contents
strings.get('/:id', (req, res)=>{
    const dataID = req.params.id;
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID)}).forEach((doc) => {
        console.log('checking thread contents for: '+doc);
            res.json(doc);
     });
});
// COMMENTS
//---------------
// find comments
strings.get('/comments/:id', (req, res)=>{
    const dataID = req.params.id;
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID)}).forEach((doc) => {
        console.log('checking comments for this Post: '+doc);
        res.json(doc.comments);
    });
});
// push comment
strings.put('/comment/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    var com = xss(data.comment);
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: {comments: {user: data.user, comment: com, date: data.date, replies: [], id: data.id}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just commented on a thread by ' + data.user);
            res.json(result);
        }
    });
});
// remove comment
strings.put('/remComment/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    console.log(data);
    db.getDB().collection('all_posts').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: data}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('removed commen '+ data.user + ', for ' + dataID);
            console.log(result.result);
            res.json(result);
        }
    });
});
// DELETE THREAD
strings.delete('/deleteThr/:id', (req, res) => {
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

module.exports = strings;