function CheckinWindow() {
	var _ = require('/lib/underscore'),
	theme = require('/ui/theme'),
	ui = require('/ui/components');

	var self = new ui.Window({
		modal:true,
		title:'Check In',
		barColor:theme.appcRed,
		backgroundImage:theme.windowBackground
	});
	
	var closeButton = new ui.Button({
		title:L('cancel'),
		style:Ti.UI.iPhone.SystemButtonStyle.BORDERED
	});
	
	closeButton.addEventListener('click', function() {
		self.close();
	});
	
	self.rightNavButton = closeButton;
	
	return self;
}
module.exports = CheckinWindow;