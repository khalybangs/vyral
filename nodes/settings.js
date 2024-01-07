const express = require('express');
const router = express.Router();
const db = require("../server");
const cltusers = "users";
const session = require('express-session');

var xss = require("xss");

/**
 * CHANGE USERNAME
 */
// change mode ~
router.put('/newUname', (req, res) => {
    var body = req.body;
    const id = req.session.userId;
    var name = xss(body.user_name);
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: {user_name: name}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});


// update status
router.post('/updateStat', (req, res) => {
    const data = req.body.user_status;
    const status = xss(data);
    const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: {user_status: status}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});

// update profile name
router.post('/updateName', (req, res) => {
    const data = req.body.name;
    const name = xss(data);
    const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: {name: name}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
// update profile picture
router.post('/profilePic', (req, res) => {
    const prfp = req.body;
    const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: prfp} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
router.post('/profilePicMobile', (req, res) => {
    const data = req.body;
    const id = data.id;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {profile_pic: data.prfp}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
// remove ppic
router.get('/removePPic', (req, res) => {
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: {profile_pic: 'none'}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});

// DARK MODE SETTINGS
//---------------------
// check darkmode options
router.get('/darkOrlight', (req, res) => {
    if (req.session.userId && req.session.userId !== '' && req.session.userId !== null) {
        db.getDB().collection(cltusers).find({_id: db.getPrimaryKey(req.session.userId)}).toArray((err, doc) => {
            res.json(doc[0].mode);
        }); 
    }else {
        mode = 'general';
        res.json(mode);
    }
});
// change mode ~
router.post('/changeMode', (req, res) => {
    const mode = req.body;
    //const id = req.session.userId;
    console.log("change to? - "+mode.mode);
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: mode} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(req.session.userId + ' chaged mode to ~ ' + result);
        }
    });
});

/**
 * LOCATION FUNCS
 */
// world
router.get('/genLocales', (req, res) => {
    db.getDB().collection('generalCol').find({}).toArray((err, doc) => {
        res.json(doc[0].locales);
    }) 
});
var loc_type = 'world';
router.get('/get_loc', (req, res)=>{
    res.json(loc_type);
});
// world func
router.get('/world_loc', (req, res)=>{
    loc_type = 'world';
    res.json(loc_type);
});
// conti func
router.get('/conti_loc', (req, res)=>{
    loc_type = 'continent';
    res.json(loc_type);
});
// country func
router.get('/count_loc', (req, res)=>{
    loc_type = 'country';
    res.json(loc_type);
});

// PROFILE PUBLICITY SETTINGS
//------------------------------
// check publicity status
router.get('/checkPublicity', (req, res) => {
    db.getDB().collection(cltusers).find(req.session.userId).toArray((err, doc) => {
        res.json(doc[0].publicity);
    }) 
});
// remove all users in waiting_list
router.put('/removeWait', (req, res) => {
    const data = req.body;
    const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$pull: {waiting_list: data}}, {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(req.session.userId + ' removed all users in waiting list ~ ' + result);
        }
    });
});
// change publicity ~
router.post('/changePriv', (req, res) => {
    var mode = req.body;
    const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$set: mode} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(req.session.userId + ' chaged mode to ~ ' + mode.publicity);
        }
    });
});
router.post('/changePrivMobile', (req, res) => {
    var mode = req.body.publicity;
    const id = req.body.id;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {publicity: mode}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(id + ' chaged mode to ~ ' + mode);
        }
    });
});

// block user funcs
router.put('/block', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$push: {blocked_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just blocked ' + data.user);
            console.log(result);
            res.json(result);
        }
    });
});
router.put('/blockMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.me)}, {$push: {blocked_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(data.me + ' just blocked ' + data.user);
            console.log(result);
            res.json(result);
        }
    });
});
// un-block user
router.put('/unBlock', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(req.session.userId)}, {$pull: {blocked_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(req.session.userId + ' just unblocked ' + data.user);
            console.log(result);
            res.json(result);
        }
    });
});
router.put('/unBlockMob', (req, res) =>{
    const data = req.body;
    db.getDB().collection('users').findOneAndUpdate({_id: db.getPrimaryKey(data.me)}, {$pull: {blocked_list: {user: data.user}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(data.me + ' just unblocked ' + data.user);
            console.log(result);
            res.json(result);
        }
    });
});

// PUB
// update-set
router.post('/setUsrtp', (req, res) => {
    const prfp = req.body;
    const id = req.session.userId;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: prfp} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
router.post('/setUsrtpMobile', (req, res) => {
    const data = req.body;
    const id = data.id;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {user_type: {type: 'publisher', categories: data.avail, subscritpions: [], subscribers: [], status: 'on', price: 'none', background: 'none'}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
router.post('/setUsrtpMobileIUp', (req, res) => {
    const data = req.body;
    const id = data.id;
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: {user_type: data.user_type}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
});
// get subs
router.get('/subs', (req, res) =>{
    db.getDB().collection('subscriptions').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            console.log(documents._id);
            res.json(documents);
        }
    });
});
// get subs payments
router.get('/subsRe', (req, res) =>{
    db.getDB().collection('subscriptions').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err); 
        else{
            res.json(documents);
        }
    });
});
// bank account
// insert number
router.get('/getAccounts', (req, res) => {
    db.getDB().collection('account_no').find({}).toArray((err, doc) => {
        res.json(doc);
    }) 
});
router.post('/insertAcc', (req, res) => {
    const data = req.body;
    console.log('nanne!');
    var name = xss(data.name);
    var number = xss(data.number);
    var bank = xss(data.bank);
    db.getDB().collection('account_no').insertOne({user: data.user, number: number, name: name, bank: bank}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result.ops[0]);
        }
    });
});
// delete post
router.delete('/deleteAcc/:id', (req, res) => {
    const dataID = req.params.id;
    db.getDB().collection('account_no').findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

module.exports = router;