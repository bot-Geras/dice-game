let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const message = document.getElementById("message");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplayBtn() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
}

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // console.log(randomNumber)
  // console.log("button clicked!!!")

  //find out which players turn it is
  if (player1Turn) {
    //keep track of score
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    // console.log("player 1 rolled " + randomNumber)
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "player 2 turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    // console.log("player 2 rolled " + randomNumber)
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "player 1 turn";
  }

  if (player1Score >= 20) {
    message.textContent = "player1 has Won!!!";
    showDisplayBtn()
   
  } else if (player2Score >= 20) {
    message.textContent = "player2 has Won!!!";
    showDisplayBtn()
  }

  // if (player1Turn) {
  //     player1Turn = false
  // } else {
  //     player1Turn = true
  // }  OR

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function() {
    reset()

})

function reset() {
    message.textContent = "Player 1 turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")

}
