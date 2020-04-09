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

  //what mode is the widget in?
  //audio_mode is default

  //indicate mode
  var widget_mode = $("#widget_boi").attr('class');
  
  var displayMode = function(widget_mode){
  $("#widget_mode").html(widget_mode);
};

displayMode(widget_mode);

  //Switch to Home
  var clickOnHome = function(){
    $("widget_boi").removeClass(widget_mode);
    $("widget_boi").addClass("home_mode");
    $("#widget_function").html("Go to Home");
    widget_mode = "home_mode";

  };

  $("#select_home_mode").click(function() {
    clickOnHome();
    displayMode(widget_mode);
  });


  //Switch to Menu
  var clickOnMenu = function(){
    $("widget_boi").removeClass(widget_mode);
    $("widget_boi").addClass("menu_mode");
    $("#widget_function").html("Go to Menu");
    widget_mode = "menu_mode";

  };

  $("#select_menu_mode").click(function() {
    clickOnMenu();
    displayMode(widget_mode);
  });


  //Switch to Audio
  var clickOnAudio = function(){
    $("widget_boi").removeClass(widget_mode);
    $("widget_boi").addClass("audio_mode");
    $("#widget_function").html("Go to Audio");
    widget_mode = "audio_mode";

  };

  $("#select_audio_mode").click(function() {
    clickOnAudio();
    displayMode(widget_mode);
  });


  //Switch to Download
  var clickOnDownload = function(){
    $("widget_boi").removeClass(widget_mode);
    $("widget_boi").addClass("download_mode");
    $("#widget_function").html('<a id="audio_download" href="audio/TTWW_TEST_MASTER_10.wav" download>Download</a>');
    widget_mode = "download_mode";

  };

  $("#select_download_mode").click(function() {
    clickOnDownload();
    displayMode(widget_mode);
  });


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
