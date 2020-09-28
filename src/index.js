require('dotenv').config();
const GoogleHome = require('./googlehome');
const WeatherService = require('./weather-service');

const run = async () => {
    const googlehome = new GoogleHome(mdnsName = process.env.GOOGLE_HOME_MDNS_NAME);
    const weatherService = new WeatherService(appId = process.env.YAHOO_API_APP_ID, lat = process.env.LATITUDE, lon = process.env.LONGITUDE);

    if (await weatherService.isRainFall()) {
        googlehome.speak(text = 'これから雨がふります', function(res) {
            console.log(res);
        });
    }
}

run();
