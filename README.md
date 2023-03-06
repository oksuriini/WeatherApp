# My weather app

My weather app is Javascript app that uses express, leaflet and (possibly in the future) D3 libraries.

You can start the server by typing in terminal "npm start".

You can access the app through "http://127.0.0.1:3010/" URL from your browser.

You need to use "Get Coordinates" button, which uses navigator to find your coordinates (if available), or alternatively you can type the latitude and longitude.

"Validate Coordinates" button only validates that the input is a number, which is checked also on the server side.

When you have latitude and longitude typed into the input fields, then you can press "Get Weather" button.

"Get Weather" button makes an API call to the express server, which first validates the coordinates, after which it makes an API call to open-meteo's weather API to fetch current weather information. This also saves the API's response information to folder '/public/data/weatherdata.json'.

"Process" button runs JS script that renders the table, which shows the weather for 7 days at given coordinates.

Leaflet has been implimented, and now shows the map around given coordinates, and short popup window about current weather and min max temperatures.

Additionally I'm planning to make a d3 chart to show temperature every hour.

## Install instructions:

You need to install Node.js in order to be able to run the application, after which follow these instructions:

`git clone git@github.com:oksuriini/WeatherApp.git`

`cd WeatherApp`

`npm install`

`npm start`

App is available at 127.0.0.1:3010.
