function game(moves){
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    
    let gameWon = false;

    while(moves.length > 0){

        let playerOneMove = moves.shift().split(" ").map(x=>+x);
        let moveOne = move("X", playerOneMove);
        if(moveOne === 1){
            continue;
        }
        else if(moveOne === 0){
            break;
        }

        if(moves.length <= 0){
            break;
        }

        let playerTwoMove = moves.shift().split(" ").map(x=>+x);
        let moveTwo = move("O", playerTwoMove);
        if(moveOne === 1){
            playerTwoMove = moves.shift().split(" ").map(x=>+x);
            moveTwo = move("O", playerTwoMove);
        }
        else if(moveOne === 0){
            break;
        }
    }

    //print the board
    for(let row of dashboard){
        console.log(row.join(" "));
    }


    //check for free spaces
    function freeSpaces(board){
        let freeSpaces = false;
        for(let row of board){
            for(let col of row){
                if(col === false){
                    freeSpaces = true;
                    break;
                }
            }
            if(freeSpaces){
                break;
            }
        }
        return freeSpaces;
    }

    function gameIsWonCheck(board){

    }

    function move(player, moves){
        let moveRow = moves[0];
        let moveCol = moves[1]
        if(dashboard[moveRow][moveCol] !== false){
            console.log("This place is already taken. Please choose another!")
            return 1;
        }
        dashboard[moveRow][moveCol] = player;

        if(freeSpaces(dashboard) === false){
            console.log("The game ended! Nobody wins :(");
            return 0;
        }

        if(gameIsWonCheck === true){

        }
    }
}

// game(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// );

game(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);