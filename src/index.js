require('dotenv').config();
const GoogleHome = require('./googlehome');
const googlehome = new GoogleHome(mdnsName = process.env.GOOGLE_HOME_MDNS_NAME);
const WeatherService = require('./weather-service');

const weatherService = new WeatherService(appId = process.env.YAHOO_API_APP_ID, lat = process.env.LATITUDE, lon = process.env.LONGITUDE);

const run = async () => {
    if (await weatherService.isRainFall()) {
        googlehome.speak(text = '雨が降ります', function(res) {
            console.log(res);
        });
    } else {
        googlehome.speak(text = '雨は降りません', function(res) {
            console.log(res);
        });
    }
}

run();

