const mongoose = require('mongoose');

/*
mongoose.connect('mongodb://localhost/mongoose_basics', {
*/
mongoose.connect('mongodb+srv://laverka:test@cluster0-6xxln.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
/*
    useUnifiedTopology: true
*/
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("Connected to MongoDB database")
});

module.exports = db;
