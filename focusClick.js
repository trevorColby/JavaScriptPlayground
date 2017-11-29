function spotlightLondon(){
	var London = document.getElementById("LondonArticle");
	darknessFalls(London);
}
function spotLightRock(){
	var Rock = document.getElementById("Rock");
	darknessFalls(Rock);
}

function toPixels(number){
	var pixels = number.toString() + "px";
	return pixels;
}

function addPixels(number,add){
	number= number.slice(0,-2);
	number= Number(number) + add;
	number= number.toString();
	number= number + "px";
	return number;
}

function darknessFalls(elem){
	var boundingRect = elem.getBoundingClientRect();
	var pageWidth = document.body.scrollWidth;
	var pageHeight = document.body.scrollHeight;
	//create four quadrants to cover all of screen except spotlight
//quadrant1: top strip
	console.log("made it to canvas creation");
	var dynamicQuadrant1 = document.createElement('div');
	var body = document.getElementById("body");
	console.log("Body Element: "+ body);
	console.log("Div Element: "+dynamicQuadrant1);
	//body.style.position = "relative";
	document.body.appendChild(dynamicQuadrant1);
	var pixelWidth = toPixels(pageWidth);
	console.log("Page Width: " + pageWidth);
	console.log("Add px: " + addPixels(pixelWidth,9));
	dynamicQuadrant1.style.width=addPixels(pixelWidth,9);

	dynamicQuadrant1.style.height=toPixels(boundingRect.top);

	//dynamicQuadrant1.style.pointerEvents = "auto";
	dynamicQuadrant1.style.position = "absolute";
	dynamicQuadrant1.style.left = "0px";
	dynamicQuadrant1.style.top = "0px";
	dynamicQuadrant1.style.backgroundColor = "rgba(38,38,38,.8";
	dynamicQuadrant1.style.pointerEvents = "auto";
	// var context = dynamicQuadrant1.getContext("2d");
	// context.fillStyle = "rgba(38,38,38,.8)";
	// context.fillRect(0,0,dynamicQuadrant1.width,dynamicQuadrant1.height);

//quadrant2 bottom strip
	var dynamicQuadrant2 = document.createElement('div');
	body.appendChild(dynamicQuadrant2);
	dynamicQuadrant2.style.width = addPixels(toPixels(pageWidth),9);
	dynamicQuadrant2.style.height = toPixels(pageHeight-boundingRect.bottom);
	dynamicQuadrant2.style.pointerEvents = "auto";
	dynamicQuadrant2.style.position = "absolute";
	dynamicQuadrant2.style.left = "0px";
	dynamicQuadrant2.style.top = toPixels(boundingRect.bottom);
	dynamicQuadrant2.style.backgroundColor = "rgba(38,38,38,.8)";

//quadrant3: left side strip
	var dynamicQuadrant3 = document.createElement('div');
	body.appendChild(dynamicQuadrant3);
	dynamicQuadrant3.style.width= toPixels(boundingRect.left);
	dynamicQuadrant3.style.height = toPixels(boundingRect.bottom-boundingRect.top);
	dynamicQuadrant3.style.pointerEvents = "auto";
	dynamicQuadrant3.style.position = "absolute";
	dynamicQuadrant3.style.left = "0px";
	dynamicQuadrant3.style.top = toPixels(boundingRect.top);
	dynamicQuadrant3.style.backgroundColor = "rgba(38,38,38,.8)";
	
//quadrant4: right side strip
	var dynamicQuadrant4 = document.createElement('div');
	body.appendChild(dynamicQuadrant4);
	dynamicQuadrant4.style.width = toPixels(pageWidth-boundingRect.right);
	dynamicQuadrant4.style.height = toPixels(boundingRect.height);
	dynamicQuadrant4.style.pointerEvents = "auto";
	dynamicQuadrant4.style.position = "absolute";
	dynamicQuadrant4.style.left = toPixels(boundingRect.right);
	console.log("left " + boundingRect.right);
	dynamicQuadrant4.style.top = toPixels(boundingRect.top);
	console.log("top " + boundingRect.top);
	console.log("Page Width: " + pageWidth);
	dynamicQuadrant4.style.backgroundColor = "rgba(38,38,38,.8)";
}


//draw square with hole int it (native approach)
//With clear rect approach to enable/disable clicking 
function spotlightSquare(elem){
	var lightBeam = elem.getBoundingClientRect(); 
	darknessFalls(lightBeam);
	
}

	
