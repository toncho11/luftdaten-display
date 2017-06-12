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

function rsvpGetJSON(url) {
	  var promise = new RSVP.Promise(function(resolve, reject){
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
		  if (this.readyState === this.DONE) {
			if (this.status === 200) { resolve(this.response); }
			else { reject(this); }
		  }
		};
	  });

	  return promise;
	};