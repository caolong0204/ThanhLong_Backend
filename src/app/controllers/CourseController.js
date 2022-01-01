const mongoose = require('mongoose');

var course = require(__path_models + "Course");
require('../models/Person');
const person = mongoose.model("Person");

class CourseController {
    index(req, res) {
        res.send("Course Page");
    };

    getList(req, res) {
        course.find({}).populate("author", ["name", "role"]).exec((err, data) => {
            if (!err) {
                res.json(data);
                return;
            }
            res.status(400).json({ error: 'Error!!!' });
        })
    };
    create(req, res) {
        console.log("====create", req.body);
        course.create(req.body, (err) => {
            if (err) {
                return res.status(403).send("lỗi");
            }
            res.send("create ok");
        })
    };
    getListPerson(req, res) {
        person.find({}, (err, data) => {
            if (!err) {
                res.json(data);
                return;
            }
            res.status(400).json({ error: 'Error!!!' });
        })
    };
}
module.exports = new CourseController();