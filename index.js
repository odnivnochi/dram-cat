var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "d":
      var tom1 = new Audio("sounds/cat-meow_mk76iuvu.mp3");
      tom1.play();
      break;

    case "r":
      var tom2 = new Audio("sounds/cats-meow-2_mktkaweu.mp3");
      tom2.play();
      break;

    case "u":
      var tom3 = new Audio('sounds/jg-032316-sfx-cat-meow.mp3');
      tom3.play();
      break;

    case "m":
      var tom4 = new Audio('sounds/jg-032316-sfx-girl-making-cat-sound-1.mp3');
      tom4.play();
      break;

    case "c":
      var snare = new Audio('sounds/Myau.mp3');
      snare.play();
      break;

    case "a":
      var crash = new Audio('sounds/playful-cat-sounds_z1wz-rnd.mp3');
      crash.play();
      break;

    case "t":
      var kick = new Audio('sounds/Sound_16300.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
