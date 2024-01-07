const express = require('express');
const video = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

// multer binary control
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/dropvid/');  
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
    if (file.mimetype === 'video/mp4'/* || file.mimetype === 'image/png'*/) {
        cb(null, true);
    } else {
        cb(new Error('Nahhhh!!'), false);
    }
};
const upload = multer({storage: storage, fileFilter: fileFilter}).array('file', 5);
// adding posts
video.post('/videoUpload', (req, res) => {
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
// for vid length
var hangLen = 0;
video.get('/getHanger', (req, res)=>{
    console.log('get length, '+hangLen);
    res.json(hangLen);
});
video.post('/setHanger', (req, res)=>{
    const len = req.body;
    console.log('get asigned length, '+len.len);
    hangLen = len.len;
    res.json(hangLen);
});
video.get('/clrHanger', (req, res)=>{
    hangLen = 0;
    console.log('clear length, '+hangLen);
    res.json(hangLen);
});


module.exports = video;
