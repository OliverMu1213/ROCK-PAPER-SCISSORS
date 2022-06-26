
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
            return "lose";
        }
    }else if(computerSelection=="Paper"){
        if(playerChoice=="Rock"){
            return "lose";
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
            return "lose";
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
            var playerChoice = capitalize(prompt("Please enter you choice: "));
        }while(!checkResult(playerChoice))
        var computerSelection = computerPlay();
        var result = playRound(playerChoice, computerSelection);
        switch(result){
            case "win":
                playerPoints++;
                console.log(`You ${result}! ${playerChoice} beats ${computerSelection} `) ;
                console.log(`Player Points: ${playerPoints} - Computer Points: ${computerPoints}`);
                break;
            case "lose":
                computerPoints++;
                console.log(`You ${result}! ${computerSelection} beats ${playerChoice} `);
                console.log(`Player Points: ${playerPoints} - Computer Points: ${computerPoints}`);
                break;
            case "draw":
                console.log("The game is a draw") ;
                console.log(`Player Points: ${playerPoints} - Computer Points: ${computerPoints}`);
                break;
        }
    }
}

game();
