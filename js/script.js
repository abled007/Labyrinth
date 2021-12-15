/* cover screen
    -background hyrule
    -title  
    -start button
        -directs to first maze when clicked
    -instruction 
        -pops up instrutions when clicked
*/

/* Mazes 
    -playerLives = 3
    -finish first maze to continue to next
        -timer restarts after every maze 
    -low visablity
    -timed each maze
        -run out of time you lose
        - take to loser page
    -"mystery boxes"
        -random (lose one life or gain ability);
        -"doomsday" box
            -loses game
            -takes to loser page
    -cannot access same mystery box once used 

*/

/* Loser page
    -"game over" black bacground
    -continue
        -takes you back to first maze
        -make sure mazes are reset to default
*/

/* Winner page 
    - background 
    - play again
        -takes you back to first maze

*/

/* winState
    -When all mazes are passed
    -gameOver
*/

/* loseState
    -no more lives left 
*/ 
//Title
const $gameTitle = $('<h1>Labyrinth</h1>');
$('body').append($gameTitle);

//Cover Image
const $coverImage = $('<img src = "https://i.redd.it/awl2w7ox6icy.jpg" width="1100" height="500">')
$('body').append($coverImage);

//