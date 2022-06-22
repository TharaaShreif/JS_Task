let playerScore = 0;
let computerScore = 0;
let counter = 0;
 const RockBtn = document.querySelector('.Rock');
		const PaperBtn = document.querySelector('.Paper');
		const ScissorBtn = document.querySelector('.Scissors');
		const UsrInput = [RockBtn,PaperBtn,ScissorBtn];
		const ComputerIput = ['Rock','Paper','Scissors']
const game = () => {
// Function to play the game 
	const playRound = () => {
		
	UsrInput.forEach(option => {
			option.addEventListener('click',function(){

				const counterleft = document.querySelector('.counterleft');
				counter++;
				counterleft.innerText = `counter: ${5-counter}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = ComputerIput[choiceNumber];

				 
				compare(this.innerText,computerChoice)
				
				 
				if(counter == 5){
					gameFinish(UsrInput,counterleft);
				}
			})
		})
		
	}

	//   to compare the result  
	const compare = (player,computer) => {
		const result = document.querySelector('.result');
	 
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'Rock'.toLocaleLowerCase()){
			if(computer == 'Paper'.toLocaleLowerCase()){
				result.textContent = 'Computer Won !..Paper beats Rock';
				computerScore++;
				 

			}else{
				result.textContent = 'Player Won !..Rock beats Scissors'
				playerScore++;
			 
			}
		}
		else if(player == 'Scissors'.toLocaleLowerCase()){
			if(computer == 'Rock'.toLocaleLowerCase()){
				result.textContent = 'Computer Won !...Rock beats Scissors';
				computerScore++;
			 
			}else{
				result.textContent = 'Player Won !..Scissors beat Paper';
				playerScore++;
				 
			}
		}
		else if(player == 'Paper'.toLocaleLowerCase()){
			if(computer == 'Scissors'.toLocaleLowerCase()){
				result.textContent = 'Computer Won !..Scissors beat Paper';
				computerScore++;
			 
			}else{
				result.textContent = 'Player Won !..Paper beats Rock';
				playerScore++;
				 
			}
		}
	}

	//   to display result after the game finished
	const gameFinish = (UsrInput,counterleft) => {

		const chooseMove = document.querySelector('.counter');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		UsrInput.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		counterleft.style.display = 'none';

		if(playerScore > computerScore){
			 
			result.innerText = 'You Won The Game'
		 
		}
		else if(playerScore < computerScore){
			 
			result.innerText = 'You Lose The Game';
 
		}
		else{
			 
			result.innerText = 'Tie';
	 
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	 
	playRound();
	
}

 
game();
