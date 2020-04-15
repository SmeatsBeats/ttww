$(document).ready(function() {

  //get width of window. useful for css media queries
  //alert($("html").width());

  //hide elements that are to fade in on onload
  $("#album_art").hide();
  $(".menu").hide();
  $("#widget_boi").hide();

  $("#album_art").fadeIn(2500);
  $("#widget_boi").fadeIn(3000);



  var playing = false;

  var audioFile = document.getElementById("ttwwAudioFile");

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

  var audioControl = function(playing){
    if(!playing){
        audioFile.play();
      }
    else {
        audioFile.pause();
      }
    };

  //MODE 2 MENU
  //Let the user select which content populates the page: ABOUT, CREDITS, SUPPORT
  //hide the menu on load


  var displayMenu = function(){
      $(".menu").fadeIn(2000);
  };

  //MODE 3 DOWNLOAD
  //download the audio file
  //as one track or as individual tracks?

  //might not even need a jquery click for this
  //when the mode is switched to download, just turn the icon into a download link
  //<a id="audio_download" href="/audio/TTWW_TEST_MASTER_10.wav" download>Download</a>

  //MODE 4 HOME
  //Scroll to top
  //populate page with certain content?

  var scrollHome = function(){
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  };

  // $(".home_mode").click(function(){
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, "slow");
  //   return false;
  // });

  //what mode is the widget in?
  //audio_mode is default

  //indicate mode
  var widget_mode = "audio_mode";
  var rotateDeg, spinTimer, rotateDist;
  var deg = 0;
  var bezelDeg = 0;
  var spinTimer;
  var spinCounter = 0;
  var bezelSpinCounter = 0;
  var bezelRotateDist;

  // var spinMe = function(rotateDeg, deg, rotateDist){
  //   alert("called: " + rotateDeg + " " + deg + " " + rotateDist + " " + i);
  //   // need to account for over 360
  //
  //   if(i == rotateDist){
  //     clearInterval(spinTimer);
  //     alert("timer done");
  //   }
  //   else{
  //     //alert("deg: " + deg);
  //
  //     var navOptionsImg = document.getElementById('nav_options_img');
  //     navOptionsImg.style.transform = "rotate(" + deg + "deg)";
  //     if(rotateDeg >= 0){
  //       alert("positive");
  //
  //       i++;
  //     }
  //     else{
  //       alert("negative");
  //       i--;
  //     }
  //     deg += i;
  //     alert("degree: " + deg);
  //     //need to account for trying to go above or below 360 / 0
  //
  //   }
  // };

  var navRotate = function(rotateDeg){
    //alert("deg: " + deg);
    //alert("rotateDeg: " + rotateDeg);
    //need to rotate the widget_nav img by specified angle

    var rotateDist = rotateDeg - deg;
    //alert(rotateDist);
    if(rotateDist > 180){
      rotateDist = -90;
    }
    else if (rotateDist < -180) {
      rotateDist = 90;
    }
    else{
      rotateDist = rotateDist;
    }
    if(rotateDist >= 0){
      bezelRotateDist = rotateDist - 360;
    }
    else{
      bezelRotateDist = rotateDist + 360;
    }
    //alert(bezelRotateDist);
    //alert(rotateDist);
    var spinTimer = setInterval(function(){
      //alert("called: " + rotateDeg + " " + deg + " " + rotateDist + " " + spinCounter);
      // need to account for over 360

      if(spinCounter == rotateDist){
        clearInterval(spinTimer);
        spinCounter = 0;
        //alert("timer done");
      }
      else{
        //alert("deg: " + deg);
        var navOptionsImg = document.getElementById('nav_options_img');
        navOptionsImg.style.transform = "rotate(" + deg + "deg)";
        if(rotateDist >= 0){
          spinCounter++;
          deg++;
          //alert("positive: " + spinCounter);
        }
        else{
          spinCounter--;
          deg--;
          //alert("negative: " + spinCounter);
        }
        //alert(deg);
        //need to account for trying to go above or below 360 / 0

      }
    }, 3);

    var bezelSpinTimer = setInterval(function(){


      if(bezelSpinCounter == bezelRotateDist){
        clearInterval(bezelSpinTimer);
        bezelSpinCounter = 0;
      }
      else{
        var bezelImg = document.getElementById('widget_bezel_img');
        bezelImg.style.transform = "rotate(" + bezelDeg + "deg)";
        if(bezelRotateDist >= 0){
          bezelSpinCounter++;
          bezelDeg++;
        }
        else{
          bezelSpinCounter--;
          bezelDeg--;
        }
      }

    }, 3);
  }

  var displayMode = function(widget_mode){
    //this function should become responsible for animating the rotation of the widget images to indicate the current mode
    //can combine withg existing switch for widget mode
    $("#widget_mode").html(widget_mode);
    switch(widget_mode){
      case "audio_mode":
      rotateDeg = 0;
      navRotate(rotateDeg);
      break;
      case "home_mode":
      rotateDeg = 270;
      navRotate(rotateDeg);
      break;
      case "menu_mode":
      rotateDeg = 180;
      navRotate(rotateDeg);
      break;
      case "download_mode":
      rotateDeg = 90;
      navRotate(rotateDeg);
      break;
      default:
      rotateDeg = 0;
      navRotate(rotateDeg)
      alert("displayMode default");
    }
  };

  //displayMode(widget_mode);

  //Switch to Home
  var clickOnHome = function(){
    $("#widget_function").html("Home");
    widget_mode = "home_mode";
    //alert("widget_mode switched:" + widget_mode);
    //could call scrollHome here. no reason to require 2 clicks. If they switch to this mode
    //scrollHome();
    //they probably want to scroll home
    //return widget_mode;
  };

  $("#select_home_mode").click(function() {
    clickOnHome();
    displayMode(widget_mode);
  });


  //Switch to Menu
  var clickOnMenu = function(){
    $("#widget_function").html("Menu");
    widget_mode = "menu_mode";
    //return widget_mode;
  };

  $("#select_menu_mode").click(function() {
    clickOnMenu();
    displayMode(widget_mode);
  });


  //Switch to Audio
  var clickOnAudio = function(playing){
    if(!playing) {
      $("#widget_function").html("Play");
    }
    else{
      $("#widget_function").html("Pause");
    };
    widget_mode = "audio_mode";
    //return widget_mode;
  };


  $("#select_audio_mode").click(function() {
    clickOnAudio(playing);
    displayMode(widget_mode);
  });


  var clickOnPlayOrPause = function(playing){
    if(!playing) {
      $("#widget_function").html("Play");
    }
    else{
      $("#widget_function").html("Pause");
    }
  };

  //Switch to Download
  var clickOnDownload = function(){
    $("#widget_function").html('<a id="audio_download" href="audio/TTWW_TEST_MASTER_10.wav" download>Download</a>');
    widget_mode = "download_mode";
    //return widget_mode;
  };

  $("#select_download_mode").click(function() {
    clickOnDownload();
    displayMode(widget_mode);
  });
  //$("#widget_mode").html(widget_mode);


  //need a function to take mode and direct behavior when box clicked

  var widgetAction = function(widget_mode){
    switch(widget_mode){
      case "menu_mode":
        displayMenu();
        break;
      case "home_mode":
        scrollHome();
        break;
      case "audio_mode":
        audioControl(playing);
        playing = !playing;
        clickOnPlayOrPause(playing);
        break;
      default:
        alert("running switch default");
    }
  };

  $("#widget_function").click(function(){
    //alert(widget_mode);
    widgetAction(widget_mode);
  });



});
