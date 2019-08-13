var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let NewsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imageName: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        required: true
    },
},
    {
    timestamps: true
    });

var News = mongoose.model('News', NewsSchema);
module.exports = News;