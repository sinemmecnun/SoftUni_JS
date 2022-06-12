function sumOfRange(array, startIndex, endIndex){
    if(Array.isArray(array) == false){
        return NaN;
    }

    // startIndex = +startIndex;
    // endIndex = +endIndex;

    if(startIndex < 0){
        startIndex = 0;
    }

    if(endIndex > array.length - 1){
        endIndex = array.length -1;
    }

    return array
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc,x) => acc + x, 0);
}

result = sumOfRange([10, 20, 30, 40, 50, 60], 3, 300);
console.log(result);