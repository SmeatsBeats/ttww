//the $ function
var $ = function (id) {
  return document.getElementById(id);
}
var playAudio = function () {
  alert("play the audio");
}
window.onload = function () {
  $("albumArt").onclick = playAudio;
}
