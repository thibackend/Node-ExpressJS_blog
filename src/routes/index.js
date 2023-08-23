const newsRouter    = require('./news');
const siteRouter    = require('./site');
const postRouter    = require('./post');
const courseRouter  = require('./courses');


function route(app) {
    app.use('/courses', courseRouter);
    app.use('/post', postRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
