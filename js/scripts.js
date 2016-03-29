function HangMan(insertedWord) {
  this.hangmanWord = insertedWord;
  this.charArray = insertedWord.split("");
  this.charLength = this.charArray.length;
}

var randomizer = function(randomWordArray) {
  var randomNumber = Math.floor(Math.random() * randomWordArray.length);
  return randomWordArray[randomNumber];
}

$(document).ready(function(){
  var letterArray = [];
  var guessesLeft = 7;

  var randomCondomentWordArray = ["mayonayse", "mustard", "relish", "horseradish", "leuttice", "tomatoes", "catchup", "cheese"];

  $("#myButton").click(function(){
    $("#myButton").hide();
    $("#hangmanHead").append("0");
    $("#hangmanLeftArm").append("/");
    $("#hangmanCenter").append("|");
    $("#hangmanRightArm").append("\\");
    $("#hangmanLowerCenter").append("|");
    $("#hangmanLeftLeg").append("/");
    $("#hangmanRightLeg").append("\\")
    var randomWord = randomizer(randomCondomentWordArray);
    var myHangMan = new HangMan(randomWord);
    var guesses = myHangMan.charLength;
    for(i = 0; i < myHangMan.charLength; i++) {
      letterArray[i] = myHangMan.charArray[i];
      $("#hangmanGuesses").append("<span value='" + myHangMan.charArray[i] + "' id='" + i + "'>_ </span>");
    }
    console.log(letterArray);
  });
  $(".hangmanForm").submit(function(event){
    event.preventDefault();
    var playerGuess = $("#formInput").val();
    console.log(playerGuess);
    for (var i = 0; i < letterArray.length; i++) {
      if(letterArray[i] === playerGuess) {
        var idValue = "#" + i;
        console.log(playerGuess)
        // $(idValue).empty();
        $(idValue).text(playerGuess);
        alert("correct")
      }
      else {
        guessesLeft--;
        console.log(guessesLeft)
      }
    }
  });
});
