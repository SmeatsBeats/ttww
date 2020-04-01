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

//Window onload function
window.onload = function () {
	$("albumArt").onclick = audioControl;
}

