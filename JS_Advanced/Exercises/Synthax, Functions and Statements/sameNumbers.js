function solve(number){
    let numberAsString = String(number);
    let sameDigits = true;
    let sum = +numberAsString[0];
    for(i = 1; i < numberAsString.length; i++){
        if(numberAsString[i - 1] != numberAsString[i]){
            sameDigits = false;
        }
        sum += +numberAsString[i];
    }

    console.log(sameDigits);
    console.log(sum);
}

solve(1234);