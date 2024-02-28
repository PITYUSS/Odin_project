

function getComputerChoice() {
    let strings = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

function playRockPaperScissors(playerSelection, randomRockPaperScissors) {
    if (playerSelection === randomRockPaperScissors){ 
    return "tie";
    } else if(playerSelection === "rock"){
        if(randomRockPaperScissors === "paper"){
            return "computer wins";
        }else {
            return "player wins"; 
        }    
    }else if(playerSelection === "paper"){
        if(randomRockPaperScissors === "rock"){
            return "player wins"; 
        }else {
            return "computer wins";
        }    
    }else if(playerSelection === "scissors"){
        if(randomRockPaperScissors === "rock"){
            return "computer wins";
        }else {
            return "player wins";
        }    
    }
}

let randomRockPaperScissors = getComputerChoice();      


function playGame() {
    for (let i = 0; i <= 5; i++) {
        let playerSelection = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRockPaperScissors(playerSelection, computerSelection);
        console.log("Round "+ ( i + 1 ) +": " + result);playRockPaperScissors;
    }
}

playGame();



