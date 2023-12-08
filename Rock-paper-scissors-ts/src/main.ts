function getComputerChoice() {
  let choice = Math.floor(Math.random()*3)

  let choiceString = "";

  switch(choice){
    case 0:
      choiceString = "paper"
      break;
    case 1:
      choiceString = "rock"
      break;
    case 2:
      choiceString = "scissors"
      break;
    default:
      console.log("Error");
      break;
  }
  return choiceString
}

function playRound(computerChoice: string, playerChoice: string | null) {
  if(playerChoice==null) {
    return 0
  }else {
    playerChoice.toLowerCase();
  }

  if( playerChoice == computerChoice ) {
    console.log("tie");
    return 0
  }else if(playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win. " + playerChoice + " beats " + computerChoice + "!");
    return 1
  }else if(playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win. " + playerChoice + " beats " + computerChoice + "!");
    return 1
  }else if(playerChoice == "paper" && computerChoice == "rock"){
    console.log("You win. " + playerChoice + " beats " + computerChoice + "!");
    return 1
  }else {
    console.log("You lose. " + computerChoice + " beats " + playerChoice + "!")
    return 2
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++ ) {
    let playerChoice = prompt()
    switch(playRound(getComputerChoice(), playerChoice)) {
      case 1:
        playerScore++;
        break;
      case 2:
        computerScore++;
        break;
      default:
        computerScore++;
        playerScore++;
        break;
    }
  }

  if(playerScore>computerScore) {
    console.log("Player wins!");
  }else{
    console.log("Computer wins!")
  }
}

game();