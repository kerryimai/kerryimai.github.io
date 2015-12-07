function playGame() {
  var attack = function(x) {
    Battle(weapons[x]);
  };

  //object for weapon attack damages:
  var weapons = {
    scissors: 5,
    winebottle: 7,
    flashlight: 3,
    fist: 2
  };
  //object from clown health points:
  var clown = {health: 12};
  //function for attack hit and miss formular, attack damage formular and loop of attacking:
  function Battle(power) {
    var attack = true;
   var youHit = Math.floor(Math.random() * 2 + 1);
    var attackDamage = Math.floor(Math.random() * power + 1);

    while (attack) {
      if (youHit) {
      alert("You shoved him with your chosen weapon and did " + attackDamage + " damage!");
      clown["health"] -= attackDamage;

        if (clown["health"] <= 0) {
        alert("WOW you did it! The creepy clown has fainted, you survivied----you get to live and CODE for a long time!");
        attack = false;
        } else {
        youHit = Math.floor(Math.random() * 3);
        }
      } else {
        alert("OHHH NOOOO! The clown swinged his long arm and slaughtered you with his butcher knife, I guess you just wasnt fast enough----GAME OVER");
        attack = false;
      }
    }
  }

  var asleep = prompt("You are falling asleep at your apartment and you hear the door opening and footsteps, do you go back to sleep? yes/no").toUpperCase();

  if(asleep === "YES") {
    alert("You woke up to the door of your bedroom slowly opening. The last thing you saw was a Clown with his big smile and a Shiny Knife---GAME OVER");
  }
  else if(asleep !== "YES" && asleep !== "NO") {
    alert("That is not an option, its a simple yes or no question, do you think it is a joke?!");
  }
  else {
    var gotUp = prompt("the footstep is getting louder, do you A: run out from the room. B: hide in the closet. C: find something you can use as a weapon?").toUpperCase();
      switch(gotUp) {
        case "A":
        alert("Fighting him empty handed is sure not a good idea! The chances of you winnig us small, but lets try!")
          attack("fist");
        break;
        case "B":
          var hiding = prompt("you are hiding in the closet, and you hear the footstep approching and suddenly it stopped. Do you A:go back to bed? B:keep hiding in the closet?").toUpperCase();
            if(hiding === "A") {
              alert("You opened the closet door and guess what? He is right there waiting for you with his big smile and a butcher Knife---GAME OVER");
            }
            else {
              alert("You waited until the next morning and finally came out of hiding. He is gone, but you see red paint on the wall in front of your bed saying: SEE YOU SOON----play again to win");
            };
        break;
        case "C":
          alert("The door is opening, oh my god!! You see a huge scary clown, and he is holding a shiny butcher knife!");
          var weapon = prompt("All you can find is a pair of scissors, a winebottle, and a flashlight. Which one do you grab?").toLowerCase();

            switch(weapon) {
              case"scissors":
                alert("Ok, its not the deadliest weapon but you gotta try");
                  attack("scissors")
                break;
              case"winebottle":
                alert("GREAT CHOICE! Lesson learned, always have a winebottle with you for all purposes!")
                attack("winebottle")
                break;
              case"flashlight":
                alert("seriously? flashlight over wine?")
                attack("flashlight")
              break;
              default:
                alert("That is not an option, you are running out of TIME!!");
            };
        break;
        default:
          alert("That is not an option, HURRY!! He is getting really close!!");
      };
  };
}

// window.onload = function() {
//   var elements = document.querySelectorAll("#project-icons img");

//   for (var i = 0; i < elements.length; i++) {
//     elements[i].onclick = function(event) {
//       var element = event.target;
//       element.style.display = "none";
//     }
//   }
// }