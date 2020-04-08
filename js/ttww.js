$(document).ready(function() {
  //get width of window
  //alert($("html").width());
  //hide elements that are to fade in on onload
  $("#album_art").hide();
  $("#album_art").fadeIn(2500);
});


// //Global variables
//
// var playing = false;
//
// //Get Element by Id shortcut function
// var $ = function (id) {
//   return document.getElementById(id);
// }
//
// //Audio control function for playing and pausing
// var audioControl = function () {
// 	if (playing) {		$("ttwwAudioFile").pause();
//   		playing = false;
// 	}
// 	else {
// 		$("ttwwAudioFile").play();
//   		playing = true;
// 	}
// }
//
// // //Image color fades in
// // function imageFader() {
// // 	$("album_art").fade;
// // 	alert("test");
// // }
//
// //Window onload function
// window.onload = function () {
// 	//imageFader();
// 	$("album_art").onclick = audioControl;
// }
