const PostModel = require('../models/Post');
const { success, error } = require('../service/responseHandle');

module.exports = {
    async getPosts(req, res) {
        try {
            const data = await PostModel.find();
            success(res, data);
        } catch(err) {
            error(res, err.message);
        }
    }
}