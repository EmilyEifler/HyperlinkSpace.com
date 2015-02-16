var pages = [
	'http://hyperlinkspace.com/2_horse/',
	'http://hyperlinkspace.com/3_apartment/',
  	'http://hyperlinkspace.com/4_orbit/',
    'http://hyperlinkspace.com/5_whitevideo/'];

var newestPage = pages[pages.length-1];
var getRandomPage = function getRandomInt(){
  	return pages[Math.floor(Math.random() * pages.length)];
  };