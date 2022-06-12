function solve(area, vol, input){
    const objects = JSON.parse(input);

    function calc(obj){
        const areaObject = Math.abs(area.call(obj));
        const volObject = Math.abs(vol.call(obj));

        return {
            area: areaObject,
            volume: volObject
        }
    }

    return objects.map(calc);
}

const result = solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    );

console.log(result);
//solve();

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
