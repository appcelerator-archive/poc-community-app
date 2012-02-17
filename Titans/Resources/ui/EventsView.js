function EventsView() {
	var _ = require('/lib/underscore'),
		theme = require('/ui/theme'),
		ui = require('/ui/components');
	
	var self = new ui.View();
	
	self.add(new ui.Label('Events', {
		color:'#ffffff'
	}));
	
	return self;
}

module.exports = EventsView;