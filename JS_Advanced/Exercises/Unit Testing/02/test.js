const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven');

describe('Test Suite', () => {
    it('check if returns underfined with number input', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });
    it('check if returns underfined with array input', () => {
        expect(isOddOrEven([1, 2])).to.be.undefined;
    });
    it('check if returns underfined with object input', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('check with even string', () => {
        expect(isOddOrEven('asdf')).to.equal('even');
    });
    it('check with odd-length string', () => {
        expect(isOddOrEven('asd')).to.equal('odd');
    });

});