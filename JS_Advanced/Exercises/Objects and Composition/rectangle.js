function rectangle(width, height, color){
    //capitalize the first letter
    color = color.charAt(0).toUpperCase() + color.slice(1);

    return {
        width, height, 
        color,
        calcArea: () => {
            return width * height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
