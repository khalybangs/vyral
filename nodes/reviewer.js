const express = require('express');
const reviewer = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";
const session = require('express-session');

// EXCTRACT NOTIFICATION TYPES FOR JRN/STR
var type = '';
var allw = 'no';
var hang = '';
reviewer.post('/like_rev', (req, res)=>{
    data = req.body;
    hang = data.hang;
    type = data.type;
    allw = 'yes';
    console.log(data);
    res.json(data);
});
// for comments
var coms = '';
reviewer.post('/sendCom', (req, res)=>{
    data = req.body.hang;
    console.log(data);
    coms = data;
    //res.json(data);
});
// get com
reviewer.get('/getCom', (req, res)=>{
    res.json(coms);
});
// get if passed
reviewer.get('/allow', (req, res)=>{
    res.json(allw);
});
// JRN/STR type
reviewer.get('/getPostType', (req, res)=>{
    res.json(type);
});
// get post id
reviewer.get('/getPData', (req, res)=>{
    res.json(hang);
});
// terminate reviewer
reviewer.get('/termRev', (req, res)=>{
    allw = 'no';
    res.json(allw);
})

module.exports = reviewer;