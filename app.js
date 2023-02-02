var playerSelection;
var computerSelection;
var playerInput

function playGame(playerSelection) {
  playerInput = playerSelection
  computerSelection = getcomputerChoice();
  var result = selectWinner(playerSelection, computerSelection);
  displayResult(result);
}

function getcomputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];
  let choicearr = Math.floor(Math.random() * 3);
  return choice[choicearr];
}

function selectWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win";
  } else {
    return "You Lose";
  }
}

function displayResult(result) {
  let players = capitalize(playerInput);
  let computers = capitalize(computerSelection);
  var resultMessage = `${result}! You chose ${players} and the computer chose  ${computers}.`;
  document.getElementById("result").innerHTML = resultMessage; 
}

function capitalize(text) {
 return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}