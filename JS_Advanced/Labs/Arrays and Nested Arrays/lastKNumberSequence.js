function sequence(n, k){
    let result = [1];
    for(let i = 1; i < n; i++){
        let sum = 0;
        for(let j = i - 1; j >= i - k; j--){
            if(j >= 0){
                sum += result[j];
            }
            else{
                break;
            }
        }
        result.push(sum);
    }
    return result;
}

console.log(sequence(6, 3));
console.log(sequence(8, 2));