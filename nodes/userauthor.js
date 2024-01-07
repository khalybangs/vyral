const express = require('express');
const userauthor = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const authorslogs = "authors";
var xss = require("xss");

// adding book
userauthor.post('/addBook', (req, res) => {
    const book = req.body;
    var title = xss(book.title);
    var read_me = xss(book.read_me);
    var chapters = new Array();
    if (book.chapters.length > 0) {
        for (let i = 0; i < book.chapters.length; i++) {
            chapters[chapters.length] = {title: xss(book.chapters[i].title), body: xss(book.chapters[i].body) }
        }
    }
    console.log('uploading:content;');
    db.getDB().collection('all_posts').insertOne({postId: book.postId, content_type: book.content_type, type: book.type, user: book.user, title: title, cover: book.cover, date: book.date, chapters: chapters, read_me: read_me, readBody: { people: [] }, comments: [], likedBy: [], reads: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(book.title + ' < Post added to \'all_posts\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

// adding posts
userauthor.post('/addJournal', (req, res) => {
    const post = req.body;
    const name = req.session.userId;
    const postinfo = post.body;
    head = xss(postinfo.heading);
    bod = xss(postinfo.body);
    db.getDB().collection('all_posts').insertOne({postId: postinfo.postId, content_type: postinfo.content_type, type: postinfo.type, user: postinfo.user, body: bod, heading: head, img: postinfo.img, vid: postinfo.vid, date: postinfo.date, readBody: { people: [] }, comments: [], likedBy: [],  hidden: 'No', tagged: postinfo.tagged, reads: []}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

//exports
module.exports = userauthor;