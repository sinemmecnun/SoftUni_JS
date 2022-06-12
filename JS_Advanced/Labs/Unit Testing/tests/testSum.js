const { expect } = require('chai');

function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

describe("Test Suite", () => {
    it('works properly' , () => {
        expect(sum([3, 5])).to.equal(8, 'did not work with 3 and 5');
    });
});