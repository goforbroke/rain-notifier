module.exports = class GoogleHome {
    constructor(mdnsName = "nothing", language = 'ja') {
        this.mdnsName = mdnsName;
        this.language = language;
        this.googlehome = require('google-home-notifier');
    }

    speak(text = 'It rain comes.') {
        this.googlehome.device(this.mdnsName, this.language);
        this.googlehome.notify(text, (res) => {
            console.log(`googlehome.notify() response = ${res}`);
        })
    }
}