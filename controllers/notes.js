const express = require('express');
const app = express();
const Article = require('../models/article.js');
const Note = require('../models/note.js');

// NEW
app.get('/articles/:id/notes/new', (req, res) => {
    Note.find({ aticleId: req.params.id }).then( note => {
        res.render('note-new.hbs', { note, articleId: req.params.id });
    });
});

// CREATE
app.post('/articles/:id/notes', (req, res) => {
    // Article.find({id: _id}).then( article => {
        Note.create(req.body).then(note => {
            res.send(note);
            // res.redirect(`/articles/${note.articleId}`);
        }).catch(err => {
            console.log(err.message);
        });
    // });
});
// // SHOW
// app.get('/stories/:id', (req, res) => {
//     Story.findById(req.params.id).then(stories => {
//       Comment.find({ storiesId: req.params.id }).then(comments => {
//         res.render('stories-show.hbs', { stories: stories, comments: comments });
//       });
//     }).catch((err) => {
//       console.log(err.message);
//     });
//   });
// // EDIT
// app.get('/stories/:id/edit', (req, res) => {
//     Story.findById(req.params.id, function(err, stories) {
//         res.render('stories-edit.hbs', {stories: stories});
//     }).catch(err => {
//         console.log(err.message);
//     });
//   });
  
//   // UPDATE
//   app.put('/stories/:id', (req, res) => {
//     Story.findByIdAndUpdate(req.params.id, req.body).then(stories => {
//         // res.send(stories);
//         res.redirect(`/stories/${stories._id}`);
//     }).catch(err => {
//         console.log(err.message);
//     });
//   });
  
//   // DELETE
//   app.delete('/stories/:id', (req, res) => {
//     Story.findByIdAndDelete(req.params.id).then(stories => {
//         res.redirect('/');
//     }).catch((err) => {
//         console.log(err.message);
//     });
//   });

  module.exports = app;