let computerMove = Math.random();
let playerMove = "";
let tie = () => {
  console.log('You tied!');
}
let lose = () => {
  console.log('You lost!');
}
let win = () => {
  console.log('You won!');
}

function calculateWinner(computerMove, playerMove){
  if (computerMove >= 0 && computerMove < 1/3) {
    if (playerMove === 'Rock') {
      tie();
    } else if (playerMove === 'Paper') {
      win();
    } else {
      lose();
    }
  } else if (computerMove >= 1/3 && computerMove < 2/3) {
    if (playerMove === 'Paper') {
      tie();
    } else if (playerMove === 'Scissors') {
      win();
    } else {
      lose();
    }
  } else {
    if (playerMove === 'Scissors') {
      tie();
    } else if (playerMove === 'Rock') {
      win();
    } else {
      lose();
    }
  }
}
