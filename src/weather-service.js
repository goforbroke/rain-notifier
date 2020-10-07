require('dotenv').config();
const axios = require('axios');

module.exports = class RainForecastService {
    constructor(appId = 'nothing', lat = 35.685175, lon = 139.7528) {
        this.appId = appId;
        this.lat = lat;
        this.lon = lon;
    }

    async isRainFall() {
        const notifyThreshold = Number.parseFloat(process.env.NOTIFY_RAINFAILL_AMOUNT_UNDER);

        const forecastsWithHttp = await this.fetch();
        const forecasts = forecastsWithHttp.data.Feature[0].Property.WeatherList.Weather;
        const [current, next] = forecasts;
        console.log(current, next);

        return (current.Rainfall === 0 && next.Rainfall > notifyThreshold) ? true : false;
    }

    fetch() {
        return axios.get(process.env.YAHOO_WEATHER_API_URL, {
            params: {
                output: 'json',
                coordinates: `${this.lon},${this.lat}`,
                appid: this.appId
            }
        });
    }
}