function sumFirstLast(array){
    let first = Number(array[0]);
    let last = Number(array[array.length - 1]);
    let sum = first + last;
    console.log(sum);
}

sumFirstLast(['20', '30', '40']);