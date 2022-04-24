const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '【名稱】必填'],
        },
        content: {
            type: String,
            required: [true, '【內容】必填'],
        },
        likes: {
            type: Number,
            default: 0,
        },
        image: {
            type: String,
            default: "",
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    },
    {
        versionKey: false
    }
);

const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;
