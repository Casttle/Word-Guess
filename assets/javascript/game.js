$(document).ready(function () {
    var words = ["stark", "lanister", "tyrell", "targaryen", "bolton", "frey", "baratheon",
        "grayjoy", "winter", "blood", "wine", "winterfell", "riverlands", "riverrun", "highgarden",
        "Dragonstone", "westeros", "harrenhal", "daenerys", "arya", "sansa", "bran", "jon", "jamie",
        "tyrion", "varys", "samwell", "bronn", "hound", "littlefinger", "brienne", "missandei"];
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
    var win = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var gleft = document.getElementById("guesses");
    // Sounds
    var winsound = document.getElementById("winsound");
    var losssound = document.getElementById("losssound");
    var sword1 = document.getElementById("sword1");
    var sword2 = document.getElementById("sword2");
    var sword3 = document.getElementById("sword3");
    var sword4 = document.getElementById("sword4");
    var sword5 = document.getElementById("sword5");
    var theme = document.getElementById("theme");
    var swordArray = [sword1, sword2, sword3, sword4, sword5];


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
            winsound.play();
            $("#chosen").empty();
            startUp();
            // when a guess is wrong decrease guess count
        } if (playWord.indexOf(userInput) === -1) {
            gleft.innerHTML = guess--;
            // when the player is out of guesses declair a loss and select a new word
        } if (guess < 0) {
            losses.innerHTML = loss++;
            losssound.play();
            $("#chosen").empty();
            startUp();
        }
    }

    document.onkeyup = function () {
        userInput = String.fromCharCode(event.keyCode).toLocaleLowerCase();
            // inform the user to hit a key to start the game and then run the game mechanics
        if (startblock === true) {
            document.getElementById("startblock").style.cssText = "display: none";
            theme.play();
            startblock = false;
            startUp();
            // when the game is played limit the inputs to A-Z
        } else if (event.keyCode >= 65 && event.keyCode <= 90) {
            swordSound = swordArray[Math.floor(Math.random() * swordArray.length)];
            swordSound.pause();
            swordSound.currentTime = 0;
            swordSound.play();
            displayChange();
            winLoss();
        }
    }
});