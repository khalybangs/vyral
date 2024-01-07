const express = require("express");
const bodyParser = require("body-parser");
const Joi = require('joi');
const path = require("path");
const session = require('express-session');
const ejs = require('ejs');
const crypt = require('bcrypt');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const fs = require('fs');
const favicon = require('serve-favicon');
var xss = require("xss");

const db = require("./server");
const cltusers = "users";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// session/connect-mongo db
mongoose.connect('mongodb+srv://bangs:pass@test.wsqcy.mongodb.net/test?retryWrites=true&w=majority/test', { useNewUrlParser: false, useUnifiedTopology: true}, (err) => { 
    if (err) throw err;
    else {
        console.log('Successfully Connected!');
    }
});
const NODE_ENV = 'developement';
const IN_PROD = NODE_ENV == 'production';
app.use(session( {
    sessname: '',
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

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5000'
}));

// set locals sessions
app.use((req, res, next) => {
    req.session.userId;
    next();
});

app.get('/getResSess', (req, res)=>{
    console.log(req.session.userId);
    res.json(req.session.userId);
});

// set locals sessions
app.use((req, res, next) => {
    const { exUser } = req.session;
    next();
});

// main ex-user session
app.use((req, res, next) => {
    const { exUser2 } = req.session;
    next();
});


// require node files
const smsNodes = require('./nodes/sms');
app.use('/sms', smsNodes);
const mailNodes = require('./nodes/mailer');
app.use('/mailer', mailNodes);
const settingsNodes = require('./nodes/settings');
app.use('/settings', settingsNodes);
const profilesNodes = require('./nodes/profiles');
app.use('/profiles', profilesNodes);
const extuserNodes = require('./nodes/exprofexnodes');
app.use('/extractEx', extuserNodes);
const chatsNodes = require('./nodes/chats');
app.use('/chats', chatsNodes);
const postNodes = require('./nodes/post');
app.use('/post', postNodes);
const cartNodes = require('./nodes/carties');
app.use('/carts', cartNodes);
const shopNodes = require('./nodes/topshop');
app.use('/shop', shopNodes);
const videoNodes = require('./nodes/videonodes');
app.use('/video', videoNodes);
const binaryNodes = require('./nodes/binaryspec');
app.use('/binary', binaryNodes);
const stringNodes = require('./nodes/stringnodes');
app.use('/strings', stringNodes);
const notiNodes = require('./nodes/noti');
app.use('/notifications', notiNodes);
const notiReview = require('./nodes/reviewer');
app.use('/review', notiReview);
const searchNodes = require('./nodes/searcher');
app.use('/searcher', searchNodes);
const loginNodes = require('./nodes/login');
app.use('/log', loginNodes);
const logvalNodes = require('./nodes/logvalidations');
app.use('/logval', logvalNodes);
const extractnodes = require('./nodes/bjextractornodes');
app.use('/bjextract', extractnodes);
const adminLogs = require('./nodes/adminlogs');
app.use('/adminlogs', adminLogs);
const testerNodes = require('./nodes/testposts');
app.use('/testposts', testerNodes);
const adsNodes = require('./nodes/ads');
app.use('/ads', adsNodes);
const authorNodes = require('./author/authornode');
app.use('/author', authorNodes);
const uaNodes = require('./nodes/userauthor');
app.use('/uauthor', uaNodes);
const adcNodes = require('./admin/adcenter');
app.use('/adcenter', adcNodes);
// pays
const trnNode = require('./nodes/transct');
app.use('/transct', trnNode);
const gateNode = require('./nodes/gateway');
app.use('/gate', gateNode);
// mobile + web
const mobNodes = require('./nodes/mobile');
app.use('/mobile', mobNodes);
const hashNodes = require('./nodes/hash');
app.use('/hash', hashNodes);

// use html directory/sendfile & path.join() && userinfo authen
const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/Login');
    }else{
        next();
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/landing.html'));
});

// upload exp
app.post('/addReview', (req, res) => {
    const rev = req.body;
    rev.review = xss(rev.review);
    db.getDB().collection('user_experience').insertOne({user: rev.user, review: rev.review, date: rev.date}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result.ops[0]);
        }
    });
});
// get exp
// get/read posts
app.get('/getExps', (req, res) =>{
    db.getDB().collection('user_experience').find({}).sort({ $natural: -1 }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
});

app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'resources')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'author/scripts')));
app.use(express.static(path.join(__dirname, 'admin/scripts')));

// SETTING FAVICON
//app.use(favicon(__dirname, '/img/log2.png'));

// FUNCTIONALITIES APPLIED - FUNTIONALITIES AND CONNECTION BELOW
//----------------------------------------------------------- 

// SETTING UP ROUTES
// setting login
// locale javascript funcs

app.get('/getTest', (req, res) => {
    res.json('from web!');
});

var lJs = '';
// send locale type
app.get('/lclJs', (req, res) => {
    res.json(lJs);
});
app.get('/Login', (req, res) => {
    lJs = 'lgn';
    res.sendFile(path.join(__dirname, 'html/login.html'));
});
// pass-word Authentication
app.get('/forgot-password', (req, res) => {
    lJs = 'fgp';
    res.sendFile(path.join(__dirname, 'html/fpass.html'));
});
// setting reg
app.get('/Signup', (req, res) => {
    lJs = 'rg';
    res.sendFile(path.join(__dirname, 'html/signup.html'));
});
app.get('/community', (req, res) => {
    lJs = 'cgd';
    res.sendFile(path.join(__dirname, 'html/guide.html'));
});
// setting tutorial
var tut = 'Yes';
app.get('/tutorial', (req, res) => {
    if (tut == 'Yes') {
    lJs = 'ttrl';
    res.sendFile(path.join(__dirname, 'html/tutorial.html'));
    }else {
        res.redirect('/Login');
    }
});
// change back to no access
app.get('/tutorialOff', (req, res) => {
    tut = 'No';
    res.json('Done');
});
// setting home
app.get('/home', redirectLogin, (req, res) => {
    exUnode = '';
    lJs = 'hom';
    res.sendFile(path.join(__dirname, 'html/index.html'));
});
// setting chats
app.get('/chat', redirectLogin, (req, res) => {
    lJs = 'cht';
    res.sendFile(path.join(__dirname, 'html/chats.html'));
});
/*
// setting music
app.get('/music', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/mus.html'));
});
// setting politics
app.get('/politics', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/pol.html'));
});
// setting sports
app.get('/sports', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/spt.html'));
});
// setting entertainment
app.get('/entertainment', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/ent.html'));
});
// setting fashion
app.get('/fashion', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/fas.html'));
});
// setting business
app.get('/business', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/bus.html'));
});
// setting people
app.get('/people', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/peo.html'));
});
// setting art
app.get('/art', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/art.html'));
});
// setting articles
app.get('/articles', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/atc.html'));
});*/

// mail tester
app.get('/mailer', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/mailer.html'));
});

// setting about
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/abt.html'));
});
// setting profile-ads
app.get('/profile-ads', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/prf.html'));
});
// setting admin world
var adWrld = 'No';
app.get('/noAdmnWrld', (req, res) => {
    adWrld = 'No';
    res.json(adWrld);
});
app.get('/yesAdmnWrld', (req, res) => {
    adWrld = 'Yes';
    res.json(adWrld);
});
app.get('/admin-community', (req, res) => {
    if (adWrld == 'Yes') {
        res.sendFile(path.join(__dirname, 'html/main.html'));
    }else {
        res.redirect('/Login');
    }
});
// publish page & funcs
app.get('/publish', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/publish.html'));
});
// for author
var auth = 'No';
app.get('/noAuthor', (req, res) => {
    auth = 'No';
    res.json(auth);
});
app.get('/yesAuthor', (req, res) => {
    auth = 'Yes';
    res.json(auth);
});
app.get('/author', (req, res) => {
    console.log('author going');
    if (auth == 'Yes') {
        console.log('Author yes');
        res.sendFile(path.join(__dirname, 'author/html/author.html'));
        console.log('Author goes');
    }else {
        res.redirect('/admin-world');
    }
});
// for ad-center
var adcn = 'No';
app.get('/noAdcenter', (req, res) => {
    adcn = 'No';
    res.json(adcn);
});
app.get('/yesAdcenter', (req, res) => {
    adcn = 'Yes';
    res.json(adcn);
});
app.get('/Gencenter', (req, res) => {
    console.log('Amin-center going');
    if (adcn == 'Yes') {
        console.log('ADcenter yes');
        res.sendFile(path.join(__dirname, 'admin/html/gencenter.html'));
        //res.sendFile(path.join(__dirname, 'admnin/html/adcenter.html'));
        console.log('ADcenter goes');
    }else {
        res.redirect('/admin-world');
    }
});
// testig ejs
app.get('/testejs', (req, res) => {
    res.render('test');
});

// connection
db.cnct((err) => {
    if (err) {
        console.log('Unable to connect to database!');
        process.exit(1);
    } else {
        app.listen(/*process.env.PORT*/2000, () => {
            console.log('Connected successfully! app listening on port 2000');
        })
    }
});

// get locales
app.get('/getLcls', (req, res) =>{
    db.getDB().collection('generalCol').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            console.log('general collection: '+documents[0]);
            res.json(documents[0].locales);
        }
    });
});

// get global column
app.get('/getGlbCol', (req, res) =>{
    db.getDB().collection('generalCol').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            console.log('general collection: '+documents[0]._id);
            res.json(documents[0]);
        }
    });
});

// get users
app.get('/getUsers', (req, res) =>{
    db.getDB().collection(cltusers).find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            res.json(documents);
        }
    });
});
// get authors
app.get('/getAuthors', (req, res) =>{
    db.getDB().collection('authors').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            console.log(documents._id);
            res.json(documents);
        }
    });
});

// access info for random usage
app.post('/axsInfo', (req, res) => {
    var body = req.body;
    if (body.axs == "get user info") {
        if (req.session.userId) {
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(req.session.userId)}).toArray((err, documents) => {
                if (err) 
                console.log(err);
                else{
                    res.json(documents[0]);
                }
            })
        }else {
            var ret = 'none';
            res.json(ret);
        }
    }else {
        console.log("Wrong access info!");
    }
});

// Get user info
app.post('/getUinfo', (req, res) =>{
    const uinfo = req.body;
    console.log(uinfo);
    db.getDB().collection(cltusers).find(uinfo).forEach(function(doc) {
        console.log(doc._id)
    })
}); 

// login
app.post('/login', (req, res) => {
    const data = req.body;
    console.log(data);
    db.getDB().collection(cltusers).find(data).forEach(function(doc){
        if (doc) {
            if (data.user_name == doc.user_name && data.pwd == doc.pwd) {
                req.session.userId = doc._id;
                console.log(`doc = ${doc.user_name}, ${doc.pwd}. data = ${data.user_name}, ${data.pwd}. id: ${doc._id}. session_id: ${req.session.userId}`);
                console.log(req.session.userId+" Log\'s in!");
                res.json(doc);
            }
            else {
                console.log('user data not correct');
            }
        }else{
            console.log('none');
        }
    })
});

// get exnode
var exUnode = '';
app.get('/getExNode', (req, res)=>{
    res.json(exUnode);
});

// get user session id
app.get('/sess', (req, res) => {
    user = req.session.userId;
    if (user == undefined) {
        user = '';
    } else {
        user = req.session.userId;
    }
    res.json(user);
});

// update terms
app.post('/AgreeToTerms', (req, res) => {
    const terms = req.body;
    //const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: terms} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});

// setting profile
app.get('/:id', redirectLogin, (req, res) => {
    const user = req.params.id;
    const para = req.path;
    console.log('Search path: '+para);
    var test = user.slice(0, 1);
    if (test == '@') {
        console.log(user + ' finding profile');
        var mainUser = '';
        if (req.session.userId) {
            db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(req.session.userId)}).toArray((err, doc) => {
                mainUser = doc[0].user_name;
                console.log('main user: '+mainUser);
                    db.getDB().collection(cltusers).find({/*_id: db.getPrimaryKey(userId)*/}).toArray((err, doc) => {
                        var flag = '';
                        var exist = '';
                        for (let z = 0; z < doc.length; z++) {
                            if (doc[z].user_name == mainUser && doc[z].user_name == user) {
                                flag = 'white';
                                exist = 'fnd';
                                exUnode = '';
                                lJs = 'pf';
                                res.sendFile(path.join(__dirname, 'html/profile.html'));
                                console.log((`${user} have logged into his/her profile`));
                            }
                        }
                        if (flag == '') {
                            for (let z = 0; z < doc.length; z++) {
                                if (doc[z].user_name == user) {
                                    exist = 'fnd';
                                    exUser = user;
                                    exUnode = user;
                                    console.log((`checking for exuser ${doc[z].user_name} profile`));
                                    lJs = 'epf';
                                    res.sendFile(path.join(__dirname, 'html/exprofile.html'));
                                    console.log((`Found exuser ${doc[z].user_name} profile!`));
                                }
                            }
                        }
                        if (exist == '') {
                            exUnode = '';
                            lJs = 'epf';
                            res.sendFile(path.join(__dirname, 'html/exprofile.html'));
                            console.log('no such user');
                        }
                        /*if (user == doc[0].user_name) {
                            exUnode = '';
                            res.sendFile(path.join(__dirname, 'html/profile.html'));
                            console.log((`${user} have logged into his/her profile`));
                        }else {
                            exUnode = '';
                            res.sendFile(path.join(__dirname, 'html/exprofile.html'));
                            console.log('no such user');
                            db.getDB().collection(cltusers).find({}).forEach(function(doc2){
                                if (user == doc2.user_name) {
                                    exUser = user;
                                    exUnode = user;
                                    console.log((`checking for exuser ${doc2.user_name} profile`));
                                    res.sendFile(path.join(__dirname, 'html/exprofile.html'));
                                    console.log((`Found exuser ${doc2.user_name} profile!`));
                                }
                            });
                        }*/
                        
                    });
                });
            }else {
                res.redirect('/Login');
            }
    }else {
        console.log('Home searching');
        var pages = new Array();
        pages[0]  = '/home';
        var flg = '';
        if (user == 'favicon.ico') {
            flg = 'white';
            exUnode = '404';
            lJs = 'epf';
            res.sendFile(path.join(__dirname, 'html/exprofile.html'));
            res.redirect('/Login');
            console.log('404 fam, '+user);
        } else {
            for (let y = 0; y < pages.length; y++) {
                console.log(pages[y]+', '+user);
                if (user == pages[y]) {
                    console.log(user);
                    flg = 'white';
                    exUnode = '';
                }
            }
        }
        if (flg == '') {
            exUnode = '404';
            lJs = 'epf';
            res.sendFile(path.join(__dirname, 'html/exprofile.html'));
            console.log('404 fam');
        }
    }
});

// logout
app.post('/logout', (req, res) => {
    req.session.destroy();
    //req.session.userId = null;
    exUnode = '';
    //console.log(req.session.userId);
    res.redirect('/Login');
});

// add user data
// user schema
const userSchem = mongoose.Schema({
    local: {
        user_name: String,
        pwd: String
    }
});
app.post('/addUser', (req, res, next) => {
    const userName = req.body;

    db.getDB().collection(cltusers).insertOne(userName, (err, result) => {
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
// add hashes
app.post('/addHash', (req, res, next) => {
    const hash = req.body;

    db.getDB().collection("hsh_pwd").insertOne(hash, (err, result) => {
        if (err) {
            const error = new Error("Failed to insert user Document");
            error.status = 400;
            next(error);
        }else {
            res.json({result : result, resultId: result.insertedId, document : result.ops[0], msg : "Successfully inserted user Document!!!", error : null});
            console.log(result.insertedId)
        }
    });
            
});

module.exports = app;