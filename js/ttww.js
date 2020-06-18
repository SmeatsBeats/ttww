$(document).ready(function() {


  ////////////////////////////////////////////////////////////////////////////////////// INITIALIZE GLOBALS //////////////////////////////////////////////

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
  var menuOpen = false;
  var gotcha = false;
  var set_intro_msg;
  var introTimer = true;
  var fadeIntroMsg;
  var completeNavSpin;
  var darkNavSpin = 0;
  var introBezelSpin = 360;
  var dark_nav = document.getElementById("nav_options_dark");
  var intro_bezel = document.getElementById("widget_bezel_img");
  var playing = false;
  var audioFile = document.getElementById("ttwwAudioFile");
  var spinning = false;
  var widget_mode = "audio_mode";
  var runningHover;
  var flip;


  ///WIDGET NAV
  //Determine rotation parameters for widget
  var rotateDeg, spinTimer, rotateDist;
  var deg = 0;
  var bezelDeg = 0;
  var spinTimer;
  var spinCounter = 0;
  var spinRate = 15;
  var bezelSpinCounter = 0;
  var bezelRotateDist;
  var bezelSpinRate;
  var bezelImg = document.getElementById('widget_bezel_img');
  var navOptionsImg = document.getElementById('nav_options_img');
  var previousDeg;
  var initial_swipe = true;
  var navRotateInit = true;


  //MOBILE GESTURES
  //feel weird with these at top...
  var getWidget = document.getElementById("widget_boi");
  //var getWidget = document.getElementsByClassName("widget_swipe");

  var mc = new Hammer(getWidget);


  //AUDIO TIMELINE
  var timelinePercent = 100;
  var spinTimeline = true;
  var loadTimeline;
  var setTime;
  var homeComing = false;
  var waitTimer;

  //AUDIO CONTROLS
  var controlsOpen = false;

  //home press
  var pos1, pos2, pos3, pos4, dragElmnt;

  //menu tap
  var prevWidgetTop, prevWidgetLeft;

  //DOWNLOAD MODE
  var downloadConfirmHeight;
  var movVal;
  var offsetDif;
  var downloadMenu = document.getElementById("download_menu");
  var downloadTracks = [];
  var downloadLink;

  //TOOL TIPS
  var tipsOn = false;
  var contextHint;
  var noSelection;
  var hinterval;
  var hintDelay;
  var hintLoop;
  var fadeWait;
  var hideMsg;

  //INTRO TUTORIAL
  var validBezelSet;
  var introStarted = false;

  //MENU MODE
  var controlsWereOpen = false;

  ///////////////////////////////////////////////////////////////////////////////// PAGE SETUP //////////////////////////////////////////
  //call functions that will set the page up how it needs to be initially

  //introAnimation();

  //some elements need to load before being hidden so js can get their dimensions
  //these cannot be hidden initially in the css

  //however, some of these I put here because I am a lazy shit
  //they should be moved to the css file to prevent appearing before page is fully loaded
  //good luck figure out which ones!

  $(".lyrics, .credits, .support, .support_img_info, .support_img_swap_container, .menu, #widget_boi, .intro_item, #got_it_button, .download_options, .download_symbol, .toolTip, #hinticator").hide();
  $(".intro_msg, #album_art, #real_body").css("opacity", "0");
  $(".prev_arrow").addClass("no_arrow");


  ///////////////////////////////////////////////////////////////////////////////////////// SLIDER /////////////////////////////////////////////////


  function getSliderIndex($currentSlider){
    //alert("getting index");
    var $get_current_img = $($currentSlider).find(".current_img");
    //alert($get_current_img);
    var img_sibs = $($get_current_img).prevAll().length;
    //alert("i count " + img_sibs);
    var slider_index = img_sibs;
    return slider_index;
  }

  function sliderUpdate(next, $currentSlider, slider_index, jumpTo){
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

        //alert(jumpTo);

        if(typeof jumpTo !== "undefined"){
          //alert("hide these dudes");
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
  });



  $(".support_img_slider").hover(function(event){
    //alert("you hovered");
      runningHover = true;
      //$(this).closest(".img_indicator_container").siblings(".support_img_info").fadeIn("fast");
      $(this).children(".support_img_info").fadeIn("fast", function(){
        runningHover = false;
      });

  }, function(){
    //$(this).closest(".img_indicator_container").siblings(".support_img_info").fadeOut("slow");
    $(this).children(".support_img_info").fadeOut("slow");
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
        }
      }
  })


  //////////////////////////////////////////////////////////////////// WIDGET BOIIIIIIIIII /////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////// 1. WIDGET CONTROL ////////////////////////////////////////////////////////////////

  //////////////////////////////////////////// MOBILE GESTURES //////////////////////////////////////////////


  $(".nav_box").mousedown(function(){

    //alert(spinning);

    if(!spinning && !draggable){

      var nav_box_id = $(this).attr("id");
      // alert(nav_box_id);
      var prev_widget_mode = widget_mode;
      widget_mode = nav_box_id.substr(nav_box_id.indexOf("_") + 1);
      //this guy is prime suspect for widget bug where input is still recognized by icon during spin
      spinning = true;
      //displayMode(widget_mode, prev_widget_mode);
      adjustIcon(prev_widget_mode, widget_mode);

    }
    // alert(widget_mode);
  });



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
          displayMode(widget_mode, prev_widget_mode);
          adjustIcon(prev_widget_mode, widget_mode);
        }
        break;
        case "swipeleft":
        if(!draggable){
          widget_mode = "menu_mode";
          //alert("calling displayMode with WM: " + widget_mode);
          displayMode(widget_mode, prev_widget_mode);
          adjustIcon(prev_widget_mode, widget_mode);
        }
        break;
        case "swipedown":
        if(!draggable){
          widget_mode = "download_mode";
          displayMode(widget_mode, prev_widget_mode);
          adjustIcon(prev_widget_mode, widget_mode);
        }
        break;
        case "swiperight":
        if(!draggable){
          widget_mode = "audio_mode";
          displayMode(widget_mode, prev_widget_mode);
          adjustIcon(prev_widget_mode, widget_mode);
        }
        break;
        default:
        ///////////////////this is a press////////////////////
        widget_press = true;
        switch(widget_mode){

          case "audio_mode":
            displayMode(widget_mode, prev_widget_mode);
            //hilight intro task
            if(!audio_press){
              audio_press = true;
              $("#audio_press").addClass("intro_task_done");
            }
            //open audio controls
            //alert("open audio controls");
            //$(".audio_control").show();
            //$(".audio_control").animate({"top": "0px"}, 700);
            showSkip();
          break;
          case "download_mode":
            displayMode(widget_mode, prev_widget_mode);
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

            displayMode(widget_mode, prev_widget_mode);

            if(!intro_mode){
              //alert("reset intro mode pls");
              reset_intro_mode();
              introHint();
            }
          break;
          default:
          //make widget draggable
            dragWidget(ev);
        }
      }
    }

  });

  //need a function to take mode and direct behavior when box clicked

   //Determines current modes and calls for appropriate widget adjustments
  var upsideDown = false;

  //as of my updates converting animations to css, this function is pretty useless.
  //all it does now is deal with some intro stuff i think

  function displayMode(widget_mode, prev_widget_mode, callback){


    //this function should become responsible for animating the rotation of the widget images to indicate the current mode
    //can combine with existing switch for widget mode

    //hate to clutter this up more with intro bs but yolo

    if(intro_mode){
      if(!widget_press){
        $(".intro_info").stop().animate({
          "opacity": "0"
          //this determines how fast intro info fades out
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
        //alert(prev_widget_mode);
        if(prev_widget_mode == "home_mode"){
          rotateDeg = 360;
        }
        //else if(prev_widget_mode == "menu_mode" && playing){
          //from menu to pause
          //this is messing with the bezel and nav options img as well as the icon
          //rotateDeg = 360;
          //var endSet = 90;
      //  }
        else{
          rotateDeg = 0;
        }
        var endSet = 0;

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
        //navRotate(rotateDeg, endSet);
        break;
        case "home_mode":
        if(prev_widget_mode == "audio_mode"){
          if(playing){
            //pause to home
            rotateDeg = -90;
            var endSet = 270;
          }
          else{
            rotateDeg = -90;
            var endSet = 270;
          }

        }
        else{
          rotateDeg = 270;
        }
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
        //navRotate(rotateDeg, endSet);
        break;
        case "menu_mode":
        /*
        if(playing){
          //if you are in pause mode and have been to menu mode
          //if you try going to to any other mode then to home
          //it will be upside down
          //upsideDown = true;
          endSet = 180;
          //alert("you've been to menu");
          //but if they go straight to home from menu it can be reset
        }
        rotateDeg = 180;
        */
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
        //navRotate(rotateDeg, endSet);
        //adjustIcon(prev_widget_mode, widget_mode);
        break;
        case "download_mode":
        if(playing){
          //upsideDown = true;
          var endSet = 90;
        }

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
        //navRotate(rotateDeg, endSet);
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

  function widgetAction(widget_mode){
    switch(widget_mode){
      case "menu_mode":
        if(!menuOpen){
          displayMenu(true);
        }
        else{
          //displayMenu(false);
        }
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
          introScrollFx();
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
        break;
      default:
          if(!download_tap){
            download_tap = true;
            $("#download_tap").addClass("intro_task_done");
          }
          downloadOptions(true);
          buildDownloadLink(true);
    }
  };

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

  /////////////////////////////////////////////////////////////////// 2. WIDGET DISPLAY //////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////// WIDGET ICON ////////////////////////////////////////////////////////////////////////

  //me again trying to switch animations over to css

  function superSimpleMoveSticks(open, flip){
    ////// 0. Turn on transition if it is off //////////
    $("#a_stick, #b_stick").css("transition", "transform 0.8s");

    if(open){
      //open the sticks
      if(flip){
        var openDeg = -35;
      }
      else{
        var openDeg = 35;
      }
    $("#a_stick").css("transform", "rotate(" + openDeg + "deg)");
    $("#b_stick").css("transform", "rotate(" + -openDeg + "deg)");
    }
    else{
      //close the sticks
      $("#a_stick, #b_stick").css("transform", "rotate(0deg)");
    }

  }

  function simpleMoveSticks(open){
    //alert(open);
    $("#a_stick, #b_stick").css("transition", "transform 0.8s");
    if(open){
      //alert("opening");
      if(originTop){
        $("#a_stick").css("transform", "rotate(35deg)");
        $("#b_stick").css("transform", "rotate(-35deg)");
      }
      else{
        //alert("inverted");
        $("#a_stick").css("transform", "rotate(-35deg)");
        $("#b_stick").css("transform", "rotate(35deg)");

        setTimeout(function(){
          //clean up after inversion
          //flip whole icon to 90 deg
          //flip transform origin back to top
          //need to temporarily disable transition
          $("#widget_function").css("transition", "initial");
          ///one for audio mode
          if(homeFlip){
            //alert("home flip");

            $("#widget_function").css("transform", "rotate(360deg)");
            homeFlip = false;
          }
          //else if(upsideDown){
          //  alert("reorient widget");
            //why am I not doing this with functionSet?
          //  $("#widget_function").css("transform", "rotate(0deg)");
          //}
          else{
            //alert("not home flip?");
            if(!playing){
              //alert("meep");
              $("#widget_function").css("transform", "rotate(90deg)");
            }
            else{
              if(upsideDown){
                //don't need to do any cleaning up of whole icon orientation
                //alert("hmmm");
                //set this to false now that it has been used
                upsideDown = false;
              }
            }

          }

          //do need to clean up the sticks to account for origin reset

          $(".widget_stick").css("transform-origin", "center top");
          originTop = true;
          //alert("origin reset");
          $("#a_stick, #b_stick").css("transition", "initial");
          //$("#widget_function").css("transition", "initial");
          $("#a_stick").css("transform", "rotate(35deg)");
          $("#b_stick").css("transform", "rotate(-35deg)");

        }, 800);
      }

    }
    else{
      //alert("closing");
      $("#a_stick").css("transform", "rotate(0deg)");
      $("#b_stick").css("transform", "rotate(0deg)");
    }

  }


  function moveSticks(open, flip, doubleRate){

    if(testingSimple){
      superSimpleMoveSticks(open, flip);
    }
    else{
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

      function runStickRotate(){

        if(open){
          if(ia == 35){
            clearInterval(stickRotate);
          }
          else{
            $("#a_stick").css("transform", "rotate(" + ia + "deg)");
            $("#b_stick").css("transform", "rotate(" + ib + "deg)");
            ia = ia + 1.25;
            ib = ib - 1.25;
            var stickRotate = setTimeout(runStickRotate, moveRate);
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
            var stickRotate = setTimeout(runStickRotate, moveRate);
          }
        }
      }
      runStickRotate();
    }
  };

  //calum attempt to transition to css animations
  function simpleIconSpin(destDeg){
    //alert("icon spin oops");
    //alert("called");
    //$("#widget_function").css("transform", "rotate(" + destDeg + "deg)");
  }


  function iconSpin(start, end, rate, callback){

    if(testingSimple){
      simpleIconSpin(end);
    }
    else{
      // previousDeg = 270;
      var start = start;
      var end = end;
      spinRate = rate;
      //must update to account for rate

      function runSpinWidget(){
        if(start == end){
          if(end == 360){
            //$("#widget_function").css("transform", "rotate(0deg)");
          }
          clearInterval(spinWidget);
          //$("#widget_function").css("transform", "rotate(" + end + "deg)");
          callback();
        }
        else{

          //$("#widget_function").css("transform", "rotate(" + start + "deg)");
          if(end > start){
            start = start + 3;
          }
          else{
            //alert("backwards");
            start = start - 3;
          }
          var spinWidget = setTimeout(runSpinWidget, spinRate);
        }
      }
      runSpinWidget();
    }
  };


  function fullFlip(){
    $(".widget_stick").css("transform", "rotate(180deg)");
  };




  var navDeg, iconDeg, navSet, iconSet, sticks, open, flip;
  function adjustIcon(prev_widget_mode, widget_mode) {

    //clear data in relevant variable from last run
    navDeg = iconDeg = navSet = iconSet = sticks = open = flip = undefined;
    ///going to try to use this one function to facilitate all updates to widget appearance
    //when mode is switched

    //////////////////////////////// from audio //////////////////////////////////

    //prev = audio_mode
    //audio to menu
    if(prev_widget_mode == "audio_mode" && widget_mode == "menu_mode"){
      navDeg = 180;
      iconSet = 270;
      if(playing){
        //pause to menu
        iconDeg = 90;
      }
      else{
        //play to menu
        //no spin of icon just close and reset
        open = false;
        flip = false;
        //moveSticks(false, false, true);
      }
      //superSimpleNavRotate(navDeg, iconDeg);
      //both require a reset
      //should only need to reset nav when switching over the 360 mark
      //ie audio to home and vice versa
      //simpleEndSet(undefined, iconSet);
    }
    //// audio to home
    else if(prev_widget_mode == "audio_mode" && widget_mode == "home_mode"){
      //in both cases the nav wheel goes cc to top left
      navDeg = -90;
      navSet = 270;
      iconSet = 360;
      if(playing){
        //pause to home
        //doesn't need to rotate icon, just nav wheel
        iconDeg = undefined;
        //do need to reset, but only nav

        //$(".widget_stick").css("transform-origin", "center top");
        open = true;
        flip = false;
        //moveSticks(true, false, false);
      }
      else{
        //play to home
        iconDeg = 0;
        //iconSpin(90, 0, spinRate);
      }
      //superSimpleNavRotate(navDeg, iconDeg);
      //simpleEndSet(navSet, iconSet);

    }
    //audio to download
    else if(prev_widget_mode == "audio_mode" && widget_mode == "download_mode"){
      navDeg = 90;
      if(playing){
        //pause to download
        //don't spin icon just open sticks
        //from bottom

        $(".widget_stick").css("transform-origin", "center bottom");
        iconDeg = undefined;
        iconSet = 180;
        //will need to fix z stix
        sticks = true;
        //alert("twas I");
        open = true;
        flip = true;
        //moveSticks(true, true, false);
      }
      else {
        //play to download
        //spin icon to 180
        iconDeg = 180;
        iconSet = undefined;
        //iconSpin(90, 180, spinRate);
      }
      //superSimpleNavRotate(navDeg, iconDeg);
      //simpleEndSet(undefined, iconSet, sticks);
    }
    ////////////////////////////////// from menu ///////////////////////////////////////
    //menu to audio
    else if(prev_widget_mode == "menu_mode" && widget_mode == "audio_mode"){
      navDeg = 0;
      if(playing){
        //menu to pause
        //need to rotate cc 90 deg
        //should be at 270
        iconDeg = 180;
        iconSet = 0;
        //iconSpin(270, 360, 2 * spinRate);
      }
      else{
        //menu to play
        //don't spin icon just open sticks
        //from bottom?
        iconDeg = undefined;
        iconSet = 90;
        $(".widget_stick").css("transform-origin", "center bottom");
        sticks = true;
        open = true;
        flip = true;
        //moveSticks(true, true, true);
        //iconSpin(270, 450, spinRate);
      }
      //superSimpleNavRotate(navDeg, iconDeg);
      //simpleEndSet(undefined, iconSet, sticks);
    }
    //menu to home
    else if(prev_widget_mode == "menu_mode" && widget_mode == "home_mode"){
      navDeg = 270;
      //icon should be at 270
      iconDeg = 360;
      //do I leave this here? or set to 0?
      //iconSet =
      //I guess I just pick and base following math on choice
      //superSimpleNavRotate(navDeg, iconDeg);
      //don't need to reset anything but i need this function to set spinning to false
      //at appropriate time
      //simpleEndSet();
      open = true;
      flip = false;
      //moveSticks(true, false, false);
      //iconSpin(270, 360, spinRate);
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "download_mode"){
      //menu to download
      navDeg = 90;
      iconDeg = 180;
      //superSimpleNavRotate(navDeg, iconDeg);
      //don't need to reset anything but i need this function to set spinning to false
      //at appropriate time
      //simpleEndSet();
      open = true;
      flip = false;
      //moveSticks(true, false, false);
    }

    //////////////////////////////////// from home /////////////////////////////////////
    //home to audio
    else if(prev_widget_mode == "home_mode" && widget_mode == "audio_mode"){
      navDeg = 360;
      //do I need to set this back to 0?
      //yes because other functions from audio mode anticipate 0
      //ex: audio to home would go 360 to -90 lol
      navSet = 0;
      if(playing){
        //home to pause
        //don't spin icon
        //just close sticks
        open = false;
        flip = false;
        //moveSticks(false, false, false);
        //and set icon to 0
        iconSet = 0;
      }
      else{
        //home to play
        //icon is at 360 right now
        iconDeg = 450;
        iconSet = 90;
      }
      //superSimpleNavRotate(navDeg, iconDeg);
      //simpleEndSet(navSet, iconSet, sticks);
    }
    //home to menu
    else if(prev_widget_mode == "home_mode" && widget_mode == "menu_mode"){
      navDeg = 180;
      iconDeg = 270;
      //superSimpleNavRotate(navDeg, iconDeg);
      //simpleEndSet();
      // alert("home to menu animation");
      open = false;
      flip = false;
      //moveSticks(false, false, false);
      //iconSpin(0, -90, spinRate);
    }

    //NEED TO MAKE AND REMOVE DOWNLOAD LINK ACCORDINGLY
    //home to download
    else if(prev_widget_mode == "home_mode" && widget_mode == "download_mode"){
      //$("#audio_download").show();
      //iconSpin(0, 180, spinRate);
      navDeg = 90;
      iconDeg = 180;
    }
      ////////////////////////////////// from download ///////////////////////////////
    //download to audio
    else if(prev_widget_mode == "download_mode" && widget_mode == "audio_mode"){
      //$("#audio_download").hide();
      navDeg = 0;
      if(playing){
        //download to pause
        //don't spin
        iconSet = 0;
        //moveSticks(false, true, false);
        open = false;
        flip = true;
      }
      else{
        //download to play
        iconDeg = 90;
        //iconSpin(180, 90, spinRate);
      }
    }
    //download to home
    else if(prev_widget_mode == "download_mode" && widget_mode == "home_mode"){
      navDeg = 270;
      iconDeg = 360;
      //$("#audio_download").hide();
      //iconSpin(180, 360, spinRate);
    }
    //download to menu
    else if(prev_widget_mode == "download_mode" && widget_mode == "menu_mode"){
      //$("#audio_download").hide();
      //moveSticks(false, false, false);
      navDeg = 180;
      iconDeg = 270;
      open = false;
      flip = false;
      //iconSpin(180, 270, spinRate);
    }
    else{
      //alert("same mode?");
    }

    navRotate(navDeg, iconDeg);
    endSet(navSet, iconSet, sticks);
    //only need to call movesticks when necessary
    if(typeof open !== 'undefined'){
      moveSticks(open, flip);
    }
    //alert("endPos: " + endPos);
  };



  ///////////////////////////////////////////////////////////////////////  WIDGET NAV ///////////////////////////////////////////////////////////////////////////////////////

  //Calum attempting to update widget spins to use css transition property

  var bezelDeg;
  var endPos = 0;
  function navRotate(navDeg, iconDeg){
    //alert("keep it simple");

    //////////////////////// 0. Make sure transitions are on ////////////////
    $("#nav_options_img, #widget_bezel_img, #widget_function").css("transition", "transform 0.8s");


    //////////////////////// 1. send nav_options to end location /////////////

    $("#nav_options_img").css("transform", "rotate(" + navDeg + "deg)");
    //this is not really the end position since endSet function might change these numbers
    //endPos = navDeg;

    //////////////////////// 2. Send bezel opposite direction /////////////

    if(endPos > navDeg){
      //alert("cc " + endPos + " " + navDeg);
      //this means it is going counterclockwise
      bezelDeg = navDeg + 360;
    }
    else{
      //alert("c " + endPos + " " + navDeg);
      //this means it is going clockwise
      bezelDeg = navDeg - 360;
    }

    $("#widget_bezel_img").css("transform", "rotate(" + bezelDeg + "deg)");

    ////////////////////// 3. Send icon to end position ///////////////////
    $("#widget_function").css("transform", "rotate(" + iconDeg + "deg)");

  }

  function endSet(navSet, iconSet, sticks){
    //arguments represent values to set components to after spin
    //sticks:
    //undefined: do nothing
    //true: need to flip the values of rotate for a_stick and b_stick
    //alert("simply resetting");
    /////////////////////////// 1. Wait until transition done //////////////
    setTimeout(function(){
      /////// 1.5 //////////
      //set spinning to false since it should be done spinning by now
      spinning = false;
      ///////////////////////// 2. If reset values provided, do it //////////

      //////// 2A. navSet for nav_options_img ///////////////
      if(typeof navSet !== 'undefined'){
        //if a reset value for the nav ring has been defined,
        //use it for the bezel and nav options

        //cancel the transition so it is imperceptible for user
        $("#nav_options_img, #widget_bezel_img").css("transition", "initial");

        //set the rotation values
        $("#nav_options_img").css("transform", "rotate(" + navSet + "deg)");
        $("#widget_bezel_img").css("transform", "rotate(" + navSet + "deg)");
        endPos = navSet;
      }
      else{
        //no reset required of nav bar, but
        ////since bezel spins like mad, should probably reset it each time
        //navDeg should still be defined globally
        endPos = navDeg;
        $("#widget_bezel_img").css("transition", "initial");
        //alert("reset bezel only " + navDeg);
        $("#widget_bezel_img").css("transform", "rotate(" + navDeg + "deg)");
      }
      ////// 2B. iconSet for #widget_function /////////////
      if(!typeof iconSet !== 'undefined'){
        //if a reset value for the icon has been defined,
        //use it for the icon

        //cancel the transition so it is imperceptible for user
        $("#widget_function").css("transition", "initial");

        //set the rotation values
        $("#widget_function").css("transform", "rotate(" + iconSet + "deg)");
      }

      ////////// 3. Reset sticks if necessary /////////
      if(typeof sticks !== "undefined"){
        //alert("fix z sticks");
        if(sticks){
          //cancel transition so imperceptible
          $("#a_stick, #b_stick").css("transition", "initial");
          //reset origin to top
          $(".widget_stick").css("transform-origin", "center top");
          //swap values of a and b stick
          //what are these values?
          //do i need to know?
          //alert("swapping stix");
          var bDeg = $("#b_stick").css("transform");
          var aDeg = $("#a_stick").css("transform");
          $("#a_stick").css("transform", bDeg);
          $("#b_stick").css("transform", aDeg);
        }
        else{


        }
      }

    }, 800);
  }



  /*

  function simpleNavRotate(destDeg, endSet){
    //callback will need to be callled with setTimeout
    //might have to set degrees to an equivalent value

    //if transition is off turn it back on
    $("#nav_options_img").css("transition", "transform 0.8s");
    $("#widget_bezel_img").css("transition", "transform 0.8s");
    $("#widget_function").css("transition", "transform 0.8s");

    //$(".widget_stick").css("transform-origin", "center top");
    //originTop = true;

    //take shortest route
    //if you are going from home to audio should go 270 to 360 then reset to 0
    //if going from audio to home should be 0 to - 90 then reset 270

    //figure out which way it is turning
    //alert(endPos + " " + destDeg);
    if(endPos > destDeg){
      //alert("counterclockwise");
      //if we are going this way..
      //false is counterclockwise
      var bezelDeg = destDeg + 360;

    }
    else{
      //alert("clockwise");
      var bezelDeg = destDeg - 360;
    }

    //spin widget function
    //this one starts off at 90 degree rotation
    var functionDeg = destDeg + 90;
    var functionSet = endSet + 90;

    //alert("destDeg " + destDeg + "endPos " + endPos);

    //sometimes it don't rly need to spin
    ////////////// DONT SPIN ///////////////////
    if(!playing && destDeg == 180 && endPos == 0){
      skipFlip = true;
      //from play to menu
      //don't spin it
      //but flip it after
      ///flipIcon = true;
      //$(".widget_stick").css("transform-origin", "center bottom");
      //originTop = false;
      //maybe better to deal with flips in movesticks?
    }
    else if(!playing && destDeg == 0 && endPos == 180){
      //go from menu to audio


        //menu to play
        //dont need to flip origin if you went from play to menu
        if(skipFlip){
          //dont flip origin

        }
        else{
          $(".widget_stick").css("transform-origin", "center bottom");
          originTop = false;
          //flipIcon = true;
        }

    }
    else if(playing && destDeg == -90){
      //we only go to -90 if coming from audio mode
      //from pause to home
      //I know there is nothing here and it feels weird
      //And is probably wrong
      //but the actually rotation is in the else clause
      //so this just means do nothing... don't rotate
      //alert("pause to home");
      if(upsideDown){
        //alert("gotta flip");
        $(".widget_stick").css("transform-origin", "center bottom");
        originTop = false;
        functionSet = 0;
      }

      //alert(endSet + " " + functionSet);

    }
    else if(playing && destDeg == 360 && endPos == 270){
      //home to pause
      //alert("home to pause");
      functionSet = 0;
    }
    else if(playing && destDeg == 90 && endPos == 0){
      //pause to download
      //alert("pause to download");
      //should need to flip origin here
      $(".widget_stick").css("transform-origin", "center bottom");
      originTop = false;
      functionSet = 180;
    }
    else if(playing && destDeg == 0 && endPos == 90){
      //download to pause
      //alert("download to pause");
      functionSet = 0;
    }
    /////////////// SPIN ///////////////
    else{
      if(destDeg == 270 && endPos == 180 && skipFlip){
        //going from audio to menu then home
        //$(".widget_stick").css("transform-origin", "center top");
        //alert("womp");
        functionDeg = 180;
        $(".widget_stick").css("transform-origin", "center bottom");
        originTop = false;
        homeFlip = true;
      }
      else if(playing && destDeg == 0 && endPos == 180){
        //menu to pause
        //alert("nice");
        functionDeg = 180;
        functionSet = 0;
      }
      else if(playing && destDeg == 180){
        //alert("going to menu");
        functionSet = 270;
        if(endPos == 0){
          //pause to menu
          functionDeg = 90;
          //functionSet = 180;
        }
      }
      else if(playing && destDeg == 0 && endPos == 90){
        //download to pause
        functionDeg = 0;
      }
      else if(playing && destDeg == 270){

        if(endPos == 180){
          //from menu to home
          //$(".widget_stick").css("transform-origin", "center bottom");
          //originTop = false;
          functionDeg = 360;
          //homeFlip = true;
          //upsideDown = true;
        }
        else{
          //going to home from NOT audio
          upsideDown = false;
          //alert("not upside down");
        }

      }
      //alert("moving function " + functionDeg);
      $("#widget_function").css("transform", "rotate(" + functionDeg + "deg)");
      if(skipFlip){
        skipFlip = false;
      }
    }


    $("#nav_options_img").css("transform", "rotate(" + destDeg + "deg)");
    endPos = destDeg;
    //send bezel other way


    //var bezelDeg = destDeg - 360;

    if(typeof endSet!== "undefined"){
      endPos = endSet;
      //use endset instead of destDeg
      //if this is the case don't subtract 360
      destDeg = endSet;
      var bezelDeg = destDeg;
    }

    $("#widget_bezel_img").css("transform", "rotate(" + bezelDeg + "deg)");
    //need to reset bezel each time
    setTimeout(function(){
      $("#widget_bezel_img").css("transition", "initial");
      $("#widget_bezel_img").css("transform", "rotate(" + destDeg + "deg)");
      //alert("bezel done at " + destDeg);

      if(flipIcon){
       $("#widget_function").css("transition", "initial");
       $("#widget_function").css("transform", "rotate(90deg)");
       flipIcon = false;
       //alert("flipping whole icon");
      }

    }, 800);

    //not sure I still need spinning variable
    //I guess we stil don't widget sticks to get fd mid-rotation
    //if we do, use setimeout
    setTimeout(function(){
      if(typeof endSet !== "undefined"){
        //alert("endSet " + endSet);
        //need to disable css transition temporarily so value adjustment is invisible
        $("#nav_options_img").css("transition", "initial");
        $("#nav_options_img").css("transform", "rotate(" + endSet + "deg)");


        //reset icon
          if(functionSet >= 0){
            //alert("resetting icon " + functionSet);
            $("#widget_function").css("transition", "initial");
            $("#widget_function").css("transform", "rotate(" + functionSet + "deg)");
          }


      }
      spinning = false;
    }, 800)

  }
  */

  var testingSimple = true;
  //to turn this off you must also remove transition from #nav_options_img css
  /*
  function navRotate(rotateDeg, endSet){

    //alert("nav rotate called");

    ///redirect to simplified version while testing
    if(testingSimple){
      //superSimpleNavRotate(rotateDeg);
    }
    else{
      // for intro, bezel might have different start position

        //alert(prev_widget_mode);
        if(navRotateInit){


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

      function runSpinTimer(){
        if(spinCounter == rotateDist){
          navOptionsImg.style.transform = "rotate(" + deg + "deg)";
          clearInterval(spinTimer);
          spinCounter = 0;
          //alert("timer done");
        }
        else{
          //alert("deg: " + deg);
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
          var spinTimer = setTimeout(runSpinTimer, spinRate);
        }
      }

      //spin the nav
      runSpinTimer();


      //set bezel spin rate so bezel and nav meet at same time
      if (bezelRotateDist == 180 || bezelRotateDist == -180){
        bezelSpinRate = 15;
      }
      else{
        bezelSpinRate = 10;
      }

      //spin the bezel
      function runBezelSpinTimer(){
        if(bezelSpinCounter == bezelRotateDist){
          spinning = false;
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
          bezelImg.style.transform = "rotate(" + bezelDeg + "deg)";
          if(bezelRotateDist >= 0){
            bezelSpinCounter = bezelSpinCounter + 3;
            bezelDeg = bezelDeg + 3;
          }
          else{
            bezelSpinCounter = bezelSpinCounter - 3;
            bezelDeg = bezelDeg - 3;
          }
          var bezelSpinTimer = setTimeout(runBezelSpinTimer, bezelSpinRate);
        }

      }
      runBezelSpinTimer();
    }





  };
  */

  ///////////////////////////////// transition widget between intro setup and normal use

  function widgetDress(don, callback){
    if(don){
      //alert("get dressed");
      //show some respect for yourself!
      $(".widget_stick").animate({
        "opacity" : "1"
      }, 3000);

      $("#nav_options_img").animate({
        "opacity" : "1"
      }, 1500, function(){
        $("#nav_options_dark").animate({
          "opacity" : "0"
        }, 200, callback);
        //$(".help_icon").addClass("help_icon_on");
      });
    }
    else{
      //take it off widget boi!
      $(".widget_stick").animate({
        "opacity" : "0"
      }, 3000);

      //$(".help_icon").removeClass("help_icon_on");

      $("#nav_options_img").animate({
        "opacity" : "0"
      }, 1500, function(){
        $("#nav_options_dark").animate({
          "opacity" : "1"
        }, 200, callback);
      });
    }
  }

  //////////////////////////////////////////////////////////////////////// MOVE WIDGET //////////////////////////////////////////////////////////

  //this section involves moving the whole widget as a unit

  //call widget to dbl click location

  $("html").dblclick(function(ev){
    //don't move him during the intro probably
    var isWidget = false;
    var $target = ev.target;
    var isWidgetLength = $($target).closest("#widget_boi").length;
    //alert(isWidgetLength);
    if(isWidgetLength == 1){
      widgetDblClick = true;
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
  });


  ////////////////////// quick spin /////////////////////////

  //purely aesthetic
  //spin nav and bezel 360 degrees in opposite directions

  function quickSpin(){
    //alert("called");
    var deg;
    var endDeg;
    //needs to account for starting position
    //needs to end with original rotation deg

    switch(widget_mode){
      case "audio_mode":
      endDeg = 0;
      deg = 0;
      break;
      case "home_mode":
      endDeg = 270;
      deg = 270;
      break;
      case "menu_mode":
      endDeg = 180;
      deg = 180;
      break;
      default:
      //download mode
      endDeg = 90;
      deg = 90;
    }
    //alert(deg + " " + endDeg);
    function quickSpinTime(){
      if(deg == endDeg + 360){
        clearInterval(keepSpinning);
        navOptionsImg.style.transform = "rotate(" + endDeg + "deg)";
        bezelImg.style.transform = "rotate(" + endDeg + ")";
      }
      else{
        navOptionsImg.style.transform = "rotate(" + deg + "deg)";
        bezelImg.style.transform = "rotate(" + "-" + deg + "deg)";
        deg += 2;
        var keepSpinning = setTimeout(quickSpinTime, 5);
      }
    }

    quickSpinTime();

  }

  /////////////////////////////////////////////////////////////////////////// AUDIO TIMELINE /////////////////////////////////////////////////////////////

  /////////////////// outter audio progress bar //////////
  const circle = document.querySelector('#timeline_progress');
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
  // circle.style.strokeDashoffset = circumference * 0.1;

  function setAudioProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }

  //setAudioProgress(60);

  //update audio progress to reflect location in audio file


  function wait(){
    clearInterval(waitTimer);
    waitTimer = setTimeout(function(){
      homeComing = false;
      //must match duration to css transition on #timeline_progress
    }, 1000);
  }

  function moveProgressBar(){
    var currentTime = audioFile.currentTime;
    var duration = audioFile.duration;

    //display time in coherent fashion

    //put current time at bottom
    //$(".current_time").html(currentTime);

    if(currentTime == duration){
      //use this variable to prevent setAudioProgress from being called while bar is returning to start
      homeComing = true;
      //replay the audio file and animate the progressBar
      audioFile.currentTime = 0;
      setAudioProgress(0);
      audioFile.play();
      wait();
      // //must match duration to css transition on #timeline_progress
      // wait = setTimeout(function(){
      //   homeComing = false;
      // }, 1000)
    }
    else{
      //not multiplying by 100 because there is a gap in the circle
      var audioPercent = (currentTime / duration) * 90;
      if(!homeComing){
        setAudioProgress(audioPercent);
      }
    }
  }

  audioFile.ontimeupdate = moveProgressBar;


  ////////////// grey base timeline ///////////////

  const innerCircle = document.querySelector('#timeline_hilight');
  const innerRadius = innerCircle.r.baseVal.value;
  const innerCircumference = innerRadius * 2 * Math.PI;

  innerCircle.style.strokeDasharray = `${innerCircumference} ${innerCircumference}`;
  innerCircle.style.strokeDashoffset = innerCircumference;
  // circle.style.strokeDashoffset = circumference * 0.1;

  function setTimelineProgress(percent) {
    const innerOffset = innerCircumference - percent / 100 * innerCircumference;
    innerCircle.style.strokeDashoffset = innerOffset;
  }



  function timelineIntro(){
    //alert(timelinePercent);
    $("#timeline_hilight").css("transform", "rotate(90deg)");
    $("#timeline_hilight").css("transition", "all 1s");
    // this goes up forever theoretically
    if(timelinePercent == 300){
      //reset it to beginning stage
      $("#timeline_hilight").css("transition", "none");
      setTimelineProgress(0);
      timelinePercent = 100;

    }
    else{
      setTimelineProgress(timelinePercent);
      timelinePercent += 100;

    }
    if(spinTimeline){
      loadTimeline = setTimeout(timelineIntro, 1000);
    }

  }

  function stopTimelineIntro(){
    $("#timeline_hilight").css("transition", "all 1s");
    clearInterval(loadTimeline);
    spinTimeline = false;
    setTimelineProgress(90);
    $("#timeline_hilight").css("transform", "rotate(108deg)");
  }

  timelineIntro();



  //////////////////////////////////////////////////////////////////////// 3. WIDGET MODE FUNCTIONS ///////////////////////////////////////////////////////

  //////// AUDIO MODE ///////

  /////// audio tap //////

  function audioControl(){
    $("#a_stick, #b_stick, #widget_function").css("transition", "transform 0.8s");

    if(playing){
        audioFile.pause();
        playing = false;

        //change icon to play
        spinRate = 15;
        moveSticks(true, false, false);
        //iconSpin(0, 90, 15);
        //alert("audio control moving widget function");
        $("#widget_function").css("transform", "rotate(90deg)");
        //reset play icon
        //simpleIconSpin(1);
      }
      else{
        audioFile.play();
        playing = true;

        //change icon to pause
        spinRate = 15;
        moveSticks(false, false, false);
        //iconSpin(90, 0, 15);
        //alert("audio control moving widget function");
        $("#widget_function").css("transform", "rotate(0deg)");
        //reset pause icon
        //simpleIconSpin(2);
      }
      $("#hint_content").stop(true, true);
      $("#hinticator").stop(true, true);
      hintLoop = false;
      clearInterval(hintDelay);
      clearInterval(hinterval);
      widgetFunctionHint();
    }

    ///// audio press ////////


    //ff and rw

    //first show the arrows

    function showSkip(){
      $(".ffrw").toggleClass("showSkip");

      if(controlsOpen){
        controlsOpen = false;
      }
      else{
        controlsOpen = true;
      }
    }



    $(".ffrw").click(function(e){
      //alert("clicked");


      var target = e.target;
      var skip;
      if($(target).attr("id") == "ff"){
        //skip to next track
        skip = true;
      }
      //if you miss ff by an inch, this rewinds. not ideal
      else if($(target).attr("id") == "rw"){
        //back to start of this track
        //how do you go back to prev track?
        //click rw again within 5 seconds
        skip = false;
      }
      //alert(skip);
      var currentTime = audioFile.currentTime;
      //alert(currentTime);
      //track timestamps:
      //0:00-1:41 Graduate
      //1:41-3:26 8lass
      //3:26-6:29 >roken
      //6:29-8:00 Home

      //in seconds now
      //0-101
      //101-206
      //206-389
      //389-480



        if(currentTime < 101){

          if(skip){
            //alert("skip to track 2");
            setTime = 101;
          }
          else{
            //back to start
            setTime = 0;
          }
        }
        else if(currentTime >= 101 && currentTime < 206){

          if(skip){
            //alert("skip to track 3");
            setTime = 206;
          }
          else{
            if(currentTime < 106){
              setTime = 0;
            }
            else{
              setTime = 101;
            }
          }
        }
        else if(currentTime >= 206 && currentTime < 389){

          if(skip){
            //alert("skip to track 4");
            setTime = 389;
          }
          else{
            if(currentTime < 211){
              setTime = 101;
            }
            else{
                setTime = 206;
            }
          }
        }
        else if(currentTime >= 389 && currentTime < 480){

          if(skip){
            //alert("skip to track 1");
            setTime = 0;
          }
          else{
            if(currentTime < 394){
              setTime = 206;
            }
            else{
              setTime = 389;
            }
          }
        }
        //prevent jerky animation during big jump whlie audio playing
        skipPercent = (setTime / audioFile.duration) * 90;
        wait();
        homeComing = true;
        setAudioProgress(skipPercent);
        audioFile.currentTime = setTime;
    })


  //////////// HOME MODE //////////////////

  ///////// home tap //////////////

  function scrollHome(){
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  };

  ////////// home press ///////////



  function dragWidget(ev){

    //this seems to be necessary
    displayMode("home_mode");

    //quickSpin();

    draggable = true;
    clearInterval(hinterval);
    clearInterval(hintDelay);
    $("#hinticator").hide();
    hintLoop = false;

    $("#hint_content").html("Drag Me");
    //fade out widget function
    $("#widget_function").fadeOut();

    //could be cool to spin widget throughout move

    //dragMouseDown();

    dragElmnt = document.getElementById("widget_boi");

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // get the mouse cursor position at startup:
    pos3 = ev.center.x;
    pos4 = ev.center.y;
    //alert(pos3);

    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    //alert(pos3 + " " + pos4);

    $(document).on("mousemove touchmove", widgetMove);
  }

  function widgetMove(e){
    //alert(e.type);
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

    dragElmnt.style.top = (dragElmnt.offsetTop - pos2) + "px";
    dragElmnt.style.left = (dragElmnt.offsetLeft - pos1) + "px";
    //alert()

  };

  function closeDragElement(){
    //alert("called");
    // stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;

    document.ontouchend = null;
    document.ontouchmove = null;
    $(document).off("mousemove touchmove");
    draggable = false;
    //quickSpin();
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

  ////// MENU MODE /////////

  ////// menu tap //////////



    function displayMenu(show){

      //alert(show);
      if(show){

        if(controlsOpen){
          controlsWereOpen = true;
          showSkip();
        }
        else{
          controlsWereOpen = false;
        }
        menuOpen = true;
        $(".toolTip").fadeOut();

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
        //this spin can cause glitch if user opens menu before it finishes
        //can either block user from opening during spin
        //find a different way to spin it
        //or remove the spin

        //displayMode(widget_mode);

        quickSpin();

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

        //alert(controlsWereOpen);
        if(controlsWereOpen){
          //alert("open controls");
          showSkip();
        }

        menuOpen = false;

        //send widget back
        //should widget be sent back if user clicks on a new widget mode?
        //this would make it jump out from under mouse when presumably they are about to do something with it
        $("#widget_boi").animate({
          "top" : prevWidgetTop,
          "left" : prevWidgetLeft
        }, 700, "swing");

        quickSpin();

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

    function menu_select(nav_selection){

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

    $(".menu").click(function(){
      $target = $(event.target);
      //alert($target.closest(".menu").length);
      if ($($target).hasClass("menu_nav") == false){
        //alert("empty");
        displayMenu(false);
      }
    });

    $("html").click(function(event){
      //alert("hi");
      $target = $(event.target);

      //only close it if it is open
      var menu_pos = $("#about_nav").css("right");
      //alert(menu_pos);
      //alert($target.closest(".menu").length);
      if(!$target.closest(".menu").length && menu_pos == "0px" && !$target.hasClass("nav_box")){
        //alert("close the menu I think");
        displayMenu(false);
      }
      //alert(menu_pos);
    });


  /////// menu press ///////

  function reset_intro_mode(){

    intro_mode = true;

    $(".toolTip").stop(true, true).fadeOut();
    //$(".help_icon").removeClass("help_icon_on");

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

  }

  ////// DOWNLOAD MODE //////

  ///tap and press contained within same function


  function downloadOptions(simple){

    $(".download_options").show();
    if(!simple){
      $("html").css("overflow", "hidden");
    }

    //set this when it exists

    downloadConfirmHeight = $("#download_confirm").height();
    movVal = "-" + downloadConfirmHeight;
    var docHeight = $(window).height();
    var difHeight = docHeight - downloadConfirmHeight;

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

    $("#download_confirm").animate({
      "bottom" : movVal
    }, 1000, "swing", function(){
      //$(this).hide();
      downloadSimpleOpen = false;
    });

  });

  //the height of download options needs to change if user scrolls on mobile, hiding the search bar

  function getDownloadOffsets(){
    var downloadConfirmOffset = $("#download_confirm").offset();
    //var distance = downloadConfirmOffset - scrollTop;
    //alert("top of download " + downloadConfirmOffset.top);
    var tipTopOffset = $(".tip_top").offset();
    //alert("tipTopOffset " + tipTopOffset.top);
    var offsetDif = downloadConfirmOffset.top - tipTopOffset.top;
    return offsetDif;
  }

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


  downloadMenu.ontouchend = setDownloadMenuHeight;

  //need to generate correct download link based on what is included
  //use id to determine which track selected


  $(".download_option").not("#download_instructions, #download_confirm").click(function(){

    $(this).toggleClass("download_option_selected");

    //get id

    var downloadId = $(this).attr("id");
    var downloadTrack = downloadId.substring(0, downloadId.indexOf("_"));

    //add to array
    if(downloadTrack !== "download"){

      if($(this).hasClass("download_option_selected")){
        //alert("hasClass");
        downloadTracks.push(downloadTrack);
        $(this).find(".download_song_title").hide();
        $(this).find(".download_symbol").show();

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

        //remove the track from array
        var aryIndex = downloadTracks.indexOf(downloadTrack);
        downloadTracks.splice(aryIndex, 1);
      }

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

  function buildDownloadLink(simple){

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

  /////////////////////////////////////////////////////////////////////// TOOL TIPS /////////////////////////////////////////////////////////////////////////


  //setTimeout(offerHint, 5000);
  //offer hints after intro complete

  //set left pos of help
  //and height
  var helpHeight = $(".help_icon").outerHeight();
  var helpOffset = $(".help_icon").offset();
  var helpOffsetRight = helpOffset.left + $(".help_icon").outerWidth();
  //alert(helpHeight);
  $(".help_container").css({"left" : helpOffsetRight, "height" : helpHeight});

  var helpContent = false;

  $(".big_help").hover(function(){
    clearInterval(hideMsg);
    //set hint text to default
    if(tipsOn){
      var msg = "Turn <span id='tipPower'>OFF</span> (T)ooltips";
    }
    else{
      var msg = "Turn <span id='tipPower'>ON</span> (T)ooltips";
    }
    if(helpContent){
      //it is already open and saying something
      //fadeout what it is saying which should be different from default
      switchMsg(msg);
    }
    else{
      //hint bar is closed so it is safe to switch hint with no fade
      $("#help_text").html(msg);
    }
    $(".help_container").stop(true, true).show();
    $(".help_content").addClass("help_content_on");
    helpContent = true;

  }, function(){
      $(".help_content").removeClass("help_content_on");
      helpContent = false;
      $(".help_container").stop(true, true).delay(600).hide(0);
  });

  $("#help_text").hover(function(){
    $("#tipPower").css("color", "white");
  }, function(){
    $("#tipPower").css("color", "#999");
  });

  var closeNow = false;

  $(".help_content").click(function(){
    closeNow = true;
    //$(".help_content").removeClass("help_content_on");
    if(tipsOn){
      infoMsg("Turn <span id='tipPower'>ON</span> (T)ooltips");
      $(".toolTip").stop(true, true).fadeOut();
      tipsOn = false;
      //$("#help_text").html("Turn ON Tooltips");
    }
    else{
      infoMsg("Turn <span id='tipPower'>OFF</span> (T)ooltips");
      $(".toolTip").stop(true, true).fadeIn();
      tipsOn = true;
      //$("#help_text").html("Turn OFF Tooltips");
    }
    //$(".help_container").delay(600).hide(0);
  });

  document.body.onkeyup = function(e){
    var tipMsg = "";
      if(e.keyCode == 84){
          //your code
          if(tipsOn){
            tipsOn = false;
            $(".toolTip").stop(true, true).fadeOut();
            tipMsg = "Tooltips OFF";
          }
          else{
            tipsOn = true;
            $(".toolTip").stop(true, true).fadeIn();
            tipMsg = "Tooltips ON";
          }
          infoMsg(tipMsg);
      }
  }


  function switchMsg(tipMsg){
    //a msg is already displayed in hint bar
    clearInterval(hideMsg);
    //already open
    //maybe fadeout current msg and add new one
    //this fades out background as well as text
    $("#help_text").css("opacity", "0");
    fadeWait = setTimeout(function(){
      $("#help_text").html(tipMsg);
      //for some reason this isn't transitioning in smoothly
      $("#help_text").css("opacity", "1");
      //although the css transition is set to 0.6 or 600 ms
      //this valuse needs to be a bit more or css not happy
    }, 650);
  }

  function infoMsg(tipMsg){
    if(helpContent){
      //alert("its true");
      switchMsg(tipMsg);
    }
    else{
      //alert("its false");
      $("#help_text").html(tipMsg);
      $(".help_container").show();
      $(".help_content").addClass("help_content_on");
      helpContent = true;
    }
    if(closeNow){
      var when = 0;
    }
    else{
      var when = 3000;
    }
    hideMsg = setTimeout(function(){
      //alert("running hideMsg");
      $(".help_content").removeClass("help_content_on");
      helpContent = false;
      $(".help_container").delay(600).hide(0);
      closeNow = false;
    }, when);
  }

  var idleTimer;
  var beenIdle = false;
  function trackIdle(){
    idleTimer = setTimeout(function(){
      beenIdle = true;
      if(!menuOpen && !intro_mode){
        idleHint();
      }

    }, 10000);
  }
  $(document).on("mousemove scroll keypress", function(){
    //you're here!
    clearInterval(idleTimer);
    trackIdle();
    beenIdle = false;
  });


  function idleHint(){
    //loop through some key hints if user is idle
    //alert("where you be?");

    //// tip #1 msg ////

    if(tipsOn){
      var msg = "T: close tooltips";
    }
    else{
      var msg = "T: open tooltips";
    }
    //// tip #2 msg ////
    if(playing){
      var playMsg = "Spacebar: pause";
    }
    else{
      var playMsg = "Spacebar: play";
    }

    //////////// tip #1 //////////

    if(beenIdle){
      infoMsg(msg);
    }

    ///////////// tip #2 ////////////
    //should play when first tip finishes
    //a bit before hideMsg runs out so it doesn't close then reopen with another hint
    //hints should just cycle smoothly

    setTimeout(function(){
      if(beenIdle){
        infoMsg(playMsg);
        setTimeout(idleHint, 2800);
      }
    }, 2800);
  }


  $(".toolTip").click(function(){
    clearInterval(noSelection);
    if(tipsOn){
      tipsOn = false;
      //$("#hint_content").html("Turn tips ON");
      $(".toolTip").stop(true, true).fadeOut(function(){
        $("#hint_content").html("Hi There");
      });
      //alert("tips are off");
    }
    else{
      //shouldn't be possible;
      tipsOn = true;
      //alert("tips on");
      $("#hint_content").html("Turn <span id='tipPower'>OFF</span> (T)ooltips");
      $(".toolTip").stop(true, true).fadeOut();
    }
  });

  function widgetFunctionHint(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      //$(".tool_dot").first().addClass("selected_tool_dot");
      //$(".toolTip").clearQueue().fadeIn();
      //alert(widget_mode);

      var hintA, hintB;
      var hintDex = 2;
      hintLoop = true;

      //put dots to show that another hint is coming
      $("#hinticator").html("<svg class='tool_dot_container'><circle class='tool_dot selected_tool_dot' cx='50%' cy='50%' r='0.2em'></svg><svg class='tool_dot_container'><circle class='tool_dot' cx='50%' cy='50%' r='0.2em'></svg>");
      $("#hinticator").show();

      if(widget_mode == "audio_mode"){
        if(playing){
          hintA = "Tap to pause";
        }
        else{
          hintA = "Tap to play";
        }
        hintB = "Press for audio controls";


      }
      else if(widget_mode == "home_mode"){
        hintA = "Tap to scroll home";
        hintB = "Press to move widget";
        //contextHint = "Tap: Scroll to top. Press: <br> Drag widget.";
      }
      else if(widget_mode == "menu_mode"){
        hintA = "Tap for menu";
        hintB = "Press for widget help";
        //contextHint = "Tap: Display menu. <br> Press: Widget help.";
      }
      else if(widget_mode == "download_mode"){
        hintA = "Tap to download";
        hintB = "Press for options";
        //contextHint = "Tap: Download audio. Press: Download options.";
      }
      else{
        hintA = "Yeeeet";
        hintB = "Yolo";
      }

      $("#hint_content").html(hintA);

      function swapHint(){
        $("#hint_content").animate({
          "opacity" : "0"
        }, 600, function(){
          if(hintDex % 2 == 0){
            $("#hint_content").html(hintB);
            //hilight hinticator #2
          }
          else{
            $("#hint_content").html(hintA);
          }
          $(".tool_dot").toggleClass("selected_tool_dot");
          hintDex++;
          $(this).animate({
            "opacity" : "1"
          }, 600)
        });
        if(hintLoop){
          hinterval = setTimeout(swapHint, 3000);
        }

      }
      if(hintLoop){
        hintDelay = setTimeout(swapHint, 3000);
      }
    }
  }

  $("#widget_function").hover(function(){
    widgetFunctionHint();
  }, function(){
    //if(!draggable && !intro_mode && !menuOpen && tipsOn){
      //alert("interval cleared!");
      $("#hint_content").clearQueue().show().html("Hi There");
      hintLoop = false;
      clearInterval(hinterval);
      clearInterval(hintDelay);
      $("#hinticator").hide();
      //alert(hinterval);
      //$(".toolTip").delay(1500).fadeOut();
    //}
  });


$("#widget_boi").hover(function(e){
  var $target = e.target;
  if($($target).attr("id") == "hint_content" || $($target).attr("id") == "context_hint" || $($target).attr("id") == "hinticator"){
    //hovered over tooltip which is inside widget_boi
  }
  else{
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $(".toolTip").stop(true, true).fadeIn();
    }
  }

}, function(){
  if(!draggable && !intro_mode && !menuOpen && tipsOn){
    $(".toolTip").stop(true, true).fadeOut();
  }
});

  $("#select_home_mode").hover(function(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $("#hint_content").html("Home Mode");
    }
  });
  $("#select_audio_mode").hover(function(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $("#hint_content").html("Audio Mode");
    }
  });
  $("#select_menu_mode").hover(function(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $("#hint_content").html("Menu Mode");
    }
  });
  $("#select_download_mode").hover(function(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $("#hint_content").html("Download Mode");
    }
  });
  $("#rw").hover(function(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $("#hint_content").html("Previous");
    }
  });
  $("#ff").hover(function(){
    if(!draggable && !intro_mode && !menuOpen && tipsOn){
      $("#hint_content").html("Next");
    }
  });



    /////////////////////////////////////////////////////////////////////// INTRO TUTORIAL ////////////////////////////////////////////////////////////////

  $("#widget_boi").fadeIn(3000, function(){
    //setTimelineProgress(90);
    //var strokeWidth = $("#timeline_hilight").attr("stroke-width");
    //alert(strokeWidth);
  });

  function introAnimation(){
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

    //intro msg sequence
    var intro_msgs = ["mi", "nam", "is", "wdgt", "boi", "hi"];
    var msg = 0;

    function displayIntroMsg(){
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
      set_intro_msg = setTimeout(displayIntroMsg, 9000);
    }

    displayIntroMsg();

    //spin tings for intro

    function constantSpin(){
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
      introTimer = setTimeout(constantSpin, 5);
    }

    constantSpin();


  }

  introAnimation();

  function introScrollFx(){
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

  function introHint(){
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



  function audio_demo(){
    $(".mode_intro_info, #init_intro_info").hide();
    $("#audio_intro_info").show();
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 1300);
  }

  function download_demo(){
    $(".mode_intro_info, #init_intro_info").hide();
    $("#download_intro_info").show();
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 1300);
  }

  function menu_demo(){
    $(".mode_intro_info, #init_intro_info").hide();
    $("#menu_intro_info").show();
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 1300);
  }

  function home_demo(){
    $(".mode_intro_info, #init_intro_info").hide();
    $("#home_intro_info").show();
    $(".intro_info").stop().animate({
      "opacity": "1"
    }, 1300);
  }



  /////////// function to handle first swipe that occurs during intro

  function intro_swipe(){
    firstSwipe = false;
    introStarted = true;
    //clearInterval(fadeIntroMsg);
    //$(".intro_msg").stop().clearQueue();
    $(".intro_msg").stop(true, true);
    stopTimelineIntro();

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

    function getValidBezel(){

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
        var validBezelSpin = setTimeout(getValidBezel, 5);
      }

    }
    getValidBezel();
  }

  function introNavSpinEnd(){

    function runCompleteNavSpin(){
      if(darkNavSpin % 90 == 0){
        clearInterval(completeNavSpin);
      }
      else{
        dark_nav.style.transform = "rotate(" + darkNavSpin + "deg)";
        darkNavSpin++;
        completeNavSpin = setTimeout(runCompleteNavSpin, 5);
      }
    }
    runCompleteNavSpin();
  }

  function finishSpin(){
    //need to rotate dark nav to nearest multiple of 90 before clearing interval
    //or start new interval to move it the remainder

    clearInterval(set_intro_msg);
    clearInterval(introTimer);
    introTimer = false;

    introNavSpinEnd();

    function getCompleteBezelSpin(){
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
        var completeBezelSpin = setTimeout(getCompleteBezelSpin, 5);
      }
    }

    getCompleteBezelSpin();

  }
  function finishIntro(){
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
      //$(".help_icon").addClass("help_icon_on");
    });

    $("#album_art").animate({
      "opacity" : "1"
    }, 3000);

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

  function introCleanUp(){

    stopTimelineIntro();
    //setTimeout(offerHint, 5000);

    //show option for tooltips
    //$(".help_icon").addClass("help_icon_on");

    $(".intro_msg").stop(true, true);

    if(!spinning){

      //$(".intro_msg").clearQueue();
      //$(".intro_msg").html("");
      finishIntro();
      //clearInterval(fadeIntroMsg);

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

      function checkSpin(){
        if(!spinning){
          //if it was spinning and now it isn't
          clearInterval(spinListener);
          introCleanUp();
        }
        else{
          var spinListener = setTimeout(checkSpin, 5);
        }
      }
      checkSpin();
    }
  };

  function introLoadBar(){
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
});
