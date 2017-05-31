# luftdaten-display
It is a web application that visualizes the data from http://archive.luftdaten.info. You can either host it on a web server or download and execute it locally on your computer. You can get a release here: https://github.com/toncho11/luftdaten-display/archive/master.zip. Once downloaded click on:

  * get_SDS011_single_sensor_data.html and fill the ID of your SDS011 sensor (PM 10 and PM 2.5)
  * get_BME280_single_sensor_data.html and fill the ID of your BME280 sensor (Temperature, Humidity, Air pressure)

The current implementation is in HTML and Javascript(Ajax). The project does not use a server side programming language such as PHP neither a database. The advatage is that it can be used locally without the need to be hosted on a web-server and without the need of installing anything.
