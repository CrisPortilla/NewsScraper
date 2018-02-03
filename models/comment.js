var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    author: {
        type: String,
        trim: true
    },
    text: {
        type: String,
        trim: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

var comment = mongoose.model('Comment', commentSchema);

module.exports = comment;