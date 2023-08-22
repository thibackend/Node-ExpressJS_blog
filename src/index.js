const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-hbs');
const { encode } = require('punycode');
const app = express();
const port = 3000;

const route = require('./routes');

// setup to join static file.
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine.
app.engine(
    'hbs',
    hbs.express4({
        partialsDir: [
            path.join(__dirname, 'resources/views/partials'),
            path.join(__dirname, 'resources/views/pages'),
        ],
    }),
);
app.set('view engine', 'hbs');
app.set('views', [
    path.join(__dirname, '/resources/views'),
    path.join(__dirname, '/resources/views/pages'),
]);
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// --single-quote --trailing-comma all
// "husky": {
//     "hooks": {
//       "pre-commit": "lint-staged"
//     }
//   },
//   "lint-staged": {
//     "src/**/*.{js,json,scss}": "prettier --tab-width 4 --single-quote --trailing-comma all --write"
//   },
