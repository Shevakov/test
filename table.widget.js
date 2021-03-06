;(function(freeboard, $){

	var TableWidget = function(settings) {
		var self = this;
		var $table = $('<table style="width:100%; height:100%; font-size:11px; text-align: center;"><thead style="background:#CFCCCB;"><tr><th>Name</th><th>Model</th><th>Status</th><th>Low battery</th></tr></thead><tbody></tbody></table>');
		var currentSettings = [];
		var state;
		self.render = function(containerElement) {

			$(containerElement).append($table);
			$table.find('th,td').css('border','2px #545454 solid');
			$table.parent().css('overflow','scroll');
			$table.find('tbody').on('click','tr', function(){
				$table.find('tbody tr').css('background-color','');
				$(this).css('background-color','rgb(87, 124, 159)');
				if(typeof state == 'function'){
				state($(this).index() + 1);
				}
			});
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
      if(settingName == 'state'){
      	state = newValue;
      	$table.find('tbody tr').css('background-color','');
      	$table.find('tbody tr:nth-child('+newValue()+')').css('background-color','rgb(87, 124, 159)');
      }
		}

	  self.onDispose = function() {
      // any cleanup
    }
	}

	function rowWriter(json) {
	  var tr = '',
	  		indicator_light_off = '"border-radius: 50%; width: 10px; height: 10px; border: 2px solid rgb(61, 61, 61); background-color: rgb(34, 34, 34); margin: auto"',
				indicator_light_on = '"border-radius: 50%; width: 10px; height: 10px; border: 2px solid #FDF1DF; background-color: rgb(255, 199, 115); box-shadow: rgb(255, 153, 0) 0px 0px 15px; margin: auto"',
				on_off = json['low_battery']? indicator_light_on : indicator_light_off;
	  tr = '<td>' + json['name'] + '</td><td>' + json['model'] + '</td><td>' + json['status'] + '</td><td><div style='+on_off+'></div>' + '</td>';
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
      	'name': 'state',
      	'display_name': 'State',
      	'type': 'calculated',
      }
      ],
		newInstance: function(settings, newInstanceCallback)
		{
			newInstanceCallback(new TableWidget(settings));
		}	
	});
})(freeboard, $);