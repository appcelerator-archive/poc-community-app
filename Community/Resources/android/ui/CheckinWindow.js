function CheckinWindow() {
	var _ = require('/lib/underscore'),
	theme = require('/ui/theme'),
	ui = require('/ui/components');

	var self = new ui.Window({
		navBarHidden:true,
		backgroundImage:theme.windowBackground
	});
	
	var actionBar = new ui.View(theme.actionBar);
	self.add(actionBar);
	
	var title = new ui.Label('checkin', theme.headerText);
	actionBar.add(title);
	
	return self;
}
module.exports = CheckinWindow;