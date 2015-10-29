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
			summary = playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare;
			$( "#loserOne" ).show();


		}

		else if (playerTwoOdds == 2 && playerOneChoice == 2 && playerTwoChoice == 1) {
			loser = playerOneName;
			$("#loserOne").html(playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare);
			summary = playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare;
			$( "#loserOne" ).show();


		}
		else {
			loser = "tie";
			$("#tie").html(playerOneName + " tied " + playerTwoName + " and nothing happened.  Play again");
			summary = playerOneName + " tied " + playerTwoName + " and nothing happened.  Play again!";
			$( "#tie" ).show();
		}
		
		
		return loser;

	});

//Upload to Odds Feed 
//on click...save the loser summary to the server...reroute Odds Feed Page 
var uploadButton = $("#upload");
uploadButton.click(function() {
	console.log(summary);
	$.post("/public-feed", {summary: summary}, function(data)
		{console.log(data);
		window.location.assign("/public-feed");
	});
});


// $('#signup-form').on('submit', function(e) {
//     e.preventDefault();
//     var signupData = $("#signup-form").serialize();
//     	console.log(signupData);
//     $.post('/users', signupData, function(response) {
//       	console.log(response);
//     });
//   });

  // $('#login-form').on('submit', function(e) {
  //   e.preventDefault();
  //   var loginData = $(this).serialize();
  //   $.post('/login', loginData, function(response) {
  //     console.log(response);
  //   });
  // });

});
