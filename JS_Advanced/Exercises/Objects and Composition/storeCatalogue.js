function catalogue(data){
    let obj = {};

    for(let item of data){
        let [productName, productPrice ] = item.split(' : ');
        const letter = productName[0];
        //productPrice = +productPrice;

        if(obj.hasOwnProperty(letter) === false){
            obj[letter] = {};
        }

        obj[letter][productName] = productPrice;
    }
    let sortedLetters = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    for(let letter of sortedLetters){
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));
        for(let product of sortedProducts){
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);