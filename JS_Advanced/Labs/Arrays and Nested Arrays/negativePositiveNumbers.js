function solve(array){
    let result = [];
    for(let el in array){
        if(array[el] < 0){
            result.unshift(array[el]);
        }
        else{
            result.push(array[el]);
        }
    }
    console.log(result.join("\n"));
}

solve([7, -2, 8, 9]);