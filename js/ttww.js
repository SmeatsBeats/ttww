$(document).ready(function() {

  //get width of window. useful for css media queries
  //alert($("html").width());

  //hide elements that are to fade in on onload
  $("#album_art").hide();
  $(".menu").hide();
  $("#widget_boi").hide();

  $("#album_art").fadeIn(2500);
  $("#widget_boi").fadeIn(3000);


  var widget_mode = "audio_mode";

  var playing = false;

  var audioFile = document.getElementById("ttwwAudioFile");

  var spinning = false;

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

  var audioControl = function(){

    if(playing){
        audioFile.pause();
        playing = false;

        //change icon to play
        $(".widget_stick").css("margin", "-13%");
        $("#a_stick").css("transform", "rotate(45deg)");
        $("#b_stick").css("transform", "rotate(-45deg)");
        $("#widget_function").css("transform", "rotate(90deg)");
      }
      else{
        audioFile.play();
        playing = true;

        //change icon to pause
        $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
        $("#widget_function").css("transform", "rotate(0deg)");
      }

    }

  //MODE 2 MENU
  //Let the user select which content populates the page: ABOUT, CREDITS, SUPPORT
  //hide the menu on load


  var displayMenu = function(){
      $(".menu").fadeIn(1500);
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

  var rotateDeg, spinTimer, rotateDist;
  var deg = 0;
  var bezelDeg = 0;
  var spinTimer;
  var spinCounter = 0;
  var spinRate;
  var bezelSpinCounter = 0;
  var bezelRotateDist;
  var bezelSpinRate;


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


  // //Turn widget boi off (make clickable)
  // var turnOffWidgetBoi = function(){
  //   $(".nav_img_container").click(false);
  // };

  // //Turn widget boi on (make clickable)
  // var turnOnWidgetBoi = function(){
  //   $(".nav_img_container").click(true);
  // };

  /////////////////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////////////////////////////////
  //Determine rotation parameters for widget
  var navRotate = function(rotateDeg){
    if(deg == 360 || deg == -360){
      deg = 0;
    };
    if(deg == -270 || deg == 450){
      deg = 90;
    };
    if(deg == -90){
      deg = 270;
    };
    if(deg == -180){
      deg = 180;
    };


    // alert("deg: " + deg);
    // alert("rotateDeg: " + rotateDeg);
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

    //check
    if(Math.abs(rotateDist) == 180) {
      rotateDist = 180;
    }

    //bezel 
    if(rotateDist >= 0){
      bezelRotateDist = rotateDist - 360;
    }
    else{
      bezelRotateDist = rotateDist + 360;
    }


    //set nav spin rate so bezel and nav meet at same time
    if (bezelRotateDist == 180 || bezelRotateDist == -180){
      spinRate = 15;
    }
    else{
      spinRate = 30;
    }


    //spin the nav
    var spinTimer = setInterval(function(){
      //alert("called: " + rotateDeg + " " + deg + " " + rotateDist + " " + spinCounter);
      // need to account for over 360

      if(spinCounter == rotateDist){
        var navOptionsImg = document.getElementById('nav_options_img');
        navOptionsImg.style.transform = "rotate(" + deg + "deg)";
        clearInterval(spinTimer);
        spinCounter = 0;
        //alert("timer done");
      }
      else{
        //alert("deg: " + deg);
        var navOptionsImg = document.getElementById('nav_options_img');
        navOptionsImg.style.transform = "rotate(" + deg + "deg)";
        if(rotateDist >= 0){
          spinCounter = spinCounter + 3;
          deg = deg + 3;
          //alert("positive: " + spinCounter);
        }
        else{
          spinCounter = spinCounter - 3;
          deg = deg - 3;
          //alert("negative: " + spinCounter);
        }
        //alert(deg);
        //need to account for trying to go above or below 360 / 0

      }
    }, spinRate);

    //set bezel spin rate so bezel and nav meet at same time
    if (bezelRotateDist == 180 || bezelRotateDist == -180){
      bezelSpinRate = 15;
    }
    else{
      bezelSpinRate = 10;
    }

    //spin the bezel
    var bezelSpinTimer = setInterval(function(){


      if(bezelSpinCounter == bezelRotateDist){
        spinning = false;
        var bezelImg = document.getElementById('widget_bezel_img');
        bezelImg.style.transform = "rotate(" + bezelDeg + "deg)";
        clearInterval(bezelSpinTimer);

        bezelSpinCounter = 0;
      }
      else{
        var bezelImg = document.getElementById('widget_bezel_img');
        bezelImg.style.transform = "rotate(" + bezelDeg + "deg)";
        if(bezelRotateDist >= 0){
          bezelSpinCounter = bezelSpinCounter + 3;
          bezelDeg = bezelDeg + 3;
        }
        else{
          bezelSpinCounter = bezelSpinCounter - 3;
          bezelDeg = bezelDeg - 3;
        }
      }

    }, bezelSpinRate);
  };

  // var clickOnPlayOrPause = function(playing){
  //   alert("called! " + playing);
  //   if(!playing) {
  //     // $("#widget_function").html("Play");
  //     $(".widget_stick").css("margin", "-13%");
  //     $("#a_stick").css("transform", "rotate(45deg)");
  //     $("#b_stick").css("transform", "rotate(-45deg)");
  //     $("#widget_function").css("transform", "rotate(90deg)");
  //   }
  //   else{
  //     $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
  //     $("#widget_function").css("transform", "rotate(0deg)");
  //     // $("#widget_function").html("Pause");
  //
  //
  //   };
  //   // widget_mode = "audio_mode";
  //   //return widget_mode;
  // };

  var adjustIcon = function (prev_widget_mode, widget_mode) {

    //12 cases

    //DO WE NEED INDIVIDUAL MODES FOR PLAY AND PAUSE? HOW WOULD THAT WORK??

      /////////////////////////////////////////////////////////////////////// AUDIO ///////////////////////////////////////////////////////////////////////////////////////

    //prev = audio_mode
    if(prev_widget_mode == "audio_mode" && widget_mode == "menu_mode"){
      // alert("audio to menu animation")
      if(playing){
        // alert("Pause to menu");
        // $("#widget_function").css("transform", "rotate(90deg)");
        var i = 0;
        var iconRotate = setInterval(function(){
          if(i == 90){
            clearInterval(iconRotate);
          }
          else{
            //cuurently at 90 degrees need to go 90 more
            $("#widget_function").css("transform", "rotate(" + i + "deg)");
            i = i + 1.5;
          }
        }, spinRate);
      }
      else{
        //remove any weird margin then rotate
        $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
      }
    }

    else if(prev_widget_mode == "audio_mode" && widget_mode == "home_mode"){
      // alert("audio to home animation")
      if(playing){
        //pause to home
        // $(".widget_stick").css("margin", "-13%");
        // $("#a_stick").css("transform", "rotate(45deg)");
        // $("#b_stick").css("transform", "rotate(-45deg)");
        // $("#widget_function").css("transform", "rotate(0deg)");

        //no rotation for widget function required
        //only need to move sticks
        var ia = 0;
        var ib = 0;
        var im = -13;
        var stickRotate = setInterval(function(){
          if(ia == 45){
            clearInterval(stickRotate);
          }
          else{
            $("#a_stick").css("transform", "rotate(" + ia + "deg)");
            $("#b_stick").css("transform", "rotate(" + ib + "deg)");
            $("#widget_stick").css("margin", im + "%");
            ia = ia + 3;
            ib = ib - 3;
            im++;
          }
        }, spinRate);


      }
      else{
        // $("#widget_function").css("transform", "rotate(0deg)");
        //all we change is i and whether it goes up or down and final destination
        var i = 90;
        var iconRotate = setInterval(function(){
          if(i == 0){
            clearInterval(iconRotate);
          }
          else{
            //cuurently at 90 degrees need to go 90 more
            $("#widget_function").css("transform", "rotate(" + i + "deg)");
            i = i - 3;
          }
        }, spinRate);
      }

    }
    else if(prev_widget_mode == "audio_mode" && widget_mode == "download_mode"){

      //this is only if audio is paused

      // alert("audio to download animation")
      //var whole_icon = document.getElementById("widget_function");

      if(playing){
        // alert("pause icon to download icon");
        $(".widget_stick").css("margin", "-13%");
        $("#a_stick").css("transform", "rotate(45deg)");
        $("#b_stick").css("transform", "rotate(-45deg)");
        $("#widget_function").css("transform", "rotate(180deg)");
      }
      else {
        // $("#widget_function").css("transform", "rotate(180deg)");
        //animate this bad boi

        //before proceeding we should generalize this
        // var iconRotateDist = 90;
        //cuurently at 90 degrees need to go 90 more
        var i = 90;
        var iconRotate = setInterval(function(){
          if(i == 180){
            clearInterval(iconRotate);
          }
          else{
            //cuurently at 90 degrees need to go 90 more
            $("#widget_function").css("transform", "rotate(" + i + "deg)");
            i = i + 3;
          }
        }, spinRate);

      }

    }
      /////////////////////////////////////////////////////////////////////// MENU ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "menu_mode" && widget_mode == "audio_mode"){

      // $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
      // alert("menu to audio animation");
      if(playing){
        // alert("Pause to menu");
        // $("#widget_function").css("transform", "rotate(90deg)");
        var i = 90;
        var iconRotate = setInterval(function(){
          if(i == 180){
            clearInterval(iconRotate);
          }
          else{
            //cuurently at 90 degrees need to go 90 more
            $("#widget_function").css("transform", "rotate(" + i + "deg)");
            i = i + 1.5;
          }
        }, spinRate);
      }
      else{
        //remove any weird margin then rotate
        $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
      }
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "home_mode"){
      // alert("menu to home animation");
      $(".widget_stick").css("margin", "-13%");
      $("#a_stick").css("transform", "rotate(45deg)");
      $("#b_stick").css("transform", "rotate(-45deg)");
      $("#widget_function").css("transform", "rotate(0deg)");
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "download_mode"){
      $(".widget_stick").css("margin", "-13%");
      $("#a_stick").css("transform", "rotate(45deg)");
      $("#b_stick").css("transform", "rotate(-45deg)");
      $("#widget_function").css("transform", "rotate(180deg)");
      //alert("menu to download animation");
    }

      /////////////////////////////////////////////////////////////////////// HOME //////////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "home_mode" && widget_mode == "audio_mode"){
      // alert("home to audio animation");
      if(playing){
        // alert("home to pause");
        $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
        $("#widget_function").css("transform", "rotate(0deg)");
      }
      else{
        // $("#widget_function").css("transform", "rotate(90deg)");
        var i = 0;
        var iconRotate = setInterval(function(){
          if(i == 90){
            clearInterval(iconRotate);
          }
          else{
            //cuurently at 90 degrees need to go 90 more
            $("#widget_function").css("transform", "rotate(" + i + "deg)");
            i = i + 3;
          }
        }, spinRate);
      }
    }
    else if(prev_widget_mode == "home_mode" && widget_mode == "menu_mode"){
      // alert("home to menu animation");
      $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
      $("#widget_function").css("transform", "rotate(90deg)");
    }

    //NEED TO MAKE AND REMOVE DOWNLOAD LINK ACCORDINGLY

    else if(prev_widget_mode == "home_mode" && widget_mode == "download_mode"){
      // alert("home to download animation")
      // $("#widget_function").css("transform", "rotate(180deg)");
      var i = 0;
      var iconRotate = setInterval(function(){
        if(i == 180){
          clearInterval(iconRotate);
        }
        else{
          //cuurently at 90 degrees need to go 90 more
          $("#widget_function").css("transform", "rotate(" + i + "deg)");
          i = i + 3;
        }
      }, spinRate);


    }
      /////////////////////////////////////////////////////////////////////// DOWNLOAD ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "download_mode" && widget_mode == "audio_mode"){
      // alert("download to audio animation");
      if(playing){
        // alert("download to pause");
        $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
        $("#widget_function").css("transform", "rotate(0deg)");
      }
      else{
        // $("#widget_function").css("transform", "rotate(90deg)");

        var i = 180;
        var iconRotate = setInterval(function(){
          if(i == 90){
            clearInterval(iconRotate);
          }
          else{
            //cuurently at 90 degrees need to go 90 more
            $("#widget_function").css("transform", "rotate(" + i + "deg)");
            i = i - 3;
          }
        }, spinRate);

      }
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "home_mode"){
      // alert("download to home animation");
      var i = 180;
      var iconRotate = setInterval(function(){
        if(i == 360){
          clearInterval(iconRotate);
        }
        else{
          //cuurently at 90 degrees need to go 90 more
          $("#widget_function").css("transform", "rotate(" + i + "deg)");
          i = i + 3;
        }
      }, spinRate);
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "menu_mode"){
      // alert("download to menu animation");
      $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
      $("#widget_function").css("transform", "rotate(90deg)");
    }


  };

  //displayMode(widget_mode);

  //can consolidate below functions by grabbing id and substring
  //will need to transfer play/pause and download functionality to new function
  //function to change icon will need to know current icon and desired icon?
  //or only end result
  //since we must animate rotations by hand, will probably need to know both

  $(".nav_box").click(function(){
    var nav_box_id = $(this).attr("id");
    // alert(nav_box_id);
    var prev_widget_mode = widget_mode;
    widget_mode = nav_box_id.substr(nav_box_id.indexOf("_") + 1);
    if(!spinning){
      spinning = true;
      displayMode(widget_mode);
      adjustIcon(prev_widget_mode, widget_mode);
    }
    // alert(widget_mode);
  });
  //
  // //Switch to Home
  // var clickOnHome = function(){
  //   $("#widget_function").html("Home");
  //   widget_mode = "home_mode";
  //   //alert("widget_mode switched:" + widget_mode);
  //   //could call scrollHome here. no reason to require 2 clicks. If they switch to this mode
  //   //scrollHome();
  //   //they probably want to scroll home
  //   //return widget_mode;
  // };
  //
  // $("#select_home_mode").click(function() {
  //   if(spinning == false){
  //     spinning = true;
  //     clickOnHome();
  //     displayMode(widget_mode);
  // }
  // });
  //
  //
  // //Switch to Menu
  // var clickOnMenu = function(){
  //   $("#widget_function").html("Menu");
  //   widget_mode = "menu_mode";
  //   //return widget_mode;
  // };
  //
  // $("#select_menu_mode").click(function() {
  //   if(spinning == false){
  //     spinning = true;
  //     clickOnMenu();
  //     displayMode(widget_mode);
  // }
  // });
  //
  //
  //Switch to Audio
  //might end up putting this inside adjustIcon


  //
  // $("#select_audio_mode").click(function() {
  //   if(spinning == false){
  //     spinning = true;
  //     clickOnAudio(playing);
  //     displayMode(widget_mode);
  // }
  // });
  //
  //
  // var clickOnPlayOrPause = function(playing){
  //   if(!playing) {
  //     $("#widget_function").html("Play");
  //   }
  //   else{
  //     $("#widget_function").html("Pause");
  //   }
  // };
  //
  // //Switch to Download
  // var clickOnDownload = function(){
  //   $("#widget_function").html('<a id="audio_download" href="audio/TTWW_TEST_MASTER_10.wav" download>Download</a>');
  //   widget_mode = "download_mode";
  //   //return widget_mode;
  // };
  //
  // $("#select_download_mode").click(function() {
  //   if(!spinning){
  //     spinning = true;
  //     clickOnDownload();
  //     displayMode(widget_mode);
  //   }
  // });
  // //$("#widget_mode").html(widget_mode);
  //

  //need a function to take mode and direct behavior when box clicked

   //Determines current modes and calls for appropriate widget adjustments
  var displayMode = function(widget_mode){
    //this function should become responsible for animating the rotation of the widget images to indicate the current mode
    //can combine with existing switch for widget mode
    $("#widget_mode").html(widget_mode);
    switch(widget_mode){
      case "audio_mode":
      rotateDeg = 0;
      // spinning = true;
      navRotate(rotateDeg);
      break;
      case "home_mode":
      rotateDeg = 270;
      // spinning = true;
      navRotate(rotateDeg);
      break;
      case "menu_mode":
      rotateDeg = 180;

      navRotate(rotateDeg);
      break;
      case "download_mode":
      rotateDeg = 90;
      // spinning = true;
      navRotate(rotateDeg);
      break;
      default:
      rotateDeg = 0;
      navRotate(rotateDeg)
      alert("displayMode default");
    }
  };

  var widgetAction = function(widget_mode){
    switch(widget_mode){
      case "menu_mode":
        displayMenu();
        break;
      case "home_mode":
        scrollHome();
        break;
      case "audio_mode":
        audioControl();

        // playing = !playing;
        // clickOnPlayOrPause(playing);
        break;
      default:
        // alert("running switch default");
    }
  };

  $("#widget_function").click(function(){
    // alert(widget_mode);
    widgetAction(widget_mode);
  });



});
