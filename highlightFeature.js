// function spotlight(obj){
// 	obj.css('z-index','99999');
// 	'#overlay'.fadeIn(500);
// };

// function turnOffSpotlight(){
// 	'#overlay'.fadeOut(500,function(){
// 		obj.css('z-index','1');
// 	})
// };

function spotlightLondon(){
	console.log("Spotlight london called");
	var London = document.getElementById("LondonArticle");
	var Canvas = document.getElementById("canvas");
	spotlightSquare(London,Canvas);
}

// function spotlightParis(){
// 	var Paris = document.getElementById("Paris");
// 	spotlight(Paris);
// }

// function spotlightTokyo(){
// 	var Tokyo = document.getElementById("Tokyo");
// 	spotlight(Tokyo);
// }


//draw square with hole int it (native approach)
//
//
function spotlightSquare(elem,canvas){
	var pageWidth = document.body.scrollWidth;
	var pageHeight = document.body.scrollHeight;
	var context = canvas.getContext('2d');
	//set canvas height with javascript to create 1to1 pixel mapping
	canvas.setAttribute("width",pageWidth);
	canvas.setAttribute("height",pageHeight);
	//shadow over unimportant part of page
	var shadow = context.rect(
		0, //x pos from left
		0, //y pos from top
		pageWidth, //rect width
		pageHeight, //rect height
	);
	//object holding all coordinates of elem
	var lightBeam = elem.getBoundingClientRect(); 
	
	//light
	//move to place so will cut out rect
	context.moveTo(lightBeam.left,lightBeam.top);
	var light = context.rect(
		lightBeam.left-9,
		lightBeam.top-9,
		lightBeam.width,
		lightBeam.height,
	);
	//draw lines
	context.lineWidth = 0;
	
	context.stroke();
	//fill
	context.fillStyle = "rgb(38,38,38,.8)";
	context.fill('evenodd');
	
	// canvas.style.pointerEvents = "auto";
	
	// canvas.onclick = function(){
	
	// }
	
	//light.style.pointerEvents = "none";
	
}

	
