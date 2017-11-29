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
function easingScrollAction(elementPos,scrollDuration){
	var initialPos = window.pageYOffset; //page starting point
	var availableSpace = document.body.scrollHeight - elementPos; //dist from top of obj to bot of page
	//point that is length of view window from bottom, used if
	//initial destination is too close to bottom
	var alternateDest = document.body.scrollHeight - window.innerHeight;
	//acount for the bottom of the page edge case
	var yDestination = availableSpace < window.innerHeight ? alternateDest : elementPos;
	//total distance to scroll
	var distance = yDestination - initialPos;
	var startTime;

	// Easing function: easeInOutCubic
	// From: https://gist.github.com/gre/1650294
	//Trevor Explanation: up until .5 eases in with 4t^3 cubic (inflection point at 0
	//then eases off (slowing ROC) using  second cubic with inflection point at 1.
	var easingFunc = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
	
	//animation: call before each frame
	window.requestAnimationFrame(function nextFrame(timestamp) {
		//check if start is undefined (first call)
		//if first call set to currentTime
		if(!startTime) startTime = timestamp;

		var timeEllapsed = timestamp - startTime;

		//Progress towards completion (percent)
		var progress = Math.min(timeEllapsed / scrollDuration, 1);
		//apply our easing function to our proportional progress value
		progress = easingFunc(progress);
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
	easingScrollAction(position,2000);
}

//function to abstract smooth scroll call to paris
//

function goToParis(){
	var position = findPos(document.getElementById("Paris"));
	easingScrollAction(position,2000);
}


//function to abstract smooth scroll call to Tokyo

function goToTokyo (){
	var position = findPos(document.getElementById("Tokyo"));
	easingScrollAction(position,2000);
}

function goToBottom (){
	var position = findPos(document.getElementById("bottom"));
	easingScrollAction(position,2000);
}
