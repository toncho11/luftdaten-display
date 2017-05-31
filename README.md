# luftdaten-display
It is a web application that visualizes the data from http://archive.luftdaten.info. You can either host it on a web server or download and execute it locally on your computer. You can get a release here: https://github.com/toncho11/luftdaten-display/archive/master.zip. Once downloaded click on:

  * get_SDS011_single_sensor_data.html and fill the ID of your SDS011 sensor (PM 10 and PM 2.5)
  * get_BME280_single_sensor_data.html and fill the ID of your BME280 sensor (Temperature, Humidity, Air pressure)

The data is recodred in UTC time, but all the sensors are located in different timzeones all over the world. So you need to set the timezone for your sensor if you are trying to match a specific event such as the morning traffic jam with the pollution data. For France/Germany you need to usually enter: +2 and for Bulgaria +3. 

The current implementation is in HTML and Javascript(Ajax). The project does not use a server side programming language such as PHP neither a database. The advatage is that it can be used locally without the need to be hosted on a web-server and without the need of installing anything.
