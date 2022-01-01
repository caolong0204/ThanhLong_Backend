const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Person = new Schema({
    name: { type: String, minlength: 1, maxlength: 50 },
    age: { type: Number, default: 18 },
    role: { type: Number, default: 0 },
})
module.exports = mongoose.model("Person", Person);
