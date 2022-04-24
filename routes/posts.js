const express = require('express');
const Router = express.Router();

const PostController = require('../controllers/PostController');

Router.get('/', (req, res) => PostController.getPosts(req, res));

module.exports = Router;
