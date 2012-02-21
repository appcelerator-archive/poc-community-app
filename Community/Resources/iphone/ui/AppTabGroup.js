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
	
	//dummy check-in tab
	var checkinTab = Ti.UI.createTab({
		title:L('checkin')
	});
	self.addTab(checkinTab);
	
	// special image button
	var checkinContainer = new ui.View({
		width:Ti.Platform.displayCaps.platformWidth/5,
		height:60,
		bottom:0
	});
	
	var checkinButton = new ui.Button({
		backgroundImage:'/images/appc.png',
		width:55,
		height:48 ,
		top:0
	});
	
	checkinContainer.add(checkinButton);
	self.add(checkinContainer);
	
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
	
	checkinButton.addEventListener('click', function(e) {
		var CheckinWindow = require('/ui/CheckinWindow');
		var w = new CheckinWindow();
		w.open();
	});
	
	return self;
}

module.exports = AppTabGroup;