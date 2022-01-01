const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String, minlength: 1, maxlength: 50 },
    description: { type: String, default: '' },
    count: { type: Number, default: 0 },
    createOn: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    author:{type: Schema.Types.ObjectId,ref: 'Person'}
})
module.exports = mongoose.model("Course", Course);
