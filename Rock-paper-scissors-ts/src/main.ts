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

function playRound(computerChoice: string, playerChoice: string) {
  playerChoice.toLowerCase();

  if( playerChoice == computerChoice ) {
    console.log("Tie")
  }else if(playerChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beat paper")
  }else if(playerChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats scissors")
  }else if(playerChoice == "paper" && computerChoice == "rock"){
    console.log("You win! Paper beats rock")
  }else {
    console.log("You lose")
  }
}
