let $canvas = $('#myCanvas');
let $gameActive = true;

let $player = {
    x: 13,
    y: 25,
}

let $gameBoard = [
    
    [0,0,0,0,1,0,3,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1],          
    [0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,3,1,1,0,1,0,0,0],
    [1,1,1,3,1,0,1,1,0,1,0,1,0,2,0,1,0,0,0,0,0,1,0,3,0,0,1],
    [1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0],
    [0,0,0,0,1,3,0,0,1,0,0,0,0,0,0,0,0,0,1,0,3,0,0,1,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1],
    [1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1],
    [0,0,0,0,1,0,1,0,1,0,0,3,0,3,0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,3,1,1,0,0,0,0],
    [0,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,3,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,3,0,0,3,0,0,0,0,1,0,1,1,1,1,0,0,0],
    [1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,3,0,1,0,0,0,0,1,0,0,1],
    [0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,3,0,1,0,1,0,1,1,0,0,1],
    [1,1,1,0,1,0,0,0,1,0,0,0,3,2,0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1],
            
];

let $goal = $gameBoard[2]

let $trap = $gameBoard[3]

const ctx = $canvas[0].getContext('2d');
let blockSize = $gameBoard.length;
let width = $canvas.width();

$().toggleClass

function $user() { 
    ctx.beginPath();
    ctx.clearRect(0, 0, $canvas.width, $canvas.width);
    let half = blockSize/2;
    ctx.fillStyle = '#00aaff';
    ctx.arc($player.x*blockSize+half, $player.y*blockSize+half, half, 0, 2*Math.PI);
    ctx.fill();
};

function $drawBoard() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.width);
    ctx.fillStyle = "#6E5519";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    for (let y = 0; y < $gameBoard.length; y++) {
        for (let x = 0; x < $gameBoard[y].length; x++) {
            if($gameBoard[y][x] === 1) {
                ctx.clearRect(0, 0, $canvas.width, $canvas.width);
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
    $user();
}
$drawBoard();

const $playerStatus = $('<h1 class="status"></h1>');
$('body').append($playerStatus);

function $checkWin() {
    for (let i = 0; i < $gameBoard.length; i++){
        if($gameBoard[$player.x][$player.y] === 2){
            $('.status').innerHTML('You Win!');
            ctx.clearRect(0, 0, $canvas.width, $canvas.height);
            $gameActive = false;
            return;
        }
    }
};
$checkWin();

let $fullLives = [0,0,0];
let $twoLives = [0,0,1];
let $oneLife = [0,1,1];
let $noLives = [1,1,1];

let $heart = $('.bi bi-suit-heart-fill');
let $noHeart = $('bi bi-suit-heart');

  
const $livesGrid = $('<div class="grid"></div>');
$('body').append($livesGrid);
    
let $livesLeft = ["", "", ""];
$.each($livesLeft, function(index, value) {
    $('.grid').append(value);
});
    
function canMove(x, y) {
    return (y >= 0) && (y < $gameBoard.length) && (x >= 0) && (x < $gameBoard[y].length) && ($gameBoard[y][x] != 1);
};

$(document).keydown(function(e){
    e.preventDefault();
    console.log(e);
    let key = e.which;
    if((key == 37) && canMove($player.x-1, $player.y)) $player.x--;
    else if((key == 38 && canMove($player.x, $player.y-1))) $player.y--;
    else if((key == 39 && canMove($player.x+1, $player.y))) $player.x++;
    else if((key == 40 && canMove($player.x, $player.y+1))) $player.y++;
    $drawBoard();
    $checkWin();
});