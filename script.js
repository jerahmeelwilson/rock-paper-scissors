//computerPlay function randomly generates "Rock", "Paper", or "Scissors"
function computerPlay() {
    // Generate a random number from 0 to 2       
    let randomNumber = () => Math.floor(Math.random() * (3));
    let pick = randomNumber();
    // If the pick is 0 return "Rock",if 1 return "Paper" if 2 return "Scissors"
    if (pick === 0) {
        return "Rock"
    } else if (pick === 2) {
        return "Paper"
    } else {
        return "Scissors"
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
            return "Rock";
        } else if (playerSelection === "paper") {
            return "Paper"
        } else if (playerSelection === "scissors") {
            return "Scissors"
        } else {
            //if no result is matched alert user and repeat loop.    
            alert("Please enter rock paper or scissors")
        }
    }
}

//playRound functions takes the user input and plays a round of rock, paper, scissors with computer
function playRound(playerSelection, computerSelection) {
    //If players enter rock check againts computer selection and return result
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
        //If players enter scissors check againts computer selection and return result
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
        // If player enters paper check againts computer selection and return result
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        // If no conditions match it is a tie
        return "Its a Tie!" + " you both selected " + computerSelection + " " + playerSelection;
    }
}



