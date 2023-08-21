class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home', { layout: 'main' });
    }
    //[GET] /search
    search(req, res) {
        res.render('search', { layout: 'main' });
    }
}

module.exports = new SiteController();
