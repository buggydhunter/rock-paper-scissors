//random return rock paper or scissors 
//you need random between 1 - 3 at best with the random function 
//return string based on the number a switch case would be fine for that

//damit sie global sind 
let choiceNum = 0; //number between 1 and 3 
let roundsPlayed = 0; 
console.log(choiceNum);
let computerSelection; //do I have to initialize them?
let playerSelection;
let playerCount = 0;
let computerCount = 0;
let resultDiv = document.createElement("div");
let resultText = document.createElement("p"); //?don't even use this right now its just for the div because i guess the div has no textcontent right?
let parentDiv = document.querySelector("div");


let buttonRock = document.createElement("button");
let buttonScissors = document.createElement("button");
let buttonPaper = document.createElement("button");
buttonPaper.setAttribute("id", "paper");
buttonRock.setAttribute("id", "rock");
buttonScissors.setAttribute("id", "scissor"); //don't even need the id's as of rightnow right? 
parentDiv.appendChild(buttonPaper);
parentDiv.appendChild(buttonRock);
parentDiv.appendChild(buttonScissors);
parentDiv.append(resultDiv);
resultDiv.appendChild(resultText);

//this is just build up so this should be fine just check the naming 


function btnOnClick(event) { //how does the parameter work here? 
    
    
    if (computerCount + playerCount < 5) {
        
        playerSelection = event.target.id; 
        play(playerSelection, computerSelection = getComputerChoice());  
        // roundsPlayed++; 
        console.log("plyer" +  playerCount); 
        console.log("cmp" + computerCount); 

        console.log(playerCount + computerCount); 
    } if (computerCount + playerCount === 5) {
        disableBtn(); 
    }
    
    //ich bin echt ein dummkopf ich muss noch viel mehr üben um besser zu werden 
    //damit ist das mvp aber done fürs erste, füge später noch schönes UI hinzu für die buttons + zeugs
    
    // playerSelection = event.target.id; //bu ne geri veriyor acaba bir de dogru mu bu böyle //event.target butonu veriyor, id ise string halinde id'yi
    // //? console.log(playerSelection); this works 


    // switch (target.id) {
    //     case "paper":
    //         // play(target.id, computerSelection = getComputerChoice()); //shouldn't this play a round with the computer? 
    //         break;
    //     case "rock": 
    //         break;
    //     case "scissor":

    //         break;
    //     default: "Something went wrong in the switch";
    // }

    // game(); 
    // console.log(playerCount); 
    // console.log(computerCount); 

}

buttonPaper.onclick = btnOnClick;
buttonRock.onclick = btnOnClick;
buttonScissors.onclick = btnOnClick;


function disableBtn() {
    buttonPaper.setAttribute("disabled", true);
    buttonRock.setAttribute("disabled", true);
    buttonScissors.setAttribute("disabled", true);

    //?lets see if this works or not
    resultText.textContent = playerCount === computerCount ? "it's a tie" : 
    (playerCount > computerCount) ? "You Won! Congrats" : "You lose Sorry!";
    return; 
}


// function updateDisplayResult() {
//  let currentStanding = `Player: ${playerCount}, Computer: ${computerCount})`; 
// }



function getComputerChoice() { //sollte ok sein 
    choiceNum = Math.floor(Math.random() * 3) + 1;
    switch (choiceNum) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissor";
            break;
        default: return "wrong value"; //kann gar nicht passieren oder? 
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

    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return resultText.textContent = "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerCount++;
        return resultText.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        playerCount++;
        return resultText.textContent = "You Win! Rock crusches scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        return resultText.textContent = "You Win! Paper wraps rock";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        computerCount++;
        return resultText.textContent = "You Lose! Scissors cut Paper";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        playerCount++;
        return resultText.textContent = "You Win Scissors cut Paper";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        computerCount++;
        return resultText.textContent = "You Lose! Rock crushes Scissors";
    }

    return resultText.textContent = "Your spelling was wrong";
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

// function game() {

//     function game() {
//         for (let i = 0; i < 5; i++) { // Loop 5 times
          
//         }
      
//         if (playerCount > computerCount) {
//           resultDiv.textContent = "Congratulations YOU won!!";
//         } else {
//           resultDiv.textContent = "Too bad you lost!";
//         }
      
//         return;
//       }
      

//     if (playerCount > computerCount) {
//         resultDiv.textContent = "Congratulations YOU won!!"; //lets see what happens when we don't erase the resultText

//     } else {
//         resultDiv.textContent = "Too bad you lost!";
//     }

//     return;

// }

// game();

//you need to get used to javascripts lack of main function to see when to call a function!!! Biggest take away today!
