    var win = 0;
    var lose = 0;
    var guessLeft = 9;
    var guessedletters = [];

    var numOfWin = document.getElementById("numOfWin");
    var numOfLose = document.getElementById("numOfLose");
    var numOfGuessremain = document.getElementById("numOfGuessremain");
    var Guessedletters = document.getElementById("Guessedletters");

    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key.toLowerCase();
      guessedletters.push(userGuess);

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


      if (userGuess === computerGuess){
            win++;
            guessLeft = 9;
            guessedletters = [];
            computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        }

        else {
            guessLeft--;
            document.getElementById("numOfGuessremain").innerHTML = "Guesses Left:  " + guessLeft;
            document.getElementById("Guessedletters").innerHTML = guessedletters.join(",");
        }

        if (guessLeft === 0){
            lose++;
            guessLeft = 0;
            document.getElementById("numOfGuessremain").innerHTML = "Guesses Left:  " + guessLeft;
            document.getElementById("Guessedletters").innerHTML = guessedletters.join(",");
            guessLeft = 9;
            guessedletters = [];
            computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];                    
        }


      numOfWin.textContent = win;
      numOfLose.textContent = lose;
      numOfGuessremain.textContent = guessLeft;
      Guessedletters.textContent = guessedletters;

    };