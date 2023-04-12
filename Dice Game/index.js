
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generates a random number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩 Congratulations!"; 
}
else if (randomNumber2 > randomNumber1) {   //else if player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩 Congratulations!";
}
else {   //else it is a draw if both the players throw their dice with same value
  document.querySelector("h1").innerHTML = "Match Draw!";
}
//The innerHTML property returns: The text content of the element, including all spacing and inner HTML tags