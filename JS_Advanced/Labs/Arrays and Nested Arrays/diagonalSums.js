function solve(matrix){
    let primarySum = 0;
    let secondarySum = 0;
    for(let i = 0; i < matrix.length; i++){
        let currentPrimary = Number(matrix[i][0 + i]);
        primarySum += currentPrimary;

        let currentSecondary = Number(matrix[i][matrix.length - 1 - i]);
        secondarySum += currentSecondary;
    }
    console.log(primarySum + " " + secondarySum);
}

solve([[20, 40],
    [10, 60]]
   );
   solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );