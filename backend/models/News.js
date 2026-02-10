const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    source: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', NewsSchema);