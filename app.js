function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let choicearr = Math.floor(Math.random() * 3);
    return choices[choicearr];
  }
  
  function playerInputs() {
    let playerinput = prompt('Rock, Paper, Scissor.');
    return playerinput;
  }

  function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  }

  function selectWinner(playerSelection, computerSelection) {
    if (computerSelection === capitalize(playerSelection)) {
      return "Tie"
    }
    if (computerSelection === "Rock" && capitalize(playerSelection) === "Scissor") {
      return 'Computer Wins! Rock smashes your Scissor!';
    }
    if (computerSelection === "Paper" && capitalize(playerSelection) === "Rock") {
      return 'Computer Wins! Paper wraps your Rock!';
    }
    if (computerSelection === "Scissor" && capitalize(playerSelection) === "Paper") {
      return 'Computer Wins! Scissor cuts your Paper!';
    }
    if (computerSelection === "Rock" && capitalize(playerSelection) === "Paper") {
      return 'You Win! Your Paper wraps Rock!';
    }
    if (computerSelection === "Paper" && capitalize(playerSelection) === "Scissor") {
      return 'You Win! Your Scissor cuts Paper!';
    }
    if (computerSelection === "Scissor" && capitalize(playerSelection) === "Rock") {
      return `You Win! ${capitalize(playerSelection)} smashes Scissor!`;
    }
  }

  function clickMe() {
    const playerSelection = playerInputs()
    const computerSelection = getComputerChoice()
    console.log(selectWinner(playerSelection, computerSelection))
    alert(selectWinner(playerSelection, computerSelection))
  }