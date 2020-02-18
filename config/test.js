const mongoose = require('mongoose');

const MONGO_USERNAME = 'laverka';
const MONGO_PASSWORD = 'test_db';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'test_db';

mongoose.connect('mongodb://localhost:27017/test_db');

console.log(mongoose.version)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Successfully Connected to DB");
});