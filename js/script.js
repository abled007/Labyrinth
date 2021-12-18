// Find Element
let $canvas = $('#myCanvas');
let $gameActive = true;

// player 
let $player = {
    //axis
    x: 0,
    y: 0,
}
// 0 = path, 1 = blocked, 3 = mystery box
let $gameBoard = [
    
    [0,1,0,3,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0],          
    [0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,3,1,1,0,1],
    [3,1,0,1,1,0,1,0,1,0,3,0,1,0,0,0,0,0,1,0,3],
    [0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
    [0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0],
    [1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1],
    [0,1,0,1,0,0,0,0,3,0,3,0,0,0,0,1,0,1,0,0,0],
    [0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,3,1,1,0],
    [0,3,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,3],
    [1,1,1,1,0,1,0,3,0,0,3,0,0,0,0,1,0,1,1,1,1],
    [0,0,0,1,0,1,0,0,0,0,0,0,0,3,0,1,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,0,0,0,3,0,1,0,1,0,1,1],
    [0,1,0,0,0,1,0,0,0,3,0,0,0,0,0,1,0,1,0,0,0],
    [0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
    [0,1,3,0,0,0,1,0,0,0,0,1,0,0,0,1,0,3,0,0,1],
    [1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1],
            
];

//canvas
const ctx = $canvas[0].getContext('2d');
const blockSize = $gameBoard.length;

//player
function $circle() {
    ctx.beginPath();
    let plyr = blockSize/2;
    ctx.fillStyle = '#00aaff';
    ctx.arc($player.x*blockSize+plyr, $player.y*blockSize+plyr, plyr, 0, 2*Math.PI);
    ctx.fill();
    //ctx.translate(x,y); //How do I chnage the players positon
};

// Creating the board
function $drawBoard() {
    ctx.fillStyle = "#6E5519";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    
    function $trapDoor() {
        for (let y = 0; y < $gameBoard.length; y++) {
            for (let x = 0; x < $gameBoard[y].length; x++) {
                if($gameBoard[y][x] === 1) {
                    ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                } else if($gameBoard[y][x] === 3){
                    ctx.beginPath();
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "red";
                    ctx.moveTo(x*blockSize, y*blockSize);
                    ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
                    ctx.moveTo(x*blockSize, (y+1)*blockSize);
                    ctx.lineTo((x+1)*blockSize, y*blockSize);
                    ctx.stroke(); 
                } 
            }
        }
    }
    $trapDoor(); 
    $circle(); //player
    //$shrine();  
}
$drawBoard();


//Create lives 
let $lives = ["", "", ""];
const $livesLeft = [
    [0,0,0],
    [0,0,1],
    [0,1,1],   
];

const $noLives = [1,1,1];

let $redHeart = 
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();

let $greyHeart = 
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
    

function $drawLives(){
    for (let i = 0; i < $lives.length; i++){



       
        

    }
}
$drawLives();






//Creat a function when player lands on trapDoor they loose a life























//Shrine
// function $shrine(){
//     for (let y = 0; y < $gameBoard.length; y++) {
//         for (let x = 0; x < $gameBoard[y].length; x++) {
//             if ($gameBoard[y][x] === 1) {
//                 ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
//             }else if($gameBoard[y][x] === 2){
//                 ctx.beginPath();
//                 ctx.lineWidth = 5;
//                 ctx.moveTo($player.x*blockSize, $player.y*blockSize);
//                 ctx.lineTo(($player.x+1)*blockSize, ($player.y+1)*blockSize);
//                 ctx.lineTo(($player.x)*blockSize, $player.y+1*blockSize);
//                 ctx.closePath();
//                 ctx.strokeStyle = "blue";
//                 ctx.stroke();
//                 ctx.fill();
//                 }
//             }
//         }
//     }
       
//Making sure player moves 0 board and not on 1
function canMove(x, y) {
    return (y >= 0) && (y < $gameBoard.length) && (x >= 0) && (x < $gameBoard[y].length) && ($gameBoard[y][x] != 1);
};

// arrow keys 
$(document).keydown(function(e){
    e.preventDefault();
    let key = e.which;
    if((key == 37) && canMove($player.x-1, $player.y)) $player.x--; //left
    else if((key == 38 && canMove($player.x, $player.y-1))) $player.y--; //up
    else if((key == 39 && canMove($player.x+1, $player.y))) $player.x++; //right
    else if((key == 40 && canMove($player.x, $player.y+1))) $player.y++; //down
    $drawBoard();
});


      
//First Page
        
// //Container 1
// const $divImage = $('<div class = "container1"><div>');
// $('body').append($divImage);
        
// //Cover Image
// const $coverImage = $('<img src = "https://i.redd.it/awl2w7ox6icy.jpg" width="100%" height="100%">')
// $('.container1').append($coverImage);
        
// //Title
// const $gameTitle = $('<div class = "title">Labyrinth</div>');
// $('.container1').append($gameTitle);
        
// //How to Play Intro
// const $gameIntro = $('<div class = "intro">How to Play</div>');
// $('.container1').append($gameIntro);
        
// $(document).ready(
//      $('.intro').hover(
//         function()  {
//             $(this).append($('<h1>Instructions</h1>'));
//             $(this).append(
//                 $('<p>Use the arrow keys to run through the maze and make it to the shrine. Be Carefull! There could be traps!</p>')) 
//         }, function() {
//             $(this).find('h1').remove();
//             $(this).find('p').remove();
//         }
//     )
// );
        
// // Start button
// const $gameStart = $('<div class = "start">Start</div>');
// $('.container1').append($gameStart);


// $('.start').on('click', function(){
//     $( this ).after( "<p>Another paragraph!</p>" );
// });



//function 



//land on trap door loose
//land on shrine you win
//play again 