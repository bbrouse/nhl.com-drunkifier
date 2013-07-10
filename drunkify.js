function newStyle(str){
	var parent = document.getElementsByTagName('head')[0];
	var element = document.createElement('style');
	element.type = 'text/css';
	element.media = 'screen';
	element.appendChild(document.createTextNode(str));
	parent.appendChild(element);
	return element;
}

var new_nav_url = chrome.extension.getURL("/team_logo_nav_drunkified.png");
var elem = document.getElementById("teamMenu");
elem.setAttribute("style","background: url(\'" + new_nav_url + "\') no-repeat top left transparent !important; float:left; background-size: 990px 30px;");

var new_nav_style_hover = "#teamMenu div:hover {background:url(\'" + new_nav_url + "\');}";
newStyle(new_nav_style_hover);