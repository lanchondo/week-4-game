	var random_number;
	var loss = 0;
	var win = 0;
	var previous = 0;

var resetNumber = function () {

	$(".crystals").empty();

	var images = [
		'http://i0.kym-cdn.com/photos/images/original/000/932/760/d13.png',
		'https://vignette3.wikia.nocookie.net/steven-universe/images/6/68/Pearl-current.png/revision/latest?cb=20160128183731',
		'https://vignette1.wikia.nocookie.net/steven-universe/images/2/22/Amethyst_-_Before_Reformed.png/revision/latest?cb=20150907161948',
		'http://vignette2.wikia.nocookie.net/steven-universe/images/4/4c/Garnet-current-deko.png/revision/latest?cb=20160131215907'
	]

	random_number = Math.floor(Math.random() * 60) + 30;
	console.log(random_number);
	
	$("#result").html('Random Number: ' + random_number);
	
	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 12) + 1;
			//console.log(random)

		var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"steven-random": random
		});

		crystal.css({
			"background-image":"url('" + (images[i]) + "')",
				"background-size":"cover"
		})
		$(".crystals").append(crystal);
	}
}

resetNumber();


	$(document).on('click',".crystal", function (){

		var num = parseInt($(this).attr('steven-random'));

		previous += num;

		if(previous > random_number){
			loss--;
			//console.log("You Lost");


			$("#loss").html(loss);

			previous = 0;

			resetNumber();
		}

		else if (previous === random_number){
			win++;
			//console.log("You Won");

			$("#win").html(win);

			previous = 0;

			resetNumber();
		}

		$("#previous").html(previous);
		console.log(previous)
		//console.log($(this).attr('steven-random')); 
	});
	//There is a random number that is generated
	//There are four items that generate a random number
	//A new random number needs to generate when a game is won or lost
	//When clicking on any of the four items it should add to the previous number unti it hits the total score
	//If they go above the number it will start over and it will add to the loss counter
	//If the number matches the game will start over and they will gain a point to their win counter
