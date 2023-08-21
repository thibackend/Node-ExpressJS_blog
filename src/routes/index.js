const newsRouter = require('./news');
const siteRouter = require('./site');
const postRouter = require('./post');
function route(app) {
    app.use('/post', postRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}
module.exports = route;

// single-quote --trailing-comma all --tab-width 4
// "husky": {
//   "hooks": {
//     "pre-commit": "lint-staged"
//   }
// },
