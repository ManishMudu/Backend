var express = require('express');
var news = require('../models/News');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        news.find({})
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        news.create(req.body)
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    
    .delete((req, res, next) => {
        news.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
    
    router.route('/:id')
    .get((req, res, next) => {
        news.findById(req.params.id)
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        news.findByIdAndUpdate(req.params.id,
             { $set: req.body }, 
             { new: true, useFindAndModify: false })
            .then((news) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(news);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        news.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;