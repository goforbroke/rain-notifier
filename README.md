# rain-notifier

## Installation

### Before npm install

`mdns` requires some library before npm install.

`sudo apt-get install git-core libnss-mdns libavahi-compat-libdnssd-dev`

Please see below for the details.

https://github.com/noelportugal/google-home-notifier

### Npm install

npm install

### After npm install(If you use mdns)

Please see below for the details.

https://github.com/noelportugal/google-home-notifier

### After "npm install"

## Setup

This application uses `YOLP`.
`YOLP` needs authentication, authorization config.

`GOOGLE_HOME_MDNS_NAME` detects by mdns.

Please see below for the details.
https://www.gesource.jp/weblog/?p=8082

```
$ vi <app root directory>/.env
YAHOO_API_APP_ID=<Your Yahoo api app id>
YAHOO_API_APP_SECRET=<Your Yahoo api app secret>
GOOGLE_HOME_MDNS_NAME=<Your Google Home mdns name>
```

## Usage

`npm run start`
