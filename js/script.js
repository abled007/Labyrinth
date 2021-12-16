


       
        // Find Canvas Element
        
        let canvas = $('#myCanvas');
        
        // 0 = path, 1 = blocked, 2 = start, 3 = end
        let board = [

            [0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],          
            [0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,1,0,3,0,1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
            [0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0],
            [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0],
            [1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,3,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            
          ]
        
        // player 
        let player = {
            x: 0,
            y: 0,
        }
        
        // Creating the board
        function draw() {
            const ctx = canvas[0].getContext('2d');
            const blockSize = board.length;
            //Positon of board
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            //Making the board fit
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#6E5519";
            for (let y = 0; y < board.length; y++) {
                for (let x = 0; x < board[y].length; x++) {
                    if(board[y][x] === 1) {
                        ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                    } else if (board[y][x] === 3){
                        // Creating the endpont of the game 
                        ctx.beginPath();
                        ctx.lineWidth = 5;
                        ctx.strokeStyle = "green";
                        ctx.moveTo(x*blockSize, y*blockSize);
                        ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
                        ctx.moveTo(x*blockSize, (y+1)*blockSize);
                        ctx.lineTo((x+1)*blockSize, y*blockSize);
                        ctx.stroke();
                    }
                }
            }
            ctx.beginPath();
            const plyr = blockSize / 2;
            ctx.fillStyle = "blue";
            ctx.arc(player.x*blockSize+plyr, player.y*blockSize+plyr, plyr, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        
        //Check to see if the new space is inside the board and not a wall
        function canMove(x, y) {
            return (y >= 0) && (y < board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] != 1);
        }
        
        $(document).keyup(function(e){
            e.preventDefault();
            if((e.which == 38) && canMove(player.x, player.y-1))//Up arrow
            player.y--;
            else if((e.which == 40) && canMove(player.x, player.y+1)) // down arrow
            player.y++;
            else if((e.which == 37) && canMove(player.x-1, player.y))
            player.x--;
            else if((e.which == 39) && canMove(player.x+1, player.y))
            player.x++;
            
        }); 
        
        draw();
        
        //First Page
        
        //Container 1
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