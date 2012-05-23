var _ = require('/lib/underscore');


var palette = { 
	appcRed: '#CA120D',
	appcDarkGray: '#787878',
	appcLightGray: '#343434',
};


var components = {
	windowBackground: '/images/back.png',
	
	//style objects
	headerText: {
		left:5,
		color:'#ffffff',
		font: {
			fontSize:18,
			fontWeight:'bold'
		}
	}
};

//Using extend so that ui component defs can refer to the common palette etc
var theme = _.extend(palette, components);
module.exports = theme;