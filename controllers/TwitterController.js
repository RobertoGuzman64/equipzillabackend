require('dotenv').config();
const Twitter = require('twitter');
const TwitterModel = require('../models/twitter.js');
const TwitterController = {};


TwitterController.verTweets = async (req, res) => {
    try {
        const tweets = await TwitterModel.find();
        res.json(tweets);
    } catch (error) {
        res.json({ message: error });
    }
}

TwitterController.buscaTweets = async (req, res) => {
    const solicitud = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        timeout_ms: 60 * 1000,
        strictSSL: true
    });
    solicitud.get('search/tweets', { recent: 'true', q: hastags = '#elonmusk', count: 100, lang: 'en' }, function (error, data, response) {
        res.json(data);
    }
    );
}

TwitterController.guarda1Tweet = async (req, res) => {
    const tweet = req.body;
    const twitter = new TwitterModel(tweet);
    await twitter.save();
    res.json(tweet);
}

TwitterController.guardaTweets = async (req, res) => {
    const solicitud = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        timeout_ms: 60 * 1000,
        strictSSL: true
    });
    solicitud.get('search/tweets', { recent: 'true', q: hastags = '#elonmusk', count: 100, lang: 'en' }, function (error, data, response) {
        const guardaDatos = (data) => {
            data.statuses.forEach(tweet => {
                const twitter = new TwitterModel(tweet);
                twitter.save();
            }
            );
        }
        guardaDatos(data);
    }
    );
}


module.exports = TwitterController;