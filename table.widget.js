;(function(freeboard, $){

	var TableWidget = function(settings) {
		var self = this;
		var $table = $('<table style="width:100%; height:100%; font-size:11px;"><thead style="background:#CFCCCB;"><tr><th>Name</th><th>Model</th><th>Status</th><th>Low battery</th></tr></thead><tbody></tbody></table>');
		var currentSettings = [];
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

      var	tbody = '',
      		i;
    	if (settingName == 'input') {
      	for (i = 0, len = newValue.length; i < len; i++){
      		tbody += rowWriter(newValue[i]);
      	}
      	$table.find('tbody').empty();
      	$table.find('tbody').append(tbody);
      	$table.find('th,td').css('border','2px #545454 solid');
      };
      if(settingName == 'select_drone'){
      	$table.find('tbody tr').css('background-color','');
      	$table.find('tbody tr:nth-child('+newValue+')').css('background-color','red');
      }
		}

	  self.onDispose = function() {
      // any cleanup
    }
	}

	function rowWriter(json) {
	  var tr = '';
	  tr += '<td>' + json['name'] + '</td>' + '<td>' + json['model'] + '</td>' + '<td>' + json['status'] + '</td>' + '<td>' + json['low_battery'] + '</td>';
	  return '<tr>' + tr + '</tr>';
	};


	freeboard.loadWidgetPlugin({
		'type_name' : 'my_table_widget',
		'display_name' : 'Table Widget',
		'description' : 'This plugin displays information about drones',
		'fill_size' : 'false',
    'settings':[
    	{
        'name': 'input',
        'display_name': 'Input',
        'type': 'calculated',
      },
      {
      	'name': 'select_drone',
      	'display_name': 'Select Drone',
      	'type': 'calculated',
      }
      ],
		newInstance: function(settings, newInstanceCallback)
		{
			newInstanceCallback(new TableWidget(settings));
		}	
	});
})(freeboard, $);