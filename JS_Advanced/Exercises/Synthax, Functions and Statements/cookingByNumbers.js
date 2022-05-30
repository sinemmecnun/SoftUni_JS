function cook(number, ...params){
    number = Number(number);
    let chop = x => x/2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x * 0.8;

    for(let i = 0; i < params.length; i++){
        switch(params[i]){
            case "chop":
                number = chop(number);
                console.log(number);
                break;
            case "dice":
                number = dice(number);
                console.log(number);
                break; 
            case "spice":
                number = spice(number);
                console.log(number);
                break;
            case "bake":
                number = bake(number);
                console.log(number);
                break;
            case "fillet":
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');