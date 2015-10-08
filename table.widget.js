;(function(freeboard, $){

	var TableWidget = function(settings) {
		var self = this;
		var $table = $('<table style="width:100%; height:100%; font-size:11px;"><thead style="background:#CFCCCB;"><tr><th>Name</th><th>Model</th><th>Status</th><th>Low buttery</th></tr></thead><tbody></tbody></table>');
		var currentSettings = {
			1:{'name':'','model':'','status':'','low_battery':''},
			2:{'name':'','model':'','status':'','low_battery':''},
			3:{'name':'','model':'','status':'','low_battery':''},
			4:{'name':'','model':'','status':'','low_battery':''},
			5:{'name':'','model':'','status':'','low_battery':''},
			6:{'name':'','model':'','status':'','low_battery':''},
			7:{'name':'','model':'','status':'','low_battery':''},
			8:{'name':'','model':'','status':'','low_battery':''},
			9:{'name':'','model':'','status':'','low_battery':''},
			10:{'name':'','model':'','status':'','low_battery':''},
			11:{'name':'','model':'','status':'','low_battery':''},
			12:{'name':'','model':'','status':'','low_battery':''},
			13:{'name':'','model':'','status':'','low_battery':''},
			14:{'name':'','model':'','status':'','low_battery':''},
			15:{'name':'','model':'','status':'','low_battery':''},
			16:{'name':'','model':'','status':'','low_battery':''},
			17:{'name':'','model':'','status':'','low_battery':''},
			18:{'name':'','model':'','status':'','low_battery':''},
			19:{'name':'','model':'','status':'','low_battery':''},
			20:{'name':'','model':'','status':'','low_battery':''},
		};

		self.render = function(containerElement) {

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

      var substr = settingName.split('_'),
      		idx = substr[1],
      		tbody = '';

      if (newValue.name) {
      	currentSettings[idx]['name'] = newValue.name;
	      if (newValue.model) {
      	currentSettings[idx]['model'] = newValue.model; 
	      }
	      if (newValue.status) {
      	currentSettings[idx]['status'] = newValue.status; 
	      }
        if (newValue.low_battery) {
      	currentSettings[idx]['low_battary'] = newValue.low_battery; 
	      }
      }

      $($table).find('tbody').empty();
      for (var i = 0, len = currentSettings.length; i < len; i++){
      	if(currentSettings[i]['name'] !== ""){
					tbody += rowWriter(currentSettings[i]);      		
      	}
      $($table).find('tbody').append(tbody);
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