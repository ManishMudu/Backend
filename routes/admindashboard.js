var express = require('express');
var Event = require('../models/Event');
var User = require('../models/User');
var News = require('../models/News');
var Rule = require('../models/Rule');
var Report = require('../models/Report');

var router = express.Router();

router.route('/')
.get(async (req, res, next) => {
    let events = await Event.find({});
    let users = await User.find({});
    let news = await News.find({});
    let rules = await Rule.find({});
    let reports = await Report.find({});
    
    res.json({
        eventcount: events.length,
        usercount: users.length,
        newscount: news.length,
        rulecount: rules.length,
        reportcount: reports.length 
    });
});
module.exports = router;