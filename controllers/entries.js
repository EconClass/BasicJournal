const express = require('express');
const app = express();
const Entry = require('../models/entry.js');

// HOME
app.get('/', (req, res) => {
    Entry.find().then(entries => {
        res.render('home.hbs', {entries: entries});
    }).catch(err => {
        console.log(err.message);
    });
});

//CREATE
app.post('/entries/:id', (req, res) => {
    Entry.create(req.body).then(entries => {
        console.log(entries);
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
module.exports = app;