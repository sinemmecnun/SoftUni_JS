function solve(data){
    data.splice(0, 1);
    let result = [];

    class Town{
        constructor(town, latitude, longitude){
            this.Town = town;
            this.Latitude = +latitude.toFixed(2);
            this.Longitude = +longitude.toFixed(2);
        }
    }

    for(let town of data){
        let [ _, townName, latitude, longitude ] = town.split("|").map(t => t.trim());
        latitude = +latitude;
        longitude = +longitude;
        let newTown = new Town(townName, latitude, longitude);
        result.push(newTown);
    }
    return JSON.stringify(result);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);