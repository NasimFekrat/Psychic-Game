//generate random char
var possible = "abcdefghijklmnopqrstuvwxyz";
var chosenChar = possible.charAt(Math.floor(Math.random() * possible.length));
//generate random char

var keyPressCount = 10;//make a counter for guesses Lefts
var loseTime = 0;
var winTime=0 ;

//get the key pressed by user and show the value in your guess div
document.onkeyup = function (event) {
    var letter = event.key;   
    document.getElementById("yourGuesses").append(letter + " ");
//get the key pressed by user and show the value in your guess div

    //make a counter for guesses Lefts
    keyPressCount--;
    document.getElementById("guessesLefts").innerHTML = "Guesses Left: " + keyPressCount;
    //make a counter for guesses Lefts

    //loosing function
    if(keyPressCount == 0){
        loseTime++;
        document.getElementById("losses").innerHTML = "Losses: " + loseTime;
        document.getElementById("yourGuesses").innerHTML = "Your Guesses So Far: ";//clear
        keyPressCount = 10;
        chosenChar = possible.charAt(Math.floor(Math.random() * possible.length));//set a new random char for next round
    }
    //loosing function
    
    //wining functions
    if(letter === chosenChar){
        winTime++;
        document.getElementById("win").innerHTML = "Wins: " + winTime;
        document.getElementById("yourGuesses").innerHTML = "Your Guesses So Far: ";//clear
        keyPressCount = 10;//start the counter
        chosenChar = possible.charAt(Math.floor(Math.random() * possible.length));//set a new random char for next round
    }
    //wining functions
};
