const express = require('express');
const adminlogs = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const authorslogs = "authors";

//setting up session useNewUrlParser: true
mongoose.connect('mongodb+srv://bangs:pass@test.wsqcy.mongodb.net/test?retryWrites=true&w=majority/test', { useNewUrlParser: false, useUnifiedTopology: true}, (err) => { 
    if (err) throw err;
    else {
        console.log('Admin-mongoose Connected!');
    }
});
const NODE_ENV = 'developement';
const IN_PROD = NODE_ENV === 'production';
adminlogs.use(session( {
    secret: 'rioting',
    saveUninitialized: false,
    resave: false, 
    cookie : {
        maxAge : 1000 * 60 * 60* 24,
        sameSite : true,
        secure : IN_PROD
    },
    store: new MongoStore({ 
        mongooseConnection: mongoose.connection, 
        autoRemove: 'disabled',
        secret: 'oral',
        touchAfter: 1000 * 60 * 60* 24
    }),
}));
// set locals sessions
adminlogs.use((req, res, next) => {
    const { adminId } = req.session;
    next();
});

adminId = '';

// get/read posts
adminlogs.get('/getUpdts', (req, res) =>{
    db.getDB().collection('admin_updt').find({}).sort({ $natural: -1 }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents.length);
            res.json(documents);
        }
    });
});

/**
 * GET GENERAL ADMIN PWD
 */
// Attemps
var valatt  = 'Yes';
var attm = 3;
adminlogs.get('/failedAttm', (req, res)=>{
    attm -= 1;
    console.log(attm);
    res.json(attm);
})
// get assigned pwd
adminlogs.get('/genPwd', (req, res)=>{
    db.getDB().collection('generalCol').find({}).toArray((err, doc) => {
        if (err) 
        console.log(err);
        else{
            console.log('general column: ', doc[0]);
            res.json(doc[0].gen_pwd);
        }
    });
    /*var gen = '13579adgjl';
    res.json(gen);*/
});
// check Attempts
adminlogs.get('/checkAttm', (req, res)=>{
    res.json(valatt);
});
// cancel attempts
adminlogs.get('/cancelAttm', (req, res)=>{
    valatt = 'No';
    res.json(valatt);
    var targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);
    var countDownDate = targetDate.getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        if (distance < 0) {
          valatt = 'Yes';
          attm = 3;
          clearInterval(x);
        }
    }, 1000);
});

// admin center login - e0dj8103
adminlogs.post('/aclogs', (req, res) => {
    const data = req.body;
    console.log(data.mail);
    db.getDB().collection('admins').find({}).forEach(function(doc){
        console.log(data.mail+doc.mail);
        if (doc) {
            if (data.mail == doc.mail) {
                console.log('almost begins: '+doc.mail);
                unharsh(doc, data.pwd);
                /*console.log('apwd: '+doc.pwd+', lpwd: '+data.pwd);
                if (doc.pwd == data.pwd) {
                    console.log('found cnct');
                    res.json(doc);
                    adminId = doc._id;
                }*/
            }
            else {
                console.log('user data not correct');
            }
        }else{
            console.log('none');
        }
    })
    // unharsh
  const unharsh = (doc, pwd) => {
    console.log('start unhash');
          var user = pwd;
          var hashed = doc.pwd.mainp;
          var runner = doc.pwd.main_hsh;
          var runner2 = doc.pwd.glob_multi;
          //console.log(`entered pwd = ${user}, hashed_pwd = ${hashed}, main hasher = ${runner}, secondary hasher = ${runner2}`);
        // alphabets/nunmber diff
          // var spacer
          var spc = 0;
          // all values holder
          var tst = '';
          // check each data
          if (user.length > spc) {
              for (let i = 0; i < user.length; i++) {
                  // spacer to loop thro
                  spc++; 
                  // loopn thro check
                  var check = user.slice(spc-1, spc); 
                  // loopn thro runner 2
                  var chckn = runner2.slice(spc-1, spc); 
                  if (isNaN(check)) {
                      if (check == 'a' || check == 'A') { tst += 1*chckn; }; if (check == 'b' || check == 'B') { tst += 2*chckn; }; if (check == 'c' || check == 'C') { tst += 3*chckn; }; if (check == 'd' || check == 'D') { tst += 4*chckn; }; if (check == 'e' || check == 'E') { tst += 5*chckn; }; if (check == 'f' || check == 'F') { tst += 6*chckn; };         
                      if (check == 'g' || check == 'G') { tst += 7*chckn; }; if (check == 'h' || check == 'H') { tst += 8*chckn; }; if (check == 'i' || check == 'I') { tst += 9*chckn; }; if (check == 'j' || check == 'J') { tst += 10*chckn; }; if (check == 'k' || check == 'K') { tst += 11*chckn; }; if (check == 'l' || check == 'L') { tst += 12*chckn; };         
                      if (check == 'm' || check == 'M') { tst += 13*chckn; }; if (check == 'n' || check == 'N') { tst += 14*chckn; }; if (check == 'o' || check == 'O') { tst += 15*chckn; }; if (check == 'p' || check == 'P') { tst += 16*chckn; }; if (check == 'q' || check == 'Q') { tst += 17*chckn; }; if (check == 'r' || check == 'R') { tst += 18*chckn; };         
                      if (check == 's' || check == 'S') { tst += 19*chckn; }; if (check == 't' || check == 'T') { tst += 20*chckn; }; if (check == 'u' || check == 'U') { tst += 21*chckn; }; if (check == 'v' || check == 'V') { tst += 22*chckn; }; if (check == 'w' || check == 'W') { tst += 23*chckn; }; if (check == 'x' || check == 'X') { tst += 24*chckn; }; 
                      if (check == 'y' || check == 'Y') { tst += 25*chckn; }; if (check == 'z' || check == 'Z') { tst += 26*chckn; };        
                  } else {
                      tst += check*chckn;
                  }
              }
          }
    // maths/hasher
    var globPass = {
      prog: '',
      pass: ''
    };
        var spc = 0;
        var tstr = tst.toString();
        var tster = '';
        
            // conditioning and adding hashes
            if (tstr.length > spc) {
                  for (let i = 0; i < tstr.length; i++) {
                      spc = spc + 1;
                      // hasher value applyer
                      var test = runner.slice(spc-1, spc);
                      // multipling with runner to to hash up and assign value
                      if (isNaN(runner2)) {
                          tster += tester.toString();
                      }else {
                          var testing = runner2.slice(spc-1, spc)*test;
                          tster += testing.toString();
                      }
                      // input value hashing
                      var tester = tstr.slice(spc-1, spc);
                      tster += tester.toString(); 
                  }
                  console.log(`original: ${hashed}, tried: ${tster}`);
                  if (hashed == tster) {
                    globPass.prog = 'go';
                    globPass.pass = tster;
                    console.log('everywhere good');
                    res.json(doc)
                    adminId = doc._id;
                    console.log(adminId);
                  } else {
                    //$('#alertPar').text('Incorrect user combination'); 
                    console.log('incorrect algo followed');
                    globPass.prog = 'no';
                    res.json(globPass);
                  }
                  spc = 0;
              }
  };
});
// authors login
adminlogs.post('/authorlog', (req, res) => {
    const data = req.body;
    db.getDB().collection(authorslogs).find({mail: data.mail}).forEach(function(doc){
        console.log(data.mail+doc.mail);
        if (doc) {
            if (data.mail == doc.mail) {
                /*res.json(doc)
                adminId = doc;
                console.log(adminId);*/
                console.log('almost begins');
                unharsh(doc, data.pwd);
            }
            else {
                console.log('user data not correct');
            }
        }else{
            console.log('none');
        }
    });
  // unharsh
  const unharsh = (doc, pwd) => {
    console.log('start unhash');
          var user = pwd;
          var hashed = doc.pwd.mainp;
          var runner = doc.pwd.main_hsh;
          var runner2 = doc.pwd.glob_multi;
          //console.log(`entered pwd = ${user}, hashed_pwd = ${hashed}, main hasher = ${runner}, secondary hasher = ${runner2}`);
        // alphabets/nunmber diff
          // var spacer
          var spc = 0;
          // all values holder
          var tst = '';
          // check each data
          if (user.length > spc) {
              for (let i = 0; i < user.length; i++) {
                  // spacer to loop thro
                  spc = spc+1; 
                  // loopn thro check
                  var check = user.slice(spc-1, spc); 
                  // loopn thro runner 2
                  var chckn = runner2.slice(spc-1, spc); 
                  if (isNaN(check)) {
                      if (check == 'a' || check == 'A') { tst += 1*chckn; }; if (check == 'b' || check == 'B') { tst += 2*chckn; }; if (check == 'c' || check == 'C') { tst += 3*chckn; }; if (check == 'd' || check == 'D') { tst += 4*chckn; }; if (check == 'e' || check == 'E') { tst += 5*chckn; }; if (check == 'f' || check == 'F') { tst += 6*chckn; };         
                      if (check == 'g' || check == 'G') { tst += 7*chckn; }; if (check == 'h' || check == 'H') { tst += 8*chckn; }; if (check == 'i' || check == 'I') { tst += 9*chckn; }; if (check == 'j' || check == 'J') { tst += 10*chckn; }; if (check == 'k' || check == 'K') { tst += 11*chckn; }; if (check == 'l' || check == 'L') { tst += 12*chckn; };         
                      if (check == 'm' || check == 'M') { tst += 13*chckn; }; if (check == 'n' || check == 'N') { tst += 14*chckn; }; if (check == 'o' || check == 'O') { tst += 15*chckn; }; if (check == 'p' || check == 'P') { tst += 16*chckn; }; if (check == 'q' || check == 'Q') { tst += 17*chckn; }; if (check == 'r' || check == 'R') { tst += 18*chckn; };         
                      if (check == 's' || check == 'S') { tst += 19*chckn; }; if (check == 't' || check == 'T') { tst += 20*chckn; }; if (check == 'u' || check == 'U') { tst += 21*chckn; }; if (check == 'v' || check == 'V') { tst += 22*chckn; }; if (check == 'w' || check == 'W') { tst += 23*chckn; }; if (check == 'x' || check == 'X') { tst += 24*chckn; }; 
                      if (check == 'y' || check == 'Y') { tst += 25*chckn; }; if (check == 'z' || check == 'Z') { tst += 26*chckn; };        
                  } else {
                      tst += check*chckn;
                  }
              }
          }
    // maths/hasher
    var globPass = {
      prog: '',
      pass: ''
    };
        var spc = 0;
        var tstr = tst.toString();
        var tster = '';
        
            // conditioning and adding hashes
            if (tstr.length > spc) {
                  for (let i = 0; i < tstr.length; i++) {
                      spc = spc + 1;
                      // hasher value applyer
                      var test = runner.slice(spc-1, spc);
                      // multipling with runner to to hash up and assign value
                      if (isNaN(runner2)) {
                          tster += tester.toString();
                      }else {
                          var testing = runner2.slice(spc-1, spc)*test;
                          tster += testing.toString();
                      }
                      // input value hashing
                      var tester = tstr.slice(spc-1, spc);
                      tster += tester.toString(); 
                  }
                  console.log(`original: ${hashed}, tried: ${tster}`);
                  if (hashed == tster) {
                    globPass.prog = 'go';
                    globPass.pass = tster;
                    console.log('everywhere good');
                    res.json(doc)
                    adminId = doc._id;
                    console.log(adminId);
                  } else {
                    //$('#alertPar').text('Incorrect user combination'); 
                    console.log('incorrect algo followed');
                    globPass.prog = 'no';
                    res.json(globPass);
                  }
                  spc = 0;
              }
  };
});

// get user session id
adminlogs.get('/sess', (req, res) => {
    console.log("admin id: "+adminId);
    res.json(adminId);
});

// logout!!
adminlogs.get('/logOut', (req, res) => {
    adminId = '';
    res.json('out');
});

//exports
module.exports = adminlogs;