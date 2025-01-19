let humanScore = 0;
let computerScore = 0;
const p = document.querySelector("p");
const pScore = document.querySelector("#score");
const pFinal = document.querySelector("#final");

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
  pFinal.textContent = "";
  if (humanChoice === computerChoice) {
    // console.log(`It's a tie! You both chose ${humanChoice}`);
    p.textContent = `It's a tie! You both chose ${humanChoice}`;
    return;
  }

  else if (humanChoice === 'rock'){
    if (computerChoice === 'paper'){
      // console.log(`You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      p.textContent = `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`;
      computerScore++;
    } else {
      // console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      p.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`;
      humanScore++;
    }
  } 

  else if (humanChoice === 'paper'){
    if (computerChoice === 'scissors'){
      // console.log(`You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      p.textContent = `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`;
      computerScore++;
    } else {
      // console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      p.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`;
      humanScore++;
    }
  }

  else if (humanChoice === 'scissors'){
    if (computerChoice === 'rock'){
      // console.log(`You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      p.textContent = `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}!`;
      computerScore++;
    } else {
      // console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`);
      p.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}!`;
      humanScore++;
    }
  }
  pScore.textContent = `Player Score : ${humanScore} Computer Score : ${computerScore}`;
  if (humanScore > 4 || computerScore > 4) {
    humanScore = 0;
    computerScore = 0;
    if (humanScore > 4) {
      pFinal.textContent = "Player reached 5 first! Winner!";
    }
    else {
      pFinal.textContent = "Computer reached 5 first! Winner!";
    }
  }

}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", () => playRound("rock", getComputerChoice())
);
paper.addEventListener("click", () => playRound("paper", getComputerChoice())
);
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice())
);

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let humanSelect = getHumanChoice();
//     let computerSelect = getComputerChoice();
//     playRound(humanSelect, computerSelect);
//   }
//   console.log(`The final score was: Player: ${humanScore}, Computer: ${computerScore}`)
// }

// playGame();