var express = require('express');
var reports = require('../models/Report');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        reports.find({})
            .then((reports) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reports);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        reports.create(req.body)
            .then((report) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(report);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    
    .delete((req, res, next) => {
        reports.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    router.route('/:id')
    .get((req, res, next) => {
        reports.findById(req.params.id)
            .then((report) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(report);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        reports.findByIdAndUpdate(req.params.id,
             { $set: req.body }, 
             { new: true, useFindAndModify: false })
            .then((report) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(report);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        reports.findByIdAndDelete(req.params.id)
            .then((report) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(report);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    module.exports = router;