const express = require('express');
const app = express();
const apiKey = process.env.API_KEY;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apiKey);
const Article = require('../models/article.js');

// HOME
app.get('/', (req, res) => {
    Article.find().then(article => {
        // Uses NewsAPI to gather news articles
        newsapi.v2.topHeadlines({
            sources: 'reuters, bbc-news'
        }).then(news => {
            res.render('home', { article: article, news: news.articles });
        }).catch((err) => {
            console.log(err.message);
        });
    });
});

//NEW
app.get('/new/:index', (req, res) => {
    Article.find().then(article => {
        newsapi.v2.topHeadlines({
            sources: 'reuters, bbc-news'
        }).then(news => {
            res.render('article-new.hbs', {news: news.articles[req.params.index]})
        }).catch((err) => {
            console.log(err.message);
        });
    });
});

module.exports = app;