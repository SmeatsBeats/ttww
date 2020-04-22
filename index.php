<!DOCTYPE html>

<html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Those Who Wait</title>
    <link rel="stylesheet" href="css/ttww.css?v=47.5" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script type="text/javascript" src="js/ttww.js?v=13.33"></script>

    <!--google fonts to include -->
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet">
  </head>

  <body>

    <!-- widget section -->
    <div id="widget_boi">

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

          <img class="audio_timeline" src="imgs/AUDIO_TIMELINE.png" alt="Audio timeline indicator">

          <!-- research svg tag to create and animate timeline -->
          <img class="widget_nav" id="nav_options_img" src="imgs/WIDGET_NAV.png" alt="Widget navigation">
          <img class="widget_bezel" id="widget_bezel_img" src="imgs/WIDGET_BEZEL_SMALL.png" alt="Model watch bezel">
        </div>

        <div class="widget_function_container" id="widget_function_container">
          <div id="widget_function">

            <a id="audio_download" href="audio/TTWW_TEST_MASTER_10.wav" download>
              <div class="download_circle">
              </div>
            </a>

              <svg style="width:5%; height:50%;" class="widget_stick" id="a_stick">
                <rect width="100%" height="100%" style="fill: #999">
              </svg>

              <svg style="width:5%; height:50%;" class="widget_stick" id="b_stick">
                <rect width="100%" height="100%" style="fill: #999">
              </svg>

          </div>
        </div>

      </div>


      <!-- <h2 id="widget_mode"></h2> -->


      <!--
      <h3 id="select_audio_mode">Audio</h3>
      <h3 id="select_home_mode">Home</h3>
      <h3 id="select_download_mode">Download</h3>
      <h3 id="select_menu_mode">Menu</h3>
    -->
    </div>

    <!-- widget menu -->

    <div class="menu">
      <h2 id="about_nav">ABOUT</h2>
      <h2 id="credits_nav">CREDITS</h2>
      <h2 id="support_nav">SUPPORT</h2>
    </div>

    <section id="home">

    <!-- not sure why but I cannot set the width of this img via any other selector than img -->
      <picture id="wide_art">
        <source media="(min-width:600px)" srcset="imgs/TTWW_POSTER.jpg">
        <img id="album_art" src="imgs/TTWW_POSTER_HALF.jpg" alt="To Those Who Wait Cover Art" />
      </picture>

      <!-- allow audio to be played and downloaded -->
      <audio id="ttwwAudioFile" src="audio/TTWW_TEST_MASTER_10.wav"></audio>

    </section>

    <section class="content">


      <!--header title image -->

      <div class="about" id="content_head_container">

        <img id="content_head" src="imgs/TTWW_TITLE.jpg" alt="To Those Who Wait">

      </div>


      <div class="about" id="about_intro">

        <p>
          What began as an exercise to ease cognitive disonance,
          somehow took on a life of its own, becoming an earnest
          attempt to shed light on <em>Waiting</em> as a Mode of Being.
        </p>

      </div>

      <div class="about" id="easier_said">

        <img class="about_img" id="easier_said_img" src="imgs/YOUNG_PULL.JPG" alt="Nerd pulling on door">

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

        <!-- <img class="about_img" id="easier_said_img" src="imgs/YOUNG_PULL.JPG" alt="Nerd pulling on door"> -->

      </div>

      <!--
      <div class="about" id="about_2">

        <p>
          But the first thing I experienced in front of the mic was speechlessness. <br>
          Was I cured of my inability to shut up already? <br>
          Unfortunately (for anyone still willing to work with me) I didn't give up so easily. <br>
          But I did have to concede that coming up with something worth recording is a daunting task in itself.
        </p>

      </div>
      -->
      <div class="about" id="ancient_traces">

        <div>

          <h2>Ancient Traces</h2>

          <img class="about_symbol" src="imgs/LATE.png" alt="Sacred semiotics" />

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
      <div class="about" id="about_4">

        <p>
          My poet had a limited arsenal of literary devices, and an even more limited vocabulary... <br>
          But I couldn't deny that his careful diction and subtle mastery of repitition fit the meaning of his piece. <br>
          What struck me most of all, was the masked suggestiveness: I was stuck in the Mode of Being of Waiting. <br>
          Maybe a lot of us were. <br>
          Quite the critique from a traffic light!
        </p>

      </div>
    -->
      <div class="about" id="betrayal">

        <div>

          <h2>Betrayal</h2>

          <img class="about_symbol" src="imgs/FATE.png" alt="Sacred semiotics">

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

      <div class="about" id="two_birds">
        <div>

          <h2>Two Birds One Phone</h2>

          <img class="about_symbol" src="imgs/WAIT.png" alt="Sacred semiotics"/>

          <p>
            Three years later the opportunity presents itself. <br>
            No more waiting. Time for some good old fashioned poetic justice. <br>
            As he twisted my feet aginst my will I will twist his words in my music. <br><br>
            Now I had something to record and if I did it right, <br>
            I might just escape that poem's cruel circling.
          </p>

        </div>

      </div>

      <div class="about" id="defeat">

        <img class="about_img" id="defeat_img" src="imgs/OLD_PULL.JPG" alt="Older nerd pulling on door">

        <div>

          <h2>Defeat</h2>

          <img class="about_symbol" src="imgs/HATE.png" alt="Sacred semiotics" />

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

    <!-- should find a way to decouple this from a particular section and still have it display properly -->

    <footer class="footer">

      <h1>Dirty Mop Music</h1>
      <h1>&</h1>
      <h1>INLAE</h1>

    </footer>

    </section>

    <!-- section to display credits -->

    <section class="credits">

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


  </body>

</html>
