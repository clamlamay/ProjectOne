console.log('loaded window')

// document.getElementById('FF7-theme').play();

$('#beginButton').click(function(){
	console.log('Ready to play');
});

$('.card').click(function(){
	console.log('Card was clicked');
});


var count = 6;
var counter = setInterval(timer,1000);

function timer(){

	count = count-1;
	if (count <= 0)
{
	clearInterval(counter);
}
$("#timer").text("Timer: " + count);
};

timer();

