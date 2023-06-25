// Game
let playerScore = 0
let computerScore = 0
let scoreMessage = ''
let round = 0
const cards = ["rock", "paper", "scissors"]
const signs = ["✊","✋","✌"] 

// getComputerChoice() 
function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);
    return (computerChoice);
}

function playRound(playerChoice, computerChoice) {
    round ++;

    playerSelection=cards[playerChoice].toLowerCase();
    computerSelection = cards[computerChoice].toLowerCase();
 
    if (playerSelection === computerSelection){
        scoreMessage = playerSelection +signs[playerChoice] + " and "  +  computerSelection+ signs[computerChoice] +  " It's a tie";
    } else if(playerSelection ==="rock") {
        if (computerSelection === "paper")  {
            scoreMessage = "You lose! Paper✋ beats Rock✊ ";
            computerScore++;
        }else{
            scoreMessage= "You win! Rock✊ beats scissors✌";
            playerScore++;
        }
    }
    else if(playerSelection ==="paper") {
        if (computerSelection === "rock") {
            scoreMessage = "You win! Paper✋ beats rock✊";
            playerScore++;
        }else{
            scoreMessage = "You lose! Scissors✌ beats paper✋";
            computerScore++;
        }
    }
    else if(playerSelection ==="scissors") {
        if (computerSelection ==="paper") {
            scoreMessage= "You win! Scissors✌ beats pape✋";
            playerScore++;
        }else{
            scoreMessage=  "You lose! Rock✊ Beats scissors✌";
            computerScore++;
        }
    }
  }   
  
// UI
// User's Buttons to add event listeners
const   rockButton = document.getElementById("rockBtn")
const   paperButton = document.getElementById("paperBtn")
const   scissorsButton = document.getElementById("scissorsBtn")

// User Score, Computer Scores,  roundMessage 
const  playerScorePara = document.getElementById("player-score");
const  computerScorePara = document.getElementById("comp-score");
const  messageList = document.querySelector(".msg-list")

// Creating a button to refresh page
const newGame = document.createElement('div');
newGame.textContent = 'Play again';
newGame.classList.add('refresh');

rockButton.addEventListener("click", playGame);
paperButton.addEventListener("click", playGame);
scissorsButton.addEventListener("click", playGame);
newGame.addEventListener('click', refreshPage);

// Game
function playGame(){
    if (isGameOver()) return;
    let playerSelection = this.dataset.button;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    playerScorePara.textContent = `Player Score: ${playerScore}`;
    computerScorePara.textContent = `Computer Score: ${computerScore}`;

    gameMsg();

    if (isGameOver()) playAgain();
}  

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function gameMsg() {
    var li = document.createElement('li');
    li.textContent = "Round #" + round + ": " + scoreMessage;
    messageList.insertAdjacentElement('afterbegin', li);
}


// Restart Game
function playAgain(){
    endMsg()
    messageList.insertAdjacentElement('beforebegin', newGame);
}

function endMsg() {
    if (playerScore === 5 ){
        scoreMessage ="YOU WON! You got 5 points!" 
    }else{
        scoreMessage ="You lost. The computer was first to get 5 points"
    }
    var li = document.createElement('li');
    li.textContent =  scoreMessage;
    messageList.insertAdjacentElement('afterbegin', li);
}

// Refresh page
function refreshPage() {
    window.location.reload(true);
}


