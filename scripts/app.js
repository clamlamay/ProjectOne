console.log('loaded window')

document.getElementById('FF7-theme').play();

$('#beginButton').click(function(){
	console.log('Ready to play');
});


$('.card').click(function(){
	console.log('Card was clicked');
});

$('.card').hover(function(){
$(this).addClass('flip');