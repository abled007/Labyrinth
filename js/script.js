// Find Element
let $canvas = $('#myCanvas');
let $gameActive = true;

// player 
let $player = {
    //axis
    x: 10,
    y: 15,
}


// 0 = path, 1 = blocked, 3 = mystery box
let $gameBoard = [
    
    [0,1,0,3,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0],          
    [0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,3,1,1,0,1],
    [3,1,0,1,1,0,1,0,1,0,2,0,1,0,0,0,0,0,1,0,3],
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
let blockSize = $gameBoard.length;

//player

$().toggleClass
ctx.clearRect(0, 0, $canvas.width, $canvas.height);

// Creating the board
function $drawBoard() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    ctx.fillStyle = "#6E5519";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let y = 0; y < $gameBoard.length; y++) {
        for (let x = 0; x < $gameBoard[y].length; x++) {
            if($gameBoard[y][x] === 1) {
                ctx.clearRect(0, 0, $canvas.width, $canvas.height);
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
            } else if($gameBoard[y][x] === 2){
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "green";
                ctx.moveTo(x*blockSize, y*blockSize);
                ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
                ctx.moveTo(x*blockSize, (y+1)*blockSize);
                ctx.lineTo((x+1)*blockSize, y*blockSize);
                ctx.stroke(); 
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
    function $circle() { //player
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        ctx.beginPath();
        let half = blockSize/2;
        ctx.fillStyle = '#00aaff';
        ctx.arc($player.x*blockSize+half, $player.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
        $('body').toggleClass('#myCanvas', false);
    };
    $circle();
}
$drawBoard();


//Create lives 
let $fullLives = [0,0,0];
let $twoLives = [0,0,1];
let $oneLife = [0,1,1];
let $noLives = [1,1,1];

  
    const $livesGrid = $('<div class="grid"></div>');
    $('body').append($livesGrid);
    
    let $livesLeft = ["", "", ""];
    $.each($livesLeft, function(index, value){
        $('.grid').append(value);
    });
    
    
    //Create a function when player lands on trapDoor they loose a life
    
    
    
//Making sure player moves 0 board and not on 1
function canMove(x, y) {
    return (y >= 0) && (y < $gameBoard.length) && (x >= 0) && (x < $gameBoard[y].length) && ($gameBoard[y][x] != 1);
};


// arrow keys 
$(document).keydown(function(e){
    e.preventDefault();
    console.log(e);
    let key = e.which;
    if((key == 37) && canMove($player.x-1, $player.y)) $player.x--;
    //left
    else if((key == 38 && canMove($player.x, $player.y-1))) $player.y--;
    //up
    else if((key == 39 && canMove($player.x+1, $player.y))) $player.x++;
    //right
    else if((key == 40 && canMove($player.x, $player.y+1))) $player.y++;
    //down
    $drawBoard();
});

// $(document).ready(function(){
//     ctx.clearRect(0, 0, $canvas.width, $canvas.height);
//     $('body').toggleClass('#myCanvas', false);  
// });

