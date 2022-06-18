let UsrInput ;
const  Str = ["Rock" ,"Paper","Scissors"];
let random ;
let playerScore=0;
let computerScore=0;
let drawScore=0;
    

function computerPlay( ) {
   random = Str[(Math.floor(Math.random() * (Str.length)))];
//  console.log(random);
  return random;
} 
let ComputerIput =  computerPlay();
console.log( "ComputerInput is : \t " + ComputerIput);
ComputerIput = ComputerIput.toLocaleLowerCase();

 
let input = window.prompt('Enter your Choice');
    UsrInput = input;
 

 UsrInput = UsrInput.toLowerCase();
 if(UsrInput == "Rock".toLocaleLowerCase() || UsrInput == "Paper".toLocaleLowerCase() || UsrInput == "Scissors".toLocaleLowerCase()){
     console.log("UsrInput is : \t" + UsrInput);
 }
 
//.log(UsrInput);
  function playRound (playerSelection,computerSelection){ 
    if(playerSelection == computerSelection ){
        return ("DRAW!" + drawScore++)
    }

    else if (playerSelection == "Rock".toLocaleLowerCase()){
      return (computerSelection == "Paper".toLocaleLowerCase()) ? "You Lose! Paper beats Rocks" + computerScore++ : "You Win! Rock beats Scissors" + playerScore++;  
          

    }
    else if (playerSelection == "Paper".toLocaleLowerCase()){
      return (computerSelection == "Scissors".toLocaleLowerCase()) ? "You Lose! Scissors beats Paper"  + computerScore++ : "You Win! Paper beats Rock" + playerScore++;  
          

    }
    else if (playerSelection == "Scissors".toLocaleLowerCase()){
      return (computerSelection == "Rock".toLocaleLowerCase()) ? "You Lose! Rock beats Scissors" + computerScore++ : "You Win! Scissors beats Paper" + playerScore++;  
          

    }
    else {
      return "invalid Input :( Please Try Again"
    }
  
    
  } 
  let result = playRound(UsrInput,ComputerIput);
  console.log(result);

  function game() {
    for (let i = 0; i <4; i++){

   
 
    let input = window.prompt('Enter your Choice');
    UsrInput = input;
 

 UsrInput = UsrInput.toLowerCase();
 if(UsrInput == "Rock".toLocaleLowerCase() || UsrInput == "Paper".toLocaleLowerCase() || UsrInput == "Scissors".toLocaleLowerCase()){
     console.log("UsrInput is : \t" + UsrInput);
 }
 let ComputerIput =  computerPlay();
console.log( "ComputerInput is : \t " + ComputerIput);
ComputerIput = ComputerIput.toLocaleLowerCase();

let result = playRound(UsrInput,ComputerIput);
console.log(result);

}
if(playerScore>computerScore){
  return "You Win the game.\n ";
}
  if (playerScore==computerScore){
    return "The game is a Draw.\n  ";
  }
 else{
  return " You Lose the game.\n ";
}
  
}
console.log(game());  
console.log( "Your Total score is " +playerScore + "  computer Score is " + computerScore  +"and  The times for Draw are " + drawScore+"\n");