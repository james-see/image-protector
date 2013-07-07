// courtesy of http://www.jamescampbell.us  as part of the image-protector package. for instructions, please see the README file 

$(document).ready(function() {
NoClick(); NoTouch(); init()
});

function NoClick() //turns off right clicking of mouse on desktops for any img with stylesheet class named 'protected'
{

$('body').on('contextmenu', '.protected', function(e){ return false; }); 
}

function NoTouch() { // turns off touch events for mobile browsers
	$("body").on("touchmove", false); 
	$('body').on('MozTouchMove', '.protected', function(e){e.preventDefault();});   // mozilla (firefox) specific
}

//android specific to turn off context menu on long touch events
function absorbEvent_(event) {
      var e = event || window.event;
      e.preventDefault && e.preventDefault();
      e.stopPropagation && e.stopPropagation();
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    }
    
    function preventLongPressMenu(node) {
      node.ontouchstart = absorbEvent_;
      node.ontouchmove = absorbEvent_;
      node.ontouchend = absorbEvent_;
      node.ontouchcancel = absorbEvent_;
    }
    
    function init() {
      preventLongPressMenu(document.getElementByClassName('protected'));
    }