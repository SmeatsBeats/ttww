
//Global variables
var playing = false;

//Get Element by Id shortcut function
var $ = function (id) {
  return document.getElementById(id);
}

//Audio control function for playing and pausing
var audioControl = function () {
	if (playing) {
		$("ttwwAudioFile").pause();
  		playing = false;
	} 
	else {
		$("ttwwAudioFile").play();
  		playing = true;
	}
}

// //Image color fades in 
// function imageFader() {
// 	$("albumArt").fade;
// 	alert("test");
// }

//Window onload function
window.onload = function () {
	//imageFader();
	$("albumArt").onclick = audioControl;
}

