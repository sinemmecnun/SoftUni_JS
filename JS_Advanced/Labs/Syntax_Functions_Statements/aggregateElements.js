function solve(array){
    function sumElements(arr){
        let result = 0;
        for(i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }

    function sumInverse(arr){
        let result = 0;
        for(i = 0; i < arr.length; i++){
            result += 1/arr[i];
        }
        return result;
    }

    function concatenate(arr){
        let result = "";
        for(i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }

    console.log(sumElements(array));
    console.log(sumInverse(array));
    console.log(concatenate(array));
}

solve([1, 2, 3]);