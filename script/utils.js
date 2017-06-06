function validate(sensor_name)
	{
	   if (!$.isNumeric(sensor_name))
	   {
	       alert("Sensor name must be non-empty and numeric!");
		   return false;
	   }
	    
	   return true;
	}
	
function getRemote(remote_url) {
	return $.ajax({
		type: "GET",
		url: remote_url,
		async: false //on purpose, because we can not continue until all files are downloaded
	}).responseText;
}

function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterItems(arr, query) {
  return arr.filter(function(el) {
	  return el.sensor.id == query;
})
};

function filterByID(item) {
  if (isNumber(item.id)) {
	return true;
  } 
  //invalidEntries++;
  return false; 
}