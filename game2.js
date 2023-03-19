/*
Edited by: Christian Cyr
3/5/2023

Program for a connect four Game attached to webpage.
Access it by clicking on the top tab of index screen 
where it says game.
The game is meant to be for two players but have to use
same computer.
*/

//First pormpt users for their names
var playerOne = prompt("player one enter your name:");
var playerTwo = prompt("player two enter your name:");
const circles = document.querySelectorAll(".circle");
// const listItem = document.querySelectorAll('.circle');

let currentPlayer = playerOne;
let isGameOver = false;
//NEED to FIX
const reset = document.querySelector('.reset');
var currColumns;
let rows = 6;
let cols = 7;
let tracker = 5;
let congrats = document.querySelector("#winner-banner");
var grid = new Array(rows);
//Make grid
for(let i = 0; i < grid.length; i++){
    grid[i] = new Array(cols);
}


//Start game here
window.onload = function(){
    setUpGame();
}
//Have array to prevent out of bounds placement of pieces
//and keep track of location
function setUpGame(){
    currColumns = [5,5,5,5,5,5,5];

    for(let i =0; i < circles.length;i++){
        circles[i].addEventListener("click",init);
    }
    

}

function init(){
    //Check if game isn't over to do 
    if(!isGameOver){
    
    //The pos takes the id in each cell and splits it
    //to be able to access location
    let pos = this.id.split(":");
    let x = parseInt(pos[0]);
    let y = parseInt(pos[1]);
    
    //Using array of 5's to track
    //if < 0: No spots available
    x = currColumns[y] ;
    if(x < 0){
        alert('Slots filled in this column!');
        return;
    }
    // console.log(grid[x][y]);
    grid[x][y] = currentPlayer;
    //convert back to string to access id of cell
    let circleId = x.toString()+":"+y.toString();
    let circle = document.getElementById(circleId);

    if(currentPlayer == playerOne){
        circle.classList.add("player1");
        currentPlayer = playerTwo;
    }
    else{
        circle.classList.add("player2");
        currentPlayer = playerOne;
    }
    //Subtracting from the placement tracking array currColumns to update
    x = x-1;
    currColumns[y] = x;
    //check for winner after placement
    checkWinner();
    }


}

function checkWinner(){
    checkVerticalWinner();
    checkHorizontalWinner();
    checkDiagonalWinner();
    
    
}
//Looking for winner column wise
function checkVerticalWinner(){
    for(let c = 0; c < cols; c++){
        for(let r = 0; r < rows-3; r++){
            if(grid[r][c] != null){
                if(grid[r][c] == grid[r+1][c] &&
                    grid[r+1][c] == grid[r+2][c] &&
                    grid[r+2][c] == grid[r+3][c]){
                        if(grid[r][c] == playerOne){
                            alert(`Winner: ${playerOne}`);
                            congrats.innerText = `Winner: ${playerOne}`;
                        }
                        else if(grid[r][c] == playerTwo){
                            alert(`Winner: ${playerTwo}`);
                            congrats.innerText = `Winner: ${playerTwo}`;
                        }
                        else{
                            alert('error');
                        }
                }
                
            }
        }
    }
}
//looking for winner across row
function checkHorizontalWinner(){
    for(let r = 0; r < rows; r++){
        for(let c = 0;  c < cols-3; c++){
            console.log(grid[r][c]);
            if(grid[r][c] != null){
                if(grid[r][c] == grid[r][c+1] && 
                    grid[r][c+1] == grid[r][c+2] && 
                    grid[r][c+2] == grid[r][c+3]){
                        if(grid[r][c] == playerOne){
                            alert(`Winner: ${playerOne}`);
                            congrats.innerText = `Winner: ${playerOne}`;
                        }
                        else if(grid[r][c] == playerTwo){
                            alert(`Winner: ${playerTwo}`);
                            congrats.innerText = `Winner: ${playerTwo}`;
                        }
                        else{
                            alert('error');
                        }
                }
            }
        }
    }
}
//Checking for winner both diagonal directions
function checkDiagonalWinner(){
    for(let r = 0; r < rows-3; r++){
        for(let c = 0;  c < cols-3; c++){

            if(grid[r][c] != null){
                if(grid[r][c] == grid[r+1][c+1] &&
                    grid[r+1][c+1] == grid[r+2][c+2] &&
                    grid[r+2][c+2] == grid[r+3][c+3]){
                        if(grid[r][c] == playerOne){
                            alert(`Winner: ${playerOne}`);
                            congrats.innerText = `Winner: ${playerOne}`;
                        }
                        else if(grid[r][c] == playerTwo){
                            alert(`Winner: ${playerTwo}`);
                            congrats.innerText = `Winner: ${playerTwo}`;
                        }
                        else{
                            alert('error');
                        }
                }
                
            }
        }
    }
    for(let r = 3; r < rows; r++){
        for(let c = 0;  c < cols-3; c++){

            if(grid[r][c] != null){
                if(grid[r][c] == grid[r-1][c+1] &&
                    grid[r-1][c+1] == grid[r-2][c+2] &&
                    grid[r-2][c+2] == grid[r-3][c+3]){
                        if(grid[r][c] == playerOne){
                            alert(`Winner: ${playerOne}`);
                        }
                        else if(grid[r][c] == playerTwo){
                            alert(`Winner: ${playerTwo}`);
                        }
                        else{
                            alert('error');
                        }
                
                }
            }
        }
    }
}
//Need to Fix
reset.addEventListener('click', ()=>{
    circles.forEach(circle => {
        circle.style.backgroundColor = 'black';
        var grid = new Array(rows);
        
        
    });
})




