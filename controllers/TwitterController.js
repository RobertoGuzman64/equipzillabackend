const axios = require('axios');
const Twitter = require('twitter');
const TwitterController = {};


TwitterController.muestraTweets = (req, res) => {
    const client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    client.get('search/tweets', { q: '#nodejs', count: 10 }, function(error, tweets, response) {
        if (error) throw error;
        res.json(tweets);
    });
}

// guardar 100 twitters en la base de datos
TwitterController.guardaTweets = (req, res) => {
    const client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    client.get('search/tweets', { q: '#nodejs', count: 100 }, function(error, tweets, response) {
        if (error) throw error;
        tweets.statuses.forEach(tweet => {
            axios.post('http://localhost:3000/api/tweets', {
                id: tweet.id_str,
                text: tweet.text,
                created_at: tweet.created_at,
                user: {
                    id: tweet.user.id_str,
                    name: tweet.user.name,
                    screen_name: tweet.user.screen_name,
                    profile_image_url: tweet.user.profile_image_url
                }   
            })
        }
        )
        res.json(tweets);
    }
    )
}





module.exports = TwitterController;