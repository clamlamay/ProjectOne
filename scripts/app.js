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

var charactersCards = ['Cloud', 'Cloud', 'Tifa','Tifa',
'Aeris', 'Aeris'];

var cardsInplay = [];

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
  var cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.setAttribute('data-card', cards[i]);
  cardElement.addEventListener('click', isTwoCards);
  board.appendChild(cardElement);
  board.appendChild(cardElement);
  }
}

cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

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
