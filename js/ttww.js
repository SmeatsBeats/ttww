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
  ///////////////FUNCTION TO TRANSITION FROM PARALLEL LINES TO TRIANGLE
  //should the cheeks open or close?
  //boolean value true means open flase means close
  var flip;
  //boolean value that states whether transform origin is top or bottom true = top
  var top;
  var moveSticks = function(open, flip){
    if(open){
      //start at 0
      //counter for stick a
      var ia = 0;
      //counter for stick b -- might be unnecessary
      var ib = 0;
    }
    else{
      var ia = 35;
      var ib = -35;
    }

    var stickRotate = setInterval(function(){
      if(open){
        if(ia == 35){
          clearInterval(stickRotate);
          //for some modes we rotate from bottom i.e. pause to download
          //when this is complete make sure we reset transform origin
          // $(".widget_stick").css("transform-origin", "center top");
        }
        else{
          $("#a_stick").css("transform", "rotate(" + ia + "deg)");
          $("#b_stick").css("transform", "rotate(" + ib + "deg)");

          ia = ia + 2.1875;
          ib = ib - 2.1875;


        }
      }
      else{
        if(ia == 0){
          //doesn't seem to close all the way currently
          //can just tac on css property setting to 0 for now
          clearInterval(stickRotate);
          $(".widget_stick").css("transform", "rotate(0deg)");
          if(flip){
            $("#widget_function").css("transform", "rotate(0deg)");
          }
        }
        else{
          //alert("ia: " + ia + " ib: " + ib);
          $("#a_stick").css("transform", "rotate(" + ia + "deg)");
          $("#b_stick").css("transform", "rotate(" + ib + "deg)");

            ia= ia - 2.1875;
            ib= ib + 2.1875;

        }
      }
    }, spinRate);
  };

  var iconSpin = function(start, end, rate){

    previousDeg = 270;
    var start = start;
    var end = end;
    spinRate = rate;
    //must update to account for rate
    var spinWidgetFunction = setInterval(function(){
      if(start == end){
        if(end == 360){
          $("#widget_function").css("transform", "rotate(0deg)");
        }
        clearInterval(spinWidgetFunction);
      }
      else{

        $("#widget_function").css("transform", "rotate(" + start + "deg)");
        if(end > start){
          start = start + 3;
        }
        else{
          //alert("backwards");
          start = start - 3;
        }
      }

    }, spinRate);
  }

  var audioControl = function(){

    if(playing){
        audioFile.pause();
        playing = false;

        //change icon to play
        moveSticks(true, false);
        iconSpin(0, 90, 15);
        // $(".widget_stick").css("margin", "-13%");
        // $("#a_stick").css("transform", "rotate(45deg)");
        // $("#b_stick").css("transform", "rotate(-45deg)");
        // $("#widget_function").css("transform", "rotate(90deg)");
      }
      else{
        audioFile.play();
        playing = true;

        //change icon to pause
        moveSticks(false, false);
        iconSpin(90, 0, 15);

        // $(".widget_stick").css("transform", "rotate(0deg)");
        // $("#widget_function").css("transform", "rotate(0deg)");
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

  var rotateDeg, spinTimer, rotateDist;
  var deg = 0;
  var bezelDeg = 0;
  var spinTimer;
  var spinCounter = 0;
  var spinRate = 15;
  var bezelSpinCounter = 0;
  var bezelRotateDist;
  var bezelSpinRate;
  var previousDeg;

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

  var adjustIcon = function (prev_widget_mode, widget_mode) {

    //12 cases

    //DO WE NEED INDIVIDUAL MODES FOR PLAY AND PAUSE? HOW WOULD THAT WORK??

      /////////////////////////////////////////////////////////////////////// AUDIO ///////////////////////////////////////////////////////////////////////////////////////

    //prev = audio_mode
    if(prev_widget_mode == "audio_mode" && widget_mode == "menu_mode"){
      // alert("audio to menu animation")
      if(playing){
        // alert("Pause to menu");
        iconSpin(0, 90, spinRate);
        // $("#widget_function").css("transform", "rotate(90deg)");
        // var i = 0;
        // var iconRotate = setInterval(function(){
        //   if(i == 90){
        //     clearInterval(iconRotate);
        //   }
        //   else{
        //     //cuurently at 90 degrees need to go 90 more
        //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
        //     i = i + 1.5;
        //   }
        // }, spinRate);
      }
      else{
        //remove any weird margin then rotate
        // $(".widget_stick").css("transform", "rotate(0deg)");
        moveSticks(false, false);
      }
    }

    else if(prev_widget_mode == "audio_mode" && widget_mode == "home_mode"){
      // alert("audio to home animation")
      if(playing){
        //pause to home
        // $(".widget_stick").css("transform-origin", "center top");
        moveSticks(true, false);
      }
      else{
        // $("#widget_function").css("transform", "rotate(0deg)");
        //all we change is i and whether it goes up or down and final destination

        iconSpin(90, 0, spinRate);

        // var i = 90;
        // var iconRotate = setInterval(function(){
        //   if(i == 0){
        //     clearInterval(iconRotate);
        //   }
        //   else{
        //     //cuurently at 90 degrees need to go 90 more
        //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
        //     i = i - 3;
        //   }
        // }, spinRate);
      }

    }
    else if(prev_widget_mode == "audio_mode" && widget_mode == "download_mode"){

      //this is only if audio is paused

      // alert("audio to download animation")
      //var whole_icon = document.getElementById("widget_function");

      //bring in download link
      $("#audio_download").show();

      if(playing){
        // alert("pause icon to download icon");
        // $(".widget_stick").css("margin", "-13%");
        // $("#a_stick").css("transform", "rotate(45deg)");
        // $("#b_stick").css("transform", "rotate(-45deg)");
        $("#widget_function").css("transform", "rotate(180deg)");
        // $(".widget_stick").css("transform-origin", "center bottom");
        moveSticks(true, false);

      }
      else {
        // $("#widget_function").css("transform", "rotate(180deg)");
        //animate this bad boi

        //before proceeding we should generalize this
        // var iconRotateDist = 90;
        //cuurently at 90 degrees need to go 90 more

        iconSpin(90, 180, spinRate);

        // var i = 90;
        // var iconRotate = setInterval(function(){
        //   if(i == 180){
        //     clearInterval(iconRotate);
        //   }
        //   else{
        //     //cuurently at 90 degrees need to go 90 more
        //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
        //     i = i + 3;
        //   }
        // }, spinRate);

      }

    }
      /////////////////////////////////////////////////////////////////////// MENU ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "menu_mode" && widget_mode == "audio_mode"){

      // $(".widget_stick").css({"transform" : "rotate(0deg)", "margin" : "4%"});
      // alert("menu to audio animation");
      if(playing){
        //menu to pause
        iconSpin(90, 180, spinRate);
        //
        // $("#widget_function").css("transform", "rotate(90deg)");
        // var i = 90;
        // var iconRotate = setInterval(function(){
        //   if(i == 180){
        //     clearInterval(iconRotate);
        //   }
        //   else{
        //     //cuurently at 90 degrees need to go 90 more
        //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
        //     i = i + 1.5;
        //   }
        // }, spinRate);
      }
      else{
        //menu to play
        //this fs up if you spin the icon around. If you are at 270deg, the wrong side opens
        //may want to add a flipx and flipy option to iconSpin especially if you want to always follow outside
        //for now, just check if you are at 270
        //this is sketcht as hell and I'm not sure if there will be a 7 on all machines. Maybe search for .
        //to be a little less sjetch
        // var matrix = $("#widget_function").css("transform");
        // var currentPos = matrix.indexOf("7");
        // // alert(currentPos);
        // //if there is a 7 somewhere in this then it is not at 90 but 270
        // if(currentPos > -1){
        //   //this means it found a 7
        //   //so you are at 270
        //   $("#widget_function").css("transform", "rotate(90deg)");
        //   //now you're at 90
        // }
        // $("#widget_function").css("transform", "rotate(90deg)");
        moveSticks(true, false);
        iconSpin(270, 450, spinRate);
        // $(".widget_stick").css("transform", "rotate(0deg)");
      }
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "home_mode"){
      // alert("menu to home animation");
      moveSticks(true, false);
      iconSpin(270, 360, spinRate);

      // $("#a_stick").css("transform", "rotate(45deg)");
      // $("#b_stick").css("transform", "rotate(-45deg)");
      // $("#widget_function").css("transform", "rotate(0deg)");
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "download_mode"){
      //menu to download
      $("#audio_download").show();
      moveSticks(true, false);
      iconSpin(270, 180, spinRate);

      // $(".widget_stick").css("margin", "-13%");
      // $("#a_stick").css("transform", "rotate(45deg)");
      // $("#b_stick").css("transform", "rotate(-45deg)");
      // $("#widget_function").css("transform", "rotate(180deg)");
      //alert("menu to download animation");
    }

      /////////////////////////////////////////////////////////////////////// HOME //////////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "home_mode" && widget_mode == "audio_mode"){
      // alert("home to audio animation");
      if(playing){
        // alert("home to pause");
        // $(".widget_stick").css("transform", "rotate(0deg)");
        // $("#widget_function").css("transform", "rotate(0deg)");
        moveSticks(false, false);
      }
      else{
        iconSpin(0, 90, spinRate);
        // $("#widget_function").css("transform", "rotate(90deg)");
        // var i = 0;
        // var iconRotate = setInterval(function(){
        //   if(i == 90){
        //     clearInterval(iconRotate);
        //   }
        //   else{
        //     //cuurently at 90 degrees need to go 90 more
        //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
        //     i = i + 3;
        //   }
        // }, spinRate);
      }
    }
    else if(prev_widget_mode == "home_mode" && widget_mode == "menu_mode"){
      // alert("home to menu animation");
      moveSticks(false, false);
      iconSpin(0, -90, spinRate);

      // $(".widget_stick").css("transform", "rotate(0deg)");
      // $("#widget_function").css("transform", "rotate(90deg)");
    }

    //NEED TO MAKE AND REMOVE DOWNLOAD LINK ACCORDINGLY

    else if(prev_widget_mode == "home_mode" && widget_mode == "download_mode"){
      // alert("home to download animation")
      // $("#widget_function").css("transform", "rotate(180deg)");
      $("#audio_download").show();
      iconSpin(0, 180, spinRate);

      // var i = 0;
      // var iconRotate = setInterval(function(){
      //   if(i == 180){
      //     clearInterval(iconRotate);
      //   }
      //   else{
      //     //cuurently at 90 degrees need to go 90 more
      //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
      //     i = i + 3;
      //   }
      // }, spinRate);


    }
      /////////////////////////////////////////////////////////////////////// DOWNLOAD ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "download_mode" && widget_mode == "audio_mode"){
      $("#audio_download").hide();
      // alert("download to audio animation");
      if(playing){
        // alert("download to pause");
        // $(".widget_stick").css("transform", "rotate(0deg)");
        // $(".widget_stick").css("transform-origin", "center bottom");
        moveSticks(false, true);

      }
      else{
        // $("#widget_function").css("transform", "rotate(90deg)");
        iconSpin(180, 90, spinRate);
        // var i = 180;
        // var iconRotate = setInterval(function(){
        //   if(i == 90){
        //     clearInterval(iconRotate);
        //   }
        //   else{
        //     //cuurently at 90 degrees need to go 90 more
        //     $("#widget_function").css("transform", "rotate(" + i + "deg)");
        //     i = i - 3;
        //   }
        // }, spinRate);

      }
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "home_mode"){
      // alert("download to home animation");
      $("#audio_download").hide();
      iconSpin(180, 360, spinRate);
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "menu_mode"){
      // alert("download to menu animation");
      $("#audio_download").hide();
      moveSticks(false, false);
      iconSpin(180, 270, spinRate);

      // $(".widget_stick").css("transform", "rotate(0deg)");
      // $("#widget_function").css("transform", "rotate(90deg)");
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
