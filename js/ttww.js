$(document).ready(function() {


  ////////////////////////////////////////////////////////////////////////////////////// INITIALIZE GLOBALS //////////////////////////////////////////////

  //var intro_mode = true;
  var widgetCenter = true;
  var intro_mode;
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
  var downloadOptionsOpen = false;
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
  var widget_mode;
  var prev_widget_mode;
  var runningHover;
  var flip;
  var isMobile;
  var cursorOnWidgetBoi = false;
  var blockHints = false;
  var helpOffset = $(".help_icon").offset();
  //check if mobile

  if($(".test_mobile").css("color") == "rgb(255, 0, 0)"){
    isMobile = true;
  }
  else{
    isMobile = false;
    //desktop or tablet
  }

  //alert("mobile: " + isMobile + " " + $(".test_mobile").css("color"));


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

  //var mc = new Hammer(getWidget);


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
  var prevWidgetTop, prevWidgetLeft, prevWidgetTopPercent, prevWidgetLeftPercent;

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
  if(isMobile){
    $(".help").hide();
  }


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

  var $currentSlider;

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

  var img_index;
  var slide_imgs;

  $(".support_img_slider").each(function(){
    //var img_index = 0;
    img_index = 0;
    var dots = "";
    //var slide_imgs = $(this).children(".support_img");
    slide_imgs = $(this).children(".support_img");
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

    //var $currentSlider = $(this);


    //var slider_class = $(thisSlider).attr("class");
    //alert(slider_class);

    //var hammertime = new Hammer(this);

    //hammertime.on("swipeleft swiperight press", function(event){

      //alert(slider_class);

      /*
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
      */
      //return false;
    //});
  });

  function sliderGestureControl(e){
    //var $currentSlider = e.target;
    //alert($currentSlider);
    //$($currentSlider).fadeOut();
    ////these variables are local and not available here
    var prev_img = slide_imgs[img_index];
    var prev_dot_class = ".dot_boi_" + img_index;
    var prev_dot = $($currentSlider).find(prev_dot_class);

    var slider_index = getSliderIndex($currentSlider);
    //alert(slider_index);
    switch(widgetGesture){
      case "swipeleft":
      sliderUpdate(true, $currentSlider, slider_index);
      break;
      case "swiperight":
      sliderUpdate(false, $currentSlider, slider_index);
      break;
      case "tap":
      //alert("tapped");
      if(!runningHover){
        //alert("img: " + $(this).hasClass("img_indicator_container") + "no_arrow: " + $(this).hasClass("no_arrow"));
        $target = e.target;
        //target will be slider
        //alert($($target).attr("class"));
        //this makes sure it doesn't fadeout if you tap arrow
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
      default:
      //alert("other gesture");
      break;
    }
  }


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
  /*
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
  });
  */
  function imgInfoGestureControl(e){
    alert("called");
    switch(widgetGesture){
      case "tap":
      if(!runningHover){
        //alert("img: " + $(this).hasClass("img_indicator_container") + "no_arrow: " + $(this).hasClass("no_arrow"));
        $target = e.target;
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
      break;
      default:
      //nothing?
      break;
    }
  }


  //////////////////////////////////////////////////////////////////// WIDGET BOIIIIIIIIII /////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////// 1. WIDGET CONTROL ////////////////////////////////////////////////////////////////

  //////////////////////////////////////////// MOBILE GESTURES //////////////////////////////////////////////

/*
  $(".nav_box").mousedown(function(){

    //alert(spinning);

    if(!spinning && !draggable){
      $(".widget_nav_path").removeClass("widget_nav_hover");
      var nav_box_id = $(this).attr("id");
      // alert(nav_box_id);
      prev_widget_mode = widget_mode;
      widget_mode = nav_box_id.substr(nav_box_id.indexOf("_") + 1);
      //this guy is prime suspect for widget bug where input is still recognized by icon during spin
      spinning = true;
      //displayMode(widget_mode, prev_widget_mode);
      //issue if user clicks instead of swiping on first one

      if(firstSwipe){
        //no initial value for prev_widget_mode so set again below new value for widget_mode
        prev_widget_mode = widget_mode;
        //stopConstantSpin();
        //alert("stop spin");
        intro_swipe();
      }

      //alert(prev_widget_mode + " " + widget_mode);
      if(intro_mode && prev_widget_mode !== widget_mode){
        introHint();
      }

      adjustIcon(prev_widget_mode, widget_mode);
    }
    // alert(widget_mode);
  });
  */

  function navBoxTap(e){
    var $target = e.target;
    //alert(spinning);

    if(!spinning && !draggable){
      $(".widget_nav_path").removeClass("widget_nav_hover");
      var nav_box_id = $($target).attr("id");
      // alert(nav_box_id);
      prev_widget_mode = widget_mode;
      widget_mode = nav_box_id.substr(nav_box_id.indexOf("_") + 1);
      //this guy is prime suspect for widget bug where input is still recognized by icon during spin
      spinning = true;
      //displayMode(widget_mode, prev_widget_mode);
      //issue if user clicks instead of swiping on first one

      if(firstSwipe){
        //no initial value for prev_widget_mode so set again below new value for widget_mode
        prev_widget_mode = widget_mode;
        //stopConstantSpin();
        //alert("stop spin");
        intro_swipe();
      }

      //alert(prev_widget_mode + " " + widget_mode);
      if(intro_mode && prev_widget_mode !== widget_mode){
        introHint();
      }

      adjustIcon(prev_widget_mode, widget_mode);
    }
    // alert(widget_mode);
  };

  function navBoxPress(e){
    var $target = e.target;
    cleanUpWindows();
    //$(".widget_nav_path").removeClass("widget_nav_hover");
    var nav_box_id = $($target).attr("id");
    var pressedBox = nav_box_id.substr(nav_box_id.indexOf("_") + 1);
    widgetAction(pressedBox);
  }

  function cleanUpWindows(){
    if(menuOpen){
      displayMenu(false);
    }
    if(downloadSimpleOpen){
      closeDownload();
    }
  }

  function navBoxGestureControl(e){
    switch(widgetGesture){
      case "tap":
      //run usual nav_box mousedown to switch modes
      navBoxTap(e);
      break;
      case "press":
      //shortcut to run primary function of mode that is held down
      navBoxPress(e);
      break;
      default:
      break;
    }
  }

  function widgetAction(widget_mode){
    switch(widget_mode){
      case "menu_mode":
        if(!menuOpen){
          displayMenu(true);
          menuMoving = true;
        }
        else{
          if(isMobile){
            //somehow mobile does not fire html click event when widget is clicked
            displayMenu(false);
            menuMoving = true;
          }
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
        else{
          scrollHome();
        }

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

  var widgetGesture;
  var firstTouchX, firstTouchY;
  var pressTime;

  function gestureControl(e){

    // if(widget_mode !== "home_mode"){
    //   endPress();
    // }

    if(!quickSpinning){
      if(widgetGesture !== "press" && widgetGesture !== "tap"){
        //if it is a swipe, we will be changing modes
        prev_widget_mode = widget_mode;
        spinning = true;
      }
      switch(widgetGesture){
        case "swipeup":
        //if(!draggable){
          widget_mode = "home_mode";
          //displayMode(widget_mode, prev_widget_mode);
          //adjustIcon(prev_widget_mode, widget_mode);
        //}
        break;
        case "swipeleft":
        //if(!draggable){
          widget_mode = "menu_mode";
          //alert("calling displayMode with WM: " + widget_mode);
          //displayMode(widget_mode, prev_widget_mode);
          //adjustIcon(prev_widget_mode, widget_mode);
        //}
        break;
        case "swipedown":
        //if(!draggable){
          widget_mode = "download_mode";
          //displayMode(widget_mode, prev_widget_mode);
          //adjustIcon(prev_widget_mode, widget_mode);
        //}
        break;
        case "swiperight":
        //if(!draggable){
          widget_mode = "audio_mode";
          //displayMode(widget_mode, prev_widget_mode);
          //adjustIcon(prev_widget_mode, widget_mode);
        //}
        break;
        case "press":
        ///////////////////this is a press////////////////////
        widget_press = true;
        //alert(widget_mode);
        switch(widget_mode){

          case "audio_mode":
            //displayMode(widget_mode, prev_widget_mode);
            //adjustIcon(prev_widget_mode, widget_mode);
            //hilight intro task
            if(!audio_press){
              audio_press = true;
              $("#audio_press").addClass("intro_task_done");
            }
            //open audio controls
            //alert("open audio controls");
            //$(".audio_control").show();
            //$(".audio_control").animate({"top": "0px"}, 700);
            quickSpin();
            showSkip();
          break;
          case "download_mode":
          //alert("download_mode_pressed");
          quickSpin();
            //displayMode(widget_mode, prev_widget_mode);
            //adjustIcon(prev_widget_mode, widget_mode);
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

            //displayMode(widget_mode, prev_widget_mode);
            //adjustIcon(prev_widget_mode, widget_mode);

            if(!intro_mode){
              //alert("reset intro mode pls");
              reset_intro_mode();
              introHint();
            }
          break;
          default:
          //make widget draggable
          //set home_press true when drag done
            //adjustIcon(prev_widget_mode, widget_mode);
          //alert(e);
          //need to remove handlers or movement of widget will be read as swipe
          //removeGestureHandler();
          dragWidget(e);
          break;
        }
        break;
        default:
        //this is a TAP
        //TAP
        //close menu on tap if it is open
        if(menuOpen && widget_mode !== "menu_mode"){
          displayMenu(false);
          menuMoving = true;
        }
        //alert("tap");
        //prevent click while spinning if audio mode
        if(widget_mode == "audio_mode"){
          if(!spinning){
            widgetAction(widget_mode);
          }
        }
        //otherwise knock yourself out
        else{
          if(!firstSwipe){
            //adding this if because clicking the widget before setting mode opens download
            widgetAction(widget_mode);
          }
        }
      }
      if(widgetGesture !== "press" && widgetGesture !== "tap"){

        //since widget not initially in a mode set prev_widget_mode to first widget_mode
        if(firstSwipe){
          prev_widget_mode = widget_mode;
        }
        if(intro_mode){
          if(firstSwipe){
            intro_swipe();
            introHint();
          }
          else if(prev_widget_mode !== widget_mode){
            introHint();
          }
        }
        //alert(prev_widget_mode + " " + widget_mode);
        adjustIcon(prev_widget_mode, widget_mode);
      }
    }
  }

  var gestureComplete;

  function initiateGesture(e){
    gestureComplete = false;
    //alert("initiate");
    //e.preventDefault();
    //widgetFunctionDown = true;
    widgetGesture = "tap";
    if(isMobile){
      firstTouchX = e.changedTouches[0].clientX;
      firstTouchY = e.changedTouches[0].clientY;
    }
    else{
      firstTouchX = e.clientX;
      firstTouchY = e.clientY;
    }
    //startPress();
    pressTime = setTimeout(function(){
      widgetGesture = "press";
      clearInterval(pressTime);
      //removeGestureHandler();
      //code specific to press on widget_function

      //gestureControl(e);
      gestureTargetControl(e);

    }, 500);
  }

  function swipeCheck(e){
    //alert("check swipe");
    //don't want to calculate swipe during drag
    if(!draggable){
      if(isMobile){
        var swipeEndX = e.changedTouches[0].clientX;
        var swipeEndY = e.changedTouches[0].clientY;
      }
      else{
        var swipeEndX = e.clientX;
        var swipeEndY = e.clientY;
      }

      var swipeDistX = Math.abs(swipeEndX - firstTouchX);
      var swipeDistY = Math.abs(swipeEndY - firstTouchY);
      //if you want to set minimum threshold for swipe
      if(swipeDistX > 20 || swipeDistY > 20){
        widgetGesture = "swipe";
        clearInterval(pressTime);

        //calculate difference in x and y planes

        //this needs to be absolute value

        var diffX = swipeEndX - firstTouchX;
        var diffY = swipeEndY - firstTouchY;

        if(Math.abs(diffX) > Math.abs(diffY)){
          //side swipe
          //left or right
          if(diffX > 0){
            //swiperight
            //alert("swiperight");
            widgetGesture = "swiperight";
          }
          else{
            //alert("swipeleft");
            widgetGesture = "swipeleft";
          }
        }
        else{
          //vertical swipe
          if(diffY > 0){
            //swipedown
            //alert("swipedown");
            widgetGesture = "swipedown";
          }
          else{
            //swipeup
            //alert("swipeup");
            widgetGesture = "swipeup";
          }
        }
      }
    }
  }

  function endGesture(e){
    gestureComplete = true;

    clearInterval(pressTime);
    //if it is a press, this has already been called
    if(widgetGesture !== "press"){
      // need to call correct function depending on what was clicked
      /*
      if(widgetGesture !== "tap"){
        //it is some sort of swipe so block if spinning
        if(!spinning){
          gestureTargetControl(e);
        }
      }
      else{
        gestureTargetControl(e);
      }
      */
      gestureTargetControl(e);

    }
    removeGestureHandler();
    endGestureTargetControl(e);
  }

  var gestureTarget;

  function gestureTargetControl(e){
    //the idea is that this function will step in to run any
    //object specific functions required
    switch(gestureTarget){
      case "widget_function":
      if(widget_mode == "home_mode" && widgetGesture == "press"){
        //want it to stay lit up until end of dragWidget
        //add endPress there
        //alert("endPress");
        //endPress();
      }
      else{
        endPress();
      }
      if(widgetGesture !== "tap" && widgetGesture !== "press"){
        if(!spinning){
          gestureControl(e);
        }
      }
      else{
        gestureControl(e);
      }

      //gestureControl(e);
      $(".widget_nav_path").removeClass("widget_nav_hover");
      break;
      case "slider":
      //alert("slider " + widgetGesture);
      sliderGestureControl(e);
      break;
      case "ffrw":
      ffrwGestureControl(e);
      break;
      case "nav_box":
      navBoxGestureControl(e);
      $(".widget_nav_path").removeClass("nav_box_press");
      break;
      default:
      break;
    }
  }

  function endGestureTargetControl(e){
    switch(gestureTarget){
      case "ffrw":
        clearInterval(scrubbyTimer);
        var $target = e.target;
        $($target).closest(".ffrw_icon").find(".ffrw_icon_dark").removeClass("ffrw_icon_dark_hold");
        scrubLoops = 0;
        scrubbing = false;
      break;
      default:
      break;
    }
  }

  //ATTACH GESTURE HANDLERS TO OBJECTS

  if(isMobile){
    ///////////// NAV BOX ////////////////////////
    $(".nav_box").on("touchstart", function(e){
      e.preventDefault();
      var whichBox = e.target.id;
      var select_widget_modes = getNavHover(whichBox);
      navHover(whichBox, select_widget_modes, true);
      gestureTarget = "nav_box";
      initiateGesture(e);
      $(document).on("touchmove", swipeCheck);
      $(document).on("touchend", endGesture);
    })
    /////////////// WIDGET FUNCTION ///////////////////
    $("#widget_function").on("touchstart", function(e){
      e.preventDefault();
      gestureTarget = "widget_function";
      startPress();
      initiateGesture(e);
      $(document).on("touchmove", swipeCheck);
      $(document).on("touchend", endGesture);
    });
    //////////////// SLIDER //////////////////////
    $(".support_img_slider").on("touchstart", function(e){
      gestureTarget = "slider";
      $currentSlider = $(this);
      initiateGesture(e);
      $(document).on("touchmove", swipeCheck)
      $(document).on("touchend", endGesture);
    });
    ////////////////// FFRW //////////////////////
    $(".ffrw").on("touchstart", function(e){
      gestureTarget = "ffrw";
      initiateGesture(e);
      $(document).on("touchmove", swipeCheck)
      $(document).on("touchend", endGesture);
    });
  }
  /// not mobile
  else{
    ///////////// NAV BOX ////////////////////////
    $(".nav_box").mousedown(function(e){
      e.preventDefault();
      var whichBox = e.target.id;
      var select_widget_modes = getNavHover(whichBox);
      navHover(whichBox, select_widget_modes, true);
      gestureTarget = "nav_box";
      initiateGesture(e);
      $(document).on("mousemove", swipeCheck);
      $(document).on("mouseup", endGesture);
    })
    ///////////// WIDGET FUNCTION //////////////////
    $("#widget_function").mousedown(function(e){
      e.preventDefault();
      gestureTarget = "widget_function";
      //startPress lights up the other nav paths
      startPress();
      initiateGesture(e);
      $(document).on("mousemove", swipeCheck);
      $(document).on("mouseup", endGesture);
    });

    //////////////// SLIDER //////////////////////
    $(".support_img_slider").mousedown(function(e){
      gestureTarget = "slider";
      $currentSlider = $(this);
      initiateGesture(e);
      $(document).on("mousemove", swipeCheck)
      $(document).on("mouseup", endGesture);
    });
    ////////////////// FFRW //////////////////////
    $(".ffrw").mousedown(function(e){
      gestureTarget = "ffrw";
      initiateGesture(e);
      $(document).on("mousemove", swipeCheck)
      $(document).on("mouseup", endGesture);
    });
  }

  function removeGestureHandler(){
    if(isMobile){
      $(document).off("touchmove", swipeCheck);
      $(document).off("touchend", endGesture);
    }
    else{
      $(document).off("mousemove", swipeCheck);
      $(document).off("mouseup", endGesture);
    }
  }

  /////////////////////////////////////////////////////////////////// 2. WIDGET DISPLAY //////////////////////////////////////////////////////////////////////


  function getNavHover(whichBox){
    var select_widget_modes = [];

    switch(widget_mode){
      case "audio_mode":
      select_widget_modes = ["select_home_mode", "select_menu_mode", "select_download_mode"];
      break;
      case "home_mode":
      select_widget_modes = ["select_menu_mode", "select_download_mode", "select_audio_mode"];
      break;
      case "menu_mode":
      select_widget_modes = ["select_download_mode", "select_audio_mode", "select_home_mode"];
      break;
      case "download_mode":
      select_widget_modes = ["select_audio_mode", "select_home_mode", "select_menu_mode"];
      break;
      default:
      //
    }
    return select_widget_modes;
  }

  function navHover(whichBox, select_widget_modes, press){
    //if(!spinning){
      switch(whichBox){
        case select_widget_modes[0]:
        $("#widget_nav_1").addClass("widget_nav_hover");
        if(press){
          $("#widget_nav_1").addClass("nav_box_press");
        }
        break;
        case select_widget_modes[1]:
        $("#widget_nav_2").addClass("widget_nav_hover");
        if(press){
          $("#widget_nav_2").addClass("nav_box_press");
        }
        break;
        case select_widget_modes[2]:
        $("#widget_nav_3").addClass("widget_nav_hover");
        if(press){
          $("#widget_nav_3").addClass("nav_box_press");
        }
        break;
        default:
        //do nothing on audio mode bc it is selected
      }
    //}
  }

  function navHoverOff(whichBox, select_widget_modes){
    //if(!spinning){
      switch(whichBox){
        case select_widget_modes[0]:
        $("#widget_nav_1").removeClass("widget_nav_hover");
        //these may run unnecessarily atm
        //$("#widget_nav_1").removeClass("nav_box_press");
        break;
        case select_widget_modes[1]:
        $("#widget_nav_2").removeClass("widget_nav_hover");
        //$("#widget_nav_2").removeClass("nav_box_press");
        break;
        case select_widget_modes[2]:
        $("#widget_nav_3").removeClass("widget_nav_hover");
        //$("#widget_nav_3").removeClass("nav_box_press");
        break;
        default:
        //do nothing on audio mode bc it is selected
      }
    //}
  }

  //playing with widget feedback
  //hover over nav options
  $(".nav_box").hover(function(ev){
    var whichBox = ev.target.id;
    var select_widget_modes = getNavHover(whichBox);
    navHover(whichBox, select_widget_modes, false);
    //$whichBox = $($whichBox).attr("id"));
    //alert(ev.target.id);
    //audio mode

  }, function(ev){
    var whichBox = ev.target.id;
    var select_widget_modes = getNavHover(whichBox);
    navHoverOff(whichBox, select_widget_modes);
  });


  //var function_down = false;
  //feedback for press
  var nav_hover_1, nav_hover_2, nav_hover_3;
  function startPress(){
    //function_down = true;
    // ex: $("#nav_options_dark").css("animation", "infiniteSpin 2s linear infinite");
    nav_hover_1 = setTimeout(function(){
      //$("#widget_nav_1").toggleClass("widget_nav_hover");
      $("#widget_nav_1").toggleClass("widget_press_bright");
    }, 150);
    nav_hover_2 = setTimeout(function(){
      //$("#widget_nav_2").toggleClass("widget_nav_hover");
      $("#widget_nav_2").toggleClass("widget_press_bright");
    }, 250);
    nav_hover_3 = setTimeout(function(){
      //$("#widget_nav_3").toggleClass("widget_nav_hover");
      $("#widget_nav_3").toggleClass("widget_press_bright");
    }, 350);
  }

  function endPress(){
    clearInterval(nav_hover_1);
    clearInterval(nav_hover_2);
    clearInterval(nav_hover_3);
    //$(".widget_nav_path").removeClass("widget_nav_hover");
    //alert("remove: " + e.type);
    $("#widget_nav_3").removeClass("widget_press_bright");

    setTimeout(function(){
      //$("#widget_nav_2").toggleClass("widget_nav_hover");
      $("#widget_nav_2").removeClass("widget_press_bright");
    }, 75);
    setTimeout(function(){
      //$("#widget_nav_3").toggleClass("widget_nav_hover");
      $("#widget_nav_1").removeClass("widget_press_bright");
    }, 150);
  }

  //////////////////////////////////////////////////////////////////// WIDGET ICON ////////////////////////////////////////////////////////////////////////

  //me again trying to switch animations over to css

  function moveSticks(open, flip){
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

  var navDeg, iconDeg, navSet, iconSet, sticks, open, flip;
  function adjustIcon(prev_widget_mode, widget_mode){

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
      }
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
        open = true;
        flip = false;
      }
      else{
        //play to home
        iconDeg = 0;
      }

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
        open = true;
        flip = true;
      }
      else {
        //play to download
        //spin icon to 180
        iconDeg = 180;
        iconSet = undefined;
      }
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
      }
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
      open = true;
      flip = false;
    }
    else if(prev_widget_mode == "menu_mode" && widget_mode == "download_mode"){
      //menu to download
      navDeg = 90;
      iconDeg = 180;
      //don't need to reset anything but i need this function to set spinning to false
      //at appropriate time
      open = true;
      flip = false;
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
    }
    //home to menu
    else if(prev_widget_mode == "home_mode" && widget_mode == "menu_mode"){
      navDeg = 180;
      iconDeg = 270;
      open = false;
      flip = false;
    }
    //home to download
    else if(prev_widget_mode == "home_mode" && widget_mode == "download_mode"){
      navDeg = 90;
      iconDeg = 180;
    }
      ////////////////////////////////// from download ///////////////////////////////
    //download to audio
    else if(prev_widget_mode == "download_mode" && widget_mode == "audio_mode"){
      navDeg = 0;
      if(playing){
        //download to pause
        //don't spin
        iconSet = 0;

        open = false;
        flip = true;
      }
      else{
        //download to play
        iconDeg = 90;
      }
    }
    //download to home
    else if(prev_widget_mode == "download_mode" && widget_mode == "home_mode"){
      navDeg = 270;
      iconDeg = 360;
    }
    //download to menu
    else if(prev_widget_mode == "download_mode" && widget_mode == "menu_mode"){

      navDeg = 180;
      iconDeg = 270;
      open = false;
      flip = false;
    }
    else{
      //either first swipe or same mode
      //same action
      //this leaves the icon unaccounted for on first swipe
      //by this point firstSwipe is already false, I guess I could move that?
      //alert("running z switch");
      switch(widget_mode){
        case "audio_mode":
        navDeg = 0;
        if(firstSwipe){
          //will be paused
          iconDeg = 90;
        }
        break;
        case "home_mode":
        navDeg = 270;
        if(firstSwipe){
          //will be paused
          iconDeg = 360;
        }
        break;
        case "menu_mode":
        navDeg = 180;
        if(firstSwipe){
          //will be paused
          iconDeg = 270;
          open = false;
          flip = true;
        }
        break;
        default:
        navDeg = 90;
        if(firstSwipe){
          //will be paused
          iconDeg = 180;
        }
      }
      //for intro
      $("#nav_options_dark").css("transform", "rotate(" + navDeg + "deg)");
    }

    navRotate(navDeg, iconDeg);
    //would like to do this with event listener but no luck removing previous ones yet
    //callEndSet();
    function callEndSet(){
      if(typeof prev_widget_mode == 'undefined'){
        //this must be first swipe
        //don't use first swipe variable
        //it is already set to false by intro swipe at this point
        //still need to set spinning to false
        //spinning = false;
        endSet();
        //alert("first");
      }
      else{
        endSet(navSet, iconSet, sticks);
        //alert("usual");
      }
      intro_bezel.removeEventListener("webkitTransitionEnd", callEndSet);
    }
    intro_bezel.addEventListener("webkitTransitionEnd", callEndSet);
    //endSet(navSet, iconSet, sticks);
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
    //setTimeout(function(){
      /////// 1.5 //////////
      firstSwipe = false;
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
      //if intro_done is clicked, it will be one step behind on prev_widget mode
      prev_widget_mode = widget_mode;
    //}, 800);
  }

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
  var prevScrollTop = 0;
  //they have to scroll down first
  var prevScrollDirection = true;
  var scrollDirection;
  var widgetPosTop, widgetPosLeft;
  var helpMoved = false;
  //var helpTop, helpOffset, helpRight;
  //var helpOffset = $(".help_icon").offset();
  //this is happening at startup so scrolltop should be 0, what if they refresh page?


  //position the actual hint either above or below Widget
  var hintMoved = false;
  function posHint(){
    var widgetOffset = $("#widget_boi").offset();
    var widgetTop = widgetOffset.top - $(document).scrollTop();
    //alert(widgetLeft + " " + widgetTop);
    var widgetBottom = widgetTop + $("#widget_boi").outerHeight();
    var windowHeight = $(window).height();
    //1.05 is arbitrary. Adding 5 percent
    if(widgetBottom * 1.05 + $("#context_hint").outerHeight() > windowHeight && !hintMoved){
      //alert("move hint");
      //$("#context_hint").css("top", "-30%");
    //  hintMoved = true;
    }
    else if(widgetBottom * 1.05 + $("#context_hint").outerHeight() < windowHeight && hintMoved){
      //$("#context_hint").css("top", "110%");
      //hintMoved = false;
    }
  }

  function moveHelp(ev){
    var helpTop = helpOffset.top - $(document).scrollTop();
    //10% is currently the css width of the help_container
    //giving it a little margin with .12
    var helpRight = helpOffset.left + ($(window).width() * .12);
    if(!isMobile){
      //alert("called");
      // var widgetPos = getWidgetPos();
      // var widgetLeft = widgetPos['left'];
      // var widgetTop = widgetPos['top'];
      //this function uses percents which I don't really want
      var windowHeight = $(window).height();
      var scrollTop = $(document).scrollTop();
      var widgetWidth = $("#widget_boi").outerWidth();
      var halfWidget = widgetWidth / 2;
      if(typeof ev !== 'undefined'){
        //if(isMobile){
          //var widgetLeft = ev.changedTouches[0].clientX - ($("#widget_boi").outerWidth() / 2);
          //var widgetBottom = ev.changedTouches[0].clientY + ($("#widget_boi").outerHeight() / 2);
        //}
        //else{

          var widgetLeft = ev.clientX - halfWidget;
          var widgetBottom = ev.clientY + halfWidget;
          //alert(widgetLeft + " " + widgetBottom);
        //}
      }
      else{
        var widgetOffset = $("#widget_boi").offset();
        var widgetLeft = widgetOffset.left;
        var widgetTop = widgetOffset.top - scrollTop;
        //alert(widgetLeft + " " + widgetTop);
        var widgetBottom = widgetTop + $("#widget_boi").outerHeight();
      }

      if(tipsOn){
        //need to switch widget bottom to account for tips
        widgetBottom = widgetBottom * 1.05 + $("#context_hint").outerHeight();
      }

      //alert( "WL: " + widgetLeft + " WB: " + widgetBottom  + " HR: " + helpRight  + " HT: " + helpTop);
      if(widgetLeft < helpRight && widgetBottom > helpTop){
        //alert("overlap");
        //alert( "WL: " + widgetLeft + " WB: " + widgetBottom  + " HR: " + helpRight  + " HT: " + helpTop);
        if(!helpMoved){
          $(".help_container, .help_icon").fadeOut().animate({
            "bottom" : "94vh"
          }, 0).fadeIn();
          $(".help_icon")
          helpMoved = true;
        }
      }
      else if(widgetLeft > helpRight || widgetBottom < helpTop){
        if(helpMoved){
          $(".help_container, .help_icon").fadeOut().animate({
            "bottom" : "3vh"
          }, 0).fadeIn();
          helpMoved = false;
        }
      }

      if(widgetBottom > windowHeight && !hintMoved && tipsOn){
        //alert("move hint");

        $("#context_hint").stop(true, true).animate({
          "opacity" : 0
        }, 300, function(){
          $("#context_hint").css("top", "-30%");
        }).animate({
          "opacity" : 1
        }, 300);

        //$("#context_hint").css("top", "-30%");
        hintMoved = true;
      }
      else if(widgetBottom < windowHeight && hintMoved && tipsOn){

        $("#context_hint").stop(true, true).animate({
          "opacity" : 0
        }, 300, function(){
          $("#context_hint").css("top", "110%");
        }).animate({
          "opacity" : 1
        }, 300);

        //$("#context_hint").css("top", "110%");
        hintMoved = false;
      }
    }
  }

  var usrPos = false;

  $(document).scroll(function(){
    //when widget reaches top of title img
    var headerOffset = $("#content_header").offset();
    var headerTop = headerOffset.top;
    var scrollTop = $(this).scrollTop();
    var refOffset = $(".tip_top").offset();
    var refTop = refOffset.top;
    headerTop -= refTop;
    //alert(scrollTop + " " + headerTop);
    if(scrollTop > headerTop){
      if(widgetCenter && !intro_mode && !usrPos && !headedHome){
        quickSpin();
        var sendTop, sendLeft;
        if(isMobile){

          sendTop = "85%";
          sendLeft = "25%";
        }
        else{
          sendTop = "85%";
          sendLeft = "90%";
        }
        sendWidget(sendTop, sendLeft);
        widgetCenter = false;
        usrPos = false;
      }
    }
    else if(scrollTop < headerTop && !widgetCenter && !intro_mode && !usrPos && !headedHome){
      if(isMobile){
        // sendTop = "85%";
        // sendLeft = "25%";
      }
      else{
        sendTop = "50%";
        sendLeft = "50%";
        quickSpin();
        sendWidget(sendTop, sendLeft);
        widgetCenter = true;
      }
      // quickSpin();
      // sendWidget(sendTop, sendLeft);
      //well not exactly centered on mobile
      //widgetCenter = true;
    }

  });

  //call widget to dbl click location

  $("html").dblclick(function(ev){
    //trying to stop hlighting on widget call
    ev.preventDefault();
    //don't move him during the intro probably
    var isWidget = false;
    var $target = ev.target;
    var isWidgetLength = $($target).closest("#widget_boi").length;
    //alert(isWidgetLength);
    if(isWidgetLength == 1){
      widgetDblClick = true;
    }
    else {
      if(!intro_mode && !downloadOptionsOpen){
        moveHelp(ev);
        posHint(ev);
        var widgetCallX = ev.pageX;
        var dblClickY = ev.pageY;
        var scrollTop = $(document).scrollTop();
        //var widgetCallX = dblClickX - scrollTop;
        var widgetCallY = dblClickY - scrollTop;
        //convert these to percentages
        var windowWidth = $(window).width();
        var windowHeight = $(window).innerHeight();
        var widgetPosLeftPercent = (widgetCallX / windowWidth) * 100 + "%";
        var widgetPosTopPercent = (widgetCallY / windowHeight) * 100 + "%";
        //alert(dblClickX + " " + dblClickY);
        //move widget to this location
        //will need to make sure it stays within the page

        //this takes too long but would be cute to add quick rotation animation whlile it moves
        //displayMode(widget_mode);
        if(!spinning){
          quickSpin();
        }

        widgetCenter = false;
        usrPos = true;
        controlsBump = false;

        blockHints = true;

        $("#widget_boi").stop().animate({
          "top" : widgetPosTopPercent,
          "left" : widgetPosLeftPercent
        }, 700, "swing", function(){
          widgetPosLeft = widgetCallX;
          widgetPosTop = widgetCallY;
          blockHints = false;
          if(cursorOnWidgetBoi && tipsOn && !intro_mode && !draggable){
            $(".toolTip").fadeIn();
          }
          //moveHelp();
          //posHint();
        });
      }
    }
  });


  ////////////////////// quick spin /////////////////////////

  //purely aesthetic
  //spin nav and bezel 360 degrees in opposite directions

  var quickSpinning = false;

  function quickSpin(){

    //alert("quick spin " + endPos);
    //var endPos should provide the resting location of bezel and nav
    //nav and bezel should be same
    var navSpin = endPos + 360;
    var bezelSpin = endPos - 360;
    //alert(navSpin + " " + bezelSpin);
    //safe to adjust speed of spin here
    if(!spinning){
      $("#nav_options_img, #widget_bezel_img").css("transition", "transform 0.8s");
      $("#nav_options_img").css("transform", "rotate(" + navSpin + "deg)");
      $("#widget_bezel_img").css("transform", "rotate(" + bezelSpin + "deg)");
      quickSpinning = true;
      //need to undo the spin once it is complete and reset transform values to original
      function unSpin(){
        endSet(endPos);
        intro_bezel.removeEventListener("webkitTransitionEnd", unSpin);
        quickSpinning = false;
      }
      intro_bezel.addEventListener("webkitTransitionEnd", unSpin);
    }
  }

  /////////////////////////////////////////////////////////////////////////// AUDIO TIMELINE /////////////////////////////////////////////////////////////

  /////////////////// outer audio progress bar //////////
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

    //put current time at bottom for desktop
    //track #for mobile
    /*
    if(isMobile){
      var newCurrentTrack = getTrack(currentTime);
      //alert(newCurrentTrack + " " + currentTrack);
      if(newCurrentTrack !== currentTrack){
        $(".current_time").html(newCurrentTrack);
      }
      currentTrack = newCurrentTrack;
    }
    else{
    */
      var minutes = Math.floor(currentTime / 60);
      var seconds = Math.floor((currentTime % 60));
      if(seconds < 10){
        var holder = 0;
      }
      else{
        var holder = "";
      }
      $(".current_time").html(minutes + ":" + holder + seconds);
      if($(".current_time").css("opacity") == "0"){
        $(".current_time").css("opacity", "1");
      }
    //}

    if(currentTime == duration){
      //use this variable to prevent setAudioProgress from being called while bar is returning to start
      homeComing = true;
      //replay the audio file and animate the progressBar
      audioFile.currentTime = 0;
      setAudioProgress(0);
      if(!scrubbing){
        audioFile.play();
      }
      //audioFile.play();
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
        if(widget_mode == "audio_mode"){
          //change icon to play
          spinRate = 15;
          moveSticks(true, false, false);
          //iconSpin(0, 90, 15);
          //alert("audio control moving widget function");
          $("#widget_function").css("transform", "rotate(90deg)");
          //reset play icon
          //simpleIconSpin(1);
        }
      }
      else{
        audioFile.play();
        playing = true;
        if(widget_mode == "audio_mode"){
          //change icon to pause
          spinRate = 15;
          moveSticks(false, false, false);
          //iconSpin(90, 0, 15);
          //alert("audio control moving widget function");
          $("#widget_function").css("transform", "rotate(0deg)");
          //reset pause icon
          //simpleIconSpin(2);
        }
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
    var controlsBump;
    //did the controls need to bump the widget?
    function showSkip(){

      $(".ffrw").toggleClass("showSkip");
      //$("#ff, #rw").fadeIn();

      if(controlsOpen){
        controlsOpen = false;

        //do you need to scoot widget back?
        if(controlsBump){
          sendWidget(prevWidgetTopPercent, prevWidgetLeftPercent);
        }

      }
      else{
        controlsOpen = true;
      }
      //need to set press to false
      //has to happen after this function or will block next widget_function click
      document.getElementById("ffrw_container").addEventListener("webkitTransitionEnd", pressDone);
      //need to check if the buttons are visible and if not bumo widget to better location


      //keep widget on screen
      if(controlsOpen){
        //need to calculate width of widget with controls open

        //currently it is 170% the width of container: nav_img_container

        var navWidth = $(".nav_img_container").width() * 1.7;

        // it is 35 percent bigger than nav_img_container on either side
        var offScreen;
        var ffrwOffset = $(".nav_img_container").offset();
        var ffrwLeft = ffrwOffset.left - ($(".nav_img_container").outerWidth() * 0.35);
        //alert(ffrwLeft);
        var ffrwRight = ffrwOffset.left + $(".nav_img_container").outerWidth() * 1.35;
        var docWidth = $(window).width();
        //alert(ffrwLeft + " " + ffrwRight);
        if(ffrwLeft < 0){
          offScreen = true;
          //alert("off screen");
          //you are moving widget_boi to this position not the leftmost side
          var diff = 0 - ffrwLeft;
          var widgetLeft = "+=" + (diff / docWidth) * 100 + "%";
        }
        else if(ffrwRight > docWidth){
          offScreen = true;
          var diff = ffrwRight - docWidth;
          var widgetLeft = "-=" + (diff / docWidth) * 100 + "%";
        }

        //set distance and convert to percent
        //var widgetLeft = "+=" + (diff / docWidth) * 100 + "%";

        //scoot widget back into view
        if(offScreen){
          //get previous values
          var widgetPos = getWidgetPos();
          prevWidgetLeftPercent = widgetPos['left'];
          prevWidgetTopPercent = widgetPos['top'];
          $("#widget_boi").animate({
            "left" : widgetLeft
          }, 400, function(){
            offScreen = false;
            controlsBump = true;
          });
        }
      }

    }

    function pressDone(){
      //called twice because 2 transitions
      document.getElementById("ffrw_container").removeEventListener("webkitTransitionEnd", pressDone);
      //alert("pressDone");
    }

    var currentTrack;

    function getTrack(currentTime){
      if(currentTime < 101){
        var currentTrack = 1;
      }
      else if(currentTime >= 101 && currentTime < 206){
        var currentTrack = 2;
      }
      else if(currentTime >= 206 && currentTime < 389){
        var currentTrack = 3;
      }
      else if(currentTime >= 389 && currentTime < 480){
        var currentTrack = 4;
      }
      return currentTrack;
    }

    function skippy(skip){
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

        //could simplify this now using getTrack

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
    }

    /*

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
    });

    */

    function ffrwGestureControl(e){
      var $target = e.target;
      //alert($($target).attr("id"));
      if($($target).hasClass("ff_component")){
        //fast-forward
        var skip = true;
      }
      else{
        //rewind
        var skip = false;
      }
      switch(widgetGesture){
        case "tap":
          skippy(skip);
        break;
        case "press":
          //alert(skip);
          scrubby(skip);
          $($target).closest(".ffrw_icon").find(".ffrw_icon_dark").removeClass("ffrw_icon_hover").addClass("ffrw_icon_dark_hold");
        break;
        default:
        break;
      }
    }
    //true = ff
    //false = rw
    var scrubbyTimer;
    var scrubLoops = 0;
    var scrubbing;

    function scrubby(skip){
      scrubbing = true;
      //alert(skip);
      scrubLoops++;
      var setTime;
      if(skip){
        //ff
        if(audioFile.currentTime < 1){
          setTime = 5;
        }
        else{
          setTime = audioFile.currentTime + 5 * scrubLoops;
        }
      }
      else{
        //rw
        setTime = audioFile.currentTime - 5 * scrubLoops;
      }
      audioFile.currentTime = setTime;
      //call again if still holding
      if(!gestureComplete){
        scrubbyTimer = setTimeout(function(){
          scrubby(skip);
        }, 1000);
      }
    }

    if(isMobile){
      $("#ff, #rw").on("touchstart", function(){
        $(this).find(".ffrw_icon_dark").addClass("ffrw_icon_dark_hover");
      });
      $("#ff, #rw").on("touchend", function(){
        $(this).find(".ffrw_icon_dark").removeClass("ffrw_icon_dark_hover");
      });
    }
    else{
      $("#ff, #rw").hover(function(){
        $(this).find(".ffrw_icon_dark").toggleClass("ffrw_icon_dark_hover");
      });
    }



  //////////// HOME MODE //////////////////

  ///////// home tap //////////////
  var headedHome = false;
  function scrollHome(){
    if(isMobile){
      if(controlsOpen){
        showSkip();
      }
      sendTop = "85%";
      sendLeft = "25%";
    }
    else{
      sendTop = "50%";
      sendLeft = "50%";
    }
    sendWidget(sendTop, sendLeft);
    quickSpin();
    headedHome = true;
    $("html, body").animate({
      scrollTop: 0
    }, "slow", function(){
      if(!isMobile){
        widgetCenter = true;
      }

      usrPos = false;
      headedHome = false;
    });
    return false;
  };

  ////////// home press ///////////

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  function dragWidget(e){
    //alert(e);

    //this seems to be necessary
    //displayMode("home_mode");

    quickSpin();
    //adjustIcon(prev_widget_mode, widget_mode);

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

    //pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // get the mouse cursor position at startup:
    //why?
    /*
    if(isMobile){
      pos3 = e.changedTouches[0].clientX;
      pos4 = e.changedTouches[0].clientY;
    }
    else{
      pos3 = e.clientX;
      pos4 = e.clientY;
    }
    //pos3 = e.center.x;
    //pos4 = e.center.y;
    //alert(pos3);
    */

    if(isMobile){
      document.ontouchend = closeDragElement;
      $(document).on("touchmove", widgetMove);
    }
    else{
      document.onmouseup = closeDragElement;
      $(document).on("mousemove", widgetMove);
    }


    // call a function whenever the cursor moves:
    //alert(pos3 + " " + pos4);

    //$(document).on("mousemove touchmove", widgetMove);
  }

  function widgetMove(e){
    //alert(e.type);
    e = e || window.event;
    e.preventDefault();

    widgetCenter = false;
    usrPos = true;
    controlsBump = false;

    moveHelp();
    posHint();

    /*

    touch = undefined;
    if(e.originalEvent.touches){
      touch = e.originalEvent.touches[0];
      var scrollTop = $(document).scrollTop();
      pos1 = pos3 - touch.clientX;
      pos2 = pos4 - touch.clientY;
      pos3 = touch.clientX;
      pos4 = touch.clientY;
    }
    */
    if(isMobile){
      var touch = e.changedTouches[0];
      //var scrollTop = $(document).scrollTop();
      /*
      pos1 = pos3 - touch.clientX;
      pos2 = pos4 - touch.clientY;
      pos3 = touch.clientX;
      pos4 = touch.clientY;
      */
      var cursorY = touch.clientY;
      var cursorX = touch.clientX;
    }
    else{
      // calculate the new cursor position:
      //alert(e);
      /*
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      */
      var cursorY = e.clientY;
      var cursorX = e.clientX;
    }

    // dragElmnt.style.top = ((dragElmnt.offsetTop - pos2) / $(window).innerHeight()) * 100 + "%";
    // dragElmnt.style.left = ((dragElmnt.offsetLeft - pos1) / $(window).width()) * 100 + "%";

    //var widgetOffset = dragElmnt.offset();
    //var widgetTop = widgetOffset

    //convert to percentage
    //note THIS MUST BE WRITTEN IN PLAIN JS JQUERY .innerWidth() does not work
    var windowHeight = window.innerHeight;
    var windowWidth = $(window).width();
    var widgetTopPercent = ((cursorY / windowHeight) * 100) + "%";
    var widgetLeftPercent = ((cursorX / windowWidth) * 100) + "%";

    $("#widget_boi").css({"top" : widgetTopPercent, "left": widgetLeftPercent});

    //dragElmnt.style.top = (dragElmnt.offsetTop - pos2) + "px";
    //dragElmnt.style.left = (dragElmnt.offsetLeft - pos1) + "px";


  };

  function closeDragElement(){
    //alert("called");
    //set widget press to false
    widget_press = false;
    //alert(widget_press);
    // stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;

    document.ontouchend = null;
    document.ontouchmove = null;
    $(document).off("mousemove touchmove");
    draggable = false;
    quickSpin();
    endPress();
    //adjustIcon(prev_widget_mode, widget_mode);
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

  var menuMoving = false;


  function sendWidget(widgetTop, widgetLeft){
    //$(".toolTip").stop(true, true).fadeOut();

    $("#widget_boi").stop().animate({
      "top" : widgetTop,
      "left" : widgetLeft
    }, 700, "swing", function(){
      //blockHints = false;
      /*
      if(cursorOnWidgetBoi){
        $(".toolTip").stop(true, true).fadeIn();
      }
      */
      moveHelp();
    });
    widgetPosLeft = widgetLeft;
    widgetPosTop = widgetTop;
  }

  var prevWidgetLeftPercent, prevWidgetTopPercent;
  //var blockHints = false;

  function displayMenu(show){

    var originalOrigin, aDeg, bDeg;

    if(!menuMoving){
      //alert(show);
      if(show){

        /*
        originalOrigin = $(".widget_stick").css("transform-origin");
        aDeg = $("#a_stick").css("transform");
        bDeg = $("#b_stick").css("transform");
        //animate icon to an x
        /*
        var xDeg = 45;
        $(".widget_stick").css("transform-origin", "center center");
        $("#a_stick").css("transform", "rotate(" + -xDeg + "deg)");
        $("#b_stick").css("transform", "rotate(" + xDeg + "deg)");
        */

        if(controlsOpen){
          controlsWereOpen = true;
          showSkip();
        }
        else{
          controlsWereOpen = false;
        }
        //menuOpen = true;

        $(".toolTip").fadeOut(function(){
          blockHints = true;
        });

        //use this to send widget back to where it was when the menu opened
        //need to account for the transform

        var widgetPos = getWidgetPos();
        prevWidgetTopPercent = widgetPos['top'];
        prevWidgetLeftPercent = widgetPos['left'];

        /*

        var widgetHeight = $("#widget_boi").height();
        var widgetWidth = $("#widget_boi").width();

        var widgetOffset = $("#widget_boi").offset();
        prevWidgetLeft = widgetOffset.left + (widgetWidth / 2);
        //prevWidgetTop = widgetOffset.top - $(document).scrollTop() + (widgetHeight / 2);
        prevWidgetTop = widgetOffset.top - $(document).scrollTop() + (widgetHeight / 2);
        //need to convert these values to percentage
        //fixed position, percentage based elements reposition to account for mobile search bar
        var windowWidth = $(window).width();
        var windowHeight = window.innerHeight;
        var windowOuterHeight = $(window).height();

        /*
        if(isMobile){
          if(windowHeight !== windowOuterHeight){
            alert(windowHeight + " " + windowOuterHeight);
          }
        }
        */
        //prevWidgetLeftPercent = ((prevWidgetLeft / windowWidth) * 100) + "%";
        //prevWidgetTopPercent = ((prevWidgetTop / windowHeight) * 100) + "%";

        //send widget to center
        sendWidget("50%", "50%");
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

        /*
        //reset the icon
        $(".widget_stick").css("transform-origin", originalOrigin);
        $("#a_stick").css("transform", aDeg);
        $("#b_stick").css("transform", bDeg);
        */
        //alert(controlsWereOpen);
        if(controlsWereOpen){
          //alert("open controls");
          showSkip();
        }

        //menuOpen = false;
        blockHints = false;
        if(cursorOnWidgetBoi && tipsOn){
          $(".toolTip").stop(true, true).fadeIn(function(){
            //blockHints = false;
          });
        }

        //send widget back
        //should widget be sent back if user clicks on a new widget mode?
        //this would make it jump out from under mouse when presumably they are about to do something with it
        if(!intro_mode){
          //alert(prevWidgetLeftPercent + " " + prevWidgetTopPercent);
          sendWidget(prevWidgetTopPercent, prevWidgetLeftPercent);
        }


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
          menuMoving = false;
          menuOpen = false;
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
      }, 800, function(){
        if(show){
          menuOpen = true;
          menuMoving = false;
        }
      });
    }
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
    menuMoving = true;
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
      menuMoving = true;
    }
  });

  $("html").click(function(event){
    event.preventDefault();
    //alert("hi");
    $target = $(event.target);

    //only close it if it is open
    //var menu_pos = $("#about_nav").css("right");
    //alert(menu_pos);
    //alert($target.closest(".menu").length);
    if(!$target.closest(".menu").length && menuOpen && !$target.hasClass("nav_box")){
      //alert("close the menu I think");
      displayMenu(false);
      menuMoving = true;
    }
    //alert(menu_pos);
  });


  /////// menu press ///////
  var prevWidgetLeftTutorial, prevWidgetTopTutorial;

  function getWidgetPos(){
    //use this to send widget back to where it was when the menu opened
    //need to account for the transform

    var widgetHeight = $("#widget_boi").height();
    var widgetWidth = $("#widget_boi").width();

    var widgetOffset = $("#widget_boi").offset();
    var prevWidgetLeft = widgetOffset.left + (widgetWidth / 2);
    //prevWidgetTop = widgetOffset.top - $(document).scrollTop() + (widgetHeight / 2);
    var prevWidgetTop = widgetOffset.top - $(document).scrollTop() + (widgetHeight / 2);
    //need to convert these values to percentage
    //fixed position, percentage based elements reposition to account for mobile search bar
    var windowWidth = $(window).width();
    var windowHeight = window.innerHeight;

    var prevWidgetLeftPercent = ((prevWidgetLeft / windowWidth) * 100) + "%";
    var prevWidgetTopPercent = ((prevWidgetTop / windowHeight) * 100) + "%";

    var widgetPos = [];
    widgetPos['top'] = prevWidgetTopPercent;
    widgetPos['left'] = prevWidgetLeftPercent;
    //alert(widgetPos['left'] + " " + widgetPos['top']);
    return widgetPos;

  }

  function reset_intro_mode(){

    if(!widgetCenter){
      var widgetPos = getWidgetPos();
      prevWidgetTopTutorial = widgetPos['top'];
      prevWidgetLeftTutorial = widgetPos['left'];
    }

    //endPress();

    intro_mode = true;

    if(menuOpen){
      displayMenu(false);
      menuMoving = true;
    }

    $(".toolTip").stop(true, true).fadeOut();
    //$(".help_icon").removeClass("help_icon_on");

    //return widget to center

    $("#widget_boi").animate({
      "top" : "50%",
      "left" : "50%"
    }, 700, "swing", function(){
      widgetPosLeft = widgetPosTop = "50%";
      //widgetCenter = true;
    });

    $(".widget_intro, .intro_dots").show().animate({
      "opacity" : "1"
    }, 1500, function(){
      $("#real_body, #album_art").css("opacity" , "0");
      //set widget_press to false
      //widget_press = false;
      //endPress();
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
        }, 600, "swing", function(){
          //alert("set widget_press to false");
          //widget_press = false;
        });
        downloadSimpleOpen = true;
      }

      if(!simple){
        $(".download_options").animate({
          "top" : "0"
        }, 600, "swing", function(){
          downloadOptionsOpen = true;
        });
      }
    });
  }

  $("#download_cancel_button, #download_done_button").click(function(){
    closeDownload();
    /*
    movVal = "-" + downloadConfirmHeight;
    if(!intro_mode){
      $("html").css("overflow", "auto");
    }

    $(".download_options").animate({
      "top" : "-100%"
    }, 800, "swing", function(){
      $("#download_button").css("right", "30%");
      $(".download_options").hide();
      downloadOptionsOpen = false;
    });

    //height of download confirm will vary based on device

    $("#download_confirm").animate({
      "bottom" : movVal
    }, 800, "swing", function(){
      //$(this).hide();
      downloadSimpleOpen = false;
    });
    */
  });

  function closeDownload(){
    movVal = "-" + downloadConfirmHeight;
    if(!intro_mode){
      $("html").css("overflow", "auto");
    }

    $(".download_options").animate({
      "top" : "-100%"
    }, 800, "swing", function(){
      $("#download_button").css("right", "30%");
      $(".download_options").hide();
      downloadOptionsOpen = false;
    });

    //height of download confirm will vary based on device

    $("#download_confirm").animate({
      "bottom" : movVal
    }, 800, "swing", function(){
      //$(this).hide();
      downloadSimpleOpen = false;
    });
  }

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


  //keep help items correct size
  function resizeHelp(){
    //alert("called");
    //set left pos of help
    //and height
    var helpHeight = $(".help_icon").outerHeight();
    var helpOffset = $(".help_icon").offset();
    var helpOffsetRight = helpOffset.left + $(".help_icon").outerWidth();
    //alert(helpHeight);
    $(".help_container").css({"left" : helpOffsetRight, "height" : helpHeight});
    //could also resize tip indicator here
    var hintHeight = $("#context_hint").height();
    $("#hinticator").height(hintHeight);
  }

  resizeHelp();

  $(window).on("resize", resizeHelp);


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
      tipsOn = false;
      $(".toolTip").stop(true, true).fadeOut(moveHelp);

      //$("#help_text").html("Turn ON Tooltips");
    }
    else{
      infoMsg("Turn <span id='tipPower'>OFF</span> (T)ooltips");
      tipsOn = true;
      moveHelp();
      $(".toolTip").stop(true, true).fadeIn();

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
            $(".toolTip").stop(true, true).fadeOut(moveHelp);
            tipMsg = "Tooltips OFF";
          }
          else{
            tipsOn = true;
            moveHelp();
            if(!blockHints && !intro_mode){
              if(!cursorOnWidgetBoi){
                $("#hint_content").html("Hi There");
              }
              $(".toolTip").stop(true, true).fadeIn();
            }

            tipMsg = "Tooltips ON";
          }
          infoMsg(tipMsg);
          //moveHelp();
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
  $(window).on("mousemove scroll keypress", function(){
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

  /*

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

  */

  function widgetFunctionHint(){
    if(!draggable && !intro_mode){
      //$(".tool_dot").first().addClass("selected_tool_dot");
      //$(".toolTip").clearQueue().fadeIn();
      //alert(widget_mode);

      var hintA, hintB;
      var hintDex = 2;
      //hintLoop = true;

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
        hintLoop = true;
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
          hinterval = setTimeout(swapHint, 1800);
        }

      }
      if(hintLoop){
        //hintDelay = setTimeout(swapHint, 2000);
        swapHint();
      }
      else{
        //swapHint();
        hintDelay = setTimeout(swapHint, 900);
      }
    }
  }

  $("#widget_function").hover(function(){
    widgetFunctionHint();
  }, function(){
    //if(!draggable && !intro_mode && !menuOpen && tipsOn){
      //alert("interval cleared!");
      //$("#hint_content").clearQueue().show().html("Hi There");
      $("#hint_content").clearQueue().show();
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
  cursorOnWidgetBoi = true;
  //if($($target).attr("id") == "hint_content" || $($target).attr("id") == "context_hint" || $($target).attr("id") == "hinticator"){
    //hovered over tooltip which is inside widget_boi
  //}
  //else{
    if(!draggable && !intro_mode && !blockHints && tipsOn){
      $(".toolTip").stop(true, true).fadeIn();
    }
//  }

}, function(){
  cursorOnWidgetBoi = false;
  if(!draggable && !intro_mode && tipsOn){
    $(".toolTip").stop(true, true).fadeOut();
  }
});

  $("#select_home_mode").hover(function(){
    if(!draggable && !intro_mode){
      $("#hint_content").html("Home Mode");
    }
  });
  $("#select_audio_mode").hover(function(){
    if(!draggable && !intro_mode){
      $("#hint_content").html("Audio Mode");
    }
  });
  $("#select_menu_mode").hover(function(){
    if(!draggable && !intro_mode){
      $("#hint_content").html("Menu Mode");
    }
  });
  $("#select_download_mode").hover(function(){
    if(!draggable && !intro_mode){
      $("#hint_content").html("Download Mode");
    }
  });
  $("#rw").hover(function(){
    if(!draggable && !intro_mode){
      $("#hint_content").html("Previous");
    }
  });
  $("#ff").hover(function(){
    if(!draggable && !intro_mode){
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
    constantSpin();
    //intro_bezel.addEventListener("animationiteration", sayHi);


  }

  function constantSpin(){
    //using css animations now
    //apply these here
    $("#nav_options_dark").css("animation", "infiniteSpin 2s linear infinite");
    $("#widget_bezel_img").css("animation", "infiniteBackSpin 2s linear infinite");
  }
  function stopConstantSpin(){
    var current_bezel = $("#widget_bezel_img").css("transform");
    var current_dark_nav = $("#nav_options_dark").css("transform");
    //$("#nav_options_dark").css("transform", current_dark_nav);
    $("#nav_options_dark").css("animation", "initial");
    $("#widget_bezel_img").css("animation", "initial");
    dark_nav.addEventListener("webkitTransitionEnd", function(){
      //alert("dress widget");
      widgetDress(true);
    });
    $("#widget_bezel_img").css("transform", current_bezel);

    //$("#nav_options_dark").css("transform", current_dark_nav);
    //nav ring paused, need to send it to nearest multiple of 90 degrees


  }

  /*
  this is the right idea but I need to do some tweaking to get a good clean intro
  on both platforms

  if(isMobile){
    introAnimation();
  }
  else{
    finishIntro();
    stopTimelineIntro();
  }

  */

  introAnimation();

  function introScrollFx(){
    var scrollTop = $(window).scrollTop();
    var originalInfo = $(".intro_info").offset();
    var infoTop = originalInfo.top - scrollTop;
    var originalDone = $(".intro_done").offset();
    var doneTop = originalDone.top - scrollTop;

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
      //audio_demo();
      $introEl = $("#audio_intro_info");
      if(!audio_mode_explored){
        audio_mode_explored = true;
        //alert("audio");
        $(".audio_intro_dot").addClass("bright_dot");
        intro_index++;
      }
      break;
      case "home_mode":
      $introEl = $("#home_intro_info");
      //home_demo();
      if(!home_mode_explored){
        home_mode_explored = true;
        $(".home_intro_dot").addClass("bright_dot");
        intro_index++;
      }
      break;
      case "menu_mode":
      $introEl = $("#menu_intro_info");
      //menu_demo();
      if(!menu_mode_explored){
        menu_mode_explored = true;
        $(".menu_intro_dot").addClass("bright_dot");
        intro_index++;
      }
      break;
      default:
      $introEl = $("#download_intro_info");
      //download_demo();
      if(!download_mode_explored){
        download_mode_explored = true;
        $(".download_intro_dot").addClass("bright_dot");
        intro_index++;
      }
    }

    introLoadBar();

    $(".intro_info").animate({
      "opacity" : "0"
    }, 600, function(){
      $(".mode_intro_info, #init_intro_info").hide();
      $($introEl).show();
      $(".intro_info").stop().animate({
        "opacity": "1"
      }, 600);
    });
  }


  /////////// function to handle first swipe that occurs during intro

  function intro_swipe(){
    //alert("called intro swipe");

    //alert($("#nav_options_img").css("transform"));
    //firstSwipe = false;
    introStarted = true;
    stopConstantSpin();
    //wait until transition done to dress widget
    //this is not working very consistently

    //widgetDress(true);
    //clearInterval(fadeIntroMsg);
    //$(".intro_msg").stop().clearQueue();
    $(".intro_msg").stop(true, true);
    stopTimelineIntro();

    clearInterval(set_intro_msg);
    //clearInterval(introTimer);
    //introNavSpinEnd();
    //introLoadBar();
    //introTimer = false;
    $(".intro_msg").stop().fadeOut("fast", function(){
      $(".intro_msg").html("");
    });
  }

  function finishIntro(){

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

    //this interferes with quickspin when sending widget to bottom corner on mobile
    //try leaving the mode alone unless it hasn't been set
    if(firstSwipe){
      widget_mode = "audio_mode";
      //alert(prev_widget_mode);
      adjustIcon(prev_widget_mode, widget_mode);
    }

    intro_mode = false;
    //send widget to bottom left if mobile

    if(typeof prevWidgetLeftTutorial !== 'undefined'){
      sendWidget(prevWidgetTopTutorial, prevWidgetLeftTutorial);
      if(!firstSwipe){
        quickSpin();
      }
    }
    else{
      if(isMobile){
        sendWidget("85%", "25%");
        widgetCenter = false;
        if(!firstSwipe){
          //if dark nav hasn't faded out yet it will look weird when proper nav fades in while spinning
          quickSpin();
        }
      }
    }

    /*
    if(isMobile){
      sendWidget("85%", "25%");
      if(!firstSwipe){
        //if dark nav hasn't faded out yet it will look weird when proper nav fades in while spinning
        quickSpin();
      }
    }
    */
  }

  $(".intro_done").click(function(){
    introCleanUp();
  });


  function introCleanUp(){

    clearInterval(set_intro_msg);

    if(firstSwipe){
      //skip intro before swiping
      stopTimelineIntro();
      stopConstantSpin();
    }

    //setTimeout(offerHint, 5000);

    //show option for tooltips
    //$(".help_icon").addClass("help_icon_on");

    $(".intro_msg").stop(true, true);

    if(!spinning){
      intro_bezel.removeEventListener("webkitTransitionEnd", introCleanUp);
      //$(".intro_msg").clearQueue();
      //$(".intro_msg").html("");
      //alert("end it");
      finishIntro();
  }

  //don't want to destroy widget so wait until it finishes spinning to end intro
    else{
      //it is spinning
      //alert("wait for spin end");
      intro_bezel.addEventListener("webkitTransitionEnd", introCleanUp);
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
