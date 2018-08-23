let clicks = [];
let iteration = 0;
let score = 0;
let count_user_clicks = 0;
let good_ans = 0;
let bad_ans = 0;

// variables for show sequence //
let timer = 2000;
let time_to_finish = 0;
let isShowingSequence = 0;

function rand() {
  for (i = 0; i < 1; i++) {
    let random = Math.floor((Math.random() * 4) + 1); //random number 1/4
    clicks.push(random);
  }
}

function showval(i) {
  document.getElementById(clicks[i]).style = "background-color:blue;";
}

function hideval(i) {
  document.getElementById(clicks[i]).style = "background-color:white;";
}

function checkUserInputs(current_click) {
  // user_clicks.push(0)
  if (isShowingSequence === 0) { //dont allow user to click before showing the pattern is end.
    if (clicks[count_user_clicks] == current_click) {
      // console.log("good!")
      good_ans++;
    } else {
      document.getElementById("console").innerHTML = "Bad! Watch again";
      if (bad_ans === 1) {
        document.getElementById("console").innerHTML = "Last chance !";
      }
      bad_ans++;

      if (bad_ans === 3) {
        document.getElementById("console").innerHTML = "Game Over";
        bad_ans = 0;
        score = 0;
        clicks = [];
        rand();
      }
      count_user_clicks = -1;
      good_ans = 0;
      showSequence();
    }

    count_user_clicks++;
    if (clicks.length == good_ans) {
      console.log('correct sequence!');
      score++;
      document.getElementById("console").innerHTML = "Correct sequence! Level Up!";
      count_user_clicks = 0;
      good_ans = 0;
      rand();
    showSequence();
    }
  }
}

function showSequence() {

  document.getElementById("score").innerHTML = `lvl: ${score}`;
  document.getElementById("life").innerHTML = `life: ${2-bad_ans}`;



  if (isShowingSequence == 0) { //is this sequence already showing ?
    isShowingSequence = 1;



    window.setTimeout(function() {

      document.getElementById("console").innerHTML = "2";
    }, 1000);

    window.setTimeout(function() {

      document.getElementById("console").innerHTML = "1";
    }, 1500);

    window.setTimeout(function() {

      document.getElementById("console").innerHTML = "0";
    }, 2000);
    window.setTimeout(function() {

      document.getElementById("console").innerHTML = "Go! Remember sequence.";
    }, 2500);


    for (let i = 0; clicks.length > i; i++) {
      timer = (i + 1) * 3000;
      window.setTimeout(function() {
        showval(i)
        // document.getElementById("console").innerHTML = "Focus on sequence !";
      }, timer + 2000)
      window.setTimeout(function() {
        hideval(i)
      }, timer + 500 + 2000)
      if (i == clicks.length - 1) {
        window.setTimeout(function() {
          console.log('sequence finished', timer)
          document.getElementById("console").innerHTML = "Repeat sequence"; //clear the info for player
          isShowingSequence = 0;
        }, timer + 500 + 2000)
      }
    }
  }
}

// main function game
function game() {
  rand()
  console.log(clicks)
  showSequence();
}

/* buttons one two three four */

function one() {
  checkUserInputs(1);
}

function two() {
  checkUserInputs(2);
}

function three() {
  checkUserInputs(3);
}

function four() {
  checkUserInputs(4);
}
