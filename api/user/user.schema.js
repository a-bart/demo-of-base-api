const mongoose = require('mongoose');

module.exports = {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
};