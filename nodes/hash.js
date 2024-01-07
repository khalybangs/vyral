const express = require('express');
const hash = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

const cors = require('cors');
hash.use(cors({
    origin: 'http://localhost:5000'
}));


// collect in vals
hash.post('/checkValues', (req, res)=>{
    const data = req.body;
    db.getDB().collection(cltusers).find({user_name: data.unm}).toArray((err, doc) => {
      if (doc) {
          var info = '';
          if (doc.length < 1) {
              console.log('user does not exists');
              info = 'notExists';
              res.json(info);
          } else {
              if (data.unm === doc[0].user_name) {
                  answer = 'false';
                  rando = false;
                  genUser = doc[0];
                  res.json(doc[0]);
              }
              else {
                  info = 'notExists';
                  res.json(info);
                  console.log('user data not correct');
              }
          }
      }else{
          console.log('none');
      }
    })
  });
  
  // get math-hashes
  hash.post('/unHash', (req, res)=>{
    const data = req.body;
    db.getDB().collection('users').find({_id: db.getPrimaryKey(data.user)}).toArray((err, doc) => {
      if (doc) {
        console.log(doc[0].user_name, data.hsh, data.m_pwd);
        unharsh(doc[0], data);
      }else{
          console.log('none');
      }
    });
    // unharsh
    const unharsh = (doc, data) => {
  
        var user = data.entr;
        var hashed = data.hsh;
        var runner = data.m_pwd.main_hsh;
        var runner2 = data.m_pwd.glob_multi;
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
                    if (hashed == tster) {
                      globPass.prog = 'go';
                      globPass.pass = tster;
                      res.json(globPass);
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
  
  var atmps = 5;
  // q/a send question
  hash.get('/getAttmpts', (req, res) => {
      console.log('attempts: '+atmps);
      res.json(atmps);
  });
  hash.get('/minsGetAttms', (req, res) => {
      atmps -= 1;
      console.log('attempts: '+atmps);
      res.json(atmps);
      if (atmps == 0) {
          atmpsRestrt()
      }
  });
  const atmpsRestrt = () => {
      var targetDate = new Date();
      targetDate.setHours(targetDate.getHours() + 12);
      var countDownDate = targetDate.getTime();
      var x = setInterval(function() {
          var now = new Date().getTime();
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
          if (distance < 0) {
              atmps = 5;
              clearInterval(x);
          }
      }, 1000);
  };
  
  // check for user if forgot-password and assign general variable
  var genUser = '';
  hash.post('/checkUser', (req, res) => {
      const data = req.body;
      console.log(data);
      db.getDB().collection(cltusers).find(data).toArray((err, doc) => {
          if (doc) {
              var info = '';
              if (doc.length < 1) {
                  console.log('user does not exists');
                  info = 'notExists';
                  res.json(info);
              } else {
                  if (data.user_name === doc[0].user_name) {
                      answer = 'false';
                      rando = false;
                      genUser = doc[0];
                      res.json(doc[0]);
                  }
                  else {
                      info = 'notExists';
                      res.json(info);
                      console.log('user data not correct');
                  }
              }
          }else{
              console.log('none');
          }
      })
  });
  
  // check for mail
  hash.post('/checkMail', (req, res) => {
      const data = req.body;
      console.log(data);
      db.getDB().collection(cltusers).find(data).toArray((err, doc) => {
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
  
  // q/a send question
  hash.get('/getGenUser', (req, res) => {
      console.log('email: '+genUser.email);
      res.json(genUser);
  });
  
  
  // q/a send question
  hash.get('/getQuest', (req, res) => {
      console.log(genUser.Q);
      res.json(genUser.Q);
  });
  // check answer
  var answer = 'false';
  hash.post('/answerVer', (req, res) => {
      var data = req.body;
      var send = '';
      console.log(data.answer);
      if (data.answer == genUser.A) {
          send = 'true';
          answer = 'true';
          res.json(send);
      }else {
          send = 'false';
          answer = 'false';
          res.json(send);
      }
  });
  // check answer checkAns
  hash.get('/checkAns', (req, res) => {
      res.json(answer);
  });
  // q/a fetch
  hash.post('/Q&A', (req, res) => {
      const data = req.body;
      db.getDB().collection(cltusers).find(data).forEach(function(doc){
          console.log(data.user_name+doc.user_name);
          if (doc) {
              if (data.user_name === doc.user_name) {
                  res.json(doc)
                  console.log('work!');
              }
              else {
                  console.log('user data not correct');
              }
          }else{
              console.log('none');
          }
      })
  });
  
  // unHash
  hash.post('/findHash', (req, res)=>{
      const data = req.body;
      db.getDB().collection("hsh_pwd").find(data).forEach(function(doc){
          console.log(data.user_name+doc.user_name);
          if (doc) {
              if (data.user_name === doc.user_name) {
                  res.json(doc)
                  console.log('work!');
              }
              else {
                  console.log('user data not correct');
              }
          }else{
              console.log('none');
          }
      })
  });
  
  // update password
  hash.put('/updatePwd', (req, res)=>{
      const data = req.body;
      console.log(data, genUser._id);
      db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(genUser._id)}, {$set: {pwd: data.pwd}} , {returnOriginal: true}, (err, result) => {
          if (err) console.log(err);
          else {
              console.log(genUser._id + ' just updated their pwd to ' + data.pwd);
              db.getDB().collection("hsh_pwd").find({}).toArray((err, doc) => {
                  if (doc) {
                      for (let i = 0; i < doc.length; i++) {
                          if (doc[i].u_id == genUser._id) {
                              console.log(doc[i]);
                              db.getDB().collection('hsh_pwd').findOneAndUpdate({_id: db.getPrimaryKey(doc[i]._id)}, {$set: {main_hsh: data.gen, glob_multi: data.glb}} , {returnOriginal: true}, (err, result) => {
                                  if (err) console.log(err);
                                  else {
                                      console.log(genUser._id + ' just updated their hashes to ' + data.gen + ' & ' + data.glb);
                                      res.json(result);
                                  }
                              });
                          }
                      }
                  }else{
                      console.log('none');
                  }
              })
          }
      });
  });
  
  /* FOR VERIFICATION CODE
  ------------------------
  */
  // check if code been ver
  var rando = false;
  hash.get('/checkRan', (req, res)=>{
      res.json(rando);
  });
  // verify
  hash.post('/ranTrue', (req, res)=>{
      rando = true;
      res.json(rando);
  });
  
  // HARSH DATAT
  // get math-hashes
  hash.post('/harshPwd', (req, res)=>{
      const data = req.body.pwd;
      harsh(data, res);
  });
  const harsh = (data, res) => {
       // starts
       var password = new Array();
       const getHash = (pswd1) => {
          // hash math value
          var math = Math.random().toString(); var len = math.length; var slc = math.slice(2, len); var runna = slc * 5; var runner = runna.toString();
          // hash math value for alphaets
          var math2 = Math.random().toString(); var len2 = math2.length; var slc2 = math2.slice(2, len2); var runna2 = slc2 * 5; var runner2 = runna2.toString();
          // extract input and hashed variable
          Diff(runner, runner2, pswd1);
        };
        // alphabets/nunmber diff
        const Diff = (runner, runner2, pswd1) => {
          // var spacer
              var spc = 0;
              // all values holder
              var tst = '';
              // check each data
              if (pswd1.length > spc) {
                  for (let i = 0; i < pswd1.length; i++) {
                    // spacer to loop thro
                    spc = spc+1; 
                    // loopn thro check
                    var check = pswd1.slice(spc-1, spc); 
                    // loopn thro runner 2
                    var chckn = runner2.slice(spc-1, spc); 
                    if (isNaN(check)) {
                        if (check == 'a' || check == 'A') { tst += 1*chckn; }; if (check == 'b' || check == 'B') { tst += 2*chckn; }; if (check == 'c' || check == 'C') { tst += 3*chckn; }; if (check == 'd' || check == 'D') { tst += 4*chckn; }; if (check == 'e' || check == 'E') { tst += 5*chckn; }; if (check == 'f' || check == 'F') { tst += 6*chckn; };         
                        if (check == 'g' || check == 'G') { tst += 7*chckn; }; if (check == 'h' || check == 'H') { tst += 8*chckn; }; if (check == 'i' || check == 'I') { tst += 9*chckn; }; if (check == 'j' || check == 'J') { tst += 10*chckn; }; if (check == 'k' || check == 'K') { tst += 11*chckn; }; if (check == 'l' || check == 'L') { tst += 12*chckn; };         
                        if (check == 'm' || check == 'M') { tst += 13*chckn; }; if (check == 'n' || check == 'N') { tst += 14*chckn; }; if (check == 'o' || check == 'O') { tst += 15*chckn; }; if (check == 'p' || check == 'P') { tst += 16*chckn; }; if (check == 'q' || check == 'Q') { tst += 17*chckn; }; if (check == 'r' || check == 'R') { tst += 18*chckn; };         
                        if (check == 's' || check == 'S') { tst += 19*chckn; }; if (check == 't' || check == 'T') { tst += 20*chckn; }; if (check == 'u' || check == 'U') { tst += 21*chckn1; }; if (check == 'v' || check == 'V') { tst += 22*chckn; }; if (check == 'w' || check == 'W') { tst += 23*chckn; }; if (check == 'x' || check == 'X') { tst += 24*chckn; }; 
                        if (check == 'y' || check == 'Y') { tst += 25*chckn; }; if (check == 'z' || check == 'Z') { tst += 26*chckn; };        
                    } else {
                        tst += check*chckn;
                    }
                }
            }
              Hasher(runner, runner2, tst);
        }; 
        // maths/hasher
        const Hasher = (runner, runner2, tst) => {
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
                  }
                  spc = 0;
                  password[0] = tster;
                  password[1] = runner;
                  password[2] = runner2;
                  console.log(password);
                  res.json(password);
                  // alert(`pwd = ${password[0]},  main hasher = ${password[1]}, global multi = ${password[2]}`);
        };
        getHash(data);
  }

module.exports = hash;