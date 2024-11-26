function getComputerChoice () {
  const number = Math.random()
  if (number < 1/3) {
    return 'Rock'
  } else if (number >= 1/3 && number < 2/3) {
    return 'Paper'
  } else return 'Scissors'
}
