function playGame() {
    var ourNumber = Math.round(Math.random() * 100);
    var userNumber = getUserNumber();
    if (!userNumber) {
        return;
    }
    while (true) {
        if (userNumber > ourNumber) {
            alert("Your number is higher than ours. Try againe!");
            userNumber = getUserNumber();
        } else if (userNumber < ourNumber) {
            alert("Your number is less than ours. Try againe!");
            userNumber = getUserNumber();
        } else {
            alert("You are right! The number is " + ourNumber);
            break;
        }
    }
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
        return userNumber;
    }
}
playGame();
