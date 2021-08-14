//computerPlay function randomly generates "Rock", "Paper", or "Scissors"
function computerPlay() {
    // Generate a random number from 0 to 2       
    let randomNumber = () => Math.floor(Math.random() * (3));
    let pick = randomNumber();
    const computerSelection = document.getElementsByClassName("computer-choice");
    // If the pick is 0 return "Rock",if 1 return "Paper" if 2 return "Scissors"
    if (pick === 0) {
        computerSelection[0].src = "images/computer-rock.jpeg";
        return "computer-rock";
    } else if (pick === 2) {
        computerSelection[0].src = "images/computer-paper.jpeg";
        return "computer-paper"
    } else {
        computerSelection[0].src = "images/computer-scissor.jpeg";
        return "computer-scissor"
    }
}


//playRound functions takes the user input and plays a round of rock, paper, scissors with computer
function playRound(playerSelection, computerSelection) {
    //If players enter rock check againts computer selection and return result
    if (playerSelection === "player-rock" && computerSelection === "computer-scissor") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "player-rock" && computerSelection === "computer-paper") {
        return "You Lose! Paper beats rock!";
        //If players enter scissors check againts computer selection and return result
    } else if (playerSelection === "player-scissor" && computerSelection === "computer-paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "player-scissor" && computerSelection === "computer-rock") {
        return "You Lose! Rock beats Scissors!";
        // If player enters paper check againts computer selection and return result
    } else if (playerSelection === "player-paper" && computerSelection === "computer-rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "player-paper" && computerSelection === "computer-scissor") {
        return "You Lose! Scissors beats Paper!";
    } else {
        // If no conditions match it is a tie
        if (computerSelection === 'computer-rock') {
            return "It's a tie! You both selected Rock!";
        } else if (computerSelection === 'computer-scissor') {
            return "It's a tie! You both selected Scissors!";
        } else {
            return "It's a tie! You both selected Rock!";
        }
    }
}
// When a button is clicked, update the player selection with the corresponding button
function selection(e) {
    const selection = document.getElementsByClassName("player-choice");
    selection[0].src = `images/${e.target.name}.jpeg`;
    let computerSelection = computerPlay();
    let result = playRound(e.target.name, computerSelection);
    const resultMessage = document.getElementsByClassName("result");
    resultMessage[0].innerHTML = result;
    game(result);
}
// Creating a collections of elements with a class of selection which are the three buttons for rock, paper, or scissors
const choice = document.getElementsByClassName("selection");
// Listens for a click on three buttons in section with class of selection
for (i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", selection);
}

// game function plays a best of version of rock, paper, scissors, the game will track scores of player and computer and once a player reachs 3 the game will end they will win.

function game(result) {
    //Boths player start with zero
    const playerSpan = document.getElementById("player-score");
    const computerSpan = document.getElementById("computer-score");
    let playerScore = playerSpan.innerText;
    let computerScore = computerSpan.innerText;
    const playerPick = document.getElementsByClassName("player-choice");
    const computerPick = document.getElementsByClassName("computer-choice");
    if (result.slice(0, 8) === "You Win!") {
        playerScore++;
        playerSpan.innerText = playerScore;
        console.log(result);
        playerPick[0].classList.add("greenBorder");
        computerPick[0].classList.add("redBorder");
        //if player loses increment computer score
    } else if (result.slice(0, 8) === "You Lose") {
        computerScore++;
        computerSpan.innerText = computerScore;
        playerPick[0].classList.add("redBorder");
        computerPick[0].classList.add("greenBorder");
        console.log(result);
        //if tie, do nothing
    } else {
        console.log(result);
    }
    //log results of round to console.
    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log("");
    const scores = document.getElementsByClassName("score");
    for (let i = 0; i < scores.length; i++) {
        if (scores[i].innerText === "5") {
            console.log(scores[i].id);
            const resultMessage = document.getElementsByClassName("result");
            if (scores[i].id == "computer-score") {
                resultMessage[0].innerHTML = "<p>The Computer Wins!</p>"
            } else {
                resultMessage[0].innerHTML = "<p>You Win!</p>";
            }
            const choice = document.getElementsByClassName("selection");
            // Listens for a click on three buttons in section with class of selection
            for (i = 0; i < choice.length; i++) {
                choice[i].classList.add("invisible");
            }
        }
    }
}



