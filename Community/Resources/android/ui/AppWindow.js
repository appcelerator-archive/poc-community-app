function AppWindow() {
	//load dependencies
	var _ = require('/lib/underscore'),
		theme = require('/ui/theme'),
		ui = require('/ui/components'),
		TabStripView = require('/ui/TabStripView'),
		ActionBarView = require('/ui/ActionBarView'),
		StreamView = require('/ui/StreamView'),
		GroupsView = require('/ui/GroupsView'),
		LeadersView = require('/ui/LeadersView'),
		EventsView = require('/ui/EventsView');
	
	//create base proxy object
	var self = new ui.Window({
		navBarHidden:true,
		exitOnClose:true,
		backgroundImage:'/images/back.png'
	});
	self.orientationModes = [Ti.UI.PORTRAIT];
	
	//home action bar
	var actionBar = new ActionBarView({
		buttons: {
			checkin: {
				title:'checkin',
				width:80
			},
			settings: {
				icon:'/images/14-gear@2x.png',
				width:40
			}
		}
	});
	self.add(actionBar.viewProxy);
	
	//main tab control
	var tabs = new TabStripView({
		viewArgs: {
			top:44
		},
		tabs: {
			stream: {
				title:L('updates', 'Stream'),
				icon:'/images/tabs/chat_white.png'
			},
			groups: {
				title:L('groups', 'Groups'),
				icon:'/images/tabs/group_white.png'
			},
			events: {
				title:L('events', 'Events'),
				icon:'/images/tabs/calendar_white.png'
			},
			leaders: {
				title:L('leaders', 'Leaders'),
				icon:'/images/tabs/badge_white.png'
			}
		}
	});
	self.add(tabs.viewProxy);
	
	//create main app views
	var stream = new StreamView(), 
		groups = new GroupsView(), 
		events = new EventsView(), 
		leaders = new LeadersView();
	
	var scroller = Ti.UI.createScrollableView({
		top:100,
		left:0,
		right:0,
		bottom:0,
		views:[stream, groups, events, leaders],
		showPagingControl:false
	});
	self.add(scroller);
	
	scroller.addEventListener('scroll', function(e) {
		tabs.selectIndex(e.currentPage);
	});
	
	
	tabs.addEventListener('selected', function(e) {
		scroller.scrollToView(e.index);
	});
	
	actionBar.addEventListener('buttonPress', function(e) {
		var Window = (e.id === 'checkin') ? require('/ui/CheckinWindow') : require('/ui/SettingsWindow');
		var w = new Window();
		w.open();
	});
	
	return self;
}

module.exports = AppWindow;