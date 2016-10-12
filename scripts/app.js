console.log('loaded window')
// document.getElementById('FF7-theme').play();


// $('.card').click(function(){
// 	console.log('Card was clicked');
// });



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


function score(){
	var score = 0
	$("#score").text("Score:" + score);
	};

score();


var cards = [
		'Cloud', 
		'Cloud', 
		'Tifa', 
		'Tifa', 
		'Aeris', 
		'Aeris',
		'Yuffie',
		'Yuffie',
		'Vincent',
		'Vincent',
		'Red XIII',
		'Red XIII',
		'Cait Sith',
		'Cait Sith',
		'Cid Highwind',
		'Cid Highwind',
]; 

var cardsInPlay = [];
var board = document.getElementById('game-board');


function createBoard() {
  
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'Cloud') {
    this.innerHTML = "<img src='../ProjectOne/images/Cloud.png'>"; 
  } else {
    this.innerHTML = "<img src='../ProjectOne/images/Tifa.png'>"; 
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







// var cardsInPlay = [];

// var board = $("#game-board");

// function createBoard() {

// 	for (var i = 0; i<charactersCards.length; i++){
// 	// random = Math.round(Math.random() * i);	
	
// 	var img = document.createElement("img");
// 	var div = document.createElement("div")
// 	console.log(charactersCards[i]);
// 	img.src = '../ProjectOne/images/' + charactersCards[i] + '.png';
// 	$("#game-board").append('<div class="card">','</div>');
// 	$("#game-board").append(img);
// 		}
// 	}	

// createBoard();

// 	var selection = $('.card');
// 	$('.card').click(function(){
// 		console.log('Card was clicked');
// 		if (charactersCards === charactersCards) {
// 	    alert("You found a match!");
// 	  } else {
// 	    alert("Sorry, try again.");
// 	  }
// 	});
