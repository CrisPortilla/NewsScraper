var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    story: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

var article = mongoose.model('Article', articleSchema);

module.exports = article;