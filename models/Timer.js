var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: String,
    interval: Number,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Timer', schema);
