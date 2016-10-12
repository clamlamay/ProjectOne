console.log('loaded window')

// document.getElementById('FF7-theme').play();

$('#beginButton').click(function(){
	console.log('Ready to play');
});

$('.card').click(function(){
	console.log('Card was clicked');
});


//TIMER
var count = 61;
var counter = setInterval(timer,1000);

function timer(){
	
	count = count-1;
	if (count <= 0)
{
	clearInterval(counter);
	alert('Game Over');
	// location.reload(); 
}
$("#timer").text("Timer: " + count);
};

timer();

// clearInterval(); 
// clearTimeout();

//SCORE
//points added for each match
//If Match add 5 points

//LEVEL
//new level/game reach after board has been matched

//Chocobo Candy - if i have extra time
//bonus? Maybe a reveal of cards?

//Characters

var charactersCards = ['Cloud', 'Cloud', 'Tifa', 'Tifa', 'Aeris', 'Aeris']; 

function createBoard() {

for (var i = 0; i < charactersCards.length; i++){
	var board = $("#game-board");
	var img = document.createElement("img");
	console.log(charactersCards[i]);
	img.src = '../images/' + charactersCards[i] + '.png';
	$("#game-board").append('<div>' + img + '</div')
	}
}	

createBoard();


// Cloud Strife
// Tifa Lockhart
// Aerith Gainsborough // Aeris
// Barret Wallace
// Yuffie Kisaragi
// Vincent Valentine
// Zack Fair
// Red XIII
// Cait Sith
// Cid Highwind

// Sephirorth
