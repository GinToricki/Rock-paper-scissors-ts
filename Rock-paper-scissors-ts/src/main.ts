function getComputerChoice() {
  let choice = Math.floor(Math.random()*3)

  let choiceString;

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
