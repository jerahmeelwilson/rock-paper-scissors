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
        return "Its a Tie!" + " you both selected " + computerSelection;
    }
}

//winner function if score 3, winning best of 5
function winner(score) {
    return score === 3
}

// game function plays a best of version of rock, paper, scissors, the game will track scores of player and computer and once a player reachs 3 the game will end they will win.
function game() {
    //Boths player start with zero
    let playerScore = 0;
    let computerScore = 0;
    //log initial scores to console
    //play until some reaches a score of 3
    while (computerScore < 3 && playerScore < 3) {
        //play a game of rock,paper, scissors
        let result = playRound(selection(), computerPlay());
        //if players wins incremment player score
        if (result.slice(0, 8) === "You Win!") {
            playerScore++;
            console.log(result);
            //if player loses increment computer score
        } else if (result.slice(0, 8) === "You Lose") {
            computerScore++;
            console.log(result);
            //if tie, do nothing
        } else {
            console.log(result);
        }
        //log results of round to console.
        console.log("Your Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        console.log("");
    }
    //use winner function to check for a winner
    if (winner(playerScore)) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}
game();

console.log("Your Score: " + playerScore);
console.log("Computer Score: " + computerScore);
console.log("");
