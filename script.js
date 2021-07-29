//computerPlay function randomly generates "Rock", "Paper", or "Scissors"
function computerPlay() {
    // Generate a random number from 0 to 2       
    let randomNumber = () => Math.floor(Math.random() * (3));
    let pick = randomNumber();
    // If the pick is 0 return "Rock",if 1 return "Paper" if 2 return "Scissors"
    if (pick === 0) {
        return "rock"
    } else if (pick === 2) {
        return "raper"
    } else {
        return "scissors"
    }
}

//selection function prompts users to enter rock, paper, or scissors. if the input is not rock, paper, scissors the user is prompted again until the correct input is entered
function selection() {
    //flag for while loop, as long as selected is false it will repeat
    let selected = false;
    while (selected === false) {
        // prompt user for input
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLocaleLowerCase();
        //checks user input for rock paper or scissors, and returns matched result
        if (playerSelection === "rock") {
            return "rock";
        } else if (playerSelection === "paper") {
            return "paper"
        } else if (playerSelection === "scissors") {
            return "scissors"
        } else {
            //if no result is matched alert user and repeat loop.    
            alert("Please enter rock paper or scissors")
        }
    }
}

//playRound functions takes the user input and plays a round of rock, paper, scissors with computer

function playRound(playerSelection, computerSelection) {

}

console.log(selection());
