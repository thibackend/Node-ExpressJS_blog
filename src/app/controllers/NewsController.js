class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news', { layout: 'main' });
    }
    //[GET] /news/:slug
    show(req, res) {
        res.send('HELOO');
    }
}

module.exports = new NewsController();
