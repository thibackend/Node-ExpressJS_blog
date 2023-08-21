class PostController {
    index(req, res) {
        res.render('post', { layout: 'main' });
    }
    postContent(req, res) {
        const postContent = req.body;
        res.render('showPost', { data: postContent });
    }
}
module.exports = new PostController();
