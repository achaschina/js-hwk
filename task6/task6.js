function playGame() {
    var ourNumber = Math.round(Math.random() * 100);
    var userNumber = prompt("Please enter your number and try to guess our number");
    if (!userNumber) {
        return;
    }
    while (true) {
        if (userNumber > ourNumber) {
            userNumber = prompt("Your number is higher than ours. Try againe!");
        } else if (userNumber < ourNumber) {
            userNumber = prompt("Your number is less than ours. Try againe!");
        } else {
            alert("You are right! The number is " + ourNumber);
            break;
        }
    }
}

playGame();
