const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = 'test';
// const url = "mongodb://127.0.0.1:27017";
// "mongodb://127.0.0.1:27017"
const url = "mongodb+srv://bangs:pass@test.wsqcy.mongodb.net/test?retryWrites=true&w=majority";
const MongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const state = {
    // db: 'test'
    db: null
};

// connect to mongo db
const cnct = (cb) => {
    if (state.db)
        cb();
    else {
        MongoClient.connect(url, MongoOptions, (err, client) => {
            if (err) cb(err);
            else {
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
};

const getDB = () => {
    return state.db;
}

const Dark = () => {
    console.log('exports works');
 }

module.exports = {getDB, cnct, getPrimaryKey};