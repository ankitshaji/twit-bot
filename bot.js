console.log("The bot is running");
//import Twit and auth info
const Twit = require("twit");
const config = require("./config");

//Creating insatance of Twit()
const T = new Twit(config);

//GET request - search/tweets - query(skate,2) 
T.get(
  "search/tweets",
  { q: "skate", count: 2 },
  function (err, data, response) {
    //output just the text of each tweet
    const tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
      console.log("break");
    }
  }
);
