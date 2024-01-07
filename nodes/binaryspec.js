const express = require('express');
const binary = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";


/**
 * BINARY SPECIFIER
 */
// set specified binary sent
var current = '';
binary.get('/setVid', (req, res)=>{
    current = 'vid';
    res.json(current);
});
binary.get('/setImg', (req, res)=>{
    current = 'img';
    res.json(current);
});
binary.get('/getBin', (req, res)=>{
    console.log(current);
    res.json(current);
});
binary.get('/clrBin', (req, res)=>{
    current = '';
});


module.exports = binary;
