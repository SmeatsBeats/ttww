<!DOCTYPE html>

<html lang="en" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1">

    <title>To Those Who Wait</title>
    <link rel="icon" href="imgs/WAIT.svg">

    <link rel="stylesheet" href="css/ttww.css?v=4" type="text/css">

    <!--google fonts to include -->
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Reenie+Beanie&display=swap" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!--
    <script src="https://hammerjs.github.io/dist/hammer.js"></script>
  -->
    <script type="text/javascript" src="js/ttww.js?v=1.2"></script>
  </head>

  <body>

    <section id="home">

    <!-- not sure why but I cannot set the width of this img via any other selector than img -->
      <picture id="wide_art">
        <source media="(min-width:600px)" srcset="imgs/TTWW_POSTER.jpg">
        <img id="album_art" src="imgs/TTWW_POSTER_HALF.jpg" alt="To Those Who Wait Cover Art" />
      </picture>


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
          attempt to shed light on <span class="wait_cursor"><em>Waiting</em></span> as a Mode of Being.
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

            <!-- <img class="sacred_symbol" src="imgs/LATE_LITE.svg" alt="Sacred semiotics" /> -->

            <svg id="symbol_lite" class="sacred_symbol puzzle3_symbol" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="#999">
              <path d="M127.82,318.56v21.29h-4V318.56a19.3,19.3,0,1,0,4,0Z" transform="translate(-106.51 -318.56)"/>
            </svg>

            <p>
              I turned to a three-year-old field recording that I found on an old hard drive. <br>
              It was accompanied by a <span class="sacred_symbol" id="sacred_note">note</span> in which my younger self vowed to claim poetic revenge. <br>
              The audio file was a recording of one of those traffic lights, tricked out with audio <br>
              to assist blind people &mdash; though I'm certain that
              this one mostly saved clueless students, drifting towards the curb with their faces glued to some screen. <br><br>
              <span class="wait_cursor"> "Wait... Wait... Wait..." </span> <br><br>
              To the more alert pedestrians, it was annoying. <br>
              To a nerd like me, it was poetry.<br><br>
              Without question, my poet had a limited arsenal of literary devices and an even worse vocabulary. <br>
              But I couldn't deny that his careful diction and subtle mastery of repetition fit the meaning of his piece. <br>
              What struck me most of all, was the masked suggestiveness: I was stuck in the Mode of Being of <span class="wait_cursor"> Waiting.</span> <br>
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

            <!-- <img class="sacred_symbol" src="imgs/FATE.svg" alt="Sacred semiotics"> -->

            <svg class="sacred_symbol puzzle4_symbol" xmlns="http://www.w3.org/2000/svg" width="43.27" height="43.27" viewBox="0 0 43.27 43.27">
              <path d="M62.27,46.84a11.05,11.05,0,0,0,.56-3.55,13.59,13.59,0,0,0-4.46-9.89,14.09,14.09,0,0,0-9-4.35,9.58,9.58,0,0,0-1.26-.76,11.38,11.38,0,0,1,7-2.28,13.4,13.4,0,0,1,7.22,2.14l3.9-3.76a24.12,24.12,0,0,0-6.86-1,20.34,20.34,0,0,0-12.51,4.36,11.05,11.05,0,0,0-3.55-.56,13.59,13.59,0,0,0-9.89,4.46,14.19,14.19,0,0,0-4.35,9,9.58,9.58,0,0,0-.76,1.26,11.38,11.38,0,0,1-2.28-7,13.4,13.4,0,0,1,2.14-7.22l-3.76-3.9a24.12,24.12,0,0,0-1,6.86,20.34,20.34,0,0,0,4.36,12.51,11.05,11.05,0,0,0-.56,3.55,13.59,13.59,0,0,0,4.46,9.89,14.17,14.17,0,0,0,9,4.35,9.14,9.14,0,0,0,1.27.77,11.38,11.38,0,0,1-7,2.28,13.4,13.4,0,0,1-7.22-2.14l-3.9,3.76a24.12,24.12,0,0,0,6.86,1,20.34,20.34,0,0,0,12.51-4.36,11.05,11.05,0,0,0,3.55.56,13.59,13.59,0,0,0,9.89-4.46,14.17,14.17,0,0,0,4.35-9,9.14,9.14,0,0,0,.77-1.27,11.38,11.38,0,0,1,2.28,7,13.4,13.4,0,0,1-2.14,7.22l3.76,3.9a24.12,24.12,0,0,0,1-6.86A20.34,20.34,0,0,0,62.27,46.84ZM47,50A23.64,23.64,0,0,1,42,49.38a16,16,0,0,0,2.32-1.26c.19-.13.36-.28.55-.41a18.51,18.51,0,0,0,2.34,1.75v.08c0,.16,0,.31,0,.47ZM43,40a23.15,23.15,0,0,1,5.08.64,15.27,15.27,0,0,0-2.34,1.26c-.19.12-.35.27-.54.4a17.82,17.82,0,0,0-2.34-1.75v-.07c0-.17,0-.32,0-.48Zm0,2.1a10.17,10.17,0,0,1,1.26.91c-.28.23-.54.48-.81.73A8.1,8.1,0,0,1,43,42.08Zm.78,4.52a8.38,8.38,0,0,1-1.65.45A11.11,11.11,0,0,1,43,45.78C43.23,46.07,43.48,46.33,43.73,46.6Zm.2-1.78a8.42,8.42,0,0,1,1.25-.9,8.15,8.15,0,0,1,.89,1.25,8.33,8.33,0,0,1-1.24.9A7.19,7.19,0,0,1,43.93,44.82Zm2.67,1.45a8.1,8.1,0,0,1,.45,1.64A9.23,9.23,0,0,1,45.79,47C46.07,46.77,46.33,46.52,46.6,46.27Zm-.32-2.87A8,8,0,0,1,47.91,43a11.86,11.86,0,0,1-.9,1.26C46.78,43.92,46.52,43.66,46.28,43.4ZM40,47A23.08,23.08,0,0,1,40.62,42a15.18,15.18,0,0,0,1.26,2.33c.13.19.27.36.41.54a18,18,0,0,0-1.76,2.35h-.07l-.48,0ZM50,43A23.47,23.47,0,0,1,49.38,48a16,16,0,0,0-1.26-2.32c-.13-.19-.27-.36-.41-.54a18.51,18.51,0,0,0,1.75-2.34h.08l.47,0Zm-.91-6a24.5,24.5,0,0,0-4.47-1.17,9.09,9.09,0,0,1,.84-.79,9,9,0,0,1,2.21-1.31A14.31,14.31,0,0,1,49.1,37ZM35.78,45.37a9.09,9.09,0,0,1-.79-.84,9.31,9.31,0,0,1-1.32-2.21A14.16,14.16,0,0,1,37,40.89,24.6,24.6,0,0,0,35.78,45.37ZM40.89,53a24.6,24.6,0,0,0,4.48,1.17,9.09,9.09,0,0,1-.84.79,9.18,9.18,0,0,1-2.22,1.32A14.39,14.39,0,0,1,40.89,53Zm13.32-8.41a9.09,9.09,0,0,1,.79.84,9.31,9.31,0,0,1,1.32,2.21A14.15,14.15,0,0,1,53,49.1,24.5,24.5,0,0,0,54.21,44.63Zm6.15-4.15a9,9,0,0,1-.5,3.06A8.31,8.31,0,0,0,58.76,42a7.18,7.18,0,0,0-4.23-2.34,14.85,14.85,0,0,0-1.77-6.79A8,8,0,0,1,58,35.05,7.12,7.12,0,0,1,60.36,40.48ZM35.05,32a7.12,7.12,0,0,1,5.43-2.36,9,9,0,0,1,3.05.5A7.75,7.75,0,0,0,42,31.23a7.18,7.18,0,0,0-2.34,4.23,14.85,14.85,0,0,0-6.79,1.77A8.07,8.07,0,0,1,35.05,32ZM29.64,49.51a8.93,8.93,0,0,1,.5-3A7.75,7.75,0,0,0,31.23,48a7.18,7.18,0,0,0,4.23,2.34,14.89,14.89,0,0,0,1.76,6.78A8,8,0,0,1,32,54.94,7.12,7.12,0,0,1,29.64,49.51ZM54.94,58a7.12,7.12,0,0,1-5.43,2.36,9.05,9.05,0,0,1-3.06-.5A8.06,8.06,0,0,0,48,58.76a7.18,7.18,0,0,0,2.34-4.23,14.89,14.89,0,0,0,6.78-1.76A8,8,0,0,1,54.94,58Z" transform="translate(-23.37 -23.37)"/>
            </svg>



            <p>
              I probably really began to appreciate it around midterms. <br>
              A time when you're forced to question the loyalty of your own two feet. <br><br>
              "You can turn around," I remind myself. <br>
              "You are a grown-ass man and can walk straight out of here." <br><br>
              <span class="wait_cursor">"Wait," </span> suggests the light. <br><br>
              The traitors comply. So that's how it's going to be.
            </p>

          </div>

        </div>

        <div class="about_item" id="two_birds">
          <div>

            <h2>Two Birds One Phone</h2>

            <!-- <img class="sacred_symbol" src="imgs/WAIT.svg" alt="Sacred semiotics"/> -->

            <svg class="sacred_symbol puzzle1_symbol" xmlns="http://www.w3.org/2000/svg" width="32" height="60" viewBox="0 0 32 60">
              <defs>
                <style>
                  .cls-1 {
                    fill: none;
                  }
                </style>
              </defs>
              <g>
                <path class="cls-1" d="M19.56,42.73a9.12,9.12,0,0,0,9-9c0-3.57-1.93-6.21-4.9-8.08a61.88,61.88,0,0,0-4.83,4.27,27.5,27.5,0,0,0-6.9,9.95C13.75,42.25,17.46,42.73,19.56,42.73Z" transform="translate(-2.76 -2.59)"/>
                <path d="M17.26,44.82a18,18,0,0,0,12.32-4.4c3.27-3.1,4.77-6.43,4.77-9.91s-2.22-6.37-6-8.47l2.11-1.5H25c-.91-.34-1.86-.64-2.87-.91C24.28,17,30.71,10.15,33.93,6.45H21.82c-3.17,0-6,0-8.15-.22C13.62,5,13.56,4,13.56,3l-1.12-.38c-.27,3-.7,9.65-1.18,12.65l1.28-.32a17.13,17.13,0,0,1,1-3.59,18.94,18.94,0,0,1,5.89-.7h7.93c-2.13,2.68-6.1,7.1-8.67,9.91-3.43,0-7,0-12.63-.16a29.84,29.84,0,0,1-.27-3.81L4.58,16.2c-.21,5.14-1.34,11.25-1.82,15.64L4,31.58a42.53,42.53,0,0,1,1.4-5.2c1.28-1.07,7-1.88,11.31-2L21,24.27l1.36,0v.11l-.46.34a84.71,84.71,0,0,0-7.53,6.15c-5.57,5.41-9.64,11-9.64,17.2,0,6.59,5,10.88,13.82,10.88a21.4,21.4,0,0,0,5.9-.75c.21,1.39.27,2.14.37,3.43L26,62a92.53,92.53,0,0,1,1.12-13.61l-1.28.27c-.16,1-.86,4.93-1.24,6.54-.8.69-2.14,1.39-5,1.39-3.64,0-8.74-3-8.74-11.47,0-.4,0-.8.06-1.2A25.39,25.39,0,0,0,17.26,44.82Zm1.52-14.9a61.88,61.88,0,0,1,4.83-4.27c3,1.87,4.9,4.51,4.9,8.08a9.12,9.12,0,0,1-9,9c-2.1,0-5.81-.48-7.68-2.86A27.5,27.5,0,0,1,18.78,29.92Z" transform="translate(-2.76 -2.59)"/>
              </g>
            </svg>

            <p>
              Three years later the opportunity presents itself. <br>
              No more <span class="wait_cursor"> waiting. </span> Time for some good old fashioned poetic justice. <br>
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

            <!-- <img class="sacred_symbol" src="imgs/HATE.svg" alt="Sacred semiotics" /> -->

            <svg class="sacred_symbol puzzle2_symbol" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="58.84" height="29.37" viewBox="0 0 58.84 29.37">
              <g id="Sleeve_Inside" data-name="Sleeve Inside">
                <g class="hate-cls-1">
                  <path d="M51.94,18.92C51.7,24.05,46.8,33.3,31.45,33.6c-5-.18-9-1.08-12.21-2.78-6.29-3.38-8.52-8.28-8.52-11.9-.3-5.2,5.56-14.45,20.73-14.69C46.8,4.47,51.7,13.72,51.94,18.92ZM16.88,14c-3.08,1.94-4.47,3.57-4.29,5-.18,1.39,1.21,3,4.29,4.89s7.62,3.57,14.57,3.57S42.87,25.75,46,23.81s4.3-3.5,4-4.89c.18-1.39-.9-3-4-5s-7.55-3.5-14.5-3.5S20,12.09,16.88,14Z" transform="translate(-10.71 -4.23)"/>
                </g>
                <g class="hate-cls-1">
                  <path d="M60.91,7.83c5.5,1.51,8.64,5.37,8.64,9.91a10.67,10.67,0,0,1-3.81,6.89,8,8,0,0,1-5.62,2,14.65,14.65,0,0,1-9.41-4.68c-.18,2-1.66,3.39-3.72,5.63s-4.17,3.52-8.34,3.58c-4-.3-6.63-.84-9.11-3.68-2.84-3.08-3.6-10.19-2.27-17.08,2-5.56,3.84-5,5.35-5a2.32,2.32,0,0,1,2.24,2.42,4.46,4.46,0,0,1-.25,1.51c-.12.78.37.4-.9.94a10.34,10.34,0,0,0-3.93,4.13,10.11,10.11,0,0,0-.55,2c-1,5.5,1.71,9.72,7.45,10.62a17.07,17.07,0,0,0,6.07-.19c1.69-.61,3.46-.66,4.24-1.75a12.75,12.75,0,0,0,3.39-5.73c.3-1.87-1.68-3.74-1.68-4.89v-1h.84a15.52,15.52,0,0,0,1.75,4.11,8.73,8.73,0,0,0,7,4.59,7.28,7.28,0,0,0,5.25-1.45,6,6,0,0,0,2.3-5.08q-.45-4.35-5.44-6.89Z" transform="translate(-10.71 -4.23)"/>
                </g>
              </g>
            </svg>

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
              It became a <span class="wait_cursor">phenomenology of Waiting.</span>
            </p>

          </div>

        </div>

      </section>

      <!-- section to display credits -->

      <section class="content credits">

        <div class="credits_item credits_header" id="credits_title">

          <h1>Credits</h1>

          <p>
            Strangely, few people seemed to share my fascination with <span class="wait_cursor"><em>Waiting</em></span> as a <em>Mode of Being.</em> <br>
            So the project had to complete itself with a small team. <br><br>
            <!-- Of course, I am still indebted to the people whose ideas I stole to make it happen. <br><br>
            Likewise, if it weren't for the mentors, friends and family who have always waited for me, <br>
            I'd still be waiting for my chance to finally make my music. -->
          </p>

        </div>

        <div class="credits_item boss team credits_person">

          <h2>Calum Smeaton</h2>

          <p>Music & Website</p>

        </div>

        <div class="credits_item team credits_person">

          <h2>Justine Clougherty</h2>

          <p>Artwork</p>

        </div>

        <div class="credits_item team credits_person">

          <h2>Louie Buchen</h2>

          <p>Web Developer, Visionary, <br> & #1 Fan</p>

        </div>

        <!-- <div class="credits_item">
          <p>
            Of course, I am still indebted to the people whose ideas I stole to make it happen.
          </p>
        </div> -->

        <!-- <div class="credits_item">

          <h2>Stephan Fuchs</h2>

          <p>Disgruntled Quasi-Thinker.</p>

        </div> -->

        <div class="credits_item credits_header">

          <h1>Thank You</h1>

          <p>
            Of course, I am still indebted to the people <br>
            whose ideas I stole to make it happen.<br> <br>
            Likewise, if it weren't for the mentors, friends and family <br>
            who have always <span class="wait_cursor"> waited </span> for me, <br>
            I'd still be <span class="wait_cursor"> waiting </span> for my chance to finally make my music.
          </p>
        </div>

        <div class="credits_item credits_person">

          <h2>Jess</h2>

          <p>A "pretty good muse."</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Mom & Dad</h2>

          <p>For not kicking me out yet.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Sammy & Mario</h2>

          <p>For not listening to me.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>The Hunter Watson Fund</h2>

          <p>Without which this would've been recorded on my toaster.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Stephan Fuchs</h2>

          <p>The mountain GOAT.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Ben Green</h2>

          <p>Definitely a genius.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Oren Polak</h2>

          <p>Sorry I never practiced.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Michael Rasbury & Wren Curtis</h2>

          <p>For dragging me out of the studio.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Swaggy D</h2>

          <p>Roommates are closer than brothers.</p>

        </div>

        <div class="credits_item credits_person">

          <h2>Rae Blumberg</h2>

          <p>Whose first language is adventure.</p>

        </div>


        <div class="credits_item credits_person">

          <h2>Jeff Decker</h2>

          <p>Sorry I never practiced.</p>

        </div>

        <div class="credits_item credits_person last_person">

          <h2>Kraus, Yah, & Laith</h2>

          <p>For not letting me sell them CD players.</p>

        </div>

        <!-- <div class="credits_item credits_person last_person">

          <h2>Neighbors</h2>

          <p>Sorry I occasionally practiced.</p>

        </div> -->

      </section>

      <section class="content songs">


        <!--header title image -->

        <!-- <div class="lyrics_container" id="content_head_container">

          <img id="content_head" src="imgs/TTWW_TITLE.jpg" alt="To Those Who Wait">

        </div> -->

        <div class="songs_item" id="heratic">

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
              Determined. He <span class="wait_cursor"> waits. </span> <br>
              To know what he had at the start <br><br>
              Does no mariner fear that his future is stone? <br>
              Such a ship can go down by her captain alone <br><br>
              Beckoning future <br>
              Shunning fate <br>
              What becomes of those who <span class="wait_cursor"> wait? </span> <br>
            </p>

          </div>

          <!-- <img class="about_item_img" id="easier_said_img" src="imgs/YOUNG_PULL.JPG" alt="Nerd pulling on door"> -->

        </div>

        <div class="songs_item" id="graduate">

          <div>

            <!-- <h2>Graduate</h2> -->
            <div class="song_title_container">
                <img class="song_title" src="imgs/GRADUATE.svg" alt="Gradu-wait. Mysterious message.">
            </div>

            <div class="sacred_symbol_container">

              <!-- <img class="sacred_symbol" src="imgs/WAIT.svg" alt="Sacred semiotics"/> -->

              <svg class="sacred_symbol puzzle1_symbol" xmlns="http://www.w3.org/2000/svg" width="32" height="60" viewBox="0 0 32 60">
                <defs>
                  <style>
                    .cls-1 {
                      fill: none;
                    }
                  </style>
                </defs>
                <g>
                  <path class="cls-1" d="M19.56,42.73a9.12,9.12,0,0,0,9-9c0-3.57-1.93-6.21-4.9-8.08a61.88,61.88,0,0,0-4.83,4.27,27.5,27.5,0,0,0-6.9,9.95C13.75,42.25,17.46,42.73,19.56,42.73Z" transform="translate(-2.76 -2.59)"/>
                  <path d="M17.26,44.82a18,18,0,0,0,12.32-4.4c3.27-3.1,4.77-6.43,4.77-9.91s-2.22-6.37-6-8.47l2.11-1.5H25c-.91-.34-1.86-.64-2.87-.91C24.28,17,30.71,10.15,33.93,6.45H21.82c-3.17,0-6,0-8.15-.22C13.62,5,13.56,4,13.56,3l-1.12-.38c-.27,3-.7,9.65-1.18,12.65l1.28-.32a17.13,17.13,0,0,1,1-3.59,18.94,18.94,0,0,1,5.89-.7h7.93c-2.13,2.68-6.1,7.1-8.67,9.91-3.43,0-7,0-12.63-.16a29.84,29.84,0,0,1-.27-3.81L4.58,16.2c-.21,5.14-1.34,11.25-1.82,15.64L4,31.58a42.53,42.53,0,0,1,1.4-5.2c1.28-1.07,7-1.88,11.31-2L21,24.27l1.36,0v.11l-.46.34a84.71,84.71,0,0,0-7.53,6.15c-5.57,5.41-9.64,11-9.64,17.2,0,6.59,5,10.88,13.82,10.88a21.4,21.4,0,0,0,5.9-.75c.21,1.39.27,2.14.37,3.43L26,62a92.53,92.53,0,0,1,1.12-13.61l-1.28.27c-.16,1-.86,4.93-1.24,6.54-.8.69-2.14,1.39-5,1.39-3.64,0-8.74-3-8.74-11.47,0-.4,0-.8.06-1.2A25.39,25.39,0,0,0,17.26,44.82Zm1.52-14.9a61.88,61.88,0,0,1,4.83-4.27c3,1.87,4.9,4.51,4.9,8.08a9.12,9.12,0,0,1-9,9c-2.1,0-5.81-.48-7.68-2.86A27.5,27.5,0,0,1,18.78,29.92Z" transform="translate(-2.76 -2.59)"/>
                </g>
              </svg>

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
              I don't wanna <span class="wait_cursor"> wait </span> a day <br>
              I don't wanna <span class="wait_cursor"> wait </span> a year <br>
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

        <div class="songs_item" id="glass">

          <div class="songs_item_img_container" id="shards_small">
            <img id="little_glass" class="songs_item_img" src="imgs/SHARDS_SMALL.svg" alt="Small glass shards">
          </div>


          <div>

            <!-- <h2>Glass</h2> -->
            <div class="song_title_container">
                <img class="song_title" src="imgs/GLASS.svg" alt="Glass. Occult code.">
            </div>

            <div class="sacred_symbol_container">
              <!-- <img class="sacred_symbol" src="imgs/HATE.svg" alt="Sacred semiotics" /> -->

              <svg class="sacred_symbol puzzle2_symbol" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="58.84" height="29.37" viewBox="0 0 58.84 29.37">
                <g id="Sleeve_Inside" data-name="Sleeve Inside">
                  <g class="hate-cls-1">
                    <path d="M51.94,18.92C51.7,24.05,46.8,33.3,31.45,33.6c-5-.18-9-1.08-12.21-2.78-6.29-3.38-8.52-8.28-8.52-11.9-.3-5.2,5.56-14.45,20.73-14.69C46.8,4.47,51.7,13.72,51.94,18.92ZM16.88,14c-3.08,1.94-4.47,3.57-4.29,5-.18,1.39,1.21,3,4.29,4.89s7.62,3.57,14.57,3.57S42.87,25.75,46,23.81s4.3-3.5,4-4.89c.18-1.39-.9-3-4-5s-7.55-3.5-14.5-3.5S20,12.09,16.88,14Z" transform="translate(-10.71 -4.23)"/>
                  </g>
                  <g class="hate-cls-1">
                    <path d="M60.91,7.83c5.5,1.51,8.64,5.37,8.64,9.91a10.67,10.67,0,0,1-3.81,6.89,8,8,0,0,1-5.62,2,14.65,14.65,0,0,1-9.41-4.68c-.18,2-1.66,3.39-3.72,5.63s-4.17,3.52-8.34,3.58c-4-.3-6.63-.84-9.11-3.68-2.84-3.08-3.6-10.19-2.27-17.08,2-5.56,3.84-5,5.35-5a2.32,2.32,0,0,1,2.24,2.42,4.46,4.46,0,0,1-.25,1.51c-.12.78.37.4-.9.94a10.34,10.34,0,0,0-3.93,4.13,10.11,10.11,0,0,0-.55,2c-1,5.5,1.71,9.72,7.45,10.62a17.07,17.07,0,0,0,6.07-.19c1.69-.61,3.46-.66,4.24-1.75a12.75,12.75,0,0,0,3.39-5.73c.3-1.87-1.68-3.74-1.68-4.89v-1h.84a15.52,15.52,0,0,0,1.75,4.11,8.73,8.73,0,0,0,7,4.59,7.28,7.28,0,0,0,5.25-1.45,6,6,0,0,0,2.3-5.08q-.45-4.35-5.44-6.89Z" transform="translate(-10.71 -4.23)"/>
                  </g>
                </g>
              </svg>

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

          <div class="songs_item_img_container" id="shards_large">
            <img id="big_glass" class="songs_item_img" src="imgs/SHARDS_LARGE.svg" alt="Glass shards in curious pattern.">
          </div>

        </div>

        <div class="songs_item" id="broken">
          <div>

            <!-- <h2>>roken</h2> -->
            <div class="song_title_container">
              <img class="song_title" src="imgs/BROKEN.svg" alt="Broken. Esocteric artifacts.">
            </div>

            <div class="sacred_symbol_container">
              <!-- <img class="sacred_symbol" src="imgs/LATE.svg" alt="Sacred semiotics" /> -->

              <svg class="sacred_symbol puzzle3_symbol" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <path d="M127.82,318.56v21.29h-4V318.56a19.3,19.3,0,1,0,4,0Z" transform="translate(-106.51 -318.56)"/>
              </svg>
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

        <div class="songs_item" id="home_song">

          <!-- <img class="about_item_img" id="defeat_img" src="imgs/OLD_PULL.JPG" alt="Older nerd pulling on door"> -->

          <div id="home_song_songs">

            <!-- <h2>Home</h2> -->
            <div class="song_title_container">
                <img class="song_title" src="imgs/HOME.svg" alt="HOME. Homecoming. ">
            </div>

            <div class="sacred_symbol_container" id="songs_fate_container">
                <!-- <img class="sacred_symbol" src="imgs/FATE.svg" alt="Sacred semiotics"> -->

                <svg class="sacred_symbol puzzle4_symbol" xmlns="http://www.w3.org/2000/svg" width="43.27" height="43.27" viewBox="0 0 43.27 43.27">
                  <path d="M62.27,46.84a11.05,11.05,0,0,0,.56-3.55,13.59,13.59,0,0,0-4.46-9.89,14.09,14.09,0,0,0-9-4.35,9.58,9.58,0,0,0-1.26-.76,11.38,11.38,0,0,1,7-2.28,13.4,13.4,0,0,1,7.22,2.14l3.9-3.76a24.12,24.12,0,0,0-6.86-1,20.34,20.34,0,0,0-12.51,4.36,11.05,11.05,0,0,0-3.55-.56,13.59,13.59,0,0,0-9.89,4.46,14.19,14.19,0,0,0-4.35,9,9.58,9.58,0,0,0-.76,1.26,11.38,11.38,0,0,1-2.28-7,13.4,13.4,0,0,1,2.14-7.22l-3.76-3.9a24.12,24.12,0,0,0-1,6.86,20.34,20.34,0,0,0,4.36,12.51,11.05,11.05,0,0,0-.56,3.55,13.59,13.59,0,0,0,4.46,9.89,14.17,14.17,0,0,0,9,4.35,9.14,9.14,0,0,0,1.27.77,11.38,11.38,0,0,1-7,2.28,13.4,13.4,0,0,1-7.22-2.14l-3.9,3.76a24.12,24.12,0,0,0,6.86,1,20.34,20.34,0,0,0,12.51-4.36,11.05,11.05,0,0,0,3.55.56,13.59,13.59,0,0,0,9.89-4.46,14.17,14.17,0,0,0,4.35-9,9.14,9.14,0,0,0,.77-1.27,11.38,11.38,0,0,1,2.28,7,13.4,13.4,0,0,1-2.14,7.22l3.76,3.9a24.12,24.12,0,0,0,1-6.86A20.34,20.34,0,0,0,62.27,46.84ZM47,50A23.64,23.64,0,0,1,42,49.38a16,16,0,0,0,2.32-1.26c.19-.13.36-.28.55-.41a18.51,18.51,0,0,0,2.34,1.75v.08c0,.16,0,.31,0,.47ZM43,40a23.15,23.15,0,0,1,5.08.64,15.27,15.27,0,0,0-2.34,1.26c-.19.12-.35.27-.54.4a17.82,17.82,0,0,0-2.34-1.75v-.07c0-.17,0-.32,0-.48Zm0,2.1a10.17,10.17,0,0,1,1.26.91c-.28.23-.54.48-.81.73A8.1,8.1,0,0,1,43,42.08Zm.78,4.52a8.38,8.38,0,0,1-1.65.45A11.11,11.11,0,0,1,43,45.78C43.23,46.07,43.48,46.33,43.73,46.6Zm.2-1.78a8.42,8.42,0,0,1,1.25-.9,8.15,8.15,0,0,1,.89,1.25,8.33,8.33,0,0,1-1.24.9A7.19,7.19,0,0,1,43.93,44.82Zm2.67,1.45a8.1,8.1,0,0,1,.45,1.64A9.23,9.23,0,0,1,45.79,47C46.07,46.77,46.33,46.52,46.6,46.27Zm-.32-2.87A8,8,0,0,1,47.91,43a11.86,11.86,0,0,1-.9,1.26C46.78,43.92,46.52,43.66,46.28,43.4ZM40,47A23.08,23.08,0,0,1,40.62,42a15.18,15.18,0,0,0,1.26,2.33c.13.19.27.36.41.54a18,18,0,0,0-1.76,2.35h-.07l-.48,0ZM50,43A23.47,23.47,0,0,1,49.38,48a16,16,0,0,0-1.26-2.32c-.13-.19-.27-.36-.41-.54a18.51,18.51,0,0,0,1.75-2.34h.08l.47,0Zm-.91-6a24.5,24.5,0,0,0-4.47-1.17,9.09,9.09,0,0,1,.84-.79,9,9,0,0,1,2.21-1.31A14.31,14.31,0,0,1,49.1,37ZM35.78,45.37a9.09,9.09,0,0,1-.79-.84,9.31,9.31,0,0,1-1.32-2.21A14.16,14.16,0,0,1,37,40.89,24.6,24.6,0,0,0,35.78,45.37ZM40.89,53a24.6,24.6,0,0,0,4.48,1.17,9.09,9.09,0,0,1-.84.79,9.18,9.18,0,0,1-2.22,1.32A14.39,14.39,0,0,1,40.89,53Zm13.32-8.41a9.09,9.09,0,0,1,.79.84,9.31,9.31,0,0,1,1.32,2.21A14.15,14.15,0,0,1,53,49.1,24.5,24.5,0,0,0,54.21,44.63Zm6.15-4.15a9,9,0,0,1-.5,3.06A8.31,8.31,0,0,0,58.76,42a7.18,7.18,0,0,0-4.23-2.34,14.85,14.85,0,0,0-1.77-6.79A8,8,0,0,1,58,35.05,7.12,7.12,0,0,1,60.36,40.48ZM35.05,32a7.12,7.12,0,0,1,5.43-2.36,9,9,0,0,1,3.05.5A7.75,7.75,0,0,0,42,31.23a7.18,7.18,0,0,0-2.34,4.23,14.85,14.85,0,0,0-6.79,1.77A8.07,8.07,0,0,1,35.05,32ZM29.64,49.51a8.93,8.93,0,0,1,.5-3A7.75,7.75,0,0,0,31.23,48a7.18,7.18,0,0,0,4.23,2.34,14.89,14.89,0,0,0,1.76,6.78A8,8,0,0,1,32,54.94,7.12,7.12,0,0,1,29.64,49.51ZM54.94,58a7.12,7.12,0,0,1-5.43,2.36,9.05,9.05,0,0,1-3.06-.5A8.06,8.06,0,0,0,48,58.76a7.18,7.18,0,0,0,2.34-4.23,14.89,14.89,0,0,0,6.78-1.76A8,8,0,0,1,54.94,58Z" transform="translate(-23.37 -23.37)"/>
                </svg>

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
              I tried to <span class="wait_cursor"> wait </span> <br>
              <span class="wait_cursor">Wait</span> for you  <br>
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
              <!-- <span><</span> -->
              <svg class="slider_arrow_flip arrow_svg" viewBox="0 0 17 25.6">
                <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
              </svg>
            </div>
            <div class="support_img_title_container">
              <h2 class="support_img_title">Project CD</h2>
            </div>
            <div class="next_arrow slider_arrow">
              <!-- <span>></span> -->
              <svg class="arrow_svg" data-name="Layer 1" viewBox="0 0 17 25.6">
                <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
              </svg>
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
                <!-- <span><</span> -->
                <svg class="slider_arrow_flip arrow_svg" viewBox="0 0 17 25.6">
                  <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                  <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                </svg>
              </div>
              <div class="support_img_title_container">
                <h2 class="support_img_title">Card Holder</h2>
              </div>
              <div class="next_arrow slider_arrow">
                <!-- <span>></span> -->
                <svg class="arrow_svg"  viewBox="0 0 17 25.6">
                  <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                  <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                </svg>
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
                <!-- <span><</span> -->
                <svg class="slider_arrow_flip arrow_svg" viewBox="0 0 17 25.6">
                  <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                  <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                </svg>
              </div>
              <div class="support_img_title_container">
                <h2 class="support_img_title">Bookmark</h2>
              </div>
              <div class="next_arrow slider_arrow">
                <!-- <span>></span> -->
                <svg class="arrow_svg" viewBox="0 0 17 25.6">
                  <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                  <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                </svg>
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
                <!-- <span><</span> -->
                <svg class="slider_arrow_flip arrow_svg" viewBox="0 0 17 25.6">
                  <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                  <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                </svg>
              </div>
              <div class="support_img_title_container">
                <h2 class="support_img_title">Keychain</h2>
              </div>
              <div class="next_arrow slider_arrow">
                <!-- <span>></span> -->
                <svg class="arrow_svg" viewBox="0 0 17 25.6">
                  <!-- <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/> -->
                  <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                </svg>
              </div>
            </div>
            <div class="img_indicator_container">
              <div class="img_indicator"></div>
            </div>


          </div>

      </section>

      <!-- PUZZLE -->

      <section class="puzzle content">
        <div class="puzzle_item present_note">
          This was scrawled on the other side of the note:
        </div>

        <div class="puzzle_item past_note">
          4-6 <br><br>
          DE<span class="blud">at</span>h is a Choice. <br>
          lI<span class="blud">fe</span> is inDEcision.
        </div>

        <div class="puzzle_item present_note symbol_start">
          I was a big Nietzsche fanboy back then and wrote aphorisms on everything, <br class="mobile_break">
          but this one had four <span class="blud">strange symbols</span> sketched out beneath it. <br>
          I can't remember where they came from...<br><br>
          I also built the <span class="blud">song names</span> around different symbols I found on this note. <br class="mobile_break">
          At first I thought these symbols went with the others. <br>
          On further reflection, it seems I also used the note as scratch paper for <span class="blud">math</span> homework...
        </div>

        <div class="puzzle_item past_note track_puzzle" id="puzzle4">
          <div class="puzzle_symbol">
            <svg class="sacred_symbol puzzle4_symbol in_da_puzzle" xmlns="http://www.w3.org/2000/svg" width="43.27" height="43.27" viewBox="0 0 43.27 43.27">
              <path d="M62.27,46.84a11.05,11.05,0,0,0,.56-3.55,13.59,13.59,0,0,0-4.46-9.89,14.09,14.09,0,0,0-9-4.35,9.58,9.58,0,0,0-1.26-.76,11.38,11.38,0,0,1,7-2.28,13.4,13.4,0,0,1,7.22,2.14l3.9-3.76a24.12,24.12,0,0,0-6.86-1,20.34,20.34,0,0,0-12.51,4.36,11.05,11.05,0,0,0-3.55-.56,13.59,13.59,0,0,0-9.89,4.46,14.19,14.19,0,0,0-4.35,9,9.58,9.58,0,0,0-.76,1.26,11.38,11.38,0,0,1-2.28-7,13.4,13.4,0,0,1,2.14-7.22l-3.76-3.9a24.12,24.12,0,0,0-1,6.86,20.34,20.34,0,0,0,4.36,12.51,11.05,11.05,0,0,0-.56,3.55,13.59,13.59,0,0,0,4.46,9.89,14.17,14.17,0,0,0,9,4.35,9.14,9.14,0,0,0,1.27.77,11.38,11.38,0,0,1-7,2.28,13.4,13.4,0,0,1-7.22-2.14l-3.9,3.76a24.12,24.12,0,0,0,6.86,1,20.34,20.34,0,0,0,12.51-4.36,11.05,11.05,0,0,0,3.55.56,13.59,13.59,0,0,0,9.89-4.46,14.17,14.17,0,0,0,4.35-9,9.14,9.14,0,0,0,.77-1.27,11.38,11.38,0,0,1,2.28,7,13.4,13.4,0,0,1-2.14,7.22l3.76,3.9a24.12,24.12,0,0,0,1-6.86A20.34,20.34,0,0,0,62.27,46.84ZM47,50A23.64,23.64,0,0,1,42,49.38a16,16,0,0,0,2.32-1.26c.19-.13.36-.28.55-.41a18.51,18.51,0,0,0,2.34,1.75v.08c0,.16,0,.31,0,.47ZM43,40a23.15,23.15,0,0,1,5.08.64,15.27,15.27,0,0,0-2.34,1.26c-.19.12-.35.27-.54.4a17.82,17.82,0,0,0-2.34-1.75v-.07c0-.17,0-.32,0-.48Zm0,2.1a10.17,10.17,0,0,1,1.26.91c-.28.23-.54.48-.81.73A8.1,8.1,0,0,1,43,42.08Zm.78,4.52a8.38,8.38,0,0,1-1.65.45A11.11,11.11,0,0,1,43,45.78C43.23,46.07,43.48,46.33,43.73,46.6Zm.2-1.78a8.42,8.42,0,0,1,1.25-.9,8.15,8.15,0,0,1,.89,1.25,8.33,8.33,0,0,1-1.24.9A7.19,7.19,0,0,1,43.93,44.82Zm2.67,1.45a8.1,8.1,0,0,1,.45,1.64A9.23,9.23,0,0,1,45.79,47C46.07,46.77,46.33,46.52,46.6,46.27Zm-.32-2.87A8,8,0,0,1,47.91,43a11.86,11.86,0,0,1-.9,1.26C46.78,43.92,46.52,43.66,46.28,43.4ZM40,47A23.08,23.08,0,0,1,40.62,42a15.18,15.18,0,0,0,1.26,2.33c.13.19.27.36.41.54a18,18,0,0,0-1.76,2.35h-.07l-.48,0ZM50,43A23.47,23.47,0,0,1,49.38,48a16,16,0,0,0-1.26-2.32c-.13-.19-.27-.36-.41-.54a18.51,18.51,0,0,0,1.75-2.34h.08l.47,0Zm-.91-6a24.5,24.5,0,0,0-4.47-1.17,9.09,9.09,0,0,1,.84-.79,9,9,0,0,1,2.21-1.31A14.31,14.31,0,0,1,49.1,37ZM35.78,45.37a9.09,9.09,0,0,1-.79-.84,9.31,9.31,0,0,1-1.32-2.21A14.16,14.16,0,0,1,37,40.89,24.6,24.6,0,0,0,35.78,45.37ZM40.89,53a24.6,24.6,0,0,0,4.48,1.17,9.09,9.09,0,0,1-.84.79,9.18,9.18,0,0,1-2.22,1.32A14.39,14.39,0,0,1,40.89,53Zm13.32-8.41a9.09,9.09,0,0,1,.79.84,9.31,9.31,0,0,1,1.32,2.21A14.15,14.15,0,0,1,53,49.1,24.5,24.5,0,0,0,54.21,44.63Zm6.15-4.15a9,9,0,0,1-.5,3.06A8.31,8.31,0,0,0,58.76,42a7.18,7.18,0,0,0-4.23-2.34,14.85,14.85,0,0,0-1.77-6.79A8,8,0,0,1,58,35.05,7.12,7.12,0,0,1,60.36,40.48ZM35.05,32a7.12,7.12,0,0,1,5.43-2.36,9,9,0,0,1,3.05.5A7.75,7.75,0,0,0,42,31.23a7.18,7.18,0,0,0-2.34,4.23,14.85,14.85,0,0,0-6.79,1.77A8.07,8.07,0,0,1,35.05,32ZM29.64,49.51a8.93,8.93,0,0,1,.5-3A7.75,7.75,0,0,0,31.23,48a7.18,7.18,0,0,0,4.23,2.34,14.89,14.89,0,0,0,1.76,6.78A8,8,0,0,1,32,54.94,7.12,7.12,0,0,1,29.64,49.51ZM54.94,58a7.12,7.12,0,0,1-5.43,2.36,9.05,9.05,0,0,1-3.06-.5A8.06,8.06,0,0,0,48,58.76a7.18,7.18,0,0,0,2.34-4.23,14.89,14.89,0,0,0,6.78-1.76A8,8,0,0,1,54.94,58Z" transform="translate(-23.37 -23.37)"/>
            </svg>
          </div>

          <div class="puzzle_img">
            <div class="puzzle_r1 puzzle_row">
              <span class="puzzle_corner">F</span>
              <span class="puzzle_8"><span class="puzzle_8_text">8</span></span>
            </div>
            <div class="puzzle_r2 puzzle_row">
              <div class="puzzle_left">
                <span>o</span>
                <span>r</span>
              </div>
              <span class="puzzle_inside">Decide</span>
            </div>
          </div>

          <div class="puzzle_input">
            <input type="text" id="guess4" name="guess4" placeholder='Ask for a "hint" anytime.'>
          </div>
        </div>

        <div class="puzzle_item past_note track_puzzle" id="puzzle3">
          <div class="puzzle_symbol">
            <svg class="sacred_symbol puzzle3_symbol in_da_puzzle" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
              <path d="M127.82,318.56v21.29h-4V318.56a19.3,19.3,0,1,0,4,0Z" transform="translate(-106.51 -318.56)"/>
            </svg>
          </div>

          <div class="puzzle_img">
            <div class="puzzle_r1 puzzle_row">
              <span class="puzzle_corner">L</span>
              <span class="puzzle_8"><span class="puzzle_8_text">8</span></span>
            </div>
            <div class="puzzle_r2 puzzle_row">
              <div class="puzzle_left">
                <span>o</span>
                <span>n</span>
                <span>g</span>
              </div>
              <span class="puzzle_inside">Never</span>
            </div>
          </div>

          <div class="puzzle_input">
            <input type="text" id="guess3" name="guess3" placeholder='Ask for a "hint" anytime.'>
          </div>
        </div>

        <div class="puzzle_item past_note track_puzzle" id="puzzle2">
          <div class="puzzle_symbol">
            <svg class="sacred_symbol puzzle2_symbol in_da_puzzle" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="58.84" height="29.37" viewBox="0 0 58.84 29.37">
              <g id="Sleeve_Inside" data-name="Sleeve Inside">
                <g class="hate-cls-1">
                  <path d="M51.94,18.92C51.7,24.05,46.8,33.3,31.45,33.6c-5-.18-9-1.08-12.21-2.78-6.29-3.38-8.52-8.28-8.52-11.9-.3-5.2,5.56-14.45,20.73-14.69C46.8,4.47,51.7,13.72,51.94,18.92ZM16.88,14c-3.08,1.94-4.47,3.57-4.29,5-.18,1.39,1.21,3,4.29,4.89s7.62,3.57,14.57,3.57S42.87,25.75,46,23.81s4.3-3.5,4-4.89c.18-1.39-.9-3-4-5s-7.55-3.5-14.5-3.5S20,12.09,16.88,14Z" transform="translate(-10.71 -4.23)"/>
                </g>
                <g class="hate-cls-1">
                  <path d="M60.91,7.83c5.5,1.51,8.64,5.37,8.64,9.91a10.67,10.67,0,0,1-3.81,6.89,8,8,0,0,1-5.62,2,14.65,14.65,0,0,1-9.41-4.68c-.18,2-1.66,3.39-3.72,5.63s-4.17,3.52-8.34,3.58c-4-.3-6.63-.84-9.11-3.68-2.84-3.08-3.6-10.19-2.27-17.08,2-5.56,3.84-5,5.35-5a2.32,2.32,0,0,1,2.24,2.42,4.46,4.46,0,0,1-.25,1.51c-.12.78.37.4-.9.94a10.34,10.34,0,0,0-3.93,4.13,10.11,10.11,0,0,0-.55,2c-1,5.5,1.71,9.72,7.45,10.62a17.07,17.07,0,0,0,6.07-.19c1.69-.61,3.46-.66,4.24-1.75a12.75,12.75,0,0,0,3.39-5.73c.3-1.87-1.68-3.74-1.68-4.89v-1h.84a15.52,15.52,0,0,0,1.75,4.11,8.73,8.73,0,0,0,7,4.59,7.28,7.28,0,0,0,5.25-1.45,6,6,0,0,0,2.3-5.08q-.45-4.35-5.44-6.89Z" transform="translate(-10.71 -4.23)"/>
                </g>
              </g>
            </svg>
          </div>

          <div class="puzzle_img">
            <div class="puzzle_r1 puzzle_row">
              <span class="puzzle_corner">H</span>
              <span class="puzzle_8"><span class="puzzle_8_text">8</span></span>
            </div>
            <div class="puzzle_r2 puzzle_row">
              <div class="puzzle_left">
                <span>o</span>
                <span>w</span>
              </div>
              <span class="puzzle_inside">Love</span>
            </div>
          </div>

          <div class="puzzle_input">
            <input type="text" id="guess2" name="guess2" placeholder='Ask for a "hint" anytime.'>
          </div>
        </div>

        <div class="puzzle_item past_note track_puzzle" id="puzzle1">
          <div class="puzzle_symbol">
            <svg class="sacred_symbol puzzle1_symbol in_da_puzzle" xmlns="http://www.w3.org/2000/svg" width="32" height="60" viewBox="0 0 32 60">
              <defs>
                <style>
                  .cls-1 {
                    fill: none;
                  }
                </style>
              </defs>
              <g>
                <path class="cls-1" d="M19.56,42.73a9.12,9.12,0,0,0,9-9c0-3.57-1.93-6.21-4.9-8.08a61.88,61.88,0,0,0-4.83,4.27,27.5,27.5,0,0,0-6.9,9.95C13.75,42.25,17.46,42.73,19.56,42.73Z" transform="translate(-2.76 -2.59)"/>
                <path d="M17.26,44.82a18,18,0,0,0,12.32-4.4c3.27-3.1,4.77-6.43,4.77-9.91s-2.22-6.37-6-8.47l2.11-1.5H25c-.91-.34-1.86-.64-2.87-.91C24.28,17,30.71,10.15,33.93,6.45H21.82c-3.17,0-6,0-8.15-.22C13.62,5,13.56,4,13.56,3l-1.12-.38c-.27,3-.7,9.65-1.18,12.65l1.28-.32a17.13,17.13,0,0,1,1-3.59,18.94,18.94,0,0,1,5.89-.7h7.93c-2.13,2.68-6.1,7.1-8.67,9.91-3.43,0-7,0-12.63-.16a29.84,29.84,0,0,1-.27-3.81L4.58,16.2c-.21,5.14-1.34,11.25-1.82,15.64L4,31.58a42.53,42.53,0,0,1,1.4-5.2c1.28-1.07,7-1.88,11.31-2L21,24.27l1.36,0v.11l-.46.34a84.71,84.71,0,0,0-7.53,6.15c-5.57,5.41-9.64,11-9.64,17.2,0,6.59,5,10.88,13.82,10.88a21.4,21.4,0,0,0,5.9-.75c.21,1.39.27,2.14.37,3.43L26,62a92.53,92.53,0,0,1,1.12-13.61l-1.28.27c-.16,1-.86,4.93-1.24,6.54-.8.69-2.14,1.39-5,1.39-3.64,0-8.74-3-8.74-11.47,0-.4,0-.8.06-1.2A25.39,25.39,0,0,0,17.26,44.82Zm1.52-14.9a61.88,61.88,0,0,1,4.83-4.27c3,1.87,4.9,4.51,4.9,8.08a9.12,9.12,0,0,1-9,9c-2.1,0-5.81-.48-7.68-2.86A27.5,27.5,0,0,1,18.78,29.92Z" transform="translate(-2.76 -2.59)"/>
              </g>
            </svg>
          </div>

          <div class="puzzle_img">
            <div class="puzzle_r1 puzzle_row">
              <span class="puzzle_corner">W</span>
              <span class="puzzle_8"><span class="puzzle_8_text">8</span></span>
            </div>
            <div class="puzzle_r2 puzzle_row">
              <div class="puzzle_left">
                <span>a</span>
                <span>i</span>
                <span>t</span>
              </div>
              <span class="puzzle_inside">Wait</span>
            </div>
          </div>

          <div class="puzzle_input">
            <input type="text" id="guess1" name="guess1" placeholder='Ask for a "hint" anytime.'>
          </div>
        </div>

        <div class="puzzle_item present_note">
          It looks like I was working on something else towards the bottom of the page. <br class="mobile_break">
          The words were scratched out several times, but I can still make out the structure:
        </div>

        <div class="puzzle_item past_note unfinished_aphorism">
          <div class="unfinished_container">
            <div class="unfinished_row1">
              <span class="blank1 blank">blank</span> <span class="blank4 blank">blank</span> <span class="blank2 blank">blank</span> <span class="blank3 blank">blank</span><span class="blank blank_punc">?</span>
            </div>
            <div class="unfinished_row2">
              <span class="blank1 blank">blank</span> <span class="blank2 blank">blank</span> <span class="blank3 blank">blank</span> <span class="blank4 blank">blank</span><span class="blank blank_punc">.</span>
            </div>
          </div>
        </div>

      </section>

      <footer class="footer">

        <h1>Dirty Mop Music</h1>
        <h1>&</h1>
        <h1>INLAE</h1>

      </footer>

    </div>

    <!-- /////////////////////////////////////////////////////////////////////// CONSTANTS //////////////////////////////////////////////////////////////// -->

        <div class="tip_top">
          <!-- this div will be used as a reference as the top of the page -->
        </div>

        <div class="acousmatic_curtain">

        </div>

        <div class="menu_curtain">

        </div>

        <div class="death_to_webkit">

        </div>

        <div class="test_mobile">
          <!-- use css media queries on this div then check result in jquery to test for mobile device -->
        </div>

        <div class="audio_control">

          <!-- allow audio to be played and downloaded -->
          <audio controls id="ttwwAudioFile" src="audio/TO_THOSE_WHO_W8.wav"></audio>

        </div>

        <!-- note hint -->
        <div class="note_hint">
          <p class="note_hint_content">
            Looks like part of an old note...
          </p>
        </div>

        <!--download page -->

        <div class="download_options" id="download_menu">

          <div class="download_option" id="download_instructions">
            <span class="download_instructions">
              Select tracks to download.
            </span>
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

            <span id="intro_done_button" class="cl-effect-18">SKIP</span>
            <span id="got_it_button">Got It</span>

            <div class="intro_load_bar">

            </div>
            <div class="intro_done_bar">
              DONE
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
              <!--
              <img class="audio_timeline" src="imgs/WIDGET_TIMELINE.svg" alt="Audio timeline indicator">
            -->

              <!-- research svg tag to create and animate timeline -->

              <!-- AUDIO TIMELINE -->

              <svg class="audio_progress" xmlns="http://www.w3.org/2000/svg">
                <circle id="timeline_hilight" cx="50%" cy="50%" r="48%">
              </svg>

              <svg class="audio_indicator" xmlns="http://www.w3.org/2000/svg">
                <circle id="timeline_progress" cx="50%" cy="50%" r="48%">
              </svg>

              <!-- FF RW -->
              <div class="ffrw" id="ffrw_container">
                <!-- <span id="rw"><<</span>
                <span id="ff">>></span> -->
                <div>
                  <!--
                  <img id="rw" src="imgs/FF_RW_ICON_3.svg" alt="Next Track">
                -->

                  <svg id="rw" class="rw_component ffrw_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="17" height="25.6" viewBox="0 0 17 25.6">
                    <polygon class="ffrw_icon_dark rw_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/>
                    <polygon class="ffrw_icon_light rw_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                  </svg>

                </div>
                <div>
                  <!--
                  <img id="ff" src="imgs/FF_RW_ICON_3.svg" alt="Previous Track">
                -->
                  <svg id="ff" class="ff_component ffrw_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="17" height="25.6" viewBox="0 0 17 25.6">
                    <polygon class="ffrw_icon_dark ff_component" points="6.85 2.84 6.86 3.46 14.57 12.29 7.09 21.72 7.1 22.68 17 12.41 6.85 2.84"/>
                    <polygon class="ffrw_icon_light ff_component" points="0 0 0.01 0.79 9.97 12.2 0.31 24.37 0.32 25.6 13.11 12.36 0 0"/>
                  </svg>
                </div>
              </div>

              <!-- current time -->

              <div class="time_box">
                <span class="current_time"></span>
              </div>

              <!--
              <img class="widget_nav" id="nav_options_img" src="imgs/WIDGET_NAV.svg" alt="Widget navigation">
            -->
              <svg class="widget_nav" id="nav_options_img" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="52.12" height="51.85" viewBox="0 0 52.12 51.85">

                <g id="new_nav" data-name="new nav">
                  <path class="widget_nav_path" id="widget_nav_1" d="M25.56,7.48V3.33A22.85,22.85,0,0,0,3.24,25.67H7.39A18.68,18.68,0,0,1,25.56,7.48Z"/>
                  <path class="widget_nav_path" id="widget_nav_2" d="M25.56,49V44.87A18.7,18.7,0,0,1,7.39,26.67H3.24A22.84,22.84,0,0,0,25.56,49Z"/>
                  <path class="widget_nav_path" id="widget_nav_3" d="M26.56,44.87V49A22.86,22.86,0,0,0,48.93,26.67H44.78A18.69,18.69,0,0,1,26.56,44.87Z"/>
                  <path class="widget_nav_path" id="widget_nav_selected" d="M26.56,3.33V7.47a18.7,18.7,0,0,1,18.22,18.2h4.15A22.86,22.86,0,0,0,26.56,3.33Z"/>
                </g>
              </svg>

              <!-- <img class="widget_nav" id="nav_options_dark" src="imgs/WIDGET_NAV_DARK.svg" alt="Widget navigation"> -->
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

              <div class="toolTip" id="context_hint">
                <span id="hint_content">Hi There</span>
                <span id="hinticator"></span>
              </div>

              <div id="widget_function">

                  <!-- <svg style="width:8px; height:60px;" class="widget_stick no_select" id="a_stick"> -->
                  <svg class="widget_stick no_select" id="a_stick">
                    <rect width="100%" height="100%">
                  </svg>

                  <!-- <svg style="width:8px; height:60px;" class="widget_stick no_select" id="b_stick"> -->
                  <svg class="widget_stick no_select" id="b_stick">
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
            <h2 class="menu_nav cl-effect-1" id="songs_nav">SONGS</h2>
          </div>
          <div class="menu_bottom">
            <h2 class="menu_nav cl-effect-1" id="credits_nav">CREDITS</h2>
            <h2 class="menu_nav cl-effect-1" id="support_nav">SUPPORT</h2>
          </div>
        </div>

        <!-- HELP -->
        <div class="big_help">


          <div class="help_icon help">?</div>
          <div class="help_container help">

              <div class="help_content help">
                <span id="help_text">Turn ON tooltips</span>
              </div>
            </div>
        </div>

  </body>

</html>
