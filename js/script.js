// Find Element
let $canvas = $('#myCanvas');

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
               
// Creating the board
function drawBoard() {
    const ctx = $canvas[0].getContext('2d');
    const blockSize = $gameBoard.length;
    //player 
    function $circle() {
    ctx.beginPath();
    let plyr = blockSize/2;
    ctx.fillStyle = '#00aaff';
    ctx.arc($player.x*blockSize+plyr, $player.y*blockSize+plyr, plyr, 0, 2*Math.PI);
    ctx.fill();
    ctx.translate(11,8);
    }
    $circle();


    //color
    ctx.fillStyle = "#6E5519";
    //Positon of board
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    function $trapDoor() {
    for (let y = 0; y < $gameBoard.length; y++) {
        for (let x = 0; x < $gameBoard[y].length; x++) {
            if($gameBoard[y][x] === 1) {
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                } else if($gameBoard[y][x] === 3){
                    // Creating the goal 
                    ctx.beginPath();
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "green";
                    // Creating that X shape
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

       // Triangle shape player (made the shape but did not move correctly
       // ctx.beginPath();
       // ctx.lineWidth = 4;
       // ctx.moveTo($player.x*blockSize, $player.y*blockSize);
       // ctx.lineTo(($player.x+1)*blockSize, ($player.y+1)*blockSize);
       // ctx.lineTo(($player.x)*blockSize, $player.y+1*blockSize);
       // ctx.closePath();
       // ctx.strokeStyle = "blue";
       // ctx.stroke();
       //ctx.fill();
       
    // Player 

    
}
drawBoard();

       
//Making sure player moves 0 board and not on 1
function canMove(x, y) {
    return (y >= 0) && (y < $gameBoard.length) && (x >= 0) && (x < $gameBoard[y].length) && ($gameBoard[y][x] != 1);
}
        
// $(document).keyup(function(e){
//     if((e.which == 38) && canMove($player.x, $player.y-1))
//     $player.y--;
//     else if((e.which == 40) && canMove($player.x, $player.y+1)) 
//     $player.y++;
//     else if((e.which == 37) && canMove($player.x-1, $player.y))
//     $player.x--;
//     else if((e.which == 39) && canMove($player.x+1, $player.y))
//     $player.x++;           
//     drawBoard();
//     e.preventDefault();
//     // 
// }); 

// arrow keys 
$(document).keydown(function(e){
    e.preventDefault();
    let key = e.which;
    if((key == 37) && canMove($player.x-1, $player.y)) $player.x--; //left
    else if((key == 38 && canMove($player.x, $player.y+1))) $player.y++; //up
    else if((key == 39 && canMove($player.x+1, $player.y))) $player.x--; //right
    else if((key == 40 && canMove($player.x, $player.y-1))) $player.y++; //down
    drawBoard();
})


      
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