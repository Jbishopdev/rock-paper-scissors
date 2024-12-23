let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
  let number = Math.random();
  if (number < 1/3) {
    return 'rock'
  } else if (number >= 1/3 && number < 2/3) {
    return 'paper'
  } else return 'scissors'
}

function getHumanChoice () {

  let choice = "";

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {

    choice = prompt("Please enter rock, paper, or scissors.").toLowerCase();
  }
  return choice;
}

function playRound (humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
    return;
  }

  else if (humanChoice === 'rock'){
    if (computerChoice === 'paper'){
      console.log(`You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      computerScore++;
    } else {
      console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      humanScore++;
    }
  } 

  else if (humanChoice === 'paper'){
    if (computerChoice === 'scissors'){
      console.log(`You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      computerScore++;
    } else {
      console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      humanScore++;
    }
  }

  else if (humanChoice === 'scissors'){
    if (computerChoice === 'rock'){
      console.log(`You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      computerScore++;
    } else {
      console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      humanScore++;
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelect = getHumanChoice();
    let computerSelect = getComputerChoice();
    playRound(humanSelect, computerSelect);
  }
  console.log(`The final score was: Player: ${humanScore}, Computer: ${computerScore}`)
}

playGame();