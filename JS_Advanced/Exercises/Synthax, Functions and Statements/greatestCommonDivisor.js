function solve(num1, num2){
    let result;
    if(num1 < num2){
        let a = num1;
        num1 = num2;
        num2 = num1;
    }
    for(i = 1; i <= num2; i++){
        if(num1 % i == 0 && num2 % i == 0){
            result = i;
        }
    }
    console.log(result);
}

solve(2154, 458);