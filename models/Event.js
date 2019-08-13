var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    eventtype: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: true
    }
},
    {
    timestamps: true
    });

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;