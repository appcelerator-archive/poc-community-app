function SettingsWindow() {
	var _ = require('/lib/underscore'),
	theme = require('/ui/theme'),
	ui = require('/ui/components');

	var self = new ui.Window({
		modal:true,
		title:L('settings'),
		navBarHidden: Ti.Platform.osname !== 'iphone',
		barColor:theme.appcRed,
		backgroundImage:theme.windowBackground
	});
	
	if (Ti.Platform.osname === 'iphone') {
		var closeButton = Ti.UI.createButton({
			title:L('done'),
			style:Ti.UI.iPhone.SystemButtonStyle.BORDERED
		});
		
		closeButton.addEventListener('click', function() {
			self.close();
		});
		
		self.rightNavButton = closeButton;
	}
	
	return self;
}
module.exports = SettingsWindow;