function solve(flavours, target1, target2){
    let index1 = flavours.indexOf(target1);
    let index2 = flavours.indexOf(target2);
    const newArr = flavours.slice(index1, index2 + 1);
    return newArr;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));