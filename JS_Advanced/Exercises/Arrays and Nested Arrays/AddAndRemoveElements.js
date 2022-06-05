function solve(commands){
    let number = 1;
    let result = [];
    for(let command of commands){
        if(command == "add"){
            result.push(number);
        }
        else if(command == "remove"){
            result.pop();
        }
        number++;
    }
    if(result.length > 0){
        console.log(result.join("\n"));
    }
    else{
        console.log("Empty");
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);