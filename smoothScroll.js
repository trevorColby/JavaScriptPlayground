//Trevor Colby
//11/22/2017
//
//Project experimenting with page scrolling



//Finds y value of given object
//Input: object, suggested find using ID
//	i.e) document.getElementById("");
//Output: var number containing Y pos of element

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

//function to scroll to element at constant rate
function smoothScrollAction(elementPos,scrollDuration){
	var initialPos = window.pageYOffset;
	var distance = elementPos - initialPos;
	var startTime;

	//animation: call before each frame
	window.requestAnimationFrame(function nextFrame(timestamp) {
		//check if start is undefined (first call)
		//if first call set to currentTime
		if(!startTime) startTime = timestamp;

		var timeEllapsed = timestamp - startTime;
		console.log(timestamp);
		console.log(timeEllapsed);
		//Progress towards completion (percent)
		var progress = Math.min(timeEllapsed / scrollDuration, 1);
		//scroll to a percent of goal
		window.scrollTo(0, initialPos + (distance * progress)); 
		
		//continue frame updating until scroll duration reached
		if(timeEllapsed < scrollDuration){
			window.requestAnimationFrame(nextFrame);
		}
	})
}

//function to abstract smooth scroll call to london

function goToLondon(){
	var position = findPos(document.getElementById("London"));
	smoothScrollAction(position,600);
}

//function to abstract smooth scroll call to paris
//

function goToParis(){
	var position = findPos(document.getElementById("Paris"));
	smoothScrollAction(position,600);
}


//function to abstract smooth scroll call to Tokyo

function goToTokyo (){
	var position = findPos(document.getElementById("Tokyo"));
	smoothScrollAction(position,600);
}
