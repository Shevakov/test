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

      var substr = settingName.split('_'),
      		idx = substr[1],
      		tbody = '';

      	console.log(newValue);

  //     if (newValue.name) {
  //     	currentSettings[idx]['name'] = newValue.name;
	 //      if (newValue.model) {
  //     	currentSettings[idx]['model'] = newValue.model; 
	 //      }
	 //      if (newValue.status) {
  //     	currentSettings[idx]['status'] = newValue.status; 
	 //      }
  //       if (newValue.low_battery) {
  //     	currentSettings[idx]['low_battary'] = newValue.low_battery; 
	 //      }
  //     }

  //     for (var i = 0, len = currentSettings.length; i < len; i++){
  //     	if(currentSettings[i]['name'] !== ""){
		// 			tbody += rowWriter(currentSettings[i]);      		
  //     	}
  //     $($table).find('tbody').append(tbody);
  //     }
  //     			$table.find('th,td').css('border','2px #545454 solid');
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
    'settings':[
    	{
        'name': 'input',
        'display_name': 'Input',
        'type': 'calculated',
      }],


		newInstance: function(settings, newInstanceCallback)
		{
			newInstanceCallback(new TableWidget(settings));
		}	
	});
})(freeboard, $);