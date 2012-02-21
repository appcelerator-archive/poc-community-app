function StreamView() {
	var _ = require('/lib/underscore'),
		theme = require('/ui/theme'),
		ui = require('/ui/components');
	
	var self = new ui.View();
	
	self.add(new ui.Label('Stream', {
		color:'#ffffff'
	}));
	
	self.addEventListener('click', function() {
		alert('test');
	});
	
	return self;
}

module.exports = StreamView;