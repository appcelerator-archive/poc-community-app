exports.launch = function() {
	var ui = require('/ui/components'),
		AppTabGroup = require('/ui/AppTabGroup');
	
	var tabs = new AppTabGroup();
	tabs.open();
};