const express = require('express');
const extract = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const bjposts = "bjposts";
const aposts = "all_posts";

// categories
let carts = {
    art: "Art",
    spt: "Sports",
    ent: "Entertainment",
    mus: "Music",
    pol: "Politics",
    fas: "Fashion",
    pep: "People",
    bus: "Business"
};

// get existing posts
extract.post('/getbjPosts', (req, res) => {
    var cart = req.body;
    console.log('Abt to extract '+cart);
    db.getDB().collection('all_posts').find({}).forEach(function(doc) {
        console.log( 'extracted posts \n' + doc);
    })
});

//exports
module.exports = extract;
