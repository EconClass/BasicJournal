const express = require('express');
const app = express();
const Note = require('../models/note.js');

//NEW
app.get('/notes/new', (req, res) =>{
    res.render('note-new.hbs', {});
});

//CREATE
app.post('/notes', (req, res) => {
    Note.create(req.body).then(notes => {
        res.redirect('/');
    }).catch(err => {
        console.log(err.message);
    })
})

// SHOW
app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id).then(notes => {
        res.render('note-show.hbs', {notes: notes});
    });
});

// EDIT
app.get('/notes/:id/edit', (req, res) => {
    Note.findById(req.params.id, function(err, notes) {
        res.render('note-edit.hbs', {notes: notes});
    }).catch(err => {
        console.log(err.message);
    });
});

// UPDATE
app.put('/notes/:id', (req, res) => {
    Note.findOneAndUpdate({_id: req.params.id}, req.body).then(notes => {
        res.redirect(`/notes/${notes._id}`);
    }).catch(err => {
        console.log(err.message);
    });
});

// DELETE
app.delete('/notes/:id', (req, res) => {
    Note.findOneAndDelete({_id: req.params.id}).then(notes => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    });
});
module.exports = app;