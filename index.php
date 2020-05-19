<!DOCTYPE html>

<html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Those Who Wait</title>
    <link rel="stylesheet" href="css/ttww.css?v=5" type="text/css">
    <!--google fonts to include -->
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Reenie+Beanie&display=swap" rel="stylesheet">


    <!-- <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css"> -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://hammerjs.github.io/dist/hammer.js"></script>



    <script type="text/javascript" src="js/ttww.js?v=1.9"></script>



  </head>

  <body>
    <div class="tip_top">
      <!-- this div will be used as a reference as the top of the page -->
    </div>
    <!--download page -->

    <div class="download_options" id="download_menu">





      <div class="download_option" id="download_instructions">
        <span class="download_instructions">
          Select tracks to download.
        </span>
        <!-- Select All

        <span class="download_symbol">Full Circle</span>
        <span class="download_song_title">W8</span> -->

      </div>





      <div class="download_option" id="graduate_download">
        <!-- Graduate -->


        <img class="download_symbol" src="imgs/WAIT.svg" alt="Sacred semiotics"/>
        <img class="download_song_title" src="imgs/GRADUATE.svg" alt="Gradu-wait. Mysterious message.">

      </div>
      <div class="download_option" id="glass_download">
        <!-- 8lass -->

        <img class="download_symbol" src="imgs/HATE.svg" alt="Sacred semiotics" />
        <img class="download_song_title" src="imgs/GLASS.svg" alt="Glass. Occult code.">

      </div>
      <div class="download_option" id="broken_download">
        <!-- >roken -->

        <img class="download_symbol" src="imgs/LATE.svg" alt="Sacred semiotics" />
        <img class="download_song_title" src="imgs/BROKEN.svg" alt="Broken. Esocteric artifacts.">


      </div>
      <div class="download_option" id="home_download">
        <!-- home -->

        <img class="download_symbol" src="imgs/FATE.svg" alt="Sacred semiotics">
        <img class="download_song_title" src="imgs/HOME.svg" alt="HOME. Homecoming.">

      </div>

      <div class="download_option" id="download_confirm">

        <span id="download_button">
          <a id="audio_download_link" href="audio/TO_THOSE_WHO_W8.wav" download>Download </a>
        </span>
        <span id="download_done_button">Done</span>
        <span id="download_cancel_button">Cancel</span>
      </div>



    </div>

    <!-- widget section -->

    <div class="widget_intro">
      <div class="intro_info intro_item">
        <span id="init_intro_info">
          Swipe in any direction from the center of the widget.
        </span>

        <span class="mode_intro_info" id="audio_intro_info">
          <span class='intro_mode_title'>Audio Mode</span> <br>
          <span class='intro_function' id='audio_tap'>Tap: Play/Pause.</span> <br>
          <span class='intro_function' id='audio_press'>Press: Audio controls.</span>
        </span>

        <span class="mode_intro_info" id="download_intro_info">
          <span class='intro_mode_title'>Download Mode</span> <br>
          <span class='intro_function' id='download_tap'>Tap: Download project.</span> <br>
          <span class='intro_function' id='download_press'>Press: Download options.</span>
        </span>

        <span class="mode_intro_info" id="menu_intro_info">
          <span class='intro_mode_title'>Menu Mode</span> <br>
          <span class='intro_function' id='menu_tap'>Tap: Display full menu.</span> <br>
          <span class='intro_function' id='menu_press'>Press: Open this tutorial.</span>
        </span>

        <span class="mode_intro_info" id="home_intro_info">
          <span class='intro_mode_title'>Home Mode</span> <br>
          <span class='intro_function' id='home_tap'>Tap: Return to top.</span> <br>
          <span class='intro_function' id='home_press'>Press: Position widget.</span>
        </span>

      </div>
      <div class="intro_done intro_item">

        <!-- <span id="intro_done_button">Skip Intro</span> -->
        <span id="intro_done_button">Skip</span>
        <span id="got_it_button">Got It</span>

        <div class="intro_load_bar">

        </div>
        <div class="intro_done_bar">
          Done
        </div>
      </div>
    </div>

    <div id="widget_boi" class="no_select widget_swipe">



      <div class="widget_nav_container">

        <div class="nav_options">
          <div class="nav_row">
            <div class="widget_home nav_box" id="select_home_mode" title="Home"></div>
            <div class="widget_audio nav_box" id="select_audio_mode" title="Audio"></div>
          </div>
          <div class="nav_row">
            <div class="widget_menu nav_box" id="select_menu_mode" title="Menu"></div>
            <div class="widget_download nav_box" id="select_download_mode" title="Download"></div>
          </div>
        </div>

        <div class="nav_img_container">

          <img class="audio_timeline" src="imgs/WIDGET_TIMELINE.svg" alt="Audio timeline indicator">

          <!-- research svg tag to create and animate timeline -->

          <img class="widget_nav" id="nav_options_img" src="imgs/WIDGET_NAV.svg" alt="Widget navigation">


          <img class="widget_nav" id="nav_options_dark" src="imgs/WIDGET_NAV_DARK.svg" alt="Widget navigation">
          <img class="widget_bezel" id="widget_bezel_img" src="imgs/WIDGET_BEZEL_SMALL.svg" alt="Model watch bezel">
        </div>

        <div class="widget_function_container" id="widget_function_container">
          <div class="intro_msg">
            hi
          </div>
          <div class="intro_dots">

            <div class="dot_row">
              <svg class='intro_dot'><circle class='home_intro_dot' cx='50%' cy='50%' r='0.5em'></svg>
            </div>

            <div class="dot_row">

              <svg class='intro_dot'><circle class='menu_intro_dot' cx='50%' cy='50%' r='0.5em'></svg>

              <svg class='intro_dot'><circle class='audio_intro_dot' cx='50%' cy='50%' r='0.5em'></svg>
            </div>

            <div class="dot_row">
              <svg class='intro_dot'><circle class='download_intro_dot' cx='50%' cy='50%' r='0.5em'></svg>

            </div>


          </div>
          <div class="toolTip" id="current_mode">
            <span id="mode_content">Hi there.</span>
          </div>
          <div class="toolTip" id="context_hint">
            <span id="hint_content">Hi there.</span>
          </div>

          <div id="widget_function">


            <!--
            <span class="widget_swipe" id="audio_download" href="audio/TTWW_TEST_MASTER_10.wav" download>
              <div class="download_circle widget_swipe">
              </div>
            </span>
          -->

              <svg style="width:5%; height:50%;" class="widget_stick no_select" id="a_stick">
                <rect width="100%" height="100%">
              </svg>

              <svg style="width:5%; height:50%;" class="widget_stick no_select" id="b_stick">
                <rect width="100%" height="100%">
              </svg>

          </div>
        </div>

      </div>

    </div>

    <!-- widget menu -->

    <div class="menu no_select">
      <div class="menu_top">
        <h2 class="menu_nav cl-effect-1" id="about_nav">ABOUT</h2>
        <h2 class="menu_nav cl-effect-1" id="lyrics_nav">SONGS</h2>
      </div>
      <div class="menu_bottom">
        <h2 class="menu_nav cl-effect-1" id="credits_nav">CREDITS</h2>
        <h2 class="menu_nav cl-effect-1" id="support_nav">SUPPORT</h2>
      </div>


    </div>

    <section id="home">

    <!-- not sure why but I cannot set the width of this img via any other selector than img -->
      <picture id="wide_art">
        <source media="(min-width:600px)" srcset="imgs/TTWW_POSTER.jpg">
        <img id="album_art" src="imgs/TTWW_POSTER_HALF.jpg" alt="To Those Who Wait Cover Art" />
      </picture>

      <!-- allow audio to be played and downloaded -->
      <audio id="ttwwAudioFile" src="audio/TO_THOSE_WHO_W8.wav"></audio>

    </section>

    <!-- this div will contain everything under the home section -->

    <div id="real_body">

      <!-- pushing this element down by 100vh did not make jquery happy -->

      <section id="content_header">
        <!--header title image -->

        <img id="content_header_img" src="imgs/TTWW_TITLE.jpg" alt="To Those Who Wait">

        <p id="content_head_msg">
          What began as an exercise to ease cognitive disonance,
          somehow took on a life of its own, becoming an earnest
          attempt to shed light on <em>Waiting</em> as a Mode of Being.
        </p>

      </section>

      <section class="about content">

        <div class="about_item" id="easier_said">

          <img class="about_item_img" id="easier_said_img" src="imgs/YOUNG_PULL.svg" alt="Nerd pulling on door">

          <div>

            <h2>Easier Said Than Sung</h2>

            <p>
              As a sound engineer with serious difficulties keeping my opinions to myself,
              I needed to establish some authority on the basis of which to justify shoving my opinions
              into the faces of actual recording artists. <br><br>
              <!--
              "Let's run another take, but with a bit more <em>energy</em> this time. <br>
              Does that make sense? Of course it does. Great. <br>
              Okay, Rolling." <br><br>
              For some reason, that next take still lacked the precision and clarity that it needed. <br>
              And the next take. The clock ticks, the meter runs, frustration surfaces. <br><br>
              But what can I do? It's not my fault if you can't perform your track the way it sounds in your head. <br>
              I'm just here to record what you give me. <br>
              Sure. All sorts of analog and digital <em>processing</em> can be applied to the recording after the fact, but this will
              introduce unexpected <em>color</em> and a result that just isn't the same as an outright inspired performace. <br><br>
              Halfway through the session, we are still missing those crucial three decibels around four kilohertz. <br>
              But how the hell do you tease those three decibels out of an artist without turning their session into an episode of <em>Bill Nye the Science Guy?</em> <br>
              Maybe this time I'll tell them to do it with more <em>Atitude.</em> <br><br>
              This could only go on so long. <br>
              As fulfilling as it was, claiming status and power on the basis of some shiny gear, it was time for a reality sandwich. <br>
              Telling someone again and again that they could be doing something better-without being able to demonstrate how or why-gets old. <br>
              -->
              I decided the only thing for it was to step out of my comfort zone. <br>
              I needed to climb down from my pulpit at the console and get in front of a microphone.
              I needed experience.<br><br>
              But the first thing I experienced in front of the mic was speechlessness. <br>
              Was I cured of my inability to shut up already? <br><br>
              Unfortunately (for anyone still willing to work with me) I didn't give up so easily. <br>
              But I did have to concede that coming up with something worth recording is a daunting task in itself.
            </p>
          </div>

          <!-- <img class="about_item_img" id="easier_said_img" src="imgs/YOUNG_PULL.JPG" alt="Nerd pulling on door"> -->

        </div>

        <!--
        <div class="about_item" id="about_item_2">

          <p>
            But the first thing I experienced in front of the mic was speechlessness. <br>
            Was I cured of my inability to shut up already? <br>
            Unfortunately (for anyone still willing to work with me) I didn't give up so easily. <br>
            But I did have to concede that coming up with something worth recording is a daunting task in itself.
          </p>

        </div>
        -->
        <div class="about_item" id="ancient_traces">

          <div>

            <h2>Ancient Traces</h2>

            <img class="sacred_symbol" src="imgs/LATE.svg" alt="Sacred semiotics" />

            <p>
              I turned to a three-year-old field recording that I found on an old hard drive. <br>
              It was accompanied by a note in which my younger self vowed to claim poetic revenge. <br>
              The audio file was a recording of one of those traffic lights, tricked out with audio <br>
              to assist blind people &mdash; though I'm certain that
              this one mostly saved clueless students, drifting towards the curb with their faces glued to some screen. <br><br>
              "Wait... Wait... Wait..." <br><br>
              To the more alert pedestrians, it was annoying. <br>
              To a nerd like me, it was poetry.<br><br>
              Without question, my poet had a limited arsenal of literary devices and an even worse vocabulary. <br>
              But I couldn't deny that his careful diction and subtle mastery of repitition fit the meaning of his piece. <br>
              What struck me most of all, was the masked suggestiveness: I was stuck in the Mode of Being of Waiting. <br>
              Maybe a lot of us were. <br>
              Quite the critique from a traffic light!
            </p>

          </div>

        </div>
        <!--
        <div class="about_item" id="about_item_4">

          <p>
            My poet had a limited arsenal of literary devices, and an even more limited vocabulary... <br>
            But I couldn't deny that his careful diction and subtle mastery of repitition fit the meaning of his piece. <br>
            What struck me most of all, was the masked suggestiveness: I was stuck in the Mode of Being of Waiting. <br>
            Maybe a lot of us were. <br>
            Quite the critique from a traffic light!
          </p>

        </div>
      -->
        <div class="about_item" id="betrayal">

          <div>

            <h2>Betrayal</h2>

            <img class="sacred_symbol" src="imgs/FATE.svg" alt="Sacred semiotics">

            <p>
              I probably really began to appreciate it around midterms. <br>
              A time when you're forced to question the loyalty of your own two feet. <br><br>
              "You can turn around," I remind myself. <br>
              "You are a grown-ass man and can walk straight out of here." <br><br>
              "Wait," suggests the light. <br><br>
              The traitors comply. So that's how it's going to be.
            </p>

          </div>

        </div>

        <div class="about_item" id="two_birds">
          <div>

            <h2>Two Birds One Phone</h2>

            <img class="sacred_symbol" src="imgs/WAIT.svg" alt="Sacred semiotics"/>

            <p>
              Three years later the opportunity presents itself. <br>
              No more waiting. Time for some good old fashioned poetic justice. <br>
              As he twisted my feet aginst my will I will twist his words in my music. <br><br>
              Now I had something to record and if I did it right, <br>
              I might just escape that poem's cruel circling.
            </p>

          </div>

        </div>

        <div class="about_item" id="defeat">

          <img class="about_item_img" id="defeat_img" src="imgs/OLD_PULL.svg" alt="Older nerd pulling on door">

          <div>

            <h2>Defeat</h2>

            <img class="sacred_symbol" src="imgs/HATE.svg" alt="Sacred semiotics" />

            <p>
              How or when it happened, I haven't the foggiest idea. <br>
              I thought I had left it far enough in the past. <br>
              Apparently that is no way to think about it. <br>
              Though my feet, still ashamed, managed to resist his commanding tone this time around, my hand faltered. <br>
            <!--
              I scraped together the lyrics of the first track from some notes I had scrawled down my second week at school. <br>
              At the time, they seemed to fit the tone, so I went with it. <br>
              In hindsight, probably not my best strategic move. <br>
              I listened to that first track again and again until I thought I knew what had to come next. <br><br>
            -->
              The project seemed to write itself. <br>
              I convinced myself that this was creativity or inspiration or something. <br>
            <!--
              If it can be called anything like that, it was more like a Haunting In Connecticut style demon-posession. <br>
            -->
              Before my eyes,
              the calculated, spite-born plot to transcend that poem forever melted instead into a <em>thesis</em> on its central theme. <br><br>
              It became a phenomenology of Waiting.
            </p>

          </div>

        </div>

      </section>

      <!-- section to display credits -->

      <section class="content credits">

        <div class="credits_item" id="credits_title">

          <h1>Credits</h1>

          <p>
            Strangely, few people seemed to share my fascination with <em>Waiting</em> as a <em>Mode of Being.</em> <br>
            So the project had to complete itself with a small team. <br><br>
            Of course, I am still indebted to the people whose ideas I stole to make it happen. <br><br>
            Likewise, if it weren't for the mentors, friends and family who have always waited for me, <br>
            I'd still be waiting for my chance to finally make my music.
          </p>

        </div>

        <div class="credits_item">

          <h2>Calum Smeaton</h2>

          <p>Music, Digital Art & Photography</p>

        </div>

        <div class="credits_item">

          <h2>Justine Clougherty</h2>

          <p>Artwork</p>

        </div>

        <div class="credits_item">

          <h2>Louie Buchen</h2>

          <p>Web Developer, Visionary, & #1 Fan</p>

        </div>

        <div class="credits_item">

          <h2>Jess</h2>

          <p>A "pretty good muse."</p>

        </div>

        <div class="credits_item">

          <h2>Mom and Dad</h2>

          <p>For not kicking me out yet.</p>

        </div>

        <div class="credits_item">

          <h2>Sammy and Mario</h2>

          <p>Weirdos.</p>

        </div>

        <div class="credits_item">

          <h2>Stephan Fuchs</h2>

          <p>Disgruntled Quasi-Thinker.</p>

        </div>

        <div class="credits_item">

          <h2>Ben Green</h2>

          <p>Definitely a genius.</p>

        </div>

        <div class="credits_item">

          <h2>Oren Polak</h2>

          <p>Sorry I never practiced.</p>

        </div>

      </section>

      <section class="content lyrics">


        <!--header title image -->

        <!-- <div class="lyrics_container" id="content_head_container">

          <img id="content_head" src="imgs/TTWW_TITLE.jpg" alt="To Those Who Wait">

        </div> -->

        <div class="lyrics_item" id="heratic">

          <!-- <img class="lyrics_item_img" id="heartic_img" src="imgs/CREEPY_HAND.png" alt="Creepy Hand"> -->

          <div>

            <div id="heratic_title" class="song_title_container">
              <h1>The Heratic <br>(Prologue)</h1>
            </div>

            <p>
              Put fire to the future and the past is singed <br><br>
              Though its frame may creak <br>
              As its sails swirl to ashes <br>
              He will count out the oars <br>
              'Til his ghostly ship crashes <br><br>
              But what better way to the essence? <br>
              He cries! <br>
              What surer route to the heart? <br><br>
              Headlong towards the end <br>
              Determined. He waits. <br>
              To know what he had at the start <br><br>
              Does no mariner fear that his future is stone? <br>
              Such a ship can go down by her captain alone <br><br>
              Beckoning future <br>
              Shunning fate <br>
              What becomes of those who wait? <br>
            </p>
          </div>

          <!-- <img class="about_item_img" id="easier_said_img" src="imgs/YOUNG_PULL.JPG" alt="Nerd pulling on door"> -->

        </div>

        <div class="lyrics_item" id="graduate">

          <div>

            <!-- <h2>Graduate</h2> -->
            <div class="song_title_container">
                <img class="song_title" src="imgs/GRADUATE.svg" alt="Gradu-wait. Mysterious message.">
            </div>

            <div class="sacred_symbol_container">
              <img class="sacred_symbol" src="imgs/WAIT.svg" alt="Sacred semiotics"/>
            </div>

            <p>
              I 've been clingin to the side <br>
              But my arms are getting tired <br>
              Told my mama please don't cry <br>
              But I think it might be time <br>
              To let go <br><br>
              If you could hear my thoughts <br>
              Then you would know my fears <br>
              You know I'd give it all <br>
              To make them disappear <br>
              I don't wanna wait a day <br>
              I don't wanna wait a year <br>
              I want to do it now <br>
              I want to do it here <br><br>

              But I'm still clinging to the side <br>
              Justify it in my mind <br>
              You can see it in my eyes <br>
              I'm just not the type of guy <br>
              Who lets go <br><br>
              I've been clingin to the side <br>
              But my arms are getting tired <br>
              Told my mama please don't cry <br>
              But I think it might be time to let go
            </p>

          </div>

        </div>

        <div class="lyrics_item" id="glass">

          <div class="lyrics_item_img_container" id="shards_small">
            <img id="little_glass" class="lyrics_item_img" src="imgs/SHARDS_SMALL.svg" alt="Small glass shards">
          </div>


          <div>

            <!-- <h2>Glass</h2> -->
            <div class="song_title_container">
                <img class="song_title" src="imgs/GLASS.svg" alt="Glass. Occult code.">
            </div>

            <div class="sacred_symbol_container">
              <img class="sacred_symbol" src="imgs/HATE.svg" alt="Sacred semiotics" />
            </div>

            <p>
              How long will she stay <br>
              How long can this last <br>
              Always wishing time away <br>
              Wishing time wasn't so fast <br><br>
              I'm a beggar on the doorstep <br>
              I'm on the wrong side of the glass <br>
              With one foot stuck in the future <br>
              I'll keep crying for the past <br><br>
              I can hear those sirens calling <br>
              My minds slipping through the crack <br>
              When I lose my fear of falling <br>
              She always pulls me back
            </p>

          </div>

          <div class="lyrics_item_img_container" id="shards_large">
            <img id="big_glass" class="lyrics_item_img" src="imgs/SHARDS_LARGE.svg" alt="Glass shards in curious pattern.">
          </div>

        </div>

        <div class="lyrics_item" id="broken">
          <div>

            <!-- <h2>>roken</h2> -->
            <div class="song_title_container">
              <img class="song_title" src="imgs/BROKEN.svg" alt="Broken. Esocteric artifacts.">
            </div>

            <div class="sacred_symbol_container">
              <img class="sacred_symbol" src="imgs/LATE.svg" alt="Sacred semiotics" />
            </div>


            <p>
              I 've been losing my mind <br>
              I've been losing it slowly <br>
              I've been losing my mind <br>
              Trying to forget what they told me <br>
              I know I should be over it by now <br>
              I know I should have figured this shit out <br>
              So long ago <br><br>
              I went to see a magic man <br>
              And he waved his magic wand <br>
              His spell it helps them to pretend <br>
              That nothing's going wrong <br>
              But his potions won't be strong enough <br>
              When all these drugs are gone <br>
              The water's getting higher <br>
              But I'm still playing along <br><br>
              I've been losing my mind  <br>
              I've been losing it slowly <br>
              I've been losing my mind <br>
              Trying to forget what they told me <br>
              I know I should be over it by now <br>
              I know I should have figured this shit out <br>
              So long ago <br><br>

              But where will the scale tip? <br>
              The glass has long been broken <br>
              Even if I sink this ship now <br>
              The doors they won't reopen <br>
              Overflowing <br><br>
              I've been losing my mind <br>
              I've been losing it slowly <br>
              I've been losing my mind <br>
              Trying to forget what they told me <br>
              I know I should be over it by now <br>
              But I still feel lost <br>
              Within this madding crowd <br>
              Take me home
            </p>

          </div>

        </div>

        <div class="lyrics_item" id="home_song">

          <!-- <img class="about_item_img" id="defeat_img" src="imgs/OLD_PULL.JPG" alt="Older nerd pulling on door"> -->

          <div id="home_song_lyrics">

            <!-- <h2>Home</h2> -->
            <div class="song_title_container">
                <img class="song_title" src="imgs/HOME.svg" alt="HOME. Homecoming. ">
            </div>

            <div class="sacred_symbol_container" id="lyrics_fate_container">
                <img class="sacred_symbol" src="imgs/FATE.svg" alt="Sacred semiotics">
            </div>


            <p>
              So far to fall <br>
              So much to lose <br>
              Wagers wasted <br>
              I paid my youth <br><br>
              Sleepless nights <br>
              Still haunt my daydreams <br>
              Guilty pleasures <br>
              Keeping me awake <br><br>
              I tried to change <br>
              Change for you <br>
              Dout the sparks <br>
              Burn the proof <br><br>
              Sleepless nights <br>
              Still haunt my daydreams <br>
              These old ghosts <br>
              Are pulling me away <br><br>
              I let my train <br>
              Leave that station <br>
              Smothered sails <br>
              Have always pulled me through <br><br>
              But sleepless nights <br>
              Still haunt my daydreams <br>
              Stubborn ghosts <br>
              Are leading me astray <br><br>
              I tried to wait <br>
              Wait for you  <br>
              Left my wagers <br>
              On fading truths <br><br>
              Sleepless nights <br>
              Haunt my daydreams <br>
              Guilty pleasures <br>
              Keeping me awake
            </p>

          </div>


        </div>

      </section>

      <section class="support content">

        <!-- CD -->

        <div class="support_img_slider">


          <img class="support_img current_img" src="imgs/CD_FRONT.JPG">


          <img class="support_img" src="imgs/CD_BACK.JPG">

          <img class="support_img" src="imgs/CD_TTWW.JPG">

          <img class="support_img" src="imgs/CD_PHENOM.JPG">

          <img class="support_img" src="imgs/CD_INSIDE.JPG">

          <img class="support_img" src="imgs/CD_DISC.JPG">

          <img class="support_img" src="imgs/CD_BOOKLET.JPG">


          <div class="support_img_info">
            <div class="prev_arrow slider_arrow">
              <span><</span>
            </div>
            <div class="support_img_title_container">
              <h2 class="support_img_title">Project CD</h2>
            </div>
            <div class="next_arrow slider_arrow">
              <span>></span>
            </div>
            <!-- <div class="img_indicator"></div> -->
          </div>
          <div class="img_indicator_container">


            <div class="img_indicator"></div>


          </div>
        </div>


          <!-- CARD HOLDER -->

          <div class="support_img_slider">


            <img class="support_img current_img" src="imgs/CARD_HOLDER_FRONT_SMALL.JPG">


            <img class="support_img" src="imgs/CARD_HOLDER_BACK_SMALL.JPG">


            <div class="support_img_info">
              <div class="prev_arrow slider_arrow">
                <span><</span>
              </div>
              <div class="support_img_title_container">
                <h2 class="support_img_title">Card Holder</h2>
              </div>
              <div class="next_arrow slider_arrow">
                <span>></span>
              </div>
              <!-- <div class="img_indicator"></div> -->
            </div>
            <div class="img_indicator_container">


              <div class="img_indicator"></div>


            </div>
          </div>

          <!-- FACTS -->
          <!-- <div class="support_img_slider">

              <p class="support_facts">All goods handmade in my sweatshop.</p>

            <div class="support_img_info">
              <h2 class="support_img_title">Facts</h2>
            </div>
          </div> -->

          <!-- CORNER BOOKMARK -->

          <div class="support_img_slider">

            <img class="support_img" src="imgs/CORNER_BOOKMARK_FRONT_SMALL.JPG">



            <img class="support_img" src="imgs/CORNER_BOOKMARK_BACK_SMALL.JPG">



            <img class="support_img" src="imgs/BOOKMARK_FRONT_WEAVE.JPG">


            <img class="support_img" src="imgs/BOOKMARK_BACK_WEAVE.JPG">




            <img class="support_img" src="imgs/BOOKMARK_CLOSED_KAFKA.JPG">



            <div class="support_img_info">
              <div class="prev_arrow slider_arrow">
                <span><</span>
              </div>
              <div class="support_img_title_container">
                <h2 class="support_img_title">Corner Bookmark</h2>
              </div>
              <div class="next_arrow slider_arrow">
                <span>></span>
              </div>
            </div>
            <div class="img_indicator_container">
              <div class="img_indicator"></div>
            </div>
          </div>


          <!-- KEY PULL -->

          <div class="support_img_slider">

              <img class="support_img" src="imgs/KEY_PULL_FRONT_SMALL.JPG">


              <img class="support_img" src="imgs/KEY_PULL_BACK_SMALL.JPG">

              <img class="support_img" src="imgs/KEY_PULL_FRONT_BIKE.JPG">

              <img class="support_img" src="imgs/KEY_PULL_BACK_BIKE.JPG">






            <div class="support_img_info">
              <div class="prev_arrow slider_arrow">
                <span><</span>
              </div>
              <div class="support_img_title_container">
                <h2 class="support_img_title">Keychain</h2>
              </div>
              <div class="next_arrow slider_arrow">
                <span>></span>
              </div>
            </div>
            <div class="img_indicator_container">
              <div class="img_indicator"></div>
            </div>


          </div>

      </section>

      <footer class="footer">

        <h1>Dirty Mop Music</h1>
        <h1>&</h1>
        <h1>INLAE</h1>

      </footer>

    </div>

  </body>

</html>
