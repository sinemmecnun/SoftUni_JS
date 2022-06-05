function solve(array, num){
    // let result = [];
    // for(let i = 0; i < array.length; i += num){
    //     result.push(array[i]);
    // }
    // return result;
    return array.filter((element, index) => index % num == 0);
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));