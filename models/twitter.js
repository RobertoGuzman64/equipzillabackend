const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const twitterSchema = new Schema({
  created_at: {
    type: Date
  },
  id: {
    type: Number
  },
  id_str: {
    type: String
  },
  text: {
    type: String
  },
  truncated: {
    type: Boolean
  },
  entities: {
    hashtags: {
      type: Array
    },
    symbols: {
      type: Array
    },
    user_mentions: {
      type: Array
    },
    urls: {
      type: [
        String
      ]
    }
  },
  metadata: {
    iso_language_code: {
      type: String
    },
    result_type: {
      type: String
    }
  },
  source: {
    type: String
  },
  in_reply_to_status_id: {
    type: String
  },
  in_reply_to_status_id_str: {
    type: String
  },
  in_reply_to_user_id: {
    type: String
  },
  in_reply_to_user_id_str: {
    type: String
  },
  in_reply_to_screen_name: {
    type: String
  },
  user: {
    id: {
      type: Number
    },
    id_str: {
      type: String
    },
    name: {
      type: String
    },
    screen_name: {
      type: String
    },
    location: {
      type: String
    },
    description: {
      type: String
    },
    url: {
      type: String
    },
    entities: {
      description: {
        urls: {
          type: Array
        }
      }
    },
    protected: {
      type: Boolean
    },
    followers_count: {
      type: Number
    },
    friends_count: {
      type: Number
    },
    listed_count: {
      type: Number
    },
    created_at: {
      type: Date
    },
    favourites_count: {
      type: Number
    },
    utc_offset: {
      type: String
    },
    time_zone: {
      type: String
    },
    geo_enabled: {
      type: Boolean
    },
    verified: {
      type: Boolean
    },
    statuses_count: {
      type: Number
    },
    lang: {
      type: String
    },
    contributors_enabled: {
      type: Boolean
    },
    is_translator: {
      type: Boolean
    },
    is_translation_enabled: {
      type: Boolean
    },
    profile_background_color: {
      type: String
    },
    profile_background_image_url: {
      type: String
    },
    profile_background_image_url_https: {
      type: String
    },
    profile_background_tile: {
      type: Boolean
    },
    profile_image_url: {
      type: String
    },
    profile_image_url_https: {
      type: String
    },
    profile_banner_url: {
      type: String
    },
    profile_link_color: {
      type: String
    },
    profile_sidebar_border_color: {
      type: String
    },
    profile_sidebar_fill_color: {
      type: String
    },
    profile_text_color: {
      type: String
    },
    profile_use_background_image: {
      type: Boolean
    },
    has_extended_profile: {
      type: Boolean
    },
    default_profile: {
      type: Boolean
    },
    default_profile_image: {
      type: Boolean
    },
    following: {
      type: Boolean
    },
    follow_request_sent: {
      type: Boolean
    },
    notifications: {
      type: Boolean
    },
    translator_type: {
      type: String
    },
    withheld_in_countries: {
      type: Array
    }
  },
  geo: {
    type: String
  },
  coordinates: {
    type: String
  },
  place: {
    type: String
  },
  contributors: {
    type: String
  },
  is_quote_status: {
    type: Boolean
  },
  retweet_count: {
    type: Number
  },
  favorite_count: {
    type: Number
  },
  favorited: {
    type: Boolean
  },
  retweeted: {
    type: Boolean
  },
  possibly_sensitive: {
    type: Boolean
  },
  lang: {
    type: String
  }
});


const Twitter = mongoose.model("Twitter", twitterSchema);
module.exports = Twitter;