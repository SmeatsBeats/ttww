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

  $(".lyrics, .credits, .support, .support_img_info, .support_img_swap_container, .menu, #widget_boi, .intro_item, #got_it_button, .download_options, .download_symbol, .toolTip, #hinticator").hide();
  $(".intro_msg, #album_art, #real_body").css("opacity", "0");
  $(".prev_arrow").addClass("no_arrow");
  //messing with mobile gesture events

  // $(".support_img_container:first-child").css("left", "0%");
  //var img_index;


  var intro_mode = true;
  var draggable = false;
  var widgetDblClick = false;
  var widget_press = false;
  var intro_first_open = true;
  var firstSwipe = true;
  var preventFullSpin = true;
  var intro_index = 0;
  var audio_mode_explored = false;
  var audio_tap = false;
  var audio_press = false;
  var home_mode_explored = false;
  var home_tap = false;
  var home_press = false;
  var scroll_fx = false;
  var menu_mode_explored = false;
  var menu_tap = false;
  var menu_press = false;
  var download_mode_explored = false;
  var download_tap = false;
  var download_press = false;
  var downloadSimpleOpen = false;
  var menu_tap = false;
  var mennu_press = false;
  var gotcha = false;
  var set_intro_msg;
  var introTimer = true;
  var fadeIntroMsg;
  var completeNavSpin;
  var darkNavSpin = 0;
  var introBezelSpin = 360;
  var dark_nav = document.getElementById("nav_options_dark");
  var intro_bezel = document.getElementById("widget_bezel_img");
  var introAnimation = function(){
    intro_mode = true;
    //could move this to css as well
    $("html").css("overflow-y", "hidden");
    //$("#nav_options_img").css("opacity", "0");
    //$(".widget_stick").css("opacity", "0");
    $("#widget_boi").fadeIn("slow");
    $(".intro_item").fadeIn(2000);


      //$(".intro_msg").css("opacity", "1");

      $(".intro_msg").delay(3000).animate({
        "opacity" : "1"
      }, 2500);



      // $(".intro_msg").fadeIn("slow");



    //intro msg sequence
    var intro_msgs = ["mi", "nam", "is", "wdgt", "boi", "hi"];
    var msg = 0;
    set_intro_msg = setInterval(function(){
      //alert(msg);
      if(msg == intro_msgs.length){
        //alert("reset");
        msg = 0;
      }
      //alert(intro_msgs[msg]);

      $(".intro_msg").stop().animate({
        "opacity" : "0"
      }, 2500, function(){
        $(".intro_msg").html(intro_msgs[msg]);
        $(".intro_msg").animate({
          "opacity" : "1"
        }, 2500);
        msg++;
      });
      /*

      $(".intro_msg").fadeOut(2500, function(){
        $(".intro_msg").html(intro_msgs[msg]);
        $(".intro_msg").fadeIn(3000);
        msg++;
      });

      */

    }, 9000);


    //spin tings for intro

    introTimer = setInterval(function(){
      if(darkNavSpin == 360){
        darkNavSpin = 0;
      }
      if(introBezelSpin == 0){
        introBezelSpin = 360;
      }
      dark_nav.style.transform = "rotate(" + darkNavSpin + "deg)";
      intro_bezel.style.transform = "rotate(" + introBezelSpin + "deg)";
      introBezelSpin--;
      darkNavSpin++;
    }, 5);

  }

  introAnimation();


  var getSliderIndex = function($currentSlider){
    //alert("getting index");
    var $get_current_img = $($currentSlider).find(".current_img");
    //alert($get_current_img);
    var img_sibs = $($get_current_img).prevAll().length;
    //alert("i count " + img_sibs);
    var slider_index = img_sibs;
    return slider_index;
  }

  var sliderUpdate = function(next, $currentSlider, slider_index, jumpTo){
    //getSliderIndex($currentSlider);
    //alert("howdy");
    //$($currentSlider).hide();
    //alert("returned " + slider_index);
    var slide_imgs = $($currentSlider).children(".support_img");
    var num_imgs = slide_imgs.length;
    var prev_index = slider_index;
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
      if(typeof jumpTo !== "undefined"){
        //alert("jumping to " + jumpTo);
        slider_index = jumpTo;
      }
      else{
        //alert("normal increment");
        slider_index++;
      }
      //slider_index++;
      //alert(slider_index);
      //setImgDot(slider_index);
      //alert("img and dot set" + current_img + current_dot);
      //alert(slider_index + " " + num_imgs);

      if(slider_index >= 1 && slider_index <= num_imgs - 2){
        //alert("bring in prev");
        $($currentSlider).find(".prev_arrow").removeClass("no_arrow");
        $($currentSlider).find(".next_arrow").removeClass("no_arrow");
        if(num_imgs <= 2){
          $($currentSlider).find(".next_arrow").addClass("no_arrow");
        }
      }
      else if(slider_index == num_imgs - 1){
        $($currentSlider).find(".next_arrow").addClass("no_arrow");
        $($currentSlider).find(".prev_arrow").removeClass("no_arrow");
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

        //if you are jumping to the right you must move all imgs in between

        //var imgs_between = current_img - prev_img;
        if(jumpTo){
          var i;
          for(i = prev_index + 1; i < slider_index; i++){
            //alert(i);
            $(slide_imgs[i]).animate({
              "left" : "-100%"
            }, 800);
          }
        }

      }
    }
    else{
      //go left
      //alert("jumpTo: " + jumpTo);
      //remember 0 counts as false so can't just do if(jumpTo)
      if(typeof jumpTo !== "undefined"){
        //alert("jumping to " + jumpTo);
        slider_index = jumpTo;
        //alert(slider_index);
      }
      else{
        //alert("normal decrement");
        slider_index--;
      }

      //setImgDot(slider_index);
      //alert("img and dot set" + current_img + current_dot);

      //alert(slider_index + " " + num_imgs);




      if(num_imgs > 2){
        if(slider_index > 0 && slider_index <= num_imgs - 2){
          //show the next arrow
          $($currentSlider).find(".next_arrow").removeClass("no_arrow");
          $($currentSlider).find(".prev_arrow").removeClass("no_arrow");
        }
        else if(slider_index == 0){
          //hide prev arrow
          $($currentSlider).find(".prev_arrow").addClass("no_arrow");
          $($currentSlider).find(".next_arrow").removeClass("no_arrow");
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
      //alert(current_dot_class);
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
        if(jumpTo){
          var i;
          for(i = prev_index - 1; i > slider_index; i--){
            $(slide_imgs[i]).animate({
              "left" : "100%"
            }, 800);
          }
        }
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

      }
      else{
        sliderUpdate(false, $currentSlider, slider_index);
      }

      return false;
    });
  });

  $(".slider_arrow").click(function(){

    //if you click on empty arrow treat like click on box and fadeout img info

    if($(this).hasClass("no_arrow")){
      if(!runningHover){
        if($(this).closest(".support_img_slider").find(".support_img_info").is(":visible")){
          $(this).closest(".support_img_slider").find(".support_img_info").fadeOut("slow");
        }
        else{
          $(this).closest(".support_img_slider").find(".support_img_info").fadeIn("fast");
        }
      }
    }

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

  $(".dot_boi").click(function(){
    var dotClass = $(this).find(".lil_dot").attr("class");
    //alert(dotClass);
    var jumpTo = parseInt(dotClass.match(/[0-9]/g));
    //alert(jumpTo);

    var $currentSlider = $(this).closest(".support_img_slider");
    var slider_index = getSliderIndex($currentSlider);
    var slider_index = parseInt(slider_index);

    //alert(slider_index);

    if(jumpTo > slider_index){
      //going right
      //alert("go right: " + jumpTo + " " + slider_index);
      sliderUpdate(true, $currentSlider, slider_index, jumpTo);
    }
    else if(jumpTo < slider_index){
      //alert("go left: " + jumpTo + " " + slider_index);
      sliderUpdate(false, $currentSlider, slider_index, jumpTo);
    }


    //need to determine if going right or left



  });

  //currently fading this in after completion of intro animation
  //need a way to skip intro animation if you have visited site before
  //$("#album_art").fadeIn(2500);
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

  //var supInfoVis = false;
  //var holMeBak = true;
  var runningHover;

  $(".support_img_slider").hover(function(event){
    //alert("you hovered");
      runningHover = true;
      //$(this).closest(".img_indicator_container").siblings(".support_img_info").fadeIn("fast");
      $(this).children(".support_img_info").fadeIn("fast", function(){
        runningHover = false;
      });
      //supInfoVis = true;



  }, function(){
    //$(this).closest(".img_indicator_container").siblings(".support_img_info").fadeOut("slow");
    $(this).children(".support_img_info").fadeOut("slow");
    //supInfoVis = false;
  });


  //can improve this by preventing fadeOut on last and first imgs
  $(".img_indicator_container").click(function(event){
      if(!runningHover){
        //alert("img: " + $(this).hasClass("img_indicator_container") + "no_arrow: " + $(this).hasClass("no_arrow"));
        $target = event.target;
        //alert($($target).attr("class"));
        if($($target).hasClass("img_indicator_container")){
          //container was clicked
          if($($target).closest(".support_img_slider").find(".support_img_info").is(":visible")){
          //  alert("be gone");
            $($target).closest(".support_img_slider").find(".support_img_info").fadeOut("slow");
            //alert("fading out");
          }
          else{
            $($target).closest(".support_img_slider").find(".support_img_info").fadeIn("fast");
          }
          //$(this).siblings(".support_img_info").fadeOut("slow");
        }
      }
  })


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
  var prevWidgetTop, prevWidgetLeft;

  var displayMenu = function(show){

    //alert(show);
    if(show){

      //use this to send widget back to where it was when the menu opened
      //need to account for the transform

      var widgetHeight = $("#widget_boi").height();
      var widgetWidth = $("#widget_boi").width();

      var widgetOffset = $("#widget_boi").offset();
      prevWidgetLeft = widgetOffset.left + (widgetWidth / 2);
      prevWidgetTop = widgetOffset.top - $(document).scrollTop() +(widgetHeight / 2);

      //send widget to center

      $("#widget_boi").animate({
        "top" : "50%",
        "left" : "50%"
      }, 800, "swing");

      //spinny

      displayMode(widget_mode);

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

      //send widget back
      $("#widget_boi").animate({
        "top" : prevWidgetTop,
        "left" : prevWidgetLeft
      }, 700, "swing");

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
    if(!intro_mode){
      menu_select(nav_selection);
    }

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
  $(".menu").click(function(){
    $target = $(event.target);
    //alert($target.closest(".menu").length);
    if ($($target).hasClass("menu_nav") == false){
      //alert("empty");
      displayMenu(false);
    }
    //displayMenu(false);
  });

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

  var iconSpin = function(start, end, rate, callback){

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
        callback();
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
  var initial_swipe = true;
  var navRotateInit = true;
  var navRotate = function(rotateDeg, callback){


    // for intro, bezel might have different start position

      //alert(prev_widget_mode);
      if(navRotateInit){
        //prev_widget_mode = widget_mode;
        //alert(prev_widget_mode);
        //if it is the first swipe, the nav wheel is hidden so does not need to rotate
        //the bezel should not move in its normal opposing fashion
        //it should just continue until it reaches the selected location
        //do we really want to even call thie navRotate function on first swipe?

        //solved problem above by using seperate function for first assignment
        //this only pushed the problem of switching to this function back a step
        //need a way to initialize this guy with proper values

        switch(prev_widget_mode){

          case "download_mode":
          bezelDeg = 90;
          deg = 90;
          break;
          case "menu_mode":
          bezelDeg = 180;
          deg = 180;
          break;
          case "home_mode":
          bezelDeg = 270;
          deg = 270;
          break;
          default:
          bezelDeg = 0;
          deg = 0;
          //alert("audio_mode");
        }
        navRotateInit = false;
        //alert(deg);

      }




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
        if(widget_press){
          widget_press = false;
        }
        if(typeof callback !== "undefined"){

          callback();
          if(intro_mode){
            widgetDress(true);
          }
        }

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

  var adjustIcon = function (prev_widget_mode, widget_mode, callback) {

    //12 cases

    //DO WE NEED INDIVIDUAL MODES FOR PLAY AND PAUSE? HOW WOULD THAT WORK??

      /////////////////////////////////////////////////////////////////////// AUDIO ///////////////////////////////////////////////////////////////////////////////////////

    //prev = audio_mode
    if(prev_widget_mode == "audio_mode" && widget_mode == "menu_mode"){
      if(playing){
        //did I only put callback here for a reason?
        iconSpin(0, 90, 2 * spinRate, callback);
      }
      else{
        moveSticks(false, false, true);
      }
    }

    else if(prev_widget_mode == "audio_mode" && widget_mode == "home_mode"){
      if(playing){
        $(".widget_stick").css("transform-origin", "center top");
        moveSticks(true, false, false);
      }
      else{

        iconSpin(90, 0, spinRate);
      }

    }
    else if(prev_widget_mode == "audio_mode" && widget_mode == "download_mode"){

      //$("#audio_download").show();

      if(playing){
        $("#widget_function").css("transform", "rotate(180deg)");
        moveSticks(true, false, false);

      }
      else {
        iconSpin(90, 180, spinRate);
      }

    }
      /////////////////////////////////////////////////////////////////////// MENU ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "menu_mode" && widget_mode == "audio_mode"){
      if(playing){
        iconSpin(270, 360, 2 * spinRate);
      }
      else{
        moveSticks(true, false, true);
        iconSpin(270, 450, spinRate);
      }
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "home_mode"){
      moveSticks(true, false, false);
      iconSpin(270, 360, spinRate);
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "download_mode"){
      //menu to download
      //$("#audio_download").show();
      moveSticks(true, false, false);
      iconSpin(270, 180, spinRate);
    }

      /////////////////////////////////////////////////////////////////////// HOME //////////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "home_mode" && widget_mode == "audio_mode"){
      if(playing){
        moveSticks(false, false, false);
      }
      else{
        iconSpin(0, 90, spinRate);
      }
    }
    else if(prev_widget_mode == "home_mode" && widget_mode == "menu_mode"){
      // alert("home to menu animation");
      moveSticks(false, false, false);
      iconSpin(0, -90, spinRate);
    }

    //NEED TO MAKE AND REMOVE DOWNLOAD LINK ACCORDINGLY

    else if(prev_widget_mode == "home_mode" && widget_mode == "download_mode"){
      //$("#audio_download").show();
      iconSpin(0, 180, spinRate);
    }
      /////////////////////////////////////////////////////////////////////// DOWNLOAD ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "download_mode" && widget_mode == "audio_mode"){
      //$("#audio_download").hide();
      if(playing){
        moveSticks(false, true, false);
      }
      else{
        iconSpin(180, 90, spinRate);
      }
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "home_mode"){
      //$("#audio_download").hide();
      iconSpin(180, 360, spinRate);
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "menu_mode"){
      //$("#audio_download").hide();
      moveSticks(false, false, false);
      iconSpin(180, 270, spinRate);
    }
  };

  //displayMode(widget_mode);

  //can consolidate below functions by grabbing id and substring
  //will need to transfer play/pause and download functionality to new function
  //function to change icon will need to know current icon and desired icon?
  //or only end result
  //since we must animate rotations by hand, will probably need to know both


  $(".nav_box").mousedown(function(){

    if(!spinning && !draggable){
      var nav_box_id = $(this).attr("id");
      // alert(nav_box_id);
      var prev_widget_mode = widget_mode;
      widget_mode = nav_box_id.substr(nav_box_id.indexOf("_") + 1);
      //this guy is prime suspect for widget bug where input is still recognized by icon during spin
      spinning = true;
      displayMode(widget_mode);
      adjustIcon(prev_widget_mode, widget_mode);
    }
    // alert(widget_mode);
  });

  var tipsOn = false;
  var contextHint = "Hi there.";

  $(".toolTip").click(function(){
    tipsOn = true;
  });

  $("#widget_boi").hover(function(){
    if(!draggable && !intro_mode){
      $(".toolTip").fadeIn();
    }

  }, function(){
    if(!draggable && !intro_mode){
      $(".toolTip").fadeOut();
    }

  });

  var hinterval;
  $("#widget_function").hover(function(){
    if(!draggable && !intro_mode){
      //$(".tool_dot").first().addClass("selected_tool_dot");

      //alert(widget_mode);

      var hintA, hintB;
      var hintDex = 2;

      //put dots to show that another hint is coming
      $("#hinticator").html("<svg class='tool_dot_container'><circle class='tool_dot selected_tool_dot' cx='50%' cy='50%' r='0.2em'></svg><svg class='tool_dot_container'><circle class='tool_dot' cx='50%' cy='50%' r='0.2em'></svg>");
      $("#hinticator").show();

      if(widget_mode == "audio_mode"){
        if(playing){
          hintA = "Tap to pause.";
        }
        else{
          hintA = "Tap to play.";
        }
        hintB = "Press for audio controls.";


      }
      else if(widget_mode == "home_mode"){
        hintA = "Tap to scroll to top.";
        hintB = "Press to drag widget.";
        //contextHint = "Tap: Scroll to top. Press: <br> Drag widget.";
      }
      else if(widget_mode == "menu_mode"){
        hintA = "Tap to display menu.";
        hintB = "Press for widget help.";
        //contextHint = "Tap: Display menu. <br> Press: Widget help.";
      }
      else if(widget_mode == "download_mode"){
        hintA = "Tap to download all audio.";
        hintB = "Press for download options.";
        //contextHint = "Tap: Download audio. Press: Download options.";
      }
      else{
        hintA = "Yeeeet";
        hintB = "Yolo";
      }

      $("#hint_content").html(hintA);

      hinterval = setInterval(function(){
        $(".tool_dot").toggleClass("selected_tool_dot");
        if(hintDex % 2 == 0){
          $("#hint_content").html(hintB);
          //hilight hinticator #2
        }
        else{
          $("#hint_content").html(hintA);
        }
        hintDex++;

      }, 5000);
    }




  }, function(){
    if(!draggable && !intro_mode){
      //alert("interval cleared!");
      clearInterval(hinterval);
      $("#hinticator").hide();
      //alert(hinterval);
      $("#hint_content").html("Hi there.");
    }


  });


  var tipCurrentMode = function(){
    var current_mode = widget_mode.replace("_", " ");
    $("#mode_content").html(current_mode);
  }


  tipCurrentMode();


  //show tooltip on hover over certain mode
  //using nav box as hover target means if you smoothly hover from one to next the tip doesn't chnage

  $("#select_home_mode").hover(function(){
    if(!draggable && !intro_mode){
      var contextHint = "Home Mode";
      $("#hint_content").html(contextHint);
      //$("#hint_content").fadeIn();
    }

  });
  $("#select_audio_mode").hover(function(){
    if(!draggable && !intro_mode){
      var contextHint = "Audio Mode";
      $("#hint_content").html(contextHint);
    }

  });
  $("#select_menu_mode").hover(function(){
    if(!draggable && !intro_mode){
      var contextHint = "Menu Mode";
      $("#hint_content").html(contextHint);
    }

  });
  $("#select_download_mode").hover(function(){
    if(!draggable && !intro_mode){
      var contextHint = "Download Mode";
      $("#hint_content").html(contextHint);
    }

  });


  /*
  $(".nav_box").hover(function(){

      var nav_box_id = $(this).attr("id");
    // alert(nav_box_id);

      var which_box = nav_box_id.substr(nav_box_id.indexOf("_") + 1);

      var contextHint = which_box.replace("_", " ");

      $("#context_hint").html(contextHint);

      //$("#tipContent").fadeIn("slow");


      //setTip();

    // alert(widget_mode);
  }, function(){


      var current_mode = widget_mode.replace("_", " ");
      $("#tipContent").html(current_mode);



  });

  */

  //ADD MOBILE GESTURES

  var getWidget = document.getElementById("widget_boi");
  //var getWidget = document.getElementsByClassName("widget_swipe");


/*
  $(".widget_swipe").each(function(){
    var mc = new Hammer(this);

    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

    mc.on("swipeleft swiperight swipeup swipedown press", function(ev){
      var widgetGesture = ev.type;
      alert(widgetGesture);
      var prev_widget_mode = widget_mode;
      //alert(widget_mode);
      //alert(spinning);
      if(!spinning){
        spinning = true;
        switch(widgetGesture){
          case "swipeup":
          widget_mode = "home_mode";


            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);

          break;
          case "swipeleft":
          widget_mode = "menu_mode";
            //alert("calling displayMode with WM: " + widget_mode);

            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);

          break;
          case "swipedown":
          widget_mode = "download_mode";


            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);

          break;
          case "swiperight":
          widget_mode = "audio_mode";


            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);

          break;
          default:
          //this is a press
          //reset intro mode if this is the case
          introHint();
          displayMode(widget_mode);
          reset_intro_mode();
        }
      }

    });
  });

  */


  var mc = new Hammer(getWidget);

  mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  mc.on("swipeleft swiperight swipeup swipedown press", function(ev){
    var widgetGesture = ev.type;
    var prev_widget_mode = widget_mode;
    //alert(widget_mode);
    //alert(spinning);
    if(!spinning && !draggable){
      spinning = true;
      switch(widgetGesture){
        case "swipeup":
        if(!draggable){
          widget_mode = "home_mode";


            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);
        }


        break;
        case "swipeleft":
        if(!draggable){
          widget_mode = "menu_mode";
            //alert("calling displayMode with WM: " + widget_mode);

            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);
        }


        break;
        case "swipedown":
        if(!draggable){
          widget_mode = "download_mode";


            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);
        }


        break;
        case "swiperight":
        if(!draggable){
          widget_mode = "audio_mode";


            displayMode(widget_mode);
            adjustIcon(prev_widget_mode, widget_mode);
        }


        break;
        default:
        ///////////////////this is a press////////////////////
        widget_press = true;
        switch(widget_mode){

          case "audio_mode":
          displayMode(widget_mode);
          //hilight intro task
          if(!audio_press){
            audio_press = true;
            $("#audio_press").addClass("intro_task_done");
          }
          //open audio controls
          //alert("open audio controls");
          $(".audio_control").show();
          $(".audio_control").animate({"top": "0px"}, 700);
          break;
          case "download_mode":
          displayMode(widget_mode);
          if(!download_press){
            download_press = true;
            $("#download_press").addClass("intro_task_done");
          }
          //open the download options menu
          downloadOptions();
          break;
          case "menu_mode":
          //alert("menu mode pressed");
          //update the intro tasks
          if(!menu_press){
            menu_press = true;
            $("#menu_press").addClass("intro_task_done");
          }

          //$("#menu_press").css("color", "white");
          //reset intro mode if this is the case
          //introHint();
          displayMode(widget_mode);

          if(!intro_mode){
            //alert("reset intro mode pls");
            reset_intro_mode();
            introHint();
          }

          break;
          default:

          //make widget draggable

          displayMode("home_mode");

          draggable = true;
          clearInterval(hinterval);
          $("#hinticator").hide();

          $("#hint_content").html("Drag Me");
          //fade out widget function
          $("#widget_function").fadeOut();

          //could be cool to spin widget throughout move

          //dragMouseDown();

        var dragElmnt = document.getElementById("widget_boi");



            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
          // if (document.getElementById(elmnt.id + "header")) {
          //   // if present, the header is where you move the DIV from:
          //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
          // } else {
            // otherwise, move the DIV from anywhere inside the DIV:

            //dragElmnt.onmousedown = dragMouseDown;
            //dragElmnt.ontouchstart = dragMouseDown;

          //}

          //function dragMouseDown() {


              //alert(ev.type);
              //e = e || window.event;
              //e.preventDefault();

              // get the mouse cursor position at startup:
              pos3 = ev.center.x;
              pos4 = ev.center.y;
              //alert(pos3);
              //pos3 = ev.clientX;
              //pos4 = ev.clientY;

              document.onmouseup = closeDragElement;
              document.ontouchend = closeDragElement;
              // call a function whenever the cursor moves:
              //document.onmousemove = elementDrag;

              $(document).on("mousemove touchmove", function(e){

                  e = e || window.event;
                  e.preventDefault();

                  touch = undefined;
                  if(e.originalEvent.touches){
                    touch = e.originalEvent.touches[0];
                    var scrollTop = $(document).scrollTop();
                    pos1 = pos3 - touch.clientX;
                    pos2 = pos4 - touch.clientY;
                    pos3 = touch.clientX;
                    pos4 = touch.clientY;
                  }
                  else{
                    // calculate the new cursor position:
                    //alert(e);

                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                  }

                  //alert(e.type);

                  //alert(pos4);
                  //$(".intro_done").html(pos3);

                  // set the element's new position:

                    dragElmnt.style.top = (dragElmnt.offsetTop - pos2) + "px";
                    dragElmnt.style.left = (dragElmnt.offsetLeft - pos1) + "px";


                  //alert(dragElmnt.offsetTop - pos2);

              });


              //document.ontouchmove = elementDrag;


          function closeDragElement() {
            //alert("called");
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;

            document.ontouchend = null;
            document.ontouchmove = null;
            $(document).off("mousemove touchmove");
            draggable = false;
            $("#hint_content").html("Nice");
            $("#widget_function").fadeIn();
            if(intro_mode){
              $("#widget_boi").delay(500).animate({
                "top" : "50%",
                "left" : "50%"
              }, 700, "swing");
              if(!home_press){
                home_press = true;
                $("#home_press").addClass("intro_task_done");
              }
            }

          }






          /*
          //home mode has no press function atm
          //just let it reopen tutorial for now
          displayMode(widget_mode);

          if(!intro_mode){
            //alert("reset intro mode pls");
            reset_intro_mode();
            introHint();
          }
          */

        }

      }
    }

  });



  //need a function to take mode and direct behavior when box clicked

   //Determines current modes and calls for appropriate widget adjustments
  var displayMode = function(widget_mode, callback){

    tipCurrentMode();

    //this function should become responsible for animating the rotation of the widget images to indicate the current mode
    //can combine with existing switch for widget mode

    //hate to clutter this up more with intro bs but yolo

    if(intro_mode){
      if(!widget_press){
        $(".intro_info").stop().animate({
          "opacity": "0"
        }, 1000, function(){
          $("#init_intro_info").hide();
        });
      }


    }

    //if it is the intro we need to stop the spinning and establish a valid value for prev_widget_mode
    if(firstSwipe){
      intro_swipe();
    }
    else{
      $("#widget_mode").html(widget_mode);
      switch(widget_mode){
        case "audio_mode":

        rotateDeg = 0;
        // spinning = true;
        if(intro_mode){
          var callback = audio_demo;
          if(!audio_mode_explored){
            audio_mode_explored = true;
            //can I use introHint here somehow? or remove it entirely?
            //alert("you found audio mode");
            $(".audio_intro_dot").addClass("bright_dot");

            intro_index++;
          }
        }
        navRotate(rotateDeg, callback);
        break;
        case "home_mode":
        rotateDeg = 270;
        // spinning = true;
        if(intro_mode){
          var callback = home_demo;
          if(!home_mode_explored){
            home_mode_explored = true;
            //alert("you found home mode");
            $(".home_intro_dot").addClass("bright_dot");
            intro_index++;
          }
        }
        navRotate(rotateDeg, callback);
        break;
        case "menu_mode":
        rotateDeg = 180;
        if(intro_mode){


          var callback = menu_demo;



          //var callback = menu_demo;
          if(!menu_mode_explored){
            menu_mode_explored = true;
            //alert("you found menu mode");
            $(".menu_intro_dot").addClass("bright_dot");
            intro_index++;
          }
        }
        navRotate(rotateDeg, callback);
        break;
        case "download_mode":
        rotateDeg = 90;
        // spinning = true;
        if(intro_mode){
          var callback = download_demo;
          if(!download_mode_explored){
            download_mode_explored = true;
            //alert("you found download mode");
            $(".download_intro_dot").addClass("bright_dot");
            intro_index++;
          }
        }
        navRotate(rotateDeg, callback);
        break;
        default:
        rotateDeg = 0;
        navRotate(rotateDeg, callback)
        alert("displayMode default");
      }
      if(intro_mode){

        introLoadBar();

      }
    }


  };

  var widgetAction = function(widget_mode){
    switch(widget_mode){
      case "menu_mode":
        displayMenu(true);
        if(!menu_tap){
          menu_tap = true;
          $("#menu_tap").addClass("intro_task_done");
        }
        break;
      case "home_mode":
      if(!home_tap){
        home_tap = true;
        $("#home_tap").addClass("intro_task_done");
      }
        if(intro_mode){
          //alert("scroll_animation");
          //$(".widget_intro").css("position", "absolute");

          var originalInfo = $(".intro_info").offset();
          var infoTop = originalInfo.top;
          var originalDone = $(".intro_done").offset();
          var doneTop = originalDone.top;

          //only run the animation if it is not already running
          if(!scroll_fx){
            scroll_fx = true;

            $(".intro_done").animate({
              "top" : "+=100%"
            }, 200, "swing");

            $(".intro_info").animate({
              "top" : "+=100%"
            }, 200, "swing", function(){
              //position to bring in from top
              $(".intro_info").css("top", "-=300%");
              $(".intro_done").css("top", "-=300%");
              $(".intro_info").animate({
                "top" : infoTop
              }, 300);
              $(".intro_done").animate({
                "top" : doneTop
              }, 300, function(){
                scroll_fx = false;
              });
            });
          }

        }
        scrollHome();
        break;
      case "audio_mode":
      if(!audio_tap){
        audio_tap = true;
        $("#audio_tap").addClass("intro_task_done");
      }
        if(!firstSwipe){
          audioControl();
        }
        // playing = !playing;
        // clickOnPlayOrPause(playing);
        break;
      default:
        // alert("running switch default");
          //downloadOptions();
          //find a way to trigger default download of full project when clicked
          if(!download_tap){
            download_tap = true;
            $("#download_tap").addClass("intro_task_done");
          }
          downloadOptions(true);
          buildDownloadLink(true);

    }
  };


  ///////////////////////CALL WIDGET

  //call widget to dbl click location

  $("html").dblclick(function(ev){
    //don't move him during the intro probably
    var isWidget = false;
    var $target = ev.target;
    var isWidgetLength = $($target).closest("#widget_boi").length;
    //alert(isWidgetLength);
    if(isWidgetLength == 1){
      widgetDblClick = true;
      //alert("you dbl clicked the widget");
      //make it draggable
      /*
      if(draggable){
        draggable = false;
        //fade in widget function
        $("#widget_function").fadeIn();
      }
      else{
        draggable = true;
        //fade out widget function
        $("#widget_function").fadeOut();
      }
      */
    }

    else {
      if(!intro_mode){
        var widgetCallX = ev.pageX;
        var dblClickY = ev.pageY;
        var scrollTop = $(document).scrollTop();
        //var widgetCallX = dblClickX - scrollTop;
        var widgetCallY = dblClickY - scrollTop;
        //alert(dblClickX + " " + dblClickY);
        //move widget to this location
        //will need to make sure it stays within the page

        //this takes too long but would be cute to add quick rotation animation whlile it moves
        //displayMode(widget_mode);


        $("#widget_boi").animate({
          "top" : widgetCallY,
          "left" : widgetCallX
        }, 700, "swing");
      }
    }
    //alert(isWidget);


  })
  /*

  //make widget draggable

dragElement(document.getElementById("widget_boi"));

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // if (document.getElementById(elmnt.id + "header")) {
  //   // if present, the header is where you move the DIV from:
  //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  // } else {
    // otherwise, move the DIV from anywhere inside the DIV:

    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;

  //}

  function dragMouseDown(e) {
    if(draggable){
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      document.ontouchmove = elementDrag;
    }

  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    document.ontouchend = null;
    document.ontouchmove = null;
    draggable = false;
    $("#widget_function").fadeIn();
  }
}

*/

  /////////////DOWNLOAD MENU
  var downloadConfirmHeight;
  var movVal;
var downloadOptions = function(simple){

  $(".download_options").show();
  if(!simple){
    $("html").css("overflow", "hidden");
  }

  //set this when it exists



  downloadConfirmHeight = $("#download_confirm").height();
  movVal = "-" + downloadConfirmHeight;
  var docHeight = $(window).height();
  var difHeight = docHeight - downloadConfirmHeight;
  //var downloadConfirmHeightPercent = (downloadConfirmHeight / docHeight) * 100;
  //var downloadOptionsHeight = 100 - downloadConfirmHeightPercent + "%";
  //alert(difHeight);


  //alert(downloadConfirmHeight);

  if(downloadSimpleOpen){
    movVal = 0;
  }



  $("#download_confirm").animate({
    "bottom" : movVal
  }, 0, function(){

    var downloadConfirmOffset = $("#download_confirm").offset();
    var tipTopOffset = $(".tip_top").offset();
    var offsetDif = downloadConfirmOffset.top - tipTopOffset.top;
    //alert(downloadConfirmOffset.top);
    if(downloadSimpleOpen){
      var downloadOptionsHeight = offsetDif;
    }
    else{
      var downloadOptionsHeight = offsetDif - downloadConfirmHeight;
    }


    $(".download_options").css("height", downloadOptionsHeight);


    //setDownloadMenuHeight();
    if(!downloadSimpleOpen){
      $("#download_confirm").animate({
        "bottom" : "0"
      }, 1000, "swing");
      downloadSimpleOpen = true;
    }

    if(!simple){
      $(".download_options").animate({
        "top" : "0"
      }, 1000, "swing");
    }
  });
}



  $("#download_cancel_button, #download_done_button").click(function(){
    movVal = "-" + downloadConfirmHeight;
    $("html").css("overflow", "auto");
    $(".download_options").animate({
      "top" : "-100%"
    }, 1000, "swing", function(){
      $("#download_button").css("right", "30%");
      $(".download_options").hide();
    });

    //height of download confirm will vary based on device

    //var downloadConfirmHeight = $("#download_confirm").height();

    //alert(movVal);

    $("#download_confirm").animate({
      "bottom" : movVal
    }, 1000, "swing", function(){
      //$(this).hide();
      downloadSimpleOpen = false;
    });

    /*
    $(".download_options").animate({
      "height" : "0",
      "width" : "0"
    }, 1000, function(){
      $(".download_options").hide();
    });
    */
  });

  //the height of download options needs to change if user scrolls on mobile, hiding the search bar

  var getDownloadOffsets = function(){
    var downloadConfirmOffset = $("#download_confirm").offset();
    //var distance = downloadConfirmOffset - scrollTop;
    //alert("top of download " + downloadConfirmOffset.top);
    var tipTopOffset = $(".tip_top").offset();
    //alert("tipTopOffset " + tipTopOffset.top);
    var offsetDif = downloadConfirmOffset.top - tipTopOffset.top;
    return offsetDif;
  }
  var offsetDif;
  function setDownloadMenuHeight(ev) {
    //alert("pls set the height of the download menu");
    var delayHeight = setTimeout(function(){
      var offsetDif = getDownloadOffsets();
      $(".download_options").css("height", offsetDif);
    }, 5);

    var delayHeightCleanUp = setTimeout(function(){
      var offsetDif = getDownloadOffsets();
      $(".download_options").css("height", offsetDif);
    }, 300);

  }

  var downloadMenu = document.getElementById("download_menu");
  downloadMenu.ontouchend = setDownloadMenuHeight;



//need to generate correct download link based on what is included
//use id to determine which track selected
  var downloadTracks = [];
  var downloadLink;

  $(".download_option").not("#download_instructions, #download_confirm").click(function(){

    $(this).toggleClass("download_option_selected");

    //get id

    var downloadId = $(this).attr("id");
    var downloadTrack = downloadId.substring(0, downloadId.indexOf("_"));
    //alert(downloadTrack);
    //var arrow_type = arrow_class.substring(0, arrow_class.indexOf("_"));


    //add to array
    if(downloadTrack !== "download"){

      if($(this).hasClass("download_option_selected")){
        //alert("hasClass");
        downloadTracks.push(downloadTrack);
        $(this).find(".download_song_title").hide();
        $(this).find(".download_symbol").show();
        //$(this).addClass("download_option_selected");
        //$(this).css("box-shadow", "0px 0px 10px #444 inset");
        //need to mkae existing shadows show up on it
        //do this by reducing the z-index of each to something lower than the one above it
        //need to knwo which number it is

        var optionLayer = "-" + $(this).prevAll().length;
        //alert(optionNum);

        //$(this).css({"background-color" : "#ccc", "border-left" : "20px solid #3689EE", "z-index" : optionLayer});
        $(this).css({"border-left" : "20px solid #3689EE", "z-index" : optionLayer});
        //$(this).next().css("box-shadow", "0px 3px 5px #444, 0px -3px 5px #444");

        //try to prevent shadow if two next to each other selected
        if($(this).prev().hasClass("download_option_selected") && $(this).next().hasClass("download_option_selected")){
          //alert("help I'm surrounded");
          $(this).css({"box-shadow" : "none", "border-top" : "1px solid #eee"});
        }
        else if($(this).prev().hasClass("download_option_selected")){
          //alert("the guy before me is selected");
          $(this).css({"box-shadow" : "none", "border-top" : "1px solid #eee"});
          $(this).next().css("box-shadow", "0px 3px 5px #444, 0px -1px 3px #bbb");
          $(this).prev().css("box-shadow", "none");
        }
        else if($(this).next().hasClass("download_option_selected")){
          //alert("the guy after me is selected");
          $(this).css({"box-shadow" : "none", "border-bottom" : "1px solid #eee"});
          $(this).css("box-shadow", "none");
          $(this).next().css("box-shadow", "none");
        }

        else{
            $(this).next().css("box-shadow", "0px 3px 5px #444, 0px -1px 3px #bbb");
        }

      }
      else{
        //alert("noClass");
        $(this).find(".download_song_title").show();
        $(this).find(".download_symbol").hide();

        if($(this).prev().hasClass("download_option_selected") && $(this).next().hasClass("download_option_selected")){
          //alert("help I'm surrounded");
          $(this).css("box-shadow", "0px 3px 5px #444, 0px -1px 3px #bbb");
        }
        else if($(this).prev().hasClass("download_option_selected")){
          //alert("the guy before me is selected");
          $(this).css("box-shadow", "0px 3px 5px #444, 0px -1px 3px #bbb");
          $(this).next().css("box-shadow", "0px 3px 5px #444");
        }
        else if($(this).next().hasClass("download_option_selected")){
          $(this).css("box-shadow", "0px 3px 5px #444");
          //alert("next is selected");
        }
        else{
          //alert("hmm");
          $(this).css("box-shadow", "0px 3px 5px #444");
          $(this).next().css("box-shadow", "0px 3px 5px #444");
        }

        $(this).css({"background-color" : "white", "border" : "none", "z-index" : "0"});
        //$(this).next().css("box-shadow", "0px 3px 5px #444");
        //$(this).css("border", "none");
        //remove the track from array
        var aryIndex = downloadTracks.indexOf(downloadTrack);
        downloadTracks.splice(aryIndex, 1);
        //alert(downloadTracks);
        //buildDownloadLink();
        //$(this).removeClass("download_option_selected");
      }

      //alert(downloadTracks);
      //buildDownloadLink();
    }
    else{
      //they clicked all tracks or one of the buttons
      if(downloadId.indexOf("full") > -1){
        //clicked all tracks
        //alert("all tracks");
        downloadLink = "ALL.zip";
      }
    }
    //alert(downloadTracks);
    buildDownloadLink();

  });

  var buildDownloadLink = function(simple){

    if(simple){
      downloadLink = "ALL.zip";
    }
    else{
      downloadLink = "";
      if(downloadTracks.length == 4){
        //download all
        downloadLink = "ALL.zip";
      }
      else if(downloadTracks.length == 0){
        //none slected
        downloadLink = "empty";
      }
      else if (downloadTracks.length == 2){
        //download the 2 requested tracks
        if(downloadTracks.indexOf("graduate") > -1){
          //download GRAD and something else
          if(downloadTracks.indexOf("glass") > -1){
            downloadLink = "GRAD_GLASS.zip";
            //need to remove bottom shadow from grad and top from glass
            //alert("update shadow");
            //$("#graduate_download").css("box-shadow", "0px 0px 10px #444 inset, none, 0px 0px 10px #444 inset");
            //$("#graduate_download").css("box-shadow", "none");
          }
          else if(downloadTracks.indexOf("broken") > -1){
            downloadLink = "GRAD_BROKEN.zip";
          }
          else if(downloadTracks.indexOf("home") > -1){
            downloadLink = "GRAD_HOME.zip";
          }
        }
        else if(downloadTracks.indexOf("glass") > -1){
          if(downloadTracks.indexOf("home") > -1){
            downloadLink = "GLASS_HOME.zip";
          }
          else if(downloadTracks.indexOf("broken") > -1){
            downloadLink = "GLASS_BROKEN.zip";
          }
        }
        else if(downloadTracks.indexOf("broken") > -1){
          downloadLink = "BROKEN_HOME.zip";
        }
      }
      else if (downloadTracks.length == 3){
        if(downloadTracks.indexOf("home") == -1){
          //download all but home or GRAD_GLASS_BROKEN
          downloadLink = "GRAD_GLASS_BROKEN.zip";
        }
        else if(downloadTracks.indexOf("glass") == -1){
          //download all but glass or GRAD_BROKEN_HOME
          downloadLink = "GRAD_BROKEN_HOME.zip";
        }
        else if(downloadTracks.indexOf("graduate") == -1){
          //all but grad
          downloadLink = "GLASS_BROKEN_HOME.zip";
        }
        else if(downloadTracks.indexOf("broken") == -1){
          //all but broken
          downloadLink = "GLASS_GRAD_HOME.zip";
        }
      }
      else{
        //one track
        if(downloadTracks.indexOf("graduate") > -1){
          downloadLink = "graduate.wav";
        }
        else if(downloadTracks.indexOf("glass") > -1){
          downloadLink = "8lass.wav";
        }
        else if(downloadTracks.indexOf("broken") > -1){
          downloadLink = "_roken.wav";
        }
        else{
          downloadLink = "home.wav";
        }
      }
    }



    //put the link in the anchor element
    //alert(downloadLink);
    $("#download_button").html("<a id='audio_download_link' href='audio/" + downloadLink + "' download>Download </a>")
  }


  //animate when download is clicked
  $("#download_button").click(function(){
    //alert("clicked");
    $(this).animate({
      "right" : "0%"
    }, 1500);
  });

  $("#widget_function").click(function(){

    // alert(widget_mode);
    if(widget_press){
      //alert("ur pressed");
    }
    //prevent click while spinning if audio mode
    else if(widget_mode == "audio_mode"){
      if(!spinning){
        widgetAction(widget_mode);
      }
    }
    //otherwise knock yourself out
    else{
      widgetAction(widget_mode);
    }


  });


  ///////////////////INTRO animation

  var introHint = function(){
    switch(widget_mode){
      case "audio_mode":
      audio_demo();
      if(!audio_mode_explored){
        audio_mode_explored = true;
        //alert("audio");
        $(".audio_intro_dot").addClass("bright_dot");
        intro_index++;
      }
      break;
      case "home_mode":
      home_demo();
      if(!home_mode_explored){
        home_mode_explored = true;
        $(".home_intro_dot").addClass("bright_dot");
        intro_index++;
      }
      break;
      case "menu_mode":
      menu_demo();
      if(!menu_mode_explored){
        menu_mode_explored = true;
        $(".menu_intro_dot").addClass("bright_dot");
        intro_index++;
      }
      break;
      default:
      download_demo();
      if(!download_mode_explored){
        download_mode_explored = true;
        $(".download_intro_dot").addClass("bright_dot");
        intro_index++;
      }
    }
  }



  var audio_demo = function(){
    //$(".intro_info").html("<span class='intro_mode_title'>Audio Mode</span> <br><span class='intro_function' id='audio_tap'>Tap: Play/Pause.</span> <br> <span class='intro_function' id='audio_press'>Press: Audio controls.</span>");
    $(".mode_intro_info, #init_intro_info").hide();
    $("#audio_intro_info").show();

    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 2000);

    //adjustIcon(prev_widget_mode, widget_mode);
  }

  var download_demo = function(){
    //alert("Download Mode. Download the audio file.");
    //$(".intro_info").html("<span class='intro_mode_title'>Download Mode</span> <br><span class='intro_function' id='download_tap'>Tap: Download project.</span> <br> <span class='intro_function' id='download_press'>Press: Download options.</span>");
    $(".mode_intro_info, #init_intro_info").hide();
    $("#download_intro_info").show();
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 2000);
    //prev_widget_mode = widget_mode;
    //widget_mode = "download_mode";
    //displayMode(widget_mode);
    //adjustIcon(prev_widget_mode, widget_mode);
  }
  var menu_demo = function(){
    //alert("Menu Mode. Display the full menu.");
    //$(".intro_info").html("<span class='intro_mode_title'>Menu Mode</span> <br><span class='intro_function' id='menu_tap'>Tap: Display full menu.</span> <br> <span class='intro_function' id='menu_press'>Press: Reopen this tutorial.</span>");
    $(".mode_intro_info, #init_intro_info").hide();
    $("#menu_intro_info").show();
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 2000);
  }
  var home_demo = function(){
    //alert("Home Mode. Return to top of site from anywhere.");
    $(".mode_intro_info, #init_intro_info").hide();
    $("#home_intro_info").show();
    //$(".intro_info").html("<span class='intro_mode_title'>Home Mode</span> <br><span class='intro_function' id='home_tap'>Tap: Return to top.</span>");
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 2000);
  }

  var widgetDress = function(don, callback){
    if(don){
      //show some respect for yourself!
      //alert("show some respect for yourself!");
      $(".widget_stick").animate({
        "opacity" : "1"
      }, 3000);

      $("#nav_options_img").animate({
        "opacity" : "1"
      }, 1500, function(){
        $("#nav_options_dark").animate({
          "opacity" : "0"
        }, 200, callback);
      });
    }
    else{
      //take it off widget boi!
      //show some respect for yourself!
      //alert("show some respect for yourself!");
      $(".widget_stick").animate({
        "opacity" : "0"
      }, 3000);

      $("#nav_options_img").animate({
        "opacity" : "0"
      }, 1500, function(){
        $("#nav_options_dark").animate({
          "opacity" : "1"
        }, 200, callback);
      });
    }

  }

  var validBezelSet;
  var introStarted = false;
  var intro_swipe = function(){
    firstSwipe = false;
    introStarted = true;
    //clearInterval(fadeIntroMsg);
    $(".intro_msg").stop().clearQueue();

    clearInterval(set_intro_msg);
    clearInterval(introTimer);
    introNavSpinEnd();
    //introLoadBar();
    introTimer = false;
    $(".intro_msg").stop().fadeOut("fast", function(){
      $(".intro_msg").html("");
    });
    //need to get bezel to nearest stop
    validBezelSet = true;
    var endDeg;
    var navDeg;
    //alert(introBezelSpin);
    switch(widget_mode){
      case "download_mode":
      endDeg = 90;
      break;
      case "menu_mode":
      endDeg = 180;
      break;
      case "home_mode":
      endDeg = 270;
      break;
      default:
      endDeg = 0;
      //alert("audio_mode");
    }

    var validBezelSpin = setInterval(function(){

      initial_swipe = false;
      //if(introBezelSpin % 90 == 0){
      if(introBezelSpin == endDeg){
        clearInterval(validBezelSpin);
        intro_bezel.style.transform = "rotate(" + endDeg + "deg)";
        //alert(introBezelSpin);
        validBezelSet = false;
        //alert(validBezelSet);
        prev_widget_mode = widget_mode;
        //alert("calling fns with prev mode: " + prev_widget_mode);
        firstSwipe = false;
        spinning = false;
        //need to position selector bar
        $("#nav_options_img").css("transform", "rotate(" + endDeg + "deg)")
        widgetDress(true);
        introHint();
        introLoadBar();
        //adjustIcon(prev_widget_mode, widget_mode, widgetDress);
      }
      else{
        if(introBezelSpin == 0){
          introBezelSpin = 360;
        }
        intro_bezel.style.transform = "rotate(" + introBezelSpin + "deg)";
        introBezelSpin--;
      }
    }, 5);
  }

  var introNavSpinEnd = function(){
    completeNavSpin = setInterval(function(){
      if(darkNavSpin % 90 == 0){
        clearInterval(completeNavSpin);
      }
      else{
        dark_nav.style.transform = "rotate(" + darkNavSpin + "deg)";
        darkNavSpin++;
      }
    }, 5);
  }

  var finishSpin = function(){
    //need to rotate dark nav to nearest multiple of 90 before clearing interval
    //or start new interval to move it the remainder

    clearInterval(set_intro_msg);
    clearInterval(introTimer);
    introTimer = false;

    introNavSpinEnd();

    var completeBezelSpin = setInterval(function(){
      if(introBezelSpin == 0){
        clearInterval(completeBezelSpin);
        intro_bezel.style.transform = "rotate(0deg)";
        if(introStarted){
          prev_widget_mode = widget_mode;
          widget_mode = "audio_mode";
          displayMode(widget_mode);
          adjustIcon(prev_widget_mode, widget_mode);
        }
      }
      else{
        intro_bezel.style.transform = "rotate(" + introBezelSpin + "deg)";
        introBezelSpin--;
      }
    }, 5);
  }
  var finishIntro = function(){
    intro_mode = false;
    //if you close between widget msg it can't fadeout
    //animate opacity instead to guarantee invisibilty
    $("#real_body").css("opacity", "1");
    $(".widget_intro, .intro_msg, .intro_dots").animate({
      "opacity" : "0"
    }, 1500, function(){
      $(".intro_msg").html("");
      //$("html").css("overflow", "auto");
      $(".widget_stick").animate({
        "opacity" : "1"
      }, 1500);
      $(".widget_intro, .intro_dots").hide();
    });

    /*
    $(".widget_stick").animate({
      "opacity" : "1"
    }, 2000);
    */

    //$("#album_art").fadeIn(3000);

    $("#album_art").animate({
      "opacity" : "1"
    }, 3000);



    /*
    $(".widget_intro").fadeOut("fast", function(){
      $("#album_art").fadeIn(3000);
      //$("#widget_function").css("transform", "rotate(90deg)");
      $(".widget_stick").animate({
        "opacity" : "1"
      }, 3000);
    });
    */

    $("#nav_options_img").animate({
      "opacity" : "1"
    }, 1500, function(){
      $("#nav_options_dark").animate({
        "opacity" : "0"
      }, 200, function (){


        $("html").css("overflow-y", "scroll");
      });
    });
  }

  $(".intro_done").click(function(){
    introCleanUp();
  });

  var introCleanUp = function(){

    if(!spinning){

      $(".intro_msg").clearQueue();
      //$(".intro_msg").html("");
      finishIntro();
      //clearInterval(fadeIntroMsg);



      /*

      if(firstSwipe){
        firstSwipe = false;
      }
      if(navRotateInit){
        navRotateInit = false;
      }

      */

      if(introTimer){
        finishSpin();
        navRotateInit = false;
        firstSwipe = false;
      }
      else{
        if(introStarted){
          prev_widget_mode = widget_mode;
          if(intro_first_open){
            widget_mode = "audio_mode";
            intro_first_open = false;
          }

          displayMode(widget_mode);
          adjustIcon(prev_widget_mode, widget_mode);
        }

      }
  }

  //wookie engineered "listener"
  //don't want to destroy widget so wait until it finishes spinning to end intro
  else{
    var spinListener = setInterval(function(){
      if(!spinning){
        //if it was spinning and now it isn't
        clearInterval(spinListener);
        introCleanUp();
      }
    }, 5);
  }
  };

  var introLoadBar = function(){
    var loadVal;
    var introDoneBar = false;
    switch(intro_index){
      case 1:
        //alert("index is 1");
        loadVal = "75%";
        break;
      case 2:
        loadVal = "50%";
        break;
      case 3:
        //alert("thats 3");
        loadVal = "25%";
        break;
      case 4:
      //alert("dunzo my bunzo");
      loadVal = "0";
      introDoneBar = true;
      // $(".intro_load_bar").css("background", "#1E2122");
      break;
      default:
      alert("hmmm");
    }
    $(".intro_load_bar").animate({
      "right" : loadVal
    }, 1000, "swing", function(){
      if(introDoneBar){
        $(".intro_done_bar").animate({
          "left" : "0"
        }, 1000, "swing");
      }
    });
  }

  var reset_intro_mode = function(){
    //intro_mode = true;
    intro_mode = true;
    //widget_mode = "audio_mode";
    //introStarted = false;
    //preventFullSpin = true;
    // intro_index = 0;
    // audio_mode_explored = false;
    // home_mode_explored = false;
    // menu_mode_explored = false;
    // download_mode_explored = false;
    // gotcha = false;
    // var darkNavSpin = 0;
    // var introBezelSpin = 360;
    // firstSwipe = true;
    //intro_mode = true;
    //$(".intro_info").html("Swipe in any direction from the center of the widget.");

    //return widget to center

    $("#widget_boi").animate({
      "top" : "50%",
      "left" : "50%"
    }, 700, "swing");

    $(".widget_intro, .intro_dots").show().animate({
      "opacity" : "1"
    }, 1500, function(){
      $("#real_body, #album_art").css("opacity" , "0");
    });
    $("html").css("overflow", "hidden");
    //$(".intro_done").html("Done");
    //widgetDress(false);
    //introAnimation();
  }

});
