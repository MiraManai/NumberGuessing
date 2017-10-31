var submitBtn = $('.SubmitBtn');
var feedBack = $('.feedBack');
var userGuesses = $('.userGuesses');
var userGuide = $('.userGuide');
var newGameBtn = $('.newGameBtn');
var input = $('input');

//generate a random number between 1 and 100
var goldenNumber = Math.floor(Math.random() * 100)+1 ;
console.log("Golden Number :" + goldenNumber);

var roundNumber =1;

submitBtn.click(function (e) {
	var guess = $('input').val().trim();
	if (guess !='')
	{
		//Convert the input guess to a number
		//and push i into the previous guesses
		guess = Number(guess);
		if (isNaN(guess)) return alert ("Entrer un nombre !") ;
		console.log(guess);
		userGuesses.show();
		userGuesses.append(" ",guess);

		if(guess === goldenNumber)
		{
			feedBack.show();
			feedBack.text('Right !');
			feedBack.css('background-color','green');
			userGuide.text('Congratulations :D   !!!!!!! ');
			newGameBtn.show();
			input.prop('disabled',true);
			submitBtn.prop('disabled',true);
			
		}
		else 
		{
			feedBack.show();
			feedBack.text('Wrong !');
			if(guess > goldenNumber)
			{
				userGuide.text('Last guess was too high!');
			}
			else 
			{
				userGuide.text('Last guess was too low!');
			}
		}
		//Clear the input
		//input.val('');
		roundNumber += 1;
		if(roundNumber === 11)
		{
			feedBack.text('GAME OVER , YOU LOSE :p !!');
			input.prop('disabled',true);
			submitBtn.prop('disabled',true);
			userGuide.hide();
			newGameBtn.show();
		}
	}
});

newGameBtn.click(function(){
	//refresh the page
	//location.reload();

	newGameBtn.hide();
	userGuesses.hide();
	userGuesses.text('Previous :');
	feedBack.hide();
	feedBack.css('background-color','red');
	userGuide.hide();
	userGuide.text();
	input.prop('disabled',false);
	submitBtn.prop('disabled',false);
	//Clear the input
	input.val('');	
});
