$(document).ready(function(){
	chrome.storage.sync.get(['status'], function(items){
		if(items.status == '1'){
			$('#filterSwitch').attr('checked', true);
		} else {
			$('#filterSwitch').attr('checked', false);
		}
	});

	$('#filterSwitch').click(function(){
		if ($('#filterSwitch').is(':checked')) {
			chrome.storage.sync.set({'status': 1});
		} else {
			chrome.storage.sync.set({'status': 0});
		}
	});
});