const express = require('express');
const Router = express.Router();

const PostController = require('../controllers/PostController');

Router.get('/', PostController.getPosts);

Router.post('/', PostController.insertPost);

Router.delete('/', PostController.deleteAllPosts);

Router.delete('/:id', PostController.deletePost);

Router.patch('/:id', PostController.patchPostContent);

module.exports = Router;
