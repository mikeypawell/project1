// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
	console.log("CLIENT-SIDE JAVASCRIPT IS RUNNING");
 	var playButton = $("#play-the-game");
 	var summary = null;

	playButton.click(function() {

		var loser;
		var playerOneName = $("#player-one-input").val();
		var playerTwoName = $("#player-two-input").val();
		var playerOneDare = $("#dare").val();
		var playerTwoOdds = parseInt($("#odds").val(), 10);
		var playerOneChoice = parseInt($("#player-one-number").val(), 10);
		var playerTwoChoice = parseInt($("#player-two-number").val(), 10);
		var loserAlert = $("#loser");
		var publicFeed = $("#upload"); 

		if (playerOneChoice + playerTwoChoice == playerTwoOdds){
			loser = playerOneName;
			$("#loserOne").html(playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare);
			summary = playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare;
			$( "#loserOne" ).show();

		}
		else if (playerOneChoice == playerTwoChoice) {
			loser = playerTwoName;
			$("#loserTwo").html(playerTwoName + " loses to " + playerOneName + " and has to " + playerOneDare);
			summary = playerTwoName + " loses to " + playerOneName + " and has to " + playerOneDare;
			$( "#loserTwo" ).show();
			
		}

		else if (playerTwoOdds == 2 && playerOneChoice == 1 && playerTwoChoice == 2) {
			loser = $playerOneName;
			$("#loserOne").html(playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare);
			var outputThree = playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare;
			$( "#loserOne" ).show();
		

		}

		else if (playerTwoOdds == 2 && playerOneChoice == 2 && playerTwoChoice == 1) {
			loser = playerOneName;
			$("#loserOne").html(playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare);
			var outputFour = playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare;
			$( "#loserOne" ).show();


		}
		else {
			loser = "tie";
			$("#tie").html(playerOneName + "tied" + playerTwoName + "and nothing happened.  Play again");
			$( "#tie" ).show();
			var outputFive = playerOneName + "tied" + playerTwoName + "and nothing happened.  Play again";
			
		}
		
		
		return loser;

	});



//Upload to Odds Feed 
//on click...save the loser summary to the server...reroute Odds Feed Page 
var uploadButton = $("#upload");
uploadButton.click(function() {
	e.preventDefault();
	console.log(summary);
	$.post("/feed", {summary: summary}); 

});


/*
//sign-up form

$('#signup-form').on('submit', function(e) {
    e.preventDefault();

    // select the form and serialize its data
    var signupData = $("#signup-form").serialize();
    console.log(signupData);
    // send POST request to /users with the form data
    $.post('/users', signupData, function(response) {
      console.log(response);
    });
  });

//login-form
  $('#login-form').on('submit', function(e) {
    e.preventDefault();

    // select the form and serialize its data
    // note: this is the form because the event handler
    //   was triggered from the form
    var loginData = $(this).serialize();
    // send POST request to /login with the form data
    $.post('/login', loginData, function(response) {
      console.log(response);
    });
  });

*/


});
