// Container 1
const $divImage = $('<div class = "container1"><div>');
$('body').append($divImage);

//Cover Image
const $coverImage = $('<img src = "https://i.redd.it/awl2w7ox6icy.jpg" width="100%" height="100%">')
$('.container1').append($coverImage);

//Title
const $gameTitle = $('<div class = "title">Labyrinth</div>');
$('.container1').append($gameTitle);

// Start button
const $gameStart = $('<div class = "start">Start</div>');
$('.container1').append($gameStart);

//How to Play 
const $gameIntro = $('<div class = "intro">How to Play</div>');
$('.container1').append($gameIntro);