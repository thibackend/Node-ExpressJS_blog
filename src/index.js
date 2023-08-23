const express               = require('express');
const morgan                = require('morgan');
const route                 = require('./routes');
const path                  = require('path');
const hbs                   = require('express-hbs');
// const engineTemplate     = require('./util/templateEngine');
const db                    = require('./config/db');
const app                   = express();
const port                  = 3000;




// Connect to db---------------------------
db.connect();

// setup to join static file---------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger ----------------------------
app.use(morgan('combined'));

// Template engine.________________________
app.engine(
    'hbs',
    hbs.express4({
        partialsDir: [
            path.join(__dirname, 'resources/views/partials'),
            path.join(__dirname, 'resources/views/pages'),
            path.join(__dirname, 'resources/views/courses'),
        ],
    }),
);
app.set('view engine', 'hbs');
app.set('views', [
    path.join(__dirname, '/resources/views'),
    path.join(__dirname, '/resources/views/pages'),
    path.join(__dirname, '/resources/views/courses'),
]);

// engineTemplate(app);
route(app);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

