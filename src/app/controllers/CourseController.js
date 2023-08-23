const Course = require("../models/Course");
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.courseSlug })
            .then(
                course => {
                    res.render('show',{layout: 'main', course:mongooseToObject(course)});
                    console.log(course)
                }
            )
            .catch(next);
    }
}

module.exports = new CourseController();
