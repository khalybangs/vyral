const express = require('express');
const mobile = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

var xss = require("xss");

const cors = require('cors');
mobile.use(cors({
    origin: 'http://localhost:5000'
}));

mobile.get('/getDb', (req, res) =>{
    var dbM = {
        users: '',
        all_posts: '',
        chatbox: '',
        generalCol: '',
        hsh_pwd: '',
        reports: '',
        subscriptions: '',
        subs_returns: '',
        transactions: '',
        author_earnings: '',
        account_no: '',
    }
    getDb(res, dbM);
});
const getDb = (res, dbM) => {
    const passDb = () => {
        if (dbM.users !== '' && dbM.all_posts !== '' && dbM.chatbox !== '' && dbM.generalCol !== '' && dbM.hsh_pwd !== '' && dbM.reports !== '' && dbM.subscriptions !== '' && dbM.subs_returns !== '' && dbM.transactions !== '' && dbM.account_no !== '' && dbM.author_earnings !== '') {
            res.json(dbM);
        } else {
            setTimeout(() => {
                passDb(); 
            }, 1);
        }
    }
    db.getDB().collection(cltusers).find({}).toArray((err, users) => {
        if (err) 
        console.log(err); 
        else{
            dbM.users = users;
        }
    });
    db.getDB().collection('all_posts').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.all_posts = document;
        }
    });
    db.getDB().collection('chatbox').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.chatbox = document;
        }
    });
    db.getDB().collection('generalCol').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.generalCol = document;
        }
    });
    db.getDB().collection('hsh_pwd').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.hsh_pwd = document;
        }
    });
    db.getDB().collection('reports').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.reports = document;
        }
    });
    db.getDB().collection('subscriptions').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.subscriptions = document;
        }
    });
    db.getDB().collection('subs_returns').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.subs_returns = document;
        }
    });
    db.getDB().collection('author_earnings').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.author_earnings = document;
        }
    });
    db.getDB().collection('account_no').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.account_no = document;
        }
    });
    db.getDB().collection('transactions').find({}).toArray((err, document) => {
        if (err) 
        console.log(err); 
        else{
            dbM.transactions = document;
            passDb();
        }
    });
}

// multer binary control
var userI = '';
// set data
mobile.post('/setBinId', (req, res) => {
    var data = req.body;
    userI = data.id;
    res.json(userI);
});
const multer = require('multer');
// img
const storageI = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/dropimg/');  
    }, 
    filename: function (req, file, cb) {
        var nme = Math.random().toString();
        var name = nme.slice(2, nme.length);
        const date = Date.now();
        if (userI !== '') {
            cb(null, date + userI + name);
        }
        if (adminId !== '') {
            cb(null, date + adminId + name);
        }
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Nahhhh!!'), false);
    }
};
const upload = multer({storage: storageI, fileFilter: fileFilter}).array('file', 5);
// adding posts
mobile.post('/fileUploadImg', (req, res) => {
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
});

// settings
// pull
mobile.put('/setPull', (req, res) => {
    const data = req.body;
    const id = data.id;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$pull: data.pull}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// set data
mobile.post('/setSet', (req, res) => {
    var data = req.body;
    const id = data.id;
    const update = data.set;
    console.log('id: '+id+', update: ');
    console.log(update);
    console.log(data);
    if (update.name) {
        update.name = xss(update.name)
    }
    if (update.user_status) {
        update.user_status = xss(update.user_status)
    }
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: update} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// push
mobile.put('/setPush', (req, res) =>{
    const data = req.body;
    const id = data.id;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$push: data.push} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
mobile.post('/changeMode', (req, res) => {
    var mode = req.body.mode;
    const id = req.body.id;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {mode: mode}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(req.session.userId.user_name + ' chaged mode to ~ ' + result);
        }
    });
});

// journal/books ||+ strings
// pull
mobile.put('/contentPull', (req, res) => {
    const data = req.body;
    const id = data.id;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$pull: data.pull}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// set data
mobile.post('/contentSet', (req, res) => {
    var data = req.body;
    const id = data.id;
    const update = data.set;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: update} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});
// push
mobile.put('/contentPush', (req, res) =>{
    const data = req.body;
    const id = data.id;
    db.getDB().collection('all_posts').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$push: data.push} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

// notifications
// clean new_notis
mobile.post('/cleanNewNoti', (req, res) => {
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.id)}, {$pull: {new_notis: data.noti}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});


module.exports = mobile;