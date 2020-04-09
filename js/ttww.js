$(document).ready(function() {

  //get width of window. useful for css media queries
  //alert($("html").width());

  //hide elements that are to fade in on onload
  $("#album_art").hide();

  $("#album_art").fadeIn(2500);

  

  //build function for easing effect on overscroll at bottom of page plus image swap

  //build function to:
  //1. setup display of about section for mobile and desktop devices

  /////WIDGET BOIIIIIIIIII
  //This widget will have 4 MODES each of which performs different functions
  //In all modes, the time in the track should be visible and scrubbing should be possible
  //Do individual song names need to be indicated somehow?

  //ALL MODES: AUDIO LOCATION AND SCRUBBING

  //MODE 1 AUDIO PLAYER
  //In this mode widget boi allows the user to pause the audio if it is playing and play the audio if it is paused

  //MODE 2 MENU
  //Let the user select which content populates the page: ABOUT, CREDITS, SUPPORT

  //MODE 3 DOWNLOAD
  //download the audio file
  //as one track or as individual tracks? 

  //MODE 4 HOME
  //Scroll to top
  //populate page with certain content?

});
