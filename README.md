# luftdaten-display
It is a web application that visualizes the data from http://archive.luftdaten.info.

Get data for the current day:
  * [SDS011 current day](https://toncho11.github.io/luftdaten-display/get_SDS011_current_day_single_sensor_data.html) and fill the ID of your SDS011 sensor to get PM 10 and PM 2.5. WARNING: It takes 1 minute to download and process the data!
  
Get historical data (not including the current day):
  * [SDS011 Historical](https://toncho11.github.io/luftdaten-display/get_SDS011_single_sensor_data.html) and fill the ID of your SDS011 sensor to get the PM 10 and PM 2.5
  * [BME280 Historical](https://toncho11.github.io/luftdaten-display/get_BME280_single_sensor_data.html) and fill the ID of your BME280 sensor to get the Temperature, Humidity, Air pressure

The current implementation is in HTML and Javascript(Ajax). The project does not use a server side programming language such as PHP neither a database. The advatage is that it can be used locally without the need to be hosted on a web-server and without the need of installing anything.

Future plans:
  * add moving average for a single sensor
  * add area chart based on multiple sensors of a city or neighbourhood 
