function solve(names){
    names.sort((a, b) => a.localeCompare(b));
    let resultString = "";
    for(let i = 0; i < names.length; i++){
        resultString += `${i + 1}.${names[i]}\n`;
    }
    console.log(resultString);
}

solve(["John", "Bob", "Christina", "Ema"]);
solve([]);