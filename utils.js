/*
ALL core JS shortcuts, etc.
*/
//x-browser exent function
function addEvent(elm, evType, fn, useCapture) {
	if (elm.addEventListener) { 
		elm.addEventListener(evType, fn, useCapture); 
		return true; 
	}
	else if (elm.attachEvent) { 
		var r = elm.attachEvent('on' + evType, fn); 
		return r; 
	}
	else {
		elm['on' + evType] = fn;
	}
}
//grab all elements by class attr
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp(searchClass);
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}
function styleIt(el, css, selector_type){
	if (typeof selector_type !== "undefined" && selector_type =="class") {
    	for(i=0; i<el.length; i++){
			var cssOBJ = Object.keys(css);
		    cssOBJ.map(function(key){
		        el[i].style[key] = css[key];
		    });	
		}
	} else {
		var cssOBJ = Object.keys(css);
	    cssOBJ.map(function(key){
	        el.style[key] = css[key];
	    });
	}
};
function toggle(obj) {
	var el = document.getElementById(obj);
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = '';
	}
}
Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};
function getCookie( name ) {	
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ';', len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+'='+escape( value ) +
		( ( expires ) ? ';expires='+expires_date.toGMTString() : '' ) + //expires.toGMTString()
		( ( path ) ? ';path=' + path : '' ) + 
		( ( domain ) ? ';domain=' + domain : '' ) +
		( ( secure ) ? ';secure' : '' );
}
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + '=' +
			( ( path ) ? ';path=' + path : '') +
			( ( domain ) ? ';domain=' + domain : '' ) +
			';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

function _Z(elmy) {
	var mod_elm = (elmy.match(/#/)) ? document.getElementById(elmy.split('#')[1]) : (elmy.match(/\./)) ?  getElementsByClass(elmy.split('.')[1]) : "You must pass a valid jQuery style selector, i.e. '.class', '#id'!";
	return mod_elm;
}
