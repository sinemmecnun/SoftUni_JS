function solve(numbers){
    let i = 0;
    while(i < numbers.length - 1){
        if(numbers[i + 1] < numbers[i]){
            numbers.splice(i + 1, 1);
            continue;
        }
        i++;
    }
    return numbers;
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
console.log(solve([1, 
    2, 
    3,
    4]
    ));
console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));