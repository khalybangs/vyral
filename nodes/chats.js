const express = require('express');
const chats = express.Router();
const db = require("../server");
const bodyParser = require('body-parser');
const path = require('path');
const cltusers = "users";

var xss = require("xss");

/**
 * -----------
 * SARE IMG
 * -----------
 */
// multer binary control
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/dropimg/');  
    }, 
    filename: function (req, file, cb) {
        const date = Date.now();
        cb(null, date + req.session.userId._id + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Nahhhh!!'), false);
    }
};
const upload = multer({storage: storage, fileFilter: fileFilter}).array('file', 5);

// adding posts
chats.post('/shareImg', (req, res) => {
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
// for img length
var hangLen = 0;
chats.get('/getHanger', (req, res)=>{
    console.log('get length, '+hangLen);
    res.json(hangLen);
});
chats.post('/setHanger', (req, res)=>{
    const len = req.body;
    console.log('get asigned length, '+len.len);
    hangLen = len.len;
});
chats.get('/clrHanger', (req, res)=>{
    hangLen = 0;
    console.log('clear length, '+hangLen);
    //res.json(hangLen);
});
// set img flow id
var theId = '';
chats.post('/shrImgId', (req, res) => {
    const data = req.body;
    console.log(data.flowId);
    theId= data.flowId;
    res.json(data.flowId);
});
// get img flow id
chats.get('/getshrImgId', (req, res) => {
    console.log(theId);
    res.json(theId);
});

// fetch chats
chats.get('/getChats', (req, res) =>{
    db.getDB().collection('chatbox').find({}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            res.json(documents);
        }
    });
});

// fetch messages
chats.post('/getMessages', (req, res) =>{
    const data = req.body;
    db.getDB().collection('chatbox').find({_id: db.getPrimaryKey(data.id)}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('chat messages: ', documents[0].messages.length);
            res.json(documents[0].messages);
        }
    });
});

// fetch specific chat
chats.post('/getspecChat', (req, res) =>{
    const data = req.body;
    db.getDB().collection('chatbox').find({_id: db.getPrimaryKey(data.id)}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('specific Chat: ' + documents[0].uone.user + '  & ' + documents[0].utwo.user);
            res.json(documents[0]);
        }
    });
});

// ADDING CHATS
//---------------
// push chats
chats.post('/addChat', (req, res) => {
    const data = req.body;
    db.getDB().collection('chatbox').insertOne(data, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(data.uone.user + ' new chat with ' + data.utwo.user);
            const Id = result.ops[0]._id;
            console.log(Id);
            pushChat(data, Id, data.uone.user);
            res.json(result);
        }
    });
});
const pushChat = (data, Id, userId) => {
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$push: {chats: { chat: Id, user: data.utwo.user, situ: "none" }}} , {returnOriginal: true}, (err, res) => {
        if (err) console.log(err);
        else {
            console.log(userId + ' just added ' + data.utwo.user + 'to his/her chats');
        }
    });
};
// fetch already exist
var alrdId = '';
var alrdNote = 'No';
chats.post('/alreadyEx', (req, res) =>{
    const chat = req.body;
    alrdNote = 'Yes';
    alrdId = chat.chat._id;
    res.json(alrdId);
});
// get already data
chats.get('/getAlreadyId', (req, res) =>{
    res.json(alrdId);
});
// get already note
chats.get('/getAlreadyNte', (req, res) =>{
    res.json(alrdNote);
});
chats.get('/setAlreadyNte', (req, res) =>{
    alrdNote = 'No';
});

// ADDING MESSAGES
//-----------------
// fetch both chats
// push message to array forme
chats.put('/addMessage', (req, res) => { 
    const data = req.body;
    var mess = '';
    if (data.mess.type == 'text') {
        mess = xss(data.mess.chat);
    }else {
        mess = data.mess.chat;
    }
    console.log(data.id + ', ' + mess);
    db.getDB().collection('chatbox').findOneAndUpdate({_id: db.getPrimaryKey(data.id)}, {$push: {messages: {user: data.mess.user, type: data.mess.type, chat: mess, date: data.mess.date}}} , {returnOriginal: true}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log('Chat sent successfully!');
            remMess(data, result.value, req.session.userId);
            res.json(result);
        }
    });
});
const remMess = (data, result, userId) => {
    //rem
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$pull: {chats: { chat: result._id, user: data.utwo }}} , {returnOriginal: true}, (err, res) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(data.utwo)}, {$pull: {chats: { chat: result._id, user: data.uone }}} , {returnOriginal: true}, (err, res) => {
                if (err) console.log(err);
                else {
                    console.log(data.utwo + ' just removed ' + data.utwo + 'from his/her chats');
                    pushMess(data, result, userId);
                }
            });
        }
    });
};
const pushMess = (data, result, userId) => {
    //add
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$push: {chats: { chat: result._id, user: data.utwo, situ: "sent" }}} , {returnOriginal: true}, (err, res) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(data.utwo)}, {$push: {chats: { chat: result._id, user: data.uone, situ: "rec" }}} , {returnOriginal: true}, (err, res) => {
                if (err) console.log(err);
                else {
                    console.log(data.utwo + ' just added ' + data.utwo + 'to his/her chats');
                }
            });
        }
    });
};

// NOTIFYING SEEN CHAT
//--------------------
/* seen_sent
chats.post('/sent_seen', (req, res)=>{
    const data = req.body;
    db.getDB().collection('chatbox').find({_id: db.getPrimaryKey(data.id)}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('specific Chat: ' + documents[0].uone.user + '  & ' + documents[0].utwo.user);
            res.json(documents[0]);
            move(documents[0]._id);
        }
    });
    const move = (Id) => {
        // rem
        db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$pull: {chats: { chat: Id, user: data.utwo }}} , {returnOriginal: true}, (err, res) => {
            if (err) console.log(err);
            else {
                db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(data.utwo)}, {$pull: {chats: { chat: Id, user: data.uone }}} , {returnOriginal: true}, (err, res) => {
                    if (err) console.log(err);
                    else {
                        console.log(userId + ' just removed ' + data.utwo + 'from his/her chats');
                    }
                });
            }
        });
        //add
        db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$push: {chats: { chat: Id, user: data.utwo, situ: "sent_seen" }}} , {returnOriginal: true}, (err, res) => {
            if (err) console.log(err);
            else {
                db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(data.utwo)}, {$push: {chats: { chat: Id, user: data.uone, situ: "rec_seen" }}} , {returnOriginal: true}, (err, res) => {
                    if (err) console.log(err);
                    else {
                        console.log(userId + ' just added ' + data.utwo + 'to his/her chats');
                    }
                });
            }
        });
    };
});*/
// rec_seen
chats.post('/rec_seen', (req, res)=>{
    const data = req.body;
    db.getDB().collection('chatbox').find({_id: db.getPrimaryKey(data.id)}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('specific Chat: ' + documents[0].uone.user + '  & ' + documents[0].utwo.user);
            Remove(data, documents[0]._id, req.session.userId);
            res.json(documents[0]);
        }
    });
});
chats.post('/rec_seen_m', (req, res)=>{
    const data = req.body;
    db.getDB().collection('chatbox').find({_id: db.getPrimaryKey(data.id)}).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log('specific Chat: ' + documents[0].uone.user + '  & ' + documents[0].utwo.user);
            Remove(data, documents[0]._id, data.user);
            res.json(documents[0]);
        }
    });
});
const Remove = (data, Id, userId) => {
    // rem
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$pull: {chats: { chat: Id, user: data.utwo }}} , {returnOriginal: true}, (err, res) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(data.utwo)}, {$pull: {chats: { chat: Id, user: data.uone }}} , {returnOriginal: true}, (err, res) => {
                if (err) console.log(err);
                else {
                    console.log(userId + ' just removed ' + data.utwo + 'from his/her chats (rec_seen)');
                    Pumove(data, Id, userId);
                }
            });
        }
    });
};
const Pumove = (data, Id, userId) => {
    //add
    db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(userId)}, {$push: {chats: { chat: Id, user: data.utwo, situ: "rec_seen" }}} , {returnOriginal: true}, (err, res) => {
        if (err) console.log(err);
        else {
            db.getDB().collection(cltusers).findOneAndUpdate({_id: db.getPrimaryKey(data.utwo)}, {$push: {chats: { chat: Id, user: data.uone, situ: "sent_seen" }}} , {returnOriginal: true}, (err, res) => {
                if (err) console.log(err);
                else {
                    console.log(userId + ' just added ' + data.utwo + 'to his/her chats (rec_seen)');
                }
            });
        }
    });
};

// DELETING MESSAGES
//-------------------
// get exUser
chats.post('/getExUSer', (req, res)=>{
    const data = req.body;
    db.getDB().collection('chatbox').find({ user: data.with, with: data.user }).toArray((err, documents) => {
        if (err) 
        console.log(err);
        else{
            console.log(documents[0]._id);
            res.json(documents[0]._id);
        }
    });
});
// del message
chats.put('/delMessage/:id', (req, res) =>{
    console.log('del here');
    const dataId = req.params.id;
    const data = req.body;
    console.log(data.messages);
    db.getDB().collection('chatbox').findOneAndUpdate({_id: db.getPrimaryKey(dataId)}, {$pull: data} , {returnOriginal: true}, (err, result) => {
        if (err) 
        console.log(err);
        else{
            res.json(result);
            /*db.getDB().collection('chatbox').findOneAndUpdate({_id: db.getPrimaryKey(data.with)}, {mesages: data.messages} , {returnOriginal: true}, (err, result) => {
                if (err) console.log(err);
                else {
                    console.log(result, ' chat removed!!');
                    res.json(result);
                }
            });*/
        }
    });
});

// unlike
chats.put('/pull/:id', (req, res)=>{
    const dataID = req.params.id;
    const data = req.body;
    db.getDB().collection('users').updateOne({_id : db.getPrimaryKey(dataID)}, {$pull: {chats: {user: data.chats.user, situ: data.chats.situ}}}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(`${req.session.userId} connection to chat: ${data} has been disconnected`);
            console.log(result.result);
            res.json(result);
        }
    });
});
// delete post
chats.delete('/delete/:id', (req, res) => {
    const dataID = req.params.id;
    console.log(dataID);
    db.getDB().collection('chatbox').findOneAndDelete({_id : db.getPrimaryKey(dataID)}, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.json(result);
        }
    });
});

// del my chat
chats.delete('/delmm/:id', (req, res) => {
    const todoID = req.params.id;
    db.getDB().collection('chatbox').findOneAndDelete({_id : db.getPrimaryKey(todoID)}, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
});
// del exuser chat

module.exports = chats;
