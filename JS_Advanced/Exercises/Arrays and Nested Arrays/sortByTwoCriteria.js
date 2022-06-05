function solve(array){
    array.sort(twoCriteriaSort);
    return array.join("\n");

    function twoCriteriaSort(current, next){
        if(current.length === next.length){
            return current.localeCompare(next);
        }
        else{
            return current.length - next.length;
        }
    }
}

console.log(solve(['alpha', 
'beta', 
'gamma']
));