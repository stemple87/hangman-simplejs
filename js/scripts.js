function HangMan(insertedWord) {
  this.hangmanWord = insertedWord;
  this.charArray = insertedWord.split("");
  this.charLength = this.charArray.length;
}

var randomizer = function(randomWordArray) {
  var randomNumber = Math.floor(Math.random() * randomWordArray.length);
  return randomWordArray[randomNumber];
}

var displayCheck = function(guessesLeft) {
  if (guessesLeft === 6) {
    $("#hangmanHead").append(" 0");
  } else if (guessesLeft === 5) {
    $("#hangmanLeftArm").append("/");
  } else if (guessesLeft === 4) {
    $("#hangmanCenter").append("|");
  } else if (guessesLeft === 3) {
    $("#hangmanRightArm").append("\\");
  } else if (guessesLeft === 2) {
  $("#hangmanLowerCenter").append(" |");
  } else if (guessesLeft === 1) {
  $("#hangmanLeftLeg").append("/");
} else if (guessesLeft === 0) {
  $("#hangmanRightLeg").append("\\");
  alert("you lose!");
  //reset;
  }
}

$(document).ready(function(){
  var letterArray = [];
  var guessesLeft = 7;
  var correct = true;


  var randomCondomentWordArray = ["mayonayse", "mustard", "relish", "horseradish", "leuttice", "tomatoes", "catchup", "cheese"];

  $("#myButton").click(function(){
    $("#myButton").hide();
    $(".hangmanForm").show();
    $("#guessHeader").show();
    $(".guessesLeft").text(guessesLeft);
    var randomWord = randomizer(randomCondomentWordArray);
    var myHangMan = new HangMan(randomWord);
    for(i = 0; i < myHangMan.charLength; i++) {
      letterArray[i] = myHangMan.charArray[i];
      $("#hangmanGuesses").append("<span value='" + myHangMan.charArray[i] + "' id='" + i + "'>_ </span>");
    }
    console.log(letterArray);
  });
  $(".hangmanForm").submit(function(event){
    event.preventDefault();

    var playerGuess = $("#formInput").val();
    for (var i = 0; i < letterArray.length; i++) {
      if(letterArray[i].includes(playerGuess) === true) {
        var idValue = "#" + i;
        $(idValue).text(playerGuess);
        correct = true;
        break;
        console.log(correct);
      }
      else {
        correct = false;
        console.log(correct)
      }
    }
    if (correct === false){
      guessesLeft--;
      console.log(guessesLeft);
      displayCheck(guessesLeft);
    }
    $(".guessesLeft").text(guessesLeft);
  });
});
