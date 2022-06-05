function solve(matrix){
    let maxElements = [];
    for(let row of matrix){
        let currentMax = Math.max(...row);
        maxElements.push(currentMax);
    }
    console.log(Math.max(...maxElements));
}

solve([[20, 50, 10],
    [8, 33, 145]]
   );