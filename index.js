
let playerScore = 0
let computerScore = 0

function getComputerChoice () {
     let number = Math.floor(Math.random()*3)
     let comChoice = "";
    
    if (number ===0)
        comChoice = "rock";
    else if (number === 1)
        comChoice ="paper";
    else if (number === 2)
        comChoice ="scissors";
    
    return comChoice;
}


function playRound (playerSelection, computerSelection) {
    

    if (playerSelection === "rock" && computerSelection === "rock")
     console.log("It's a tie!")

    else if (playerSelection === "rock" && computerSelection === "paper"){
    console.log("You Lose! Paper beats Rock!")
    computerScore += 1}

    else if (playerSelection === "scissors" && computerSelection === "paper"){
    console.log("You Win! Scissors beat paper")
    playerScore += 1}
    
    else if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("You Win! Rock beats Scissors!")
    playerScore += 1}

    else if (playerSelection === "scissors" && computerSelection === "scissors")
    console.log("It's a Tie!")

    else if (playerSelection === "scissors" && computerSelection === "rock"){
    console.log("You Lose! Rock beats Scissors!")
    computerScore += 1}

    else if (playerSelection === "paper"   && computerSelection === "paper")
    console.log("It's a Tie!")

    else if (playerSelection === "paper"   && computerSelection === "rock"){
    console.log("You win! Paper beats Rock!")
    playerScore += 1}

    else if (playerSelection === "paper"   && computerSelection === "scissors"){
    console.log ("You Lose! Scissors beat Paper!")
    computerScore += 1}

}


function playGame(getComputerChoice){
let temporary = prompt("Choose rock, paper or scissors", "")
let playerSelection = temporary.toLowerCase();  
playRound(playerSelection, getComputerChoice);
}

for (let i = 0; i < 5; i++){
playGame(getComputerChoice());}

if (playerScore >= 3)
console.log("Congratulations! You win!")

else console.log("Computer Wins!")