function solve(data){
    const object = {};
    while(data.length > 0 && data.length % 2== 0){
        let name = data.shift();
        let calories = data.shift();
        object[name] = +calories;
    }
    console.log(object);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);