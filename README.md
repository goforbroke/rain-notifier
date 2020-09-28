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

```
$ vi <app root directory>/.env
YAHOO_API_APP_ID=<Your Yahoo api app id>
YAHOO_API_APP_SECRET=<Your Yahoo api app secret>
GOOGLE_HOME_MDNS_NAME=<Your Google Home mdns name>
LOCATION_LATITUDE=<Your location latitude>
LOCATION_LONGITUDE=<Your location longitude>
NOTIFY_RAINFAILL_AMOUNT_UNDER=<Rain threshold amount>
```

- This application uses `YOLP`.
`YOLP` needs authentication, authorization config.
    - `YAHOO_API_APP_ID`
    - `YAHOO_API_APP_SECRET`

- `GOOGLE_HOME_MDNS_NAME` detects by mdns.
    - Please see below for the details.
    https://www.gesource.jp/weblog/?p=8082

## Usage

`npm run start`

## Acknowledgements

This program referred to the following site.

https://mst335.hatenablog.com/entry/2018/06/02/004229