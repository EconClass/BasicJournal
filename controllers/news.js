const express = require('express');
const app = express();
const apiKey = process.env.API_KEY;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKey);
const Entry = require('../models/entry.js');
const Note = require('../models/note.js');

// HOME
app.get('/', (req, res) =>{
    Entry.find().then(entries => {
        newsapi.v2.topHeadlines({
            sources: 'reuters, bbc-news'
        }).then(news => {
            // res.send(news);
            res.render('home', { entries: entries, news: news.articles });
        });
    });
});
//NEW
// app.get('/news/:title/entries/new', (req, res) =>{
//     Entry.find({newsId: req.params.title}).then(news => {
//         res.render('entry-new.hbs', {news, newsId: req.params.title});
//     });
// });

//NEW
app.get('/news/:id/entries/new', (req, res) =>{
    Entry.find({newsId: req.params.title}).then(entries => {
        newsapi.v2.topHeadlines({
            sources: 'reuters, bbc-news'
        }).then(news => {
            // res.send(news);
            res.render('entry-new.hbs', { news: news.articles });
        });
    });
});

// SHOW
app.get('/news/:id', (req, res) =>{
    newsapi.v2.topHeadlines({
        sources: 'reuters, bbc-news'
    }).then(news => {
        function renderTemplate(news) {
            Note.find({newsId: req.params.title}).then(notes => {
                res.render('note-show.hbs', {});
            });
        };
    }); 
});

module.exports = app;