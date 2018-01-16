const { MongooseModel } = require('@oneflow/of-base-api');
const mongoose = require('mongoose');

const schema = require('./user.schema');
const hooks = require('./user.hooks');

const mongooseSchema = new mongoose.Schema(schema);

const model = new MongooseModel('User', mongooseSchema, 'users');
hooks(model);

module.exports = model;