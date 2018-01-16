const mongoose = require('mongoose');
const Promise = require('bluebird');

module.exports = () => {
    mongoose.Promise = Promise;
    mongoose.set('debug', true);
    return mongoose.connect('mongodb://localhost/example-api', { useMongoClient: true });
};
