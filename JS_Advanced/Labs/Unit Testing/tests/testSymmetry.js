const { expect } = require('chai');
const { isSymmetric } = require('../codeForTests/checkForSymmetry');

describe('Test Suite', () => {
    it('returns false for non-array input', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it('returns true if symmetric', () => {
        expect(isSymmetric([5,5])).to.be.true;
    });

    it('returns false if not symmetric', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    });

    it('check with empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('check for string input', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    })
    it('check with non-array string input', () => {
        expect(isSymmetric('asd')).to.be.false;
    });

    it('works with odd lenght array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns falsegfor type mismatched', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});