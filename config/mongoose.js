const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_develpoment');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to MongoDb'))

db.once('open', function(){
    console.log('connected to DataBase :: MongoDb');

});

module.exports = db;