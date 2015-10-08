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

				if(settingName == 'low_battery'){
					console.log('low_battery');
				}

			}
		}

	  self.onDispose = function() {
      // any cleanup
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
    {'name': 'Drone1', 'model': 'Model1', 'status': 'Online', 'low_battery': 'true'},
    {'name': 'Drone2', 'model': 'Model2', 'status': 'Online', 'low_battery': 'false'},
    {'name': 'Drone3', 'model': 'Model1', 'status': 'Online', 'low_battery': 'true'}
	];

	freeboard.loadWidgetPlugin({
		'type_name' : 'my_table_widget',
		'display_name' : 'Table Widget',
		'description' : 'This plugin displays information about drones',
		'fill_size' : 'false',
    'settings': [
      {
        'name': 'drone_1',
        'display_name': 'Drone 1',
        'type': 'calculated',
      },
      {
        'name': 'drone_2',
        'display_name': 'Drone 2',
        'type': 'calculated',
      },
      {
        'name': 'drone_3',
        'display_name': 'Drone 3',
        'type': 'calculated',
      },
      {
        'name': 'drone_4',
        'display_name': 'Drone 4',
        'type': 'calculated',
      },
      {
        'name': 'drone_5',
        'display_name': 'Drone 5',
        'type': 'calculated',
      },
      {
        'name': 'drone_6',
        'display_name': 'Drone 6',
        'type': 'calculated',
      },
      {
        'name': 'drone_7',
        'display_name': 'Drone 7',
        'type': 'calculated',
      },
      {
        'name': 'drone_8',
        'display_name': 'Drone 8',
        'type': 'calculated',
      },
      {
        'name': 'drone_9',
        'display_name': 'Drone 9',
        'type': 'calculated',
      },
      {
        'name': 'drone_10',
        'display_name': 'Drone 10',
        'type': 'calculated',
      },
      {
        'name': 'drone_11',
        'display_name': 'Drone 11',
        'type': 'calculated',
      },
      {
        'name': 'drone_12',
        'display_name': 'Drone 12',
        'type': 'calculated',
      },
      {
        'name': 'drone_13',
        'display_name': 'Drone 13',
        'type': 'calculated',
      },
      {
        'name': 'drone_14',
        'display_name': 'Drone 14',
        'type': 'calculated',
      },
      {
        'name': 'drone_15',
        'display_name': 'Drone 15',
        'type': 'calculated',
      },
      {
        'name': 'drone_16',
        'display_name': 'Drone 16',
        'type': 'calculated',
      },
      {
        'name': 'drone_17',
        'display_name': 'Drone 17',
        'type': 'calculated',
      },
      {
        'name': 'drone_18',
        'display_name': 'Drone 18',
        'type': 'calculated',
      },
      {
        'name': 'drone_19',
        'display_name': 'Drone 19',
        'type': 'calculated',
      },
      {
        'name': 'drone_20',
        'display_name': 'Drone 20',
        'type': 'calculated',
      }
    ],

		newInstance: function(settings, newInstanceCallback)
		{
			newInstanceCallback(new TableWidget(settings));
		}	
	});
})(freeboard, $);