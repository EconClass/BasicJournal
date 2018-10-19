const express = require('express');
const app = express();
const Article = require('../models/article.js');

// NEW
app.get('/articles/:id/notes/new', (req, res) => {
    Article.find({ _id: req.params.id }).then( article => {
        res.render('note-new.hbs', { article, _id: req.params.id });
    });
});

// CREATE
app.post('/', (req, res) => {
    Article.create(req.body).then( article => {
        // res.send(article);
        res.redirect(`/`);
    }).catch((err) => {
        console.log(err.message);
    });
});

// SHOW
app.get('/articles/:id', (req, res) => {
    Article.findById(req.params.id).then(article => {
        res.render('article-show.hbs', { article: article })
    }).catch((err) => {
        console.log(err.message);
    });
});

// DELETE
app.delete('/articles/:id', (req, res) => {
    Article.findOneAndDelete({ _id: req.params.id }).then(article => {
        res.redirect(`/`);
    }).catch((err) => {
        console.log(err.message);
    });
});

module.exports = app;