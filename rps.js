//random return rock paper or scissors 
//you need random between 1 - 3 at best with the random function 
//return string based on the number a switch case would be fine for that

//damit sie global sind 
let choiceNum = 0; //number between 1 and 3 
console.log(choiceNum); 
let computerSelection; //do I have to initialize them?
let playerSelection;    
let playerCount = 0; 
let computerCount = 0; 

function getComputerChoice(){
    choiceNum = Math.floor(Math.random()*3) + 1;
switch(choiceNum){
    case 1: 
        computerSelection = "rock";
        break;   
    case 2: 
        computerSelection = "paper";
        break;  
    case 3: 
        computerSelection = "scissor";
        break;          
    default: return "wrong value";     
}   
    return computerSelection; 
}

//vergleiche player und computer auf string gleichheit 
//falls beide gleich kriegen beide einen punkt
//falls p stein, c papier c + 1 
//falls p stein , c schere p + 1
//falls p papier, c stein p + 1
//falls p papier, c schere c + 1 
//falls p schere, c stein c + 1 
//falls p schere, c papier p + 1   
function play(playerSelection, computerSelection) { //should I update the counter here?? maybe I will need it in another function? 
    
    playerSelection = playerSelection.toLowerCase(); 
    
    if (playerSelection === computerSelection) {
        return "It's a tie!"; 
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerCount++;      
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissor"){
        playerCount++;       
        return "You Win! Rock crusches scissors"; 
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        playerCount++;      
        return "You Win! Paper wraps rock"; 
    } else if (playerSelection == "paper" && computerSelection == "scissor"){
        computerCount++;      
        return "You Lose! Scissors cut Paper"; 
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        playerCount++;      
        return "You Win Scissors cut Paper"; 
    } else if (playerSelection == "scissor" && computerSelection == "rock"){
        computerCount++;      
        return "You Lose! Rock crushes Scissors"; 
    }

    return "Your spelling was wrong"; 
}

// computerSelection = getComputerChoice(); 
// playerSelection = "rock"; 
// console.log(play(playerSelection, computerSelection)); 

//call the playround function 5 times 
//log the current standing and the winner at the end 
//start with the selections of player and computer 
//play the round 
//display the standings
//when reached 5 rounds anounce the winner over the console
function game() {
    
    while(playerCount + computerCount < 5) {

        playerSelection = prompt("Choose rock, paper or scissors! Be careful with your choice as well as your spelling!!");
        computerSelection = getComputerChoice(); 
        console.log(computerSelection); 
        console.log(play(playerSelection, computerSelection));
        console.log("The standings -> You:" + playerCount + " Computer: " + computerCount);  
    }

    if (playerCount > computerCount) {
        console.log("Congratulations you won!!"); 
    } else {
        console.log("Too bad you lost"); 
    }

    return

}

game(); 

//you need to get used to javascripts lack of main function to see when to call a function!!! Biggest take away today!
