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

  $(".lyrics, .credits, .support, .support_img_info, .support_img_swap_container, .menu, #widget_boi, .intro_item, #got_it_button").hide();
  $(".intro_msg, #album_art, #real_body").css("opacity", "0");
  $(".prev_arrow").addClass("no_arrow");
  //messing with mobile gesture events

  // $(".support_img_container:first-child").css("left", "0%");
  //var img_index;


  var intro_mode = true;
  var firstSwipe = true;
  var preventFullSpin = true;
  var intro_index = 0;
  var audio_mode_explored = false;
  var home_mode_explored = false;
  var menu_mode_explored = false;
  var download_mode_explored = false;
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
    var intro_msgs = ["im", "widget", "boi", "hi"];
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

      $("#audio_download").show();

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
      $("#audio_download").show();
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
      $("#audio_download").show();
      iconSpin(0, 180, spinRate);
    }
      /////////////////////////////////////////////////////////////////////// DOWNLOAD ///////////////////////////////////////////////////////////////////////////////////////

    else if(prev_widget_mode == "download_mode" && widget_mode == "audio_mode"){
      $("#audio_download").hide();
      if(playing){
        moveSticks(false, true, false);
      }
      else{
        iconSpin(180, 90, spinRate);
      }
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "home_mode"){
      $("#audio_download").hide();
      iconSpin(180, 360, spinRate);
    }
    else if(prev_widget_mode == "download_mode" && widget_mode == "menu_mode"){
      $("#audio_download").hide();
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


  $(".nav_box").click(function(){

    if(spinning == false){
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

  //ADD MOBILE GESTURES

  var getWidget = document.getElementById("widget_boi");

  var mc = new Hammer(getWidget);

  mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

  mc.on("swipeleft swiperight swipeup swipedown press", function(ev){
    var widgetGesture = ev.type;
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

  //need a function to take mode and direct behavior when box clicked

   //Determines current modes and calls for appropriate widget adjustments
  var displayMode = function(widget_mode, callback){

    //this function should become responsible for animating the rotation of the widget images to indicate the current mode
    //can combine with existing switch for widget mode

    //hate to clutter this up more with intro bs but yolo

    if(intro_mode){

      $(".intro_info").stop().animate({
        "opacity": "0"
      }, 1000);
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
    //prevent click while spinning if audio mode
    if(widget_mode == "audio_mode"){
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
    $(".intro_info").html("Audio Mode. <br> Control audio playback.");


    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 2000);

    //adjustIcon(prev_widget_mode, widget_mode);
  }

  var download_demo = function(){
    //alert("Download Mode. Download the audio file.");
    $(".intro_info").html("Download Mode. <br> Download the audio file.");
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
    $(".intro_info").html("Menu Mode. <br> Display the full menu.");
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 2000);
  }
  var home_demo = function(){
    //alert("Home Mode. Return to top of site from anywhere.");
    $(".intro_info").html("Home Mode. <br> Return to top of site from anywhere.");
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
    $(".intro_msg").clearQueue();
    clearInterval(set_intro_msg);
    clearInterval(introTimer);
    introNavSpinEnd();
    //introLoadBar();
    introTimer = false;
    $(".intro_msg").stop().fadeOut("fast");
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
    $(".intro_msg").clearQueue();
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
        widget_mode = "audio_mode";
        displayMode(widget_mode);
        adjustIcon(prev_widget_mode, widget_mode);
      }

    }

  });

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
