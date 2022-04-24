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
    },
    async insertPost(req, res) {
        try {
            const { name, content, likes, image } = req.body;

            if ( !name ) {
                error(res, '【名稱】必填');
                return;
            }

            if ( !content ) {
                error(res, '【內容】必填');
                return;
            }

            const data = await PostModel.create(
                {
                    name,
                    content,
                    likes,
                    image,
                }
            );
            success(res, data);
        } catch(err) {
            error(res, err.message);
        }
    },
    async deleteAllPosts(req, res) {
        try {
            await PostModel.deleteMany({});
            success(res, []);
        } catch(err) {
            error(res, err.message);
        }
    },
    async deletePost(req, res) {
        try {
            const id = req.params.id;
            const data = await PostModel.findByIdAndDelete(id);
            success(res, data);
        } catch(err) {
            error(res, err.message);
        }
    },
    async patchPostContent(req, res) {
        try {
            const id = req.params.id;
            const { content } = req.body;

            if ( !content ) {
                error(res, '【內容】必填');
                return;
            }

            const data = await PostModel.findByIdAndUpdate(
                id,
                {
                    content,
                }
            )
            success(res, data);
        } catch(err) {
            error(res, err.message);
        }
    }
}