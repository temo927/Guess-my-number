// code is not clear it was practice project

const check = document.querySelector(`.check`);
const again = document.querySelector(`.again`);
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener(`click`, () => {
  let guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess, guess);
  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ No Number`;
    console.log(typeof guess, guess);
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    check.addEventListener(`click`, () => {
      if (guess === secretNumber) {
        document.querySelector(
          `.message`
        ).textContent = `🏅 You already guessed`;
      }
    });
  }
  //when answer is different
  else if (guess !== secretNumber) {
    document.querySelector(`.message`).textContent =
      guess > secretNumber ? `📈 Too high` : `📉 Too low!`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score == 0) {
      document.querySelector(`.message`).textContent = `💥 You lost the game!`;
    }
  }
});
again.addEventListener(`click`, () => {
  let guess = Number(document.querySelector(`.guess`).value);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
});
