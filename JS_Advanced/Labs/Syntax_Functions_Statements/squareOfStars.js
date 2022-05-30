function solve(num){
    if(num === undefined){
        num = 5;
    }
    let result = "";
    for(i = 0; i < num; i++){
        for(j = 0; j < num; j++){
            result += "* ";
        }
        result += '\n';
    }
    console.log(result);
}

solve();