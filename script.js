const cards = document.querySelectorAll(".card");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const board = document.querySelector(".board");

function gameOver() {
  board.innerHTML = `
    <div class='score-block'>
        <h2>Game Over</h2>
        <h2><i class="fa-solid fa-face-frown-open"></i></h2>
    </div>
  `;
}

function OnClickedCard(e) {
  const clickedCard = e.target;

  if (clickedCard.classList.contains("stich")) {
    clickedCard.classList.remove("stich");

    let prevScore = parseInt(score.innerHTML);
    score.innerHTML = prevScore + 1;

    let nextIndex = Math.floor(Math.random() * 9);
    const cardId = clickedCard.id;

    while (cardId === nextIndex) {
      nextIndex = Math.floor(Math.random() * 9);
    }
    cards[nextIndex].classList.add("stich");
  } else {
    board.innerHTML = "<h2>Game Over</h2>";
  }
}

let intervalId = setInterval(() => {
  let currentTime = parseInt(time.innerHTML);
  time.innerHTML = currentTime - 1;
  if (currentTime == 1) {
    clearInterval(intervalId);
    gameOver();
  }
}, 1000);

cards.forEach((card) => {
  card.addEventListener("click", OnClickedCard);
});
