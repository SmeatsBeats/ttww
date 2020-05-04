$(document).ready(function() {

  // alert("all good");
  //get width of window. useful for css media queries
  //alert($("html").width());

  //help put css and set dimensions of sliders so overflow:hidden doesn't destroy them
  // var slider_width = $(".support_img_slider").width() / $(".support_img_slider").parent().width() * 100;
  // var slider_height = $(".support_img_slider").height() / $(".support_img_slider").parent().height() * 100;
  // var slider_height = $(".support_img_slider").height();
  // alert(slider_width, slider_height);

  //hide elements that are to fade in on onload

  $("#album_art, .lyrics, .credits, .support, .support_img_info, .support_img_swap_container, .menu").hide();
  $(".prev_arrow").addClass("no_arrow");
  //messing with mobile gesture events

  // $(".support_img_container:first-child").css("left", "0%");
  //var img_index;

  var getSliderIndex = function($currentSlider){
    //alert("getting index");
    var $get_current_img = $($currentSlider).find(".current_img");
    //alert($get_current_img);
    var img_sibs = $($get_current_img).prevAll().length;
    //alert("i count " + img_sibs);
    var slider_index = img_sibs;
    return slider_index;
  }

  var sliderUpdate = function(next, $currentSlider, slider_index){
    //getSliderIndex($currentSlider);
    //alert("howdy");
    //$($currentSlider).hide();
    //alert("returned " + slider_index);
    var slide_imgs = $($currentSlider).children(".support_img");
    var num_imgs = slide_imgs.length;
    var prev_img = slide_imgs[slider_index];
    var prev_dot_class = ".dot_boi_" + slider_index;
    //alert(prev_dot_class);
    var prev_dot = $($currentSlider).find(prev_dot_class);
/*
    var setImgDot = function(slider_index){
      alert("setting img and dot");
      var current_img = slide_imgs[img_index];
      var current_dot_class = ".dot_boi_" + slider_index;
      var current_dot = $($currentSlider).find(current_dot_class);
      return current_img, current_dot;
    }
*/
    if(next){
      //go right
      slider_index++;
      //alert(slider_index);
      //setImgDot(slider_index);
      //alert("img and dot set" + current_img + current_dot);
      //alert(slider_index + " " + num_imgs);

      if(slider_index == 1){
        //alert("bring in prev");
        $($currentSlider).find(".prev_arrow").removeClass("no_arrow");
        if(num_imgs <= 2){
          $($currentSlider).find(".next_arrow").addClass("no_arrow");
        }
      }
      else if(slider_index == num_imgs - 1){
        $($currentSlider).find(".next_arrow").addClass("no_arrow");
      }
      // else if(slider_index == num_imgs)

      var current_img = slide_imgs[slider_index];
      var current_dot_class = ".dot_boi_" + slider_index;
      //alert(current_dot_class);
      // alert(thisSlider);
      var current_dot = $($currentSlider).find(current_dot_class);
      //alert(current_dot);

      // var current_dot_class_name = $(current_dot).attr("class");
      // alert(current_dot_class_name);

      if(slider_index == num_imgs){

        slider_index = num_imgs - 1;

      }
      else{

        //update dot
        //alert(current_dot_class_name);
        //$(current_dot).html("yolo");
        $(prev_dot).removeClass("selected_dot");
        $(current_dot).addClass("selected_dot");
        $(prev_img).removeClass("current_img");
        $(current_img).addClass("current_img");

        $(prev_img).animate({
          "left" : "-100%"
        }, 800);

        $(current_img).animate({
          "left" : "0%"
        }, 800);
        //add class to current img to detect it
      }
    }
    else{
      //go left
      slider_index--;
      //setImgDot(slider_index);
      //alert("img and dot set" + current_img + current_dot);

      //alert(slider_index + " " + num_imgs);

      if(num_imgs > 2){
        if(slider_index == num_imgs - 2){
          //show the next arrow
          $($currentSlider).find(".next_arrow").removeClass("no_arrow");
        }
        else if(slider_index == 0){
          //hide prev arrow
          $($currentSlider).find(".prev_arrow").addClass("no_arrow");
        }

      }
      else if(num_imgs == 2){
        if(slider_index == 0){
          $($currentSlider).find(".prev_arrow").addClass("no_arrow");
          $($currentSlider).find(".next_arrow").removeClass("no_arrow");
        }

      }



      var current_img = slide_imgs[slider_index];
      var current_dot_class = ".dot_boi_" + slider_index;
      var current_dot = $($currentSlider).find(current_dot_class);

      //double check this

      if(slider_index == -1){
        slider_index = 0;
        // $($currentSlider).find(".prev_arrow").fadeOut();

        //alert("no more left");
      }
      else{
        // $(thisSlider).find(current_dot).html("gotcha!");
        // alert((prev_dot).attr("class"));
        //alert(current_dot);
        $(prev_dot).removeClass("selected_dot");
        $(current_dot).addClass("selected_dot");
        $(prev_img).removeClass("current_img");
        $(current_img).addClass("current_img");

        $(prev_img).animate({
          "left" : "100%"
        }, 800);

        $(current_img).animate({
          "left" : "0%"
        }, 800);
      }
    }
  }

  $(".support_img_slider").each(function(){
    var img_index = 0;

    var dots = "";
    var slide_imgs = $(this).children(".support_img");
    var num_imgs = slide_imgs.length;

    if(num_imgs == 1){
      //remove next arrow
      $(this).find(".next_arrow").addClass("no_arrow");
    }

    //alert(num_imgs);
    //generate img_indicator icons for each picture in slider


    //nice
    var i = 0;
    $(slide_imgs).each(function(){
      dots += "<span class='dot_boi'><svg class='lil_dot_container'><circle class='lil_dot dot_boi_" + i + "' cx='50%' cy='50%' r='0.5em'></svg></span>";
      //$(this).next(".support_img_info").find(".img_indicator").html(dots);
      //alert($(this).attr("class"));
      //returns support_img
      //alert($(this).parent().find(".img_indicator").attr("class"));
      $(this).parent().find(".img_indicator").html(dots);
      i++;
    });

    //hilight 1st dot

    $(".dot_boi_0").addClass("selected_dot");

    //need to hilight dot that corresponds with curent img
    // var dot_squad = $(this).next(".support_img_info").find(".dot_boi");
    // alert(dot_squad.length);

    //slideright when arrow clicked for desktop version

    var $currentSlider = $(this);
    //var slider_class = $(thisSlider).attr("class");
    //alert(slider_class);

    var hammertime = new Hammer(this);

    hammertime.on("swipeleft swiperight press", function(event){

      //alert(slider_class);


      var eventType = event.type;
      // alert(eventType);

      var prev_img = slide_imgs[img_index];
      var prev_dot_class = ".dot_boi_" + img_index;
      var prev_dot = $($currentSlider).find(prev_dot_class);

      var slider_index = getSliderIndex($currentSlider);

      if(eventType == "tap" || eventType == "swipeleft"){


        sliderUpdate(true, $currentSlider, slider_index);
        /*
        //alert("go right");
        img_index++;

        var current_img = slide_imgs[img_index];
        var current_dot_class = ".dot_boi_" + img_index;
        //alert(current_dot_class);
        // alert(thisSlider);
        var current_dot = $($this).find(current_dot_class);
        //alert(current_dot);

        // var current_dot_class_name = $(current_dot).attr("class");
        // alert(current_dot_class_name);

        if(img_index == num_imgs){
          img_index = num_imgs - 1;

          //alert("no more right");
        }
        else{

          //update dot
          //alert(current_dot_class_name);
          //$(current_dot).html("yolo");
          $(prev_dot).removeClass("selected_dot");
          $(current_dot).addClass("selected_dot");

          $(prev_img).animate({
            "left" : "-100%"
          }, 800);

          $(current_img).animate({
            "left" : "0%"
          }, 800);
        }
        */
      }
      else{
        sliderUpdate(false, $currentSlider, slider_index);
        /*
        //alert("go left");
        img_index --;

        var current_img = slide_imgs[img_index];
        var current_dot_class = ".dot_boi_" + img_index;
        var current_dot = $($this).find(current_dot_class);
        if(img_index == -1){
          img_index = 0;

          //alert("no more left");
        }
        else{
          // $(thisSlider).find(current_dot).html("gotcha!");
          // alert((prev_dot).attr("class"));
          //alert(current_dot);
          $(prev_dot).removeClass("selected_dot");
          $(current_dot).addClass("selected_dot");

          $(prev_img).animate({
            "left" : "100%"
          }, 800);

          $(current_img).animate({
            "left" : "0%"
          }, 800);
        }
        */
      }

      return false;
    });
  });

  $(".slider_arrow").click(function(){
    var arrow_class = $(this).attr("class");
    var arrow_type = arrow_class.substring(0, arrow_class.indexOf("_"));
    //alert(arrow_type);
    var $currentSlider = $(this).closest(".support_img_slider");
    var slider_index = getSliderIndex($currentSlider);
    //alert(arrow_type);
    if(arrow_type == "next"){
      //alert("calling with true and " + slider_index);
      sliderUpdate(true, $currentSlider, slider_index);
    }
    else{
      sliderUpdate(false, $currentSlider, slider_index);
    }
  });





  $("#album_art").fadeIn(2500);
  $("#widget_boi").fadeIn(3000);

  /////////////SUPPORT PAGE ///////////////
  ///totally stumped
  //the position of the image does not seem to update to js or css
  //the mouseenter event only seems to be recognized when the mouse enters some fixed location
  //where the page thinks the image is
  ///RAHHHHHHH
  //ok.. so the menu width is set to 100% so even when the menu options are off the screen
  //the containing box is present with a high z-index
  //so it covers the whole top of the screen and as you scroll down it blocks the top half of elements...
  //took me all day to figure this out :) and I just took out the line that hid menu a few days ago lol

  //show item info on hover

  $(".support_img_slider").hover(function(){
    $(this).children(".support_img_info, .support_img_swap_container, .support_img_swap").fadeIn("fast");
  }, function(){
    $(this).children(".support_img_info, .support_img_swap_container, .support_img_swap").fadeOut("slow");
  });

  // $(document.body).on("mouseenter", '.support_img_slider', function(){
  //   alert("in for the love of god");
  // });

  // $(".support_img_slider").mouseenter(function(){
  //   $(this).children(".support_img_info").fadeIn();
  //
  //   $(".support_img_slider").mouseleave(function(){
  //     $(this).children(".support_img_info").fadeOut();
  //   });
  // });


  //$(".menu").hide();

  //widget menu functionality

  //we need a far cooler menu display function

  //if show is true, show the menu. otherwise hide it

  // var menuOpen = false;

  var displayMenu = function(show){

    //alert(show);
    if(show){
      $(".menu").show();
      var slideDest = "0%";
      var about_delay = 0;
      var lyrics_delay = 100;
      var credits_delay = 200;
      var support_delay = 300;
      // menuOpen = true;
      //alert(slideDest);
    }
    else{
      var slideDest = "100%";
      var about_delay = 300;
      var lyrics_delay = 200;
      var credits_delay = 100;
      var support_delay = 0;
      // menuOpen = false;
      //hide the menu after
    }

    $("#about_nav").delay(about_delay).animate({
      "right" : slideDest
    }, 800, function(){
      if(!show){
        // alert("hide menu");
        $(".menu").hide();
      }
    });

    $("#lyrics_nav").delay(lyrics_delay).animate({
      "left" : slideDest
    }, 800);

    $("#credits_nav").delay(credits_delay).animate({
      "right" : slideDest
    }, 800);

    $("#support_nav").delay(support_delay).animate({
      "left" : slideDest
    }, 800);
  };

  var menu_select = function(nav_selection){


    var msg;

    switch(nav_selection){
      case "about":
      msg = "The key question is whether such a system has braking mechanisms at its disposal...";
      break;
      case "lyrics":
      msg = "6. Death is a choice. Life is indecision.";
      break;
      case "credits":
      msg = "Death, if that is what we want to call this non-entity, is of all things the most dreadful.";
      break;
      case "support":
      msg = "Please help me buy a farm and move out of my parents' basement.";
      break;
      default:
      alert("YOLO");
    }

    $("#content_head_msg").html(msg);

    //dont' slide up or down if already open



    var selector = "." + nav_selection;
    if($(selector).is(":hidden")){
      $(".content").slideUp("slow");
      $(selector).slideDown("slow");
    }
  }

  $(".menu_nav").click(function(){
    var item_id = $(this).attr("id");
    //alert (item_id);
    var nav_selection = item_id.substring(0, item_id.indexOf("_"));
    //alert(nav_selection);
    menu_select(nav_selection);
    // $(".menu").fadeOut("slow");
    displayMenu(false);
    //scroll to top of content
    $("html, body").animate({
      scrollTop: $("#real_body").offset().top
    }, 1000);
  });

  //close menu on click outside

  // $("html").click(function){
  //   if(menuOpen){
  //     displayMenu(false);
  //   }
  // }


  $("html").click(function(event){
    //alert("hi");
    $target = $(event.target);
    //var target_length = target_closest.length;
    //only close it if it is open
    var menu_pos = $("#about_nav").css("right");
    //alert(menu_pos);
    //alert($target.closest(".menu").length);
    if(!$target.closest(".menu").length && menu_pos == "0px"){
      //alert("close the menu I think");
      displayMenu(false);
    }
    //alert(menu_pos);
  });

  var playing = false;

  var audioFile = document.getElementById("ttwwAudioFile");

  var spinning = false;

  var widget_mode = "audio_mode";

  //build function for easing effect on overscroll at bottom of page plus image swap

  //build function to:
  //1. setup display of about_item section for mobile and desktop devices

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

  var moveSticks = function(open, flip, doubleRate){

    var moveRate;
    var dr = doubleRate
    if(dr){
      moveRate = (2 * spinRate);
    }
    else{
      moveRate = spinRate;
    }

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

          ia = ia + 1.25;
          ib = ib - 1.25;


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

            ia= ia - 1.25;
            ib= ib + 1.25;

        }
      }
    }, moveRate);
  };

  var iconSpin = function(start, end, rate){

    // previousDeg = 270;
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
        $("#widget_function").css("transform", "rotate(" + end + "deg)");
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
  };


  var fullFlip= function(){
    $(".widget_stick").css("transform", "rotate(180deg)");
  };

  var audioControl = function(){

    if(playing){
        audioFile.pause();
        playing = false;

        //change icon to play
        spinRate = 15;
        moveSticks(true, false, false);
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
        spinRate = 15;
        moveSticks(false, false, false);
        iconSpin(90, 0, 15);

        // $(".widget_stick").css("transform", "rotate(0deg)");
        // $("#widget_function").css("transform", "rotate(0deg)");
      }

    }

  //MODE 2 MENU
  //Let the user select which content populates the page: ABOUT, CREDITS, SUPPORT
  //hide the menu on load

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
        iconSpin(0, 90, 2 * spinRate);
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
        moveSticks(false, false, true);
      }
    }

    else if(prev_widget_mode == "audio_mode" && widget_mode == "home_mode"){
      // alert("audio to home animation")
      if(playing){
        //pause to home
        $(".widget_stick").css("transform-origin", "center top");
        moveSticks(true, false, false);
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
        moveSticks(true, false, false);

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
        // $("#widget_function").css("transform", "rotate(0deg)");
        iconSpin(270, 360, 2 * spinRate);
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
        moveSticks(true, false, true);
        iconSpin(270, 450, spinRate);
        // $(".widget_stick").css("transform", "rotate(0deg)");
      }
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "home_mode"){
      // alert("menu to home animation");
      moveSticks(true, false, false);
      iconSpin(270, 360, spinRate);

      // $("#a_stick").css("transform", "rotate(45deg)");
      // $("#b_stick").css("transform", "rotate(-45deg)");
      // $("#widget_function").css("transform", "rotate(0deg)");
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "download_mode"){
      //menu to download
      $("#audio_download").show();
      moveSticks(true, false, false);
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
        moveSticks(false, false, false);
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
      moveSticks(false, false, false);
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
        moveSticks(false, true, false);

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
      moveSticks(false, false, false);
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
        displayMenu(true);
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
