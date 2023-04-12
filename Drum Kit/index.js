var numberOfDrumButtons = document.querySelectorAll(".drum").length; 
//we need to find the length of all queries with class=drum
//The difference between querySelector() and querySelectorAll() is that querySelector() returns a single object //with the first HTML element that matches the ‘selectors’(w drum), but querySelectorAll() returns an array of //objects with all the HTML elements that match the ‘selectors’

//addEvent listener has been added to all the buttons using a for loop
//we could have used while loop also
//addEvent listener is a special function
//addEvent listener works such that when it listens to a click, it performs the specified function
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
    //function is the callback function which is called by the object when it expreriences a click

    //this.style.color="white";  -this changes the text style & color to white of the buttons  that gets clicked
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {
//when a key is pressed we get a number of parameters as response which includes key('a','b',etc)
//so we use this key from the event response to make the sound & animation according to that specific key
  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {
  //we used switch statement here
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");  //variable stores our new audio
      tom1.play();  //play method plays back our media
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); //to select the class .w, .d etc

  activeButton.classList.add("pressed"); //we have added the class "pressed" to add the shadow effect

  setTimeout(function() {
    activeButton.classList.remove("pressed");  //we want to remove pressed class from that button after 0.1 sec 
  }, 100);

}
