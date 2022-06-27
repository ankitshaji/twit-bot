console.log("The bot is running");
//import Twit and auth info
const Twit = require("twit");
const config = require("./config");
const fs = require("fs");

//Creating insatance of Twit()
const T = new Twit(config);

//GET request - search/tweets - query(skate,2)
// searchTweets();
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
//Post Request - uplod media to twitter to get ID
function uploadMedia() {
  //import file from local
  const fileName = "./images/dirt.jpg";
  const b64 = fs.readFileSync(fileName, { encoding: "base64" });
  //POST Request
  T.post("media/upload", { media_data: b64 }, postTweet);
}

//POST request - Post tweet with image
function postTweet(err, data, response) {
  console.log(data);
  const id = data.media_id_string;
  console.log(id)
  //random no generator
  const r = Math.floor(Math.random() * 100);
  T.post(
    "statuses/update",
    {
      status: "Test Tweet, random no: " + r + " : Post Request",
      media_ids: [id],
    },
    function (err, data, response) {
      if (err) {
        console.log("Error occured when posting.");
      } else {
        console.log("Tweet Posted successfully.");
      }
    }
  );
}
uploadMedia();
// setInterval(uploadMedia,1000 * 60 * 60);

//POST request - Post new status tweet
function postStatusTweet() {
  //Random no
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
//postStatusTweet();