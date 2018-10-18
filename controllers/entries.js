const express = require('express');
const app = express();
const Entry = require('../models/entry.js');

// //NEW
// app.get('/news/:title/entries/new', (req, res) =>{
//     Entry.find({newsId: req.params.title}).then(news =>{
//         res.render('entry-new.hbs', {news, newsId: req.params.title});
//     });
// });

//CREATE
app.post('/entries', (req, res) => {
    Entry.create(req.body).then(entries => {
        res.redirect('/');
    }).catch(err => {
        console.log(err.message);
    })
})

// SHOW
app.get('/entries/:id', (req, res) => {
    Entry.findById(req.params.id).then(entries => {
        res.render('entry-show.hbs', {entries: entries});
    });
});

// EDIT
app.get('/entries/:id/edit', (req, res) => {
    Entry.findById(req.params.id, function(err, entries) {
        res.render('entry-edit.hbs', {entries: entries});
    }).catch(err => {
        console.log(err.message);
    });
});

// UPDATE
app.put('/entries/:id', (req, res) => {
    Entry.findOneAndUpdate({_id: req.params.id}, req.body).then(entries => {
        res.redirect(`/entries/${entries._id}`);
    }).catch(err => {
        console.log(err.message);
    });
});

// DELETE
app.delete('/entries/:id', (req, res) => {
    Entry.findOneAndDelete({_id: req.params.id}).then(entries => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    });
});
module.exports = app;