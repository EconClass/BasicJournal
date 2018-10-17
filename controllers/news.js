const express = require('express');
const app = express();
const apiKey = process.env.API_KEY;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKey);

// HOME
app.get('/', (req, res) =>{
    newsapi.v2.topHeadlines({
        sources: 'reuters, bbc-news'
    }).then(news => {
        console.log(news)
        // res.send(news);
        res.render('home', { news: news.articles });
    });
    
});

// SHOW
app.get('/news/:id', (req, res) =>{
    res.render('note-show.hbs', {});
});

module.exports = app;