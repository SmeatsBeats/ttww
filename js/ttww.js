//the $ function
var $ = function (id) {
  return document.getElementById(id);
}
var playAudio = function () {
  $("media").play();
}
window.onload = function () {
  $("albumArt").onclick = playAudio;
}
