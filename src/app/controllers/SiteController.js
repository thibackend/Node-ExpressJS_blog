const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    async index(req, res, next) {

        // _____ Callback way.____
        // const courses = await Course.find({}).exec();
        // // res.render('home', { layout: 'main', courses: courses[0] });
        // res.json(courses);
        // // res.json(courses);

        // Promise way.
        Course.find({})
            .then(courses => {
                res.render(
                    'home',
                    {
                        layout: 'main',
                        courses: multipleMongooseToObject(courses)
                    }
                )
            }
            )
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search', { layout: 'main' });
    }
}


module.exports = new SiteController();
