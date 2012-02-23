function AppTabGroup() {
	//load dependencies
	var _ = require('/lib/underscore'),
		ui = require('/ui/components'),
		LogoWindow = require('/ui/LogoWindow'),
		StreamView = require('/ui/StreamView'),
		GroupsView = require('/ui/GroupsView'),
		LeadersView = require('/ui/LeadersView'),
		EventsView = require('/ui/EventsView');
	
	//create base proxy object and component wrapper
	var self = new ui.TabGroup();

	Ti.API.info('adding tabs....');
	
	//Stream tab
	var streamWindow = new LogoWindow(),
		streamView = new StreamView();
	
	streamWindow.add(streamView);
	
	var streamTab = Ti.UI.createTab({
		title:L('stream'),
		icon:'/images/tabs/chat.png',
		window:streamWindow
	});
	self.addTab(streamTab);
	Ti.API.info('stream');
	
	//Groups tab
	var groupsWindow = new LogoWindow(),
		groupsView = new GroupsView();
	
	groupsWindow.add(groupsView);
	
	var groupsTab = Ti.UI.createTab({
		title:L('groups'),
		icon:'/images/tabs/group.png',
		window:groupsWindow
	});
	self.addTab(groupsTab);
	Ti.API.info('groups');
	
	//dummy check-in tab
	var checkinTab = Ti.UI.createTab({
		title:L('checkin')
	});
	self.addTab(checkinTab);
	Ti.API.info('checkin');
	
	//Events tab
	var eventsWindow = new LogoWindow(),
		eventsView = new EventsView();
	
	eventsWindow.add(eventsView);
	
	var eventsTab = Ti.UI.createTab({
		title:L('events'),
		icon:'/images/tabs/calendar.png',
		window:eventsWindow
	});
	self.addTab(eventsTab);	
	Ti.API.info('events');
	
	//Leaders tab
	var leadersWindow = new LogoWindow(),
		leadersView = new LeadersView();
	
	leadersWindow.add(leadersView);
	
	var leadersTab = Ti.UI.createTab({
		title:L('leaders'),
		icon:'/images/tabs/badge.png',
		window:leadersWindow
	});
	self.addTab(leadersTab);
	Ti.API.info('leaders');
	
	var wrapper = new ui.View({
		height:60,
		width:60,
		bottom:0
	});
	var checkinButton = new ui.Button({
		backgroundImage:'/images/tabs/checkin_button.png',
		width:57,
		height:49,
		top:0
	});
	wrapper.add(checkinButton);
	self.add(wrapper);
	
	checkinButton.addEventListener('click', function() {
		var CheckinWindow = require('/ui/CheckinWindow');
		var w = new CheckinWindow();
		w.open();
	});
	
	return self;
}

module.exports = AppTabGroup;