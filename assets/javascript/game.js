$(document).ready(function() {

var words = ["stark","lanister","tyrell","targaryen","bolton","frey","baratheon"];

var selected = [];
var wordSpace = [];
var wins = 0 + 1;
var guess = 10;
var chosen = document.getElementById("chosen");
var underscore = document.getElementById("playunderscore");
var pickedWord = document.getElementById("playWord");
var win = document.getElementById("wins")
var gleft = document.getElementById("guesses")

 // Pick a word for the player to guess
 var playWord = words[Math.floor(Math.random()*words.length)];
    pickedWord.innerHTML = playWord;
     console.log(playWord);
//Print to the page the same amount of "_" as there are letters
for (var i = 0; i < playWord.length; i++) {
        wordSpace.push("_");  
    }
    underscore.innerHTML = wordSpace.join(" ");
        console.log(wordSpace);


// When a leter is pressed by the player it has to be added to the puzzle word if correct and to the screen for being chosen
document.onkeyup = function() {
    var userInput = String.fromCharCode(event.keyCode).toLocaleLowerCase();
        gleft.innerHTML = "GUESSES LEFT: " + guess--;
        selected.push(userInput);
        chosen.innerHTML = selected.join(" ").toLocaleUpperCase();
            console.log(selected);

        // replace "_" with the correct letter, loop allows repeating letters to be filled      
    if (playWord.indexOf(userInput) > -1) {            
      for (var i = 0; i < playWord.length; i++){
          if(playWord[i] === userInput){
            wordSpace[i] = userInput;
          }
      }              
    underscore.innerHTML = wordSpace.join(" ").toLocaleUpperCase();
    console.log(true);
         // when all the letters of the playWord are chosen increase Wins   
    if (wordSpace.join("") === playWord){
        win.innerHTML = "WINS: " + wins++;
    }
    }else {
        console.log(false);
    } 
}
});
