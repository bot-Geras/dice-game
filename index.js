let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const message = document.getElementById("message")

const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    // console.log(randomNumber)
    // console.log("button clicked!!!")

    //find out which players turn it is
    if (player1Turn) {
        // console.log("player 1 rolled " + randomNumber)
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "player 2 turn"

    } else {
        // console.log("player 2 rolled " + randomNumber)
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "player 1 turn"
    }

    // if (player1Turn) {
    //     player1Turn = false
    // } else {
    //     player1Turn = true
    // }  OR

    player1Turn = !player1Turn
})