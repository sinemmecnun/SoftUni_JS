function solve(townData){
    let data = {};
    for(let town of townData){
        let [townName, productName, productPrice ] = town.split(' | ');
        productPrice = +productPrice;
        //hasOwnProperty
        if(data[productName] === undefined){
            data[productName] = {townName, productPrice};
        }
        else{
            if(productPrice < data[productName].productPrice){
                data[productName] = {townName, productPrice};
            }
        }
    }

    for(let product of Object.keys(data)){
        console.log(`${product} -> ${data[product].productPrice} (${data[product].townName})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)