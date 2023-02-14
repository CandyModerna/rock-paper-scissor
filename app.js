var playerSelection;
var computerSelection;
var playerInput;
var result;
var playerscore = "0";
var computerscore = "0";

function playGame(playerSelection) {
  if (playerscore == 0 || computerscore == 0) {
    document.getElementById("roundwinner").innerHTML = "";
  }
  playerInput = playerSelection
  computerSelection = getcomputerChoice();
  result = selectWinner(playerSelection, computerSelection);
  displayResult(result);
  getScore();
  reset();
}

function getcomputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];
  let choicearr = Math.floor(Math.random() * choice.length);
  return choice[choicearr];
}

function selectWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    playerscore++
    return "You Win";
  } else {
    computerscore++
    return "You Lose";
  }
}

function displayResult(result) {
  let players = capitalize(playerInput);
  let computers = capitalize(computerSelection);
  var resultMessage = `${result}! You chose ${players} and the computer chose  ${computers}.`;
  document.getElementById("result").innerHTML = resultMessage;
  document.getElementById("pscore").innerHTML = playerscore;
  document.getElementById("cscore").innerHTML = computerscore;
}

function getScore() {
  if (playerscore == 5) {
    document.getElementById("roundwinner").innerHTML = `You win the GAME!`;
  } else if (computerscore == 5) {
    document.getElementById("roundwinner").innerHTML = `Computer wins the GAME!`;
  }
}

function reset() {
  if (playerscore >= 5 || computerscore >= 5) {
    playerscore = 0;
    computerscore = 0;
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
