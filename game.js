var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern=[];

console.log(randomChoosenColor);

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
}



