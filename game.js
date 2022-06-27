
function computerPlay(){
    const plays =["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random()*plays.length)]
}

function playRound(playerSelection, computerSelection){
    if(computerSelection=="Rock"){
        if(playerSelection=="Rock"){
            return "draw";
        }else if(playerSelection=="Paper"){
            return "win";
        }else if(playerSelection=="Scissors"){
            return "lost";
        }
    }else if(computerSelection=="Paper"){
        if(playerSelection=="Rock"){
            return "lost";
        }else if(playerSelection=="Paper"){
            return "draw";
        }else if(playerSelection=="Scissors"){
            return "win";
        }
    }
    else if(computerSelection=="Scissors"){
        if(playerSelection=="Rock"){
            return "win";
        }else if(playerSelection=="Paper"){
            return "lost";
        }else if(playerSelection=="Scissors"){
            return "draw";
        }
    }
}

function game(playerChoice){
    
    var computerSelection = computerPlay();
    var result = playRound(playerChoice, computerSelection);

    switch(result){
        case "win":
            playerPoints++;
            gameResult.innerHTML=`You ${result}! ${playerChoice} beats ${computerSelection}`;
            scoreBoard.innerHTML=`Player Points: ${playerPoints} - Computer Points: ${computerPoints}`;
            break;
        case "lost":
            computerPoints++;
            gameResult.innerHTML=`You ${result}! ${computerSelection} beats ${playerChoice}`;
            scoreBoard.innerHTML=`Player Points: ${playerPoints} - Computer Points: ${computerPoints}`
            break;
        case "draw":
            gameResult.innerHTML=`The game is a draw`;
            scoreBoard.innerHTML=`Player Points: ${playerPoints} - Computer Points: ${computerPoints}`;
            break;
    }
    if(playerPoints ==3&&computerPoints!=3){
        replay.appendChild(replayMessage);
        replay.appendChild(replayButton);
        currentState = false;

    }else if(playerPoints!=3&&computerPoints==3){
        replay.appendChild(replayMessage);
        replay.appendChild(replayButton);
        currentState = false;
    }
    
    
}

function  clearGame(){
    playerPoints = 0;
    computerPoints = 0;
    gameResult.innerHTML = "Please make your choice";
    scoreBoard.innerHTML = "Player Points: 0 - Computer Points: 0";
    replay.removeChild(replayButton);
    replay.removeChild(replayMessage);
    currentState = true;

}


let playerChoice;
var playerPoints = 0; 
var computerPoints = 0;
var currentState = true;
const rock = document.querySelector('#rock');
rock.addEventListener('click',() =>{
    if(currentState){
        game("Rock");
    }
    
})
const paper = document.querySelector('#paper');
paper.addEventListener('click',() =>{
    if(currentState){
        game("Paper");
    }
})
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',() =>{
    if(currentState){
        game("Scissors");
    }
})


const gameResult = document.querySelector('.result');
const scoreBoard = document.querySelector('.score');

const replay = document.querySelector('#final');
const replayButton = document.createElement('button');
replayButton.textContent = 'Yes';

const replayMessage = document.createElement('h2');
replayMessage.textContent = 'The Game is Over, Would you like to play again?';


replayButton.addEventListener('click',() =>{
    clearGame();
})