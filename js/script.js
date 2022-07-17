let $canvas = $('#myCanvas');
let $restart = $('.restart');
let $gameActive = true;

let $gameBoard = [
    
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],          
    [1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,3,1,1,0,1,0,0,1],
    [1,1,1,3,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,3,0,1,1],
    [1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1],
    [1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1],
    [1,0,1,0,1,3,0,0,0,0,1,0,0,0,0,0,1,0,0,0,3,0,0,1,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1,0,0,2,0,0,1,0,1,1,1,1,1,0,0,1,1],
    [1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1],
    [1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1],
    [1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1],
    [1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1],
    [1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1],
    [1,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1],
    [1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,1,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],          
            
];

let $player = {
    x: 13,
    y: 25,
}

let $goal = {
    x: 13,
    y: 6,
}

const ctx = $canvas[0].getContext('2d');
let blockSize = $gameBoard.length;
let width = $canvas.width();

function $user() { 
    ctx.beginPath();
    ctx.clearRect(0, 0, width, $canvas.width);
    let half = blockSize/2;
    ctx.fillStyle = '#00aaff';
    ctx.arc($player.x*blockSize+half, $player.y*blockSize+half, half, 0, 2*Math.PI);
    ctx.fill();
};

function $drawBoard() {
    ctx.clearRect(0, 0, width, width);
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


function canMove(x, y) {
    return (y >= 0) && (y < $gameBoard.length) && (x >= 0) && (x < $gameBoard[y].length) && ($gameBoard[y][x] != 1);
};

function $checkWin() {
    if($player.y == $goal.y && $player.x == $goal.x) {
        $gameActive = false;
        console.log("winner");
        return
    } 
    // for (let y = 0; y < $gameBoard.length; y++) {
    //     for (let x = 0; x < $gameBoard[y].length; x++) {
    //         if($gameBoard[y][x] === 3) {
    //             console.log('loser')
    //             return
    //         }
    //     }
    // }    
    $user();
};
$checkWin();

function $restartGame() {
    $gameActive = true;
    $player = { x:13, y:25 }
    $checkWin();    
}

$restart.click($restartGame)

 $(document).keydown(function(e){
    e.preventDefault();
    let key = e.which;
    if((key == 37) && canMove($player.x-1, $player.y)) $player.x--;
    else if((key == 38 && canMove($player.x, $player.y-1))) $player.y--;
    else if((key == 39 && canMove($player.x+1, $player.y))) $player.x++;
    else if((key == 40 && canMove($player.x, $player.y+1))) $player.y++;
    $drawBoard();
    $checkWin();

    return false;
});