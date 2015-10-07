;(function(freeboard, $){

	var TableWidget = function(settings) {
		var self = this;

		var $table = $('<table style="width:100%; height:100%; font-size:11px;"><thead style="background:#CFCCCB;"><tr><th>Name</th><th>Model</th><th>Status</th><th>Low buttery</th></tr></thead><tbody></tbody></table>');

		self.render = function(containerElement) {
			console.log('all be back')
				function rowWriter(json) {
	  var tr = '';

	  for (var key in json) {
	    tr += '<td>' + json[key] + '</td>';
	  }

	  return '<tr>' + tr + '</tr>';
	};
		  var tbody = '';

		  for(var i = 0, len = drone.length; i < len; i++){
		  	tbody += rowWriter(drone[i]); 
		  }

		  $($table).find('tbody').append(tbody);

			$(containerElement).append($table);

			$table.find('th,td').css('border','2px #545454 solid');
		}

		self.getHeight = function() {
			return 4;
		}

		self.onSettingsChanged = function(onSettings){
			currentSettings = newSettings;
		}

		self.onCalculatedValueChanged = function(settingName, newValue){

			if(settingName)
		}
	}

	var drone = [
    {'Name': 'Drone1', 'Model': 'Model1', 'Status': 'Online', 'Low buttery': 'true'},
    {'Name': 'Drone2', 'Model': 'Model2', 'Status': 'Online', 'Low buttery': 'false'},
    {'Name': 'Drone3', 'Model': 'Model1', 'Status': 'Online', 'Low buttery': 'true'}
	];

	freeboard.loadWidgetPlugin({
		'type_name' : 'my_table_widget',
		'display_name' : 'Table Widget',
		'description' : 'This plugin ',
		'fill_size' : 'false',
	    'settings': [
	      {
	        'name': 'value',
	        'display_name': 'Initial value',
	        'type': 'text',
	        'default_value': '',
	        'description': 'Initial value for the state'
	      }
	    ],

		newInstance: function(settings, newInstanceCallback)
		{
			newInstanceCallback(new TableWidget(settings));
		}	
	});
})(freeboard, $);