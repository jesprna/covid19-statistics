// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "4a73a757a4msh35e12743309326dp12a14ajsn12a38dfca357"
	}
}

$.ajax(settings).done(function (response) {
	
	var covidStats = response.data.covid19Stats;
	
	var html = `
			 <thead>
                    <tr>
                      <th>Country</th>
                      <th>Province</th>
                      <th>Confirmed</th>
                      <th>Death</th>
                      <th>Recovered</th>
                      <th>As of</th>
                    </tr>
                  </thead>
				  
                  <tfoot>
                    <tr>
                     <th>Country</th>
                      <th>Province</th>
                      <th>Confirmed</th>
                      <th>Death</th>
                      <th>Recovered</th>
                      <th>As of</th>
                    </tr>
                  </tfoot>
                  <tbody>
				  `;
				  var i=0;
	for(i=0; i< covidStats.length; i++){
		
		console.log(covidStats[i]);
				  html +=`
                    <tr>
                      <td>`+covidStats[i].country+`</td>
                      <td>`+covidStats[i].province+`</td>
                      <td>`+covidStats[i].confirmed+`</td>
                      <td>`+covidStats[i].deaths+`</td>
                      <td>`+covidStats[i].recovered+`</td>
                      <td>`+covidStats[i].lastUpdate+`</td>
                    </tr>`;
	}
	 html +=`				
			</tbody>		`;
			$('#dataTable').html(html);		
	
	  $('#dataTable').DataTable();
});

	
	

});

