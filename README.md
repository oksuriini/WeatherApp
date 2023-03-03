# My weather app

My weather app is Javascript app that uses express, leaflet and (possibly in the future) D3 libraries.

You can start the server by typing in terminal "npm start".

You can access the app through "http://127.0.0.1:3010/" URL from your browser.

You need to use "Get Coordinates" button, which uses navigator to find your coordinates (if available), or alternatively you can type the latitude and longitude.

"Validate Coordinates" button only validates that the input is a number, which is checked also on the server side.

When you have latitude and longitude typed into the input fields, then you can press "Get Weather" button.

"Get Weather" button makes an API call to the express server, which first validates the coordinates, after which it makes an API call to open-meteo's weather API to fetch current weather information. This also saves the API's response information to folder '/public/data/weatherdata.json'.

Process is supposed to create the leaflet map and compile information, but is not fully implemented yet.

Right now leaflet is not fully implemented, but will be in the future to show the location on the map, and add small box to inform current temperature, wind and some other information.

Additionally I'm planning to make a d3 chart to show temperature every hour.

## Install instructions:

TODO