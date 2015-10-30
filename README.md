
Description 

What Are The Odds is a simple game intended to make your friends do stupid things.  There are no winners, just losers.  The problem with the game is that there is no good way to document the games you have played and all the ridiculous things that you have gotten your friends to do, or done yourself.  To fill this much needed gap I created the What Are The odds web application where you can track all your past games.  

If you aren’t familiar with the game…

Start by thinking of a challenge or dare you would like to see you friends do.  Once you have something particularly funny or cruel ask your friend “What are the odds you do….(the challenge).  The person dared than has to respond with odds between 1 and 50.  Ex. 1/50, 1/25, 1/10.  Now each player “secretly” picks a number between 1 and x and plug it in to the web application.   Hit play and the computer will decide your fate.  If the numbers are the same the, the person dared has to complete the dare.  If the numbers are different than nothing happens....unless both number add up to the odds chosen. Then the person that asked the dare has to complete the challenge.

There is one special rule.  If the odds chosen are 1/2 than it is guaranteed that one person will have to complete the dare. If the numbers chosen are the same the dare has to do it. If the numbers chosen are different than the darer has to complete the dare.
  
Example Game 

Here is an example to inspire the mischief.  Mikey asks John, “What are the Odds you eat that whole box of donuts?”  John responds back 1 in 10.  Mikey inputs the number 4.  John inputs the number 4.  The computer spits back…”John lost (because the numbers are the same) and has to eat that whole box of donuts.”

Heroku

https://what-are-the-odds.herokuapp.com/ 

No external APIs were used

Libraries and Templates Used
	-Jquery
	-EJS
	-Bootstrap

Wish List
Eventually I would love to make What Are The Odds into a native mobile application to allow for people to play the game remotely, and to incorporate easy photo/video upload. 

Some features I did not get around to, but wanted to add are.
	-photo/video upload
	-commenting and liking
	-data validation for all the forms
	-time stamps
	-the ability for users to play the game on different computers/phones
		-so saving inputs to the server
	-more custom styling
	-a logo
