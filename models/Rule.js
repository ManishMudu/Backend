var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let RuleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    fines: {
        type: String,
        default: ''
    }
},
    {
    timestamps: true
    });

var Rule = mongoose.model('Rule', RuleSchema);
module.exports = Rule;