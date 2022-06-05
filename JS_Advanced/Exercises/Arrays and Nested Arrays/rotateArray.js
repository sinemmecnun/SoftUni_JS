function solve(numbers, rotations){
    if(rotations > numbers.length){
        rotations = rotations % numbers.length;
    }
    for(let i = 0; i < rotations; i++){
        let currentNumber = numbers.pop();
        numbers.unshift(currentNumber);
    }
    console.log(numbers.join(" "));
}

solve(['1', 
'2', 
'3', 
'4'], 
10001
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);