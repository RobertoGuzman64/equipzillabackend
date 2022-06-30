const axios = require('axios');
const Twitter = require('twitter');
const TwitterController = {};
const TwitterModel = require('../models/twitter.js');


// TwitterController.guardaTweets = async (req, res) => {
//     const solicitud = new Twitter({
//         consumer_key: "uNMdoo2UF29CJS8MtSGsBJud4",
//         consumer_secret: "69JlyU2CcyvlAln9nTqCUyslY6ZWy6oLrWNWuDXRylBWLkwMeM",
//         access_token_key: "932885846965006336-AMNY46K4iQGawaDgzhw4pecsa4vxHK9",
//         access_token_secret: "axnnuTjv38W3iT9ELwbJHDo0yRcLG9yIK8oxOcV5Ir43t",
//         timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
//         strictSSL: true // optional - requires SSL certificates to be valid.
//     });
//     await solicitud.get('search/tweets', { q: '#elonmask', count: 100 }, function (error, data, response) {
//         res.json(data.statuses.map (tweet => datosDelTweet(tweet)));
//     }
//     );
//     function datosDelTweet(tweet) {
//         const datosUtiles = {
//             id: tweet.id_str,
//             text: tweet.text,
//             created_at: tweet.created_at,
//             user: {
//                 id: tweet.user.id_str,
//                 name: tweet.user.name,
//                 screen_name: tweet.user.screen_name,
//                 profile_image_url: tweet.user.profile_image_url
//             }
//         }
//     }

// }


TwitterController.guardaTweets = async (req, res) => {
    const solicitud = new Twitter({
        consumer_key: "uNMdoo2UF29CJS8MtSGsBJud4",
        consumer_secret: "69JlyU2CcyvlAln9nTqCUyslY6ZWy6oLrWNWuDXRylBWLkwMeM",
        access_token_key: "932885846965006336-AMNY46K4iQGawaDgzhw4pecsa4vxHK9",
        access_token_secret: "axnnuTjv38W3iT9ELwbJHDo0yRcLG9yIK8oxOcV5Ir43t",
        timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        strictSSL: true // optional - requires SSL certificates to be valid.
    });
    solicitud.get('search/tweets', { q: '#elonmask', count: 100 }, function (error, data, response) {
        console.log(data)
        res.json(data);
    }
    );
}

TwitterController.guarda1Tweet = async ( req,res ) => {
    let tweet = req.body.tweet;
    let TweetNuevo = await TwitterModel.create(tweet).then(TweetNuevo => {
        return { status: 201, datos: TweetNuevo }
    }).catch(error => {
        return { status: 400, datos: { error: error.message } }
    });
}



// TwitterController.guardaTweets = (req, res) => {
//     const client = new Twitter({
//         consumer_key: process.env.TWITTER_CONSUMER_KEY,
//         consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//         access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//         access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//     });

//     client.get('search/tweets', { q: '#nodejs', count: 100 }, function (error, tweets, response) {
//         if (error) throw error;
//         tweets.statuses.forEach(tweet => {
//             axios.post('http://localhost:3000/api/tweets', {
//                 id: tweet.id_str,
//                 text: tweet.text,
//                 created_at: tweet.created_at,
//                 user: {
//                     id: tweet.user.id_str,
//                     name: tweet.user.name,
//                     screen_name: tweet.user.screen_name,
//                     profile_image_url: tweet.user.profile_image_url
//                 }
//             })
//         }
//         )
//         res.json(tweets);
//     }
//     )
// }





module.exports = TwitterController;