console.log("The bot is running");
//import Twit and auth info
const Twit = require("twit");
const config = require("./config");

//Creating insatance of Twit()
const T = new Twit(config);
