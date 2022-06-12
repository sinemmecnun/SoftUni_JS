function solve(data){
    let registry = {};
    for(let args of data){
        let current = args.split(" <-> ");
        let townName = current[0];
        let population = +current[1];
        if(registry[townName] === undefined){
            registry[townName] = 0;
        }
        registry[townName] += population;
    }
    for(let town in registry){
        console.log(`${town} : ${registry[town]}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)