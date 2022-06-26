
function computerPlay(){
    const plays =["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random()*plays.length)]
}

function capitalize(str){
    if(str==null)
    {
        return "";
    }
    return str.substring(0,1).toUpperCase()+str.substring(1);
}

function checkResult(input){
    if(input == "Rock"||input =="Paper"||input=="Scissors"){
        return true;
    }
    else{
        return false;
    }
}

function playRound(playerSelection, computerSelection){
    var playerChoice = capitalize(playerSelection);
    if(computerSelection=="Rock"){
        if(playerChoice=="Rock"){
            return "draw";
        }else if(playerChoice=="Paper"){
            return "win";
        }else if(playerChoice=="Scissors"){
            return "lost";
        }
    }else if(computerSelection=="Paper"){
        if(playerChoice=="Rock"){
            return "lost";
        }else if(playerChoice=="Paper"){
            return "draw";
        }else if(playerChoice=="Scissors"){
            return "win";
        }
    }
    else if(computerSelection=="Scissors"){
        if(playerChoice=="Rock"){
            return "win";
        }else if(playerChoice=="Paper"){
            return "lost";
        }else if(playerChoice=="Scissors"){
            return "draw";
        }
    }
}

function game(){
    var playerPoints = 0; 
    var computerPoints = 0;
    while(playerPoints < 3 || computerPoints < 3){
        if(playerPoints == 3 || computerPoints == 3){
            break;
        }
        do{
            var playerChoice = capitalize(prompt("Please enter you choice:'Rock' 'Paper' or 'Scissors' "));
        }while(!checkResult(playerChoice))
        var computerSelection = computerPlay();
        var result = playRound(playerChoice, computerSelection);
        switch(result){
            case "win":
                playerPoints++;
                alert(`You ${result}! ${playerChoice} beats ${computerSelection} \nPlayer Points: ${playerPoints} - Computer Points: ${computerPoints}`) ;
                break;
            case "lost":
                computerPoints++;
                alert(`You ${result}! ${computerSelection} beats ${playerChoice} \nPlayer Points: ${playerPoints} - Computer Points: ${computerPoints}`);
                break;
            case "draw":
                alert("The game is a draw \nPlayer Points: ${playerPoints} - Computer Points: ${computerPoints}") ;
                break;
        }
    }
    if(playerPoints ==3&&computerPoints!=3){
        alert("Congradulation, You Won!");
    }else{
        alert("Unfortunately, You Lost!");
    }
}

game();
