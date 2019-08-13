var express = require('express');
var rules = require('../models/Rule');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        rules.find({})
            .then((rules) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rules);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        rules.create(req.body)
            .then((rule) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rule);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    
    .delete((req, res, next) => {
        rules.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    
    router.route('/:id')
    .get((req, res, next) => {
        rules.findById(req.params.id)
            .then((rule) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rule);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        rules.findByIdAndUpdate(req.params.id,
             { $set: req.body }, 
             { new: true, useFindAndModify: false })
            .then((rule) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(rule);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        rules.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;