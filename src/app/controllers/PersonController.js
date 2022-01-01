var person = require(__path_models + "Person");

class PersonController {
    index(req, res) {
        res.send("Person Page");
    };

    getList(req, res) {
        person.find({}, function (err, data) {
            if (!err) {
                res.json(data);
                return;
            }
            res.status(400).json({ error: 'Error!!!' });
        })
    };
    create(req, res) {
        console.log("====create", req.body);
        person.create(req.body, (err) => {
            if (err) {
                return res.status(403).send("lỗi");
            }
            res.send("create ok");
        })
    };
}
module.exports = new PersonController();