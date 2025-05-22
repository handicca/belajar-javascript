'use strict';
/*
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init()

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1) Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2) Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3) Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Hold score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1) Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2) Check if player's score >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the player
      switchPlayer();
      diceEl.classList.add('hidden');
    }
  }
});

btnNew.addEventListener('click', init);
*/

// Belajar Menggunakan JQuery
$(document).ready(function () {
  let currentScore, scores, activePlayer, playing;

  const init = function () {
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;

    $('.score').text(0);
    $('.current-score').text(0);
    $('.dice').addClass('hidden');
    $('.player').removeClass('player--winner');
    $('.player--0').addClass('player--active');
    $('.player--1').removeClass('player--active');
  };

  init();

  // swtich player
  const switchPlayer = function () {
    currentScore = 0;
    $(`#current--${activePlayer}`).text(currentScore);

    activePlayer = activePlayer === 0 ? 1 : 0;

    $('.player--0').toggleClass('player--active');
    $('.player--1').toggleClass('player--active');
  };

  // roll dice
  $('.btn--roll').click(function () {
    if (playing) {
      let randomDice = Math.trunc(Math.random() * 6) + 1;

      $('.dice').removeClass('hidden').attr('src', `dice-${randomDice}.png`);

      if (randomDice === 1) {
        switchPlayer();
      } else {
        currentScore += randomDice;
        $(`#current--${activePlayer}`).text(currentScore);
      }
    }
  });

  // hold score
  $('.btn--hold').click(function () {
    if (playing) {
      scores[activePlayer] += currentScore;
      $(`#score--${activePlayer}`).text(scores[activePlayer]);

      if (scores[activePlayer] >= 100) {
        playing = false;
        $('.dice').addClass('hidden');
        $(`.player--${activePlayer}`)
          .addClass('player--winner')
          .removeClass('player--active');
      } else {
        switchPlayer();
        $('.dice').addClass('hidden');
      }
    }
  });

  $('.btn--new').click(init);
});
