let previousPlay = null; 
function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];

    let randomIndex;
    let currentPlay;
    do {
        randomIndex = Math.floor(Math.random() * plays.length);
        currentPlay = plays[randomIndex];
    } while (currentPlay === previousPlay);
    previousPlay = currentPlay;
    return currentPlay;
}

const computerChoice1 = computerPlay();
console.log("Computer chose: " + computerChoice1);