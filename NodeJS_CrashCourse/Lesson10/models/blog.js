const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); // the model name is 'Blog', so mongoose will search for the plural of this as the collection, so 'blogs'

module.exports = Blog;