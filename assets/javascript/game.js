var words = ["stark", "lanister", "tyrell", "targaryen", "bolton", "frey", "baratheon",];
var playWord;
var startblock = true;
var selected = [];
var wordSpace = [];
var wins = 1;
var loss = 1;
var guess;
var playWord;
var userInput;
var chosen = document.getElementById("chosen");
var underscore = document.getElementById("playunderscore");
var pickedWord = document.getElementById("playWord");
var win = document.getElementById("wins");
var losses = document.getElementById("losses")
var gleft = document.getElementById("guesses");




function startUp() {
    //reset the board

    guess = 9;
    gleft.innerHTML = 10
    //Print to the page the same amount of "_" as there are letters
    playWord = words[Math.floor(Math.random() * words.length)];
    selected = [];
    wordSpace = [];
    for (var i = 0; i < playWord.length; i++) {
        wordSpace.push("_");
        underscore.innerHTML = wordSpace.join(" ");
        console.log(wordSpace);
    }
};
// startUp();

function displayChange() {
    //print to the screen the chosen letters
    selected.push(userInput);
    chosen.innerHTML = selected.join(" ").toLocaleUpperCase();
    console.log(selected);

    // replace "_" with the correct letter, loop allows repeating letters to be filled
    if (playWord.indexOf(userInput) > -1) {
        for (var i = 0; i < playWord.length; i++) {
            if (playWord[i] === userInput) {
                wordSpace[i] = userInput;
            }
        }
    }
    underscore.innerHTML = wordSpace.join(" ").toLocaleUpperCase();
}

function winLoss() {
    // when the playword is full increase wins and select next word
    if (wordSpace.join("") === playWord) {
        win.innerHTML = wins++;
        $("#chosen").empty();
        startUp();
        // when a guess is wrong decrease guess count
    } if (playWord.indexOf(userInput) === -1) {
        gleft.innerHTML = guess--;
        // when the player is out of guess declair a loss and select a new word
    } if (guess < 0) {
        losses.innerHTML = loss++;
        $("#chosen").empty();
        startUp();
    }
}

document.onkeyup = function () {
    userInput = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    if (startblock === true) {
        document.getElementById("startblock").style.cssText = "display: none";
        startblock = false;
        startUp();
        
    } else {
        displayChange();
        winLoss();
    }
}