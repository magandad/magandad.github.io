/* 
glossary.js

Use this script to display a given piece of text next to the current 
cursor location. To use it, do the following:

1) include the following HTML in the web page:

<DIV ID="glossaryDefinition" STYLE="position:absolute; z-index:0; visibility: hidden; background-color: #CCCCFF; layer-background-color: #CCCCFF; border: 1px none #000000"></DIV>

2) call the following functions in the appropriate event handlers (onMouseover, onClick, onMouseout)

showGloss(glossDef);

 - glossDef is the string you want to display
 
hideGloss();

 - hide the text when you don't want it anymore
 
Thanks to The Javascript Source (http://javascript.internet.com), whose
"eyes" script provided a jumpstart on building this...
*/


var ex = 0, ey = 0, mie = false;
if (document.all) { // which browser are we dealing with?
	mie = true; 
	window.document.onmousemove = mieLoc;
} else {
	window.captureEvents(Event.MOUSEMOVE);
	window.onMouseMove = navLoc;
}

function showGloss(glossDef) {
	// set the text of the layer to the definition
	if (mie) {
		glossaryDefinition.innerHTML = unescape(glossDef);
	} else {
		document.glossaryDefinition.document.write(unescape(glossDef));
		document.glossaryDefinition.document.close();
	}
	// set the position of the layer based on the current mouse location
	if (mie) {
		
		glossaryDefinition.style.left = ex + 12;
		glossaryDefinition.style.top = ey + 12;
	} else {
		
		document.glossaryDefinition.left = ex + 12;
		document.glossaryDefinition.top = ey + 12;
	}
	
	// show the layer
	if (mie) {
		document.all.glossaryDefinition.style.visibility = 'visible';
	} else {
		document.glossaryDefinition.visibility = 'visible';
	}

}

function hideGloss() {
	
	if (mie) {
		document.all.glossaryDefinition.style.visibility = 'hidden';
	} else {
		document.glossaryDefinition.visibility = 'hidden';
	}
}

function navLoc(e) {
	ex = e.pageX;
	ey = e.pageY;
	return routeEvent(e);
}

function mieLoc() {
	ex = document.body.scrollLeft + event.x;
	ey = document.body.scrollTop + event.y;
}
