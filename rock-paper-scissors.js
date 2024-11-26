function getComputerChoice () {
  let number = Math.random();
  if (number < 1/3) {
    return 'Rock'
  } else if (number >= 1/3 && number < 2/3) {
    return 'Paper'
  } else return 'Scissors'
}

function getHumanChoice () {

  let choice = "";

  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {

    choice = prompt("Please enter rock, paper, or scissors.").toLowerCase();
  }

}

getHumanChoice();