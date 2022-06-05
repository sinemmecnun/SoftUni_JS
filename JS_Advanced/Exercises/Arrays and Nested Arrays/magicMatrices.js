function solve(matrix){
    let isMagical = true;
    let previousSum = matrix[0].reduce((a,b) => a+b, 0);
    for(let row of matrix){
        let currentSum = row.reduce((a,b) => a+b, 0);
        if(currentSum != previousSum){
            isMagical = false;
            break;
        }
        previousSum = currentSum;
    }

    for(let col = 0; col < matrix[0].length; col++){
        let currentSum = 0;
        for(let row = 0; row < matrix.length; row++){
            currentSum += matrix[row][col];
        }
        if(currentSum != previousSum){
            isMagical = false;
            break;
        }
        previousSum = currentSum;
    }
    console.log(isMagical);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );