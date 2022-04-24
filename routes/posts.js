const express = require('express');
const Router = express.Router();

const PostController = require('../controllers/PostController');

Router.get('/', (req, res) => PostController.getPosts(req, res));

Router.post('/', (req, res) => PostController.insertPost(req, res));

Router.delete('/', (req, res) => PostController.deleteAllPosts(req, res));

module.exports = Router;
