;(function(freeboard, $){

	var TableWidget = function(settings) {
		var self = this;

		var $table = $('<table style="width:100%; height:100%; font-size:11px;"><thead style="background:#CFCCCB;"><tr><th>Name</th><th>Model</th><th>Status</th><th>Low buttery</th></tr></thead><tbody></tbody></table>');

		self.render = function(containerElement) {
			console.log('all be back')

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

		self.onSettingsChanged = function(newSettings){
			currentSettings = newSettings;
		}

		self.onCalculatedValueChanged = function(settingName, newValue){

			if(settingName == 'name'){
			
			console.log('name')

				if(settingName == 'model'){
					console.log('model');
				}
			
				if(settingName == 'status'){
					console.log('status');
				}

				if(settingName == 'low_buttery'){
					console.log('low_buttery');
				}

			}
		}
	}

	function rowWriter(json) {
	  var tr = '';

	  for (var key in json) {
	    tr += '<td>' + json[key] + '</td>';
	  }

	  return '<tr>' + tr + '</tr>';
	};

	var drone = [
    {'name': 'Drone1', 'model': 'Model1', 'status': 'Online', 'low_buttery': 'true'},
    {'name': 'Drone2', 'model': 'Model2', 'status': 'Online', 'low_buttery': 'false'},
    {'name': 'Drone3', 'model': 'Model1', 'status': 'Online', 'low_buttery': 'true'}
	];

	freeboard.loadWidgetPlugin({
		'type_name' : 'my_table_widget',
		'display_name' : 'Table Widget',
		'description' : 'This plugin displays information about drones',
		'fill_size' : 'false',
	    'settings': [
      {
        'name': 'name',
        'display_name': 'Name',
        'type': 'calculated',
        'default_value': 'Drone',
        'description': 'name drone'
      },
      {
        'name': 'model',
        'display_name': 'Model',
        'type': 'calculated',
        'default_value': '',
        'description': 'model drone'
      },
      {
        'name': 'status',
        'display_name': 'Status',
        'type': 'calculated',
        'default_value': '',
        'description': 'state drone online/offline'
      },
      {
        'name': 'low_battery',
        'display_name': 'Low buttery',
        'type': 'calculated',
        'default_value': '',
        'description': 'state buttery'
      }
    ],

		newInstance: function(settings, newInstanceCallback)
		{
			newInstanceCallback(new TableWidget(settings));
		}	
	});
})(freeboard, $);