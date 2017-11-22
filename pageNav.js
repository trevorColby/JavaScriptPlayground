

//Finds y value of given object
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

//function to abstract function call to jump to London
//Improves HTML Readability
function goToLondon (){
	window.scroll(0,findPos(document.getElementById("London")));
}

//Function to abstract function call to jump to Paris
//Improves HTML Readability
function goToParis () {
	window.scroll(0,findPos(document.getElementById("Paris")));
}

//Function to abstract function call to jump to Tokyo
//Improves HTML Readability
function goToTokyo () {
	window.scroll(0,findPos(document.getElementById("Tokyo")));
}
