var _ = require('/lib/underscore'),
	ui = require('/ui/components'),
	theme = require('/ui/theme');

function tabWidth() {
	return Ti.Platform.displayCaps.platformWidth / 4;
}

function TabButton(id, text, icon, index, selected) {	
	var self = new ui.Component(Ti.UI.createView({
		width:tabWidth(),
		opacity:0.8,
		backgroundColor:(selected) ? '#444444' : 'transparent'
	}));
	self.id = id;
	self.index = index;
	self.selected = selected;
	
	self.add(new ui.ImageView(icon,{
		top:6,
		height:25
	}));
	
	self.add(new ui.Label(text,{
		text:text,
		color:'#fff',
		bottom:3,
		font: {
			fontSize:10
		}
	}));
	
	return self;
}

function TabStripView(args) {
	var self = new ui.Component(Ti.UI.createView(_.extend({
		height:50,
		layout:'horizontal',
		backgroundColor:'#121212'
	}, args.viewArgs||{})));
	
	var tabs = [],
		first = true,
		index = 0,
		selectedIndex = 0;
	
	for (var key in args.tabs) {
		var data = args.tabs[key];
		var tab = new TabButton(key, data.title, data.icon, index, first);		
		self.add(tab);
		tabs.push(tab);
		first = false;
		index++;
	}
	
	return self;
}

module.exports = TabStripView;