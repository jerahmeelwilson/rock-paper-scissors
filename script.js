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

