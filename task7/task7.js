var prizes = [10, 5, 2];

function firstPlay() {
    //Ask the user is ready to start the game
    var answer = confirm("Do you want to play the game? You have 3 attemps to guess a number");
    if (!answer) {
        console.log("Today you will not win the jackpot, but you could");
        return;
    }
    //Start Game 1
    var jackPot = 0;
    jackPot = playGame(1);
    //When user finish Game1 we offer him to play for the second time
    answer = confirm("Do you want to play the game again?");
    if (answer) {
        jackPot += playGame(3);
    }
    alert("Your total win: " + jackPot);
}

function playGame(coef) {
    //var coef it is the coefficient for the calculation of the prize. 1 at first time and 3 at second time
    var prizesSum = 0;
    var ourNumber = Math.round(Math.random() * 5);
    for (var i = 1; i <= 3; i++) {
        var userNumber = getUserNumber();
        if (!userNumber) {
            break;
        }
        if (userNumber == ourNumber) {
            prizesSum = coef * prizes[i - 1];
            alert("You won " + prizesSum + "$ in " + i + " attemp!");
            break;
        }
    }
    return prizesSum;
}

function getUserNumber() {
    var userNumber = prompt("Please enter your number and try to guess our number");
    if (userNumber == null) {
        alert("Goodbay!!!");
        return false;
    }
    userNumber = parseInt(userNumber);
    while (isNaN(userNumber)) {
        var userNumber = prompt("Please numbers only in this game!");
        if (userNumber == null) {
            alert("Goodbay!!!");
            return false;
        }
        userNumber = parseInt(userNumber);
    }
    return userNumber;
}

firstPlay();
