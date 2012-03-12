function CheckinWindow() {
	var _ = require('/lib/underscore'),
		theme = require('/ui/theme'),
		ui = require('/ui/components'),
		ActionBarView = require('/ui/ActionBarView');

	var self = new ui.Window({
		navBarHidden:true,
		backgroundImage:theme.windowBackground
	});
	
	var actionBar = new ActionBarView({
		title:L('checkin'),
		buttons: {
			cancel: {
				title:'cancel',
				width:80
			}
		}
	});
	self.add(actionBar.viewProxy);
	
	actionBar.addEventListener('buttonPress', function() {
		self.close();
	});
	
	return self;
}
module.exports = CheckinWindow;