const express = require('express');
const app = express();
// const Article = require('../models/article.js');
const Note = require('../models/note.js');

// NEW
app.get('/articles/:id/notes/new', (req, res) => {
    Note.find({ articleId: req.params.id }).then( note => {
        res.render('note-new.hbs', { note, articleId: req.params.id });
    });
});

// CREATE
app.post('/articles/:id/notes', (req, res) => {
    Note.create(req.body).then(note => {
        // res.send(note);
        res.redirect(`/articles/${note.articleId}`);
    }).catch(err => {
        console.log(err.message);
    });
});

// SHOW
app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(note => {
        res.render('note-show.hbs', { note: note });
    }).catch((err) => {
        console.log(err.message);
    });
});

// EDIT
app.get('/notes/:id/edit', (req, res) => {
    Note.findById(req.params.id).then( note => {
        res.render('note-edit.hbs', {note: note});
    }).catch(err => {
        console.log(err.message);
    });
});
  
// UPDATE
app.put('/notes/:id', (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body).then(note => {
        // res.send(note);
        res.redirect(`/articles/${note.articleId}/note/${note._id}`);
    }).catch(err => {
        console.log(err.message);
    });
});
  
// DELETE
app.delete('/notes/:id', (req, res) => {
    Note.findByIdAndDelete(req.params.id).then(note => {
        res.redirect(`/articles/${note.articleId}`);
    }).catch((err) => {
        console.log(err.message);
    });
});

  module.exports = app;