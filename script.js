let userScore = 0;
let cpuScore = 0;
const winScore = 5;

function play(userChoice) {
  if (userScore >= winScore || cpuScore >= winScore) return;

  const choices = ["Rock", "Paper", "Scissors"];
  const cpuChoice = Math.floor(Math.random() * 3) + 1;

  const userStr = choices[userChoice - 1];
  const cpuStr = choices[cpuChoice - 1];

  let resultText = `You chose <b>${userStr}</b>. Computer chose <b>${cpuStr}</b>.<br/>`;

  if (userChoice === cpuChoice) {
    resultText += "🤝 It's a Draw!";
  } else if (
    (userChoice === 1 && cpuChoice === 3) ||
    (userChoice === 2 && cpuChoice === 1) ||
    (userChoice === 3 && cpuChoice === 2)
  ) {
    resultText += "🎉 You Won this round!";
    userScore++;
  } else {
    resultText += "😢 You Lost this round.";
    cpuScore++;
  }

  document.getElementById("result").innerHTML = resultText;
  updateScores();

  if (userScore === winScore || cpuScore === winScore) {
    endGame();
  }
}

function updateScores() {
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("cpu-score").textContent = cpuScore;
}

function endGame() {
  const gameEnd = document.getElementById("game-end");
  const resetBtn = document.getElementById("reset");
  const buttons = document.querySelectorAll(".choice-btn");

  buttons.forEach(btn => btn.disabled = true);
  resetBtn.style.display = "inline-block";

  if (userScore === winScore) {
    gameEnd.innerHTML = "🎊 <b>You won the game!</b> 🎊";
    confetti();
  } else {
    gameEnd.innerHTML = "💔 <b>Computer won the game!</b> 😢";
  }
}

function resetGame() {
  userScore = 0;
  cpuScore = 0;
  updateScores();
  document.getElementById("result").innerHTML = "";
  document.getElementById("game-end").innerHTML = "";
  document.getElementById("reset").style.display = "none";

  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach(btn => btn.disabled = false);
}
