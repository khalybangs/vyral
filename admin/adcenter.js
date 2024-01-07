const express = require('express');
const adminnodes = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const admins = "admins";
const bjposts = "bjposts";

var xss = require("xss");

adminnodes.get('/getUsers', (req, res)=>{
    db.getDB().collection('users').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
})

// insert new glob_pwd
adminnodes.put('/newGlobPwd', (req, res) => {
    const data = req.body.pwd;
    const id = req.body.id;
    const ley = req.body.leyman;
    db.getDB().collection('generalCol').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {gen_pwd: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(' glob pwd ~ ' + ley);
            console.log(result);
            res.json(result);
        }
    });
})

// this is a protocol to un-hinge when general admin password is forgotten!
const newADmP = () => {
    const id = '64148793b04c9f234b6d8ebf';
    const ley ='pass';
    var pwd = {glob_multi: '46545510214722640', main_hsh: '27662539855575040', mainp: '8642430624910525736'}
    db.getDB().collection('generalCol').findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {gen_pwd: pwd}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(' glob pwd ~ ' + ley);
            console.log(result);
            res.json(result);
        }
    });
}
var targetDate = new Date();
var seconds = targetDate.getMinutes();
targetDate.setSeconds(targetDate.getSeconds() + 1);
var countDownDate = targetDate.getTime();
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  if (distance < 0) {
    //newADmP();
    clearInterval(x);
  }
}, 1000);

// adding posts
adminnodes.post('/addPost', (req, res) => {
    const postinfo = req.body;
    head = xss(postinfo.heading);
    bod = xss(postinfo.body);
    db.getDB().collection('admin_updt').insertOne({ type: postinfo.type, body: bod, heading: head, date: postinfo.date }, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(postinfo.heading + ' < Post added to \'all_posts\' table!: ' + result.ops[0]._id);
        }
    });
});
// delete post
adminnodes.delete('/delete/:id', (req, res) => {
    const dataID = req.params.id;
    console.log(dataID);
    db.getDB().collection('admin_updt').findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

// get/read posts
adminnodes.get('/getUpdts', (req, res) =>{
    db.getDB().collection('admin_updt').find({}).sort({ $natural: -1 }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents.length);
            res.json(documents);
        }
    });
});

// all admins
adminnodes.get('/getAdmns', (req, res)=>{
    db.getDB().collection(admins).find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('Admins info extracted');
            res.json(documents);
        }
    });
})
// delete admin
adminnodes.post('/remAdm', (req, res) => {
    console.log('starting deleting process');
    const dataID = req.body.id;
    console.log(dataID);
    db.getDB().collection(admins).findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('delete admin result: '+result);
            res.json(result);
        }
    });
});
// check for mail - admin
adminnodes.post('/checkMailAdmn', (req, res) => {
    const data = req.body;
    console.log(data);
    db.getDB().collection(admins).find(data).toArray((err, doc) => {
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
// insert new author
adminnodes.post('/insertAdm', (req, res, next) => {
    const admn = req.body;

    db.getDB().collection(admins).insertOne(admn, (err, result) => {
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

// AUTHORS
adminnodes.get('/getAuthors', (req, res)=>{
    db.getDB().collection('authors').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('Author info extracted');
            res.json(documents);
        }
    });
})
// check mal
// check for mail
adminnodes.post('/checkMail', (req, res) => {
    const data = req.body;
    console.log(data);
    db.getDB().collection('authors').find(data).toArray((err, doc) => {
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
// insert new author
adminnodes.post('/insertAut', (req, res, next) => {
    const author = req.body;

    db.getDB().collection('authors').insertOne(author, (err, result) => {
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
// delete author
adminnodes.post('/remAut', (req, res) => {
    console.log('starting deleting process');
    const dataID = req.body.id;
    console.log(dataID);
    db.getDB().collection('authors').findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('delete author result: '+result);
            res.json(result);
        }
    });
});

adminnodes.get('/getReports', (req, res)=>{
    db.getDB().collection('reports').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('Reports extracted');
            res.json(documents);
        }
    });
})
// delete rep
adminnodes.delete('/delete/:id', (req, res) => {
    const dataID = req.params.id;
    console.log(dataID);
    db.getDB().collection('reports').findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

// get author Info
adminnodes.get('/adcenInfo', (req, res) => {
    const data = req.body;
    db.getDB().collection(admins).find(adminId).forEach(function(doc){
        console.log(doc.mail + ' Admin logged in.');
        res.json(doc);
    })
});

// AUTHOR EARNS
// get/read earnings
adminnodes.get('/getEarn', (req, res) =>{
    db.getDB().collection('author_earnings').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
});
// get acc nos
adminnodes.get('/getAccnos', (req, res) =>{
    db.getDB().collection('account_no').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
});
// add paid status
adminnodes.post('/paidEarn', (req, res) => {
    const earn = req.body;
    db.getDB().collection('author_earnings').insertOne({ user: earn.user, year: earn.year, month: earn.month, amount: earn.amount, date: earn.date }, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(earn.user + ' < payment added to \'author_earnings\' table!: ' + result.ops[0]._id);
            res.json(result.ops[0]);
        }
    });
});

//exports
module.exports = adminnodes;