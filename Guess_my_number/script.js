'use strict';
// let number = document.getElementsByClassName('number')[0]; // ? or random()*20

// let input = document.getElementsByClassName('guess')[0];

// let check = document.getElementsByClassName('check')[0];

// let message = document.getElementsByClassName('message')[0];

// let score_div = document.getElementsByClassName('score')[0];
// let highsScore = document.getElementsByClassName('highscore')[0];

// check.onclick = checkValue;

// let answer = generateRandom();

// let score = {
//   score: 20,
//   highscore: 0,
// };

// function checkValue() {
//   let value = parseInt(document.getElementsByClassName('guess')[0].value);
//   //Start guessing...
//   // message.innerHTML = value;
//   //number.innerHTML = value;

//   if (value === answer) {
//     message.innerHTML = 'Congratulation!';
//     if (score.highscore < score.score) score.highscore = score.score;
//     highsScore.innerHTML = score.highscore;
//     number.innerHTML = value;
//     document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347';
//   } else if (value > answer) {
//     message.innerHTML = 'Too High!';
//     score.score--;
//   } else if (value < answer) {
//     message.innerHTML = 'Too low!';
//     score.score--;
//   } else if (score.score < 0) {
//     score.score = 0;
//     message.innerHTML = 'you lost the Game';
//   }

//   //score.score = answer === value ? (score.score += 1) : (score.score -= 1);
//   score_div.innerHTML = score.score;
//   console.log(value, answer, score, 'checking');
// }
// let again = document.getElementsByClassName('again')[0];
// again.onclick = reset;

// function reset() {
//   score_div.innerHTML = 20;
//   message.innerHTML = 'Start guessing...';
//   number.innerHTML = '?';
//   document.getElementsByTagName('body')[0].style.backgroundColor = '#222';
// }

// function generateRandom() {
//   return Math.floor(Math.random() * 20);
// }

// --------------------------------------------------

// --------------------------------------------------

// --------------------------------------------------

// const x = function () {
//   console.log(23);
// };
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  //console.log(event);
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No Number');
  } else if (guess === secretNumber) {
    displayMessage('💥 Congratulation Puluthi');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game! 🤡');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too High!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the Game! 🤡';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the Game! 🤡';
//     document.querySelector('.score').textContent = 0;
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start Guessing.....');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
});
