function stringLenght(string1, string2, string3){
    let sumLengths = string1.length + string2.length + string3.length;
    console.log(sumLengths);
    let average = Math.floor(sumLengths / 3);
    console.log(average);
}

stringLenght('chocolate', 'ice cream', 'cake')