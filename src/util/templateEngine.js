const path      = require('path');
const hbs       = require('express-hbs');

const engineTemplate = (app) => {
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

}
module.exports = engineTemplate ;