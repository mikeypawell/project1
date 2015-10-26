// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
	console.log("CLIENT-SIDE JAVASCRIPT IS RUNNING");
 	var playButton = $("#play-the-game");

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
			$( "#loserOne" ).show();
		}
		else if (playerOneChoice == playerTwoChoice) {
			loser = playerTwoName;
			$("#loserTwo").html(playerTwoName + " loses to " + playerOneName + " and has to " + playerOneDare);
			$( "#loserTwo" ).show();

		}

		else if (playerTwoOdds == 2 && playerOneChoice == 1 && playerTwoChoice == 2) {
			loser = $playerOneName;
			$("#loserOne").html(playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare);
			$( "#loserOne" ).show();

		}

		else if (playerTwoOdds == 2 && playerOneChoice == 2 && playerTwoChoice == 1) {
			loser = playerOneName;
			$("#loserOne").html(playerOneName + " loses to " + playerTwoName + " and has to " + playerOneDare);
			$( "#loserOne" ).show();

		}
		else {
			loser = "tie";
			$("#tie").html("Tie Game.  Play Again!");
			$( "#tie" ).show();
		}
		
		
		return loser;

	});
});
