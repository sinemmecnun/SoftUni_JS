function inventory(heroes){
    let object = [];
    for(let hero of heroes){
        let current = hero.split(" / ");
        let name = current[0];
        let level = +current[1];
        let items = [];
        if(current.length > 2){
            items = current[2].split(", ");
        }
        const currentHero = {name, level, items};
        object.push(currentHero);
    }
    return JSON.stringify(object);
}

console.log(inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));