const express = require('express');
const poster = express.Router();
const db = require("../server");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
var axios = require('axios');
const session = require('express-session');
var xss = require("xss");

// multer binary control
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/dropimg/');  
    }, 
    filename: function (req, file, cb) {
        var nme = Math.random().toString();
        var name = nme.slice(2, nme.length);
        const date = Date.now();
        if (req.session.userId !== '') {
            cb(null, date + req.session.userId + name);
        }
        if (adminId !== '') {
            cb(null, date + adminId + name);
        }
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Nahhhh!!'), false);
    }
};
const upload = multer({storage: storage, fileFilter: fileFilter}).array('file', 5);
// adding posts
poster.post('/fileUpload', (req, res) => {
    console.log('res ', req.file);
    upload(req, res, function (err) {
        if (err) {
            console.log('err ', err);
            res.send({'ret': 'err'});
            return
        } else {
            for (let i = 0; i < req.files.length; i++) {
                console.log(req.files[i].filename); 
            }
            res.json(req.files);
        }
    });
    /*const file = req.file;    
    const id = userId;
    console.log(file);
    db.getDB().collection('imghanger').insertOne(file, (err, result) => {
        if (err) { console.log(err); res.send('nahh'); }
        else {
            const testing = file.filename;
            console.log(file.originalname + ' < Post added to \'imghanger\' table! ' + testing);
            res.send('/profile');
            /*res.render('profile', {
                msg: `File uploaded`,
                file: `../dropimg/${testing}`
            });
            //res.json({ file: req.file });
        }
    });*/
});
// for img length
var hangLen = 0;
poster.get('/getHanger', (req, res)=>{
    console.log('get length, '+hangLen);
    res.json(hangLen);
});
poster.post('/setHanger', (req, res)=>{
    const len = req.body;
    console.log('get asigned length, '+len.len);
    hangLen = len.len;
    res.json(hangLen);
});
poster.get('/clrHanger', (req, res)=>{
    hangLen = 0;
    console.log('clear length, '+hangLen);
    res.json(hangLen);
});

// check users by id
poster.post('/searchUsers', (req, res)=>{
    const dataID = req.body;
    console.log('check user- '+dataID.user);
    db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(dataID.user)}).toArray((err, doc) => {
        console.log(doc[0].user_name);
        res.json(doc[0]);
    });
});

// for tags
var remT = 'n';
poster.get('/remTags', (req, res)=>{
    remT = 'y';
    res.json(remT);
});
poster.get('/askRemTags', (req, res)=>{
    res.json(remT);
});
poster.get('/backTag', (req, res)=>{
    remT = 'n';
    res.json(remT);
});


// adding posts
poster.post('/addPost', (req, res) => {
    console.log(req.file);
    const postinfo = req.body;
    const postflow = req.body2;
    const name = req.session.userId;
    head = xss(postinfo.heading);
    bod = xss(postinfo.body);
    db.getDB().collection('all_posts').insertOne({postId: postinfo.postId, content_type: 'journal', type: postinfo.type, user: postinfo.user, body: bod, heading: head, img: [], vid: '', date: postinfo.date, readBody: { people: [] }, comments: [], likedBy: [],  hidden: 'No', tagged: postinfo.tagged, reads: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

// adding img posts
poster.post('/addPostImg', (req, res) => {
    const postinfo = req.body;
    head = xss(postinfo.heading);
    bod = xss(postinfo.body);
    db.getDB().collection('all_posts').insertOne({postId: postinfo.postId, content_type: 'journal', type: postinfo.type, user: postinfo.user, body: bod, heading: head, img: postinfo.img, vid: postinfo.vid, date: postinfo.date, readBody: { people: [] }, comments: [], likedBy: [],  hidden: 'No', tagged: postinfo.tagged, reads: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

// adding vid posts
poster.post('/addPostVid', (req, res) => {
    const postinfo = req.body;
    head = xss(postinfo.heading);
    bod = xss(postinfo.body);
    db.getDB().collection('all_posts').insertOne({postId: postinfo.postId, content_type: 'journal', type: postinfo.type, user: postinfo.user, body: bod, heading: head, img: [], vid: postinfo.vid, date: postinfo.date, readBody: { people: [] }, comments: [], likedBy: [],  hidden: 'No', tagged: postinfo.tagged, reads: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

// LIMITER FUNCS FOR POSTS
// ------------------------
// get/read posts sort({ $natural: -1 })
var sess = '';
poster.get('/getPLimiter', (req, res) =>{
    sess = session.userId;
    db.getDB().collection(cltusers).find(sess).toArray((err, doc) => {
        db.getDB().collection('all_posts').find({ user: doc[0].user_name }).sort({ $natural: -1 }).limit(postLimiter).toArray((err, documents) => {
            if (err) 
            console.log(err);
            else{
                console.log('this user posts for limiter: ', documents.length);
                res.json(documents);
            }
        });
    });
});
// get/read posts for exuser profile
poster.get('/getExuserposts', (req, res) =>{
    db.getDB().collection(cltusers).find({user_name: exUser}).toArray((err, doc) => {
        if (err) 
        console.log(err);
        else{
            console.log('this user posts for limiter: ', doc.length);
            res.json(doc[0]);
        }
    });
});
// increase post limiter
var postLimiter = 21;
poster.post('/postLimiter', (req, res) =>{
    const data = req.body;
    console.log(data.limit);
    postLimiter += data.limit;
    res.json(postLimiter);
});
// reduce limiter
poster.get('/unpostLimiter', (req, res) =>{
    postLimiter = 21;
    console.log(postLimiter);
    res.json(postLimiter);
});
// get limiter info
poster.get('/getLimiter', (req, res) =>{
    res.json(postLimiter);
});

// get/read posts
poster.get('/getPosts', (req, res) =>{
    db.getDB().collection('all_posts').find({}).sort({ $natural: -1 }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
});

// get spec post
// get specific threads
poster.post('/getSpec', (req, res) =>{
    const dataID = req.body;
    console.log(dataID);
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID.id)}).forEach((doc) => {
        console.log('getSpec Jrn: '+doc.user);
        res.json(doc);
    });
});

/**
 * CURNT CART
 */
var cart = 'home';
// get cart
poster.get('/getCart', (req, res) =>{
    console.log(cart);
    res.json(cart);
});
// change cart
poster.post('/chngCart', (req, res) =>{
    cart = req.body.current;
    console.log(cart);
    res.json(cart);
});

// LIKE FUNCTIONALITIES
//---------------------------
// like post
poster.put('/:id', (req, res) =>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: data} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just liked a post by ' + data.user);
            res.json(result);
        }
    });
});
// find if user liked post
poster.get('/:id', (req, res)=>{
    const dataID = req.params.id;
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID)}).forEach((doc) => {
        console.log('checking likes for this Post: '+doc);
            res.json(doc.likedBy);
        });
    });
// unlike
poster.put('/unlike/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    console.log(data);
    db.getDB().collection('all_posts').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: data}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Un-liked post '+ data.likedBy + ', for ' + dataID);
            console.log(result.result);
            res.json(result);
        }
    });
});
// delete post
poster.delete('/delete/:id', (req, res) => {
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
// update post
poster.post('/updateJrn/:id', (req, res) => {
    const post = req.body;
    const id = req.params.id;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {heading: post.heading, body: post.body, img: post.img, vid: post.vid}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log('updated jrn: ');
            console.log(result);
        }
    });
});
// book
poster.post('/updateBk/:id', (req, res) => {
    const post = req.body;
    const id = req.params.id;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {title: post.title} } , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log('updated jrn: ');
            console.log(result);
        }
    });
});


// COMMENT FUNCTIONALITIES
//-------------------------
// find comments
poster.get('/comments/:id', (req, res)=>{
    const dataID = req.params.id;
    db.getDB().collection('all_posts').find({_id: db.getPrimaryKey(dataID)}).forEach((doc) => {
        console.log('checking likes for this Post: '+doc);
        res.json(doc.comments);
    });
});
// push comment
poster.put('/comment/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    comm = xss(data.comment);
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: {comments: {user: data.user, comment: comm, date: data.date, replies: [], id: data.id}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just commented on a post by ' + data.user);
            res.json(result);
        }
    });
});
// remove comment
poster.put('/remComment/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    console.log(data);
    db.getDB().collection('all_posts').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: data}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Un-liked post '+ data.likedBy + ', for ' + dataID);
            console.log(result.result);
            res.json(result);
        }
    });
});

// HIDE/UNHIDE FUNCTIONS
//------------------------
// hide
poster.put('/hide/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$set: data} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// un-hide
poster.put('/hide/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$set: data} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

/**
 * --------
 * REPORT
 * --------
 */
poster.post('/reportJrn', (req, res, next) => {
    const data = req.body;
    db.getDB().collection('reports').insertOne(data, (err, result) => {
        if (err) {
            const error = new Error("Failed to insert user Document");
            error.status = 400;
            next(error);
        }else {
            res.json({result : result, resultId: result.insertedId, document : result.ops[0], msg : "Successfully inserted user Document!!!", error : null});
            console.log(result.insertedId);
            tut = 'Yes';
        }
    });
            
});

/**
 * READ FUNC
 * ----------
 */

 // read post
 poster.put('/AddReadBy/:id', (req, res) =>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(dataID)}, {$push: {reads: data}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just read a Journal by ' + data.user);
            res.json(result);
        }
    });
});

module.exports = poster;