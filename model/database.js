var mongoose = require('mongoose');
var exports = module.exports = {};

//Connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test-socket-io', {useMongoClient: true});
exports.db = mongoose.connection;
exports.db.on('error', console.error.bind(console, 'connection error:'));
exports.db.once('open', function() {
    console.log("we're connected to database through mongoose!");
});
