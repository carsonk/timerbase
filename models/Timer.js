var mongoose = require('mongoose');

/*
    Timer Types
    - One-off
    - Manual Restart
    - Auto Restart
*/

var schema = new mongoose.Schema({
    title: String,
    interval: Number,
    priority: Number,
    lastReset: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now }
});

schema.statics.getTimers = function(page, skip, callback) {
    var timers = [];
    var start = (page * 10) + (skip * 1);

    Timer.find({}, 'title interval lastReset created', { skip: start, limit: 10 })
        .sort({interval: 'desc'})
        .exec(function(err, docs) {
            if(!err)
            {
                timers = docs;
            }

            callback(timers);
        });
};

module.exports = Timer = mongoose.model('Timer', schema);
