// Container 1
const $divImage = $('<div class = "container1"><div>');
$('body').append($divImage);

//Cover Image
const $coverImage = $('<img src = "https://i.redd.it/awl2w7ox6icy.jpg" width="100%" height="100%">')
$('.container1').append($coverImage);

//Title
const $gameTitle = $('<div class = "title">Labyrinth</div>');
$('.container1').append($gameTitle);

//How to Play Intro
const $gameIntro = $('<div class = "intro">How to Play</div>');
$('.container1').append($gameIntro);

$(document).ready(
    $('.intro').hover(
        function()  {
            $(this).append($('<h1>How to play</h1>'));
            $(this).append($('<p>Instructions on how to play</p>')) 
        }, function() {
            $(this).find('h1').remove();
            $(this).find('p').remove();
        }
    )
);

// Start button
const $gameStart = $('<div class = "start">Start</div>');
$('.container1').append($gameStart);


$(document).ready( 
    $('.start').on('click', function(){
       
    })
)

// Maze Gameboard


// 0 = path, 1 = blocked, 2 = start, 3 = end
let $gameBoard = [
    
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,2,0,0,0,0,1,0,0,0,0],
    
]

// player 
//let $player = 



function $canvasBoard() {
    let canvas = $('#myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 150, 75);
}
$canvasBoard();


