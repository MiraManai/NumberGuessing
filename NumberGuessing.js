var submitBtn = $('.SubmitBtn');
var feedBack = $('.feedBack');
var userGuesses = $('.userGuesses');
var userGuide = $('.userGuide');
var input = $('input');
var goldenNumber = Math.floor(Math.random() * 100)+1 ;
console.log("Golden Number :" + goldenNumber);
var roundNumber =1;

submitBtn.click(function (e) {
	var guess = $('input').val();
	if (guess !='')
	{
		guess = Number(guess);
		console.log(guess);
		userGuesses.show();
		userGuesses.append(" ",guess);

		if(guess === goldenNumber)
		{
			feedBack.show();
			feedBack.text('Right !');
			feedBack.css('background-color','green');
			userGuide.text('Congratulations :D   !!!!!!! ');
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
			input.val('');
		}
	}
});