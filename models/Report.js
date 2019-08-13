var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let ReportSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageName: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        required: true
    }
},
    {
    timestamps: true
    });

var Report = mongoose.model('Report', ReportSchema);
module.exports = Report;