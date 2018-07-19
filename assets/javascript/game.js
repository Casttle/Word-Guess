var words = ["stark","lanister","tyrell","targaryen","bolton","frey","baratheon","aaabbb"];
// Pick a word for the player to guess
var playWord = words[Math.floor(Math.random()*words.length)];
console.log(playWord);
var selected = [];
var wordSpace = [];

var chosen = document.getElementById("chosen");
var underscore = document.getElementById("playunderscore")

var generateUnderscore = () => {
    for (let i = 0; i < playWord.length; i++) {
        wordSpace.push("_");
    }
    return wordSpace; 
}
console.log(generateUnderscore());



document.onkeyup = function() {
    var userInput = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    

    if (playWord.indexOf(userInput) > -1) {
    console.log(true);
    selected.push(userInput);
    console.log(selected);
    chosen.innerHTML = selected.join(" ").toLocaleUpperCase();
// replace "_" with the correct letter
    wordSpace[playWord.indexOf(userInput)] = userInput;
    underscore.innerHTML = wordSpace.join(" ").toLocaleUpperCase();
 // when all the letters of the playWord are chosen declair a Win
 // Failing when a letter is repeated   
    if (wordSpace.join("") === playWord){
        alert("You Win!!");
    }
    }else {
        console.log(false);
        selected.push(userInput);
        console.log(selected);
        chosen.innerHTML = selected.join(" ").toLocaleUpperCase();
    } 
}

// wordSpace.innerHTML = generateUnderscore().join(" ");