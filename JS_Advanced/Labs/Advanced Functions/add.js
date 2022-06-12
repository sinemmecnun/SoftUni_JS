function solution(num){
    return {
        value: num,
        num(number){
            return num + number;
        }
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));