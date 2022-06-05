function solve(array){
    let matrix = [];

    //parse the matrix into numbers
    for(let row of array){
        let currentRow = row.split(" ").map(x=>+x);
        matrix.push(currentRow);
    }

    //sum the diagonals
    let primarySum = 0;
    let secondarySum = 0;
    for(let i = 0; i < matrix.length; i++){
        let currentPrimary = matrix[i][0 + i];
        primarySum += currentPrimary;

        let currentSecondary = matrix[i][matrix.length - 1 - i];
        secondarySum += currentSecondary;
    }

    if(primarySum == secondarySum){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(i === j || j === matrix[i].length - 1 - i){
                    continue;
                }
                matrix[i][j] = primarySum;
            }
        }
    }

    printMatrix(matrix);

    function printMatrix(matix){
        for(let row of matrix){
            console.log(row.join(" "));
        }
    }
}

solve(['1 1 1',
'1 1 1',
'1 1 0']
);

