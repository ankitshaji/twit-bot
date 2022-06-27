console.log("The bot is running");
//import Twit and auth info
const Twit = require("twit");
const config = require("./config");
//Creating insatance of Twit()
const T = new Twit(config);

// searchTweets();
//GET request - search/tweets - query(skate,2)
function searchTweets() {
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
}

// postTweet();
// setInterval(postTweet,100*30);
//POST request - post tweet
function postTweet() {
  //Different status check
  const r = Math.floor(Math.random() * 1000*60*60);
  T.post(
    "statuses/update",
    { status: "Test Tweet, random no: " + r + " : Post Request" },
    function (err, data, response) {
      if (err) {
        console.log("Error occured when posting.");
      } else {
        console.log("Tweet Posted successfully.");
      }
    }
  );
}
