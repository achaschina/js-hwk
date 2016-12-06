//To start the Game call function firstPlay() in console

var prizes  = [10, 5, 2];

function firstPlay() {
    var answer = confirm("Do you want to play the game?");
    if (!answer) {
        console.log("Today you will not win the jackpot, but you could");
        return;
    }
    //////////////////////////////////////////////////////////
    var jackPot = 0;
    jackPot = playGame(1);
    answer = confirm("Do you want to play the game again?");
    if (answer) {
        jackPot += playGame(3);
    }
    console.log("Your total win: " + jackPot);
}

function playGame(coef) {
    var prizesSum = 0;
    var ourNumber = Math.round(Math.random() * 5);
    for (var i = 1; i <= 3; i++) {
        var userNumber = getUserNumber();
        if (userNumber == ourNumber) {
            prizesSum = coef * prizes[i - 1];
            alert("You won " + prizesSum + "$ in " + i + " attemp!");
            break;
        }
    }
    return prizesSum;
}

function getUserNumber() {
    var userNumber = prompt("Please enter your number.");
    return userNumber;
}
