const { expect } = require('chai');
const { lookupChar } = require('./charLookup');

describe('Test Suite', () => {
    //check for correct string input
    it('check if function returns undefined for incorrect string input', () => {
        expect(lookupChar([1, 2], 0)).to.be.undefined;
        expect(lookupChar(5, 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
    });

    //check for correct index type input
    it('check if function returns undefined for incorrect index input', () => {
        expect(lookupChar('asd', 'asd')).to.be.undefined;
        expect(lookupChar('asd', [1, 2])).to.be.undefined;
        expect(lookupChar('asd', {})).to.be.undefined;
        expect(lookupChar('asd', 2.3)).to.be.undefined;
    });

    //check for empty string
    it('check for index in an empty string', () => {
        const expectedOutput = "Incorrect index";
        expect(lookupChar("", 0)).to.equal(expectedOutput);
    });

    //check for index out of range
    it('check for index out of range', () => {
        const expectedOutput = "Incorrect index";
        expect(lookupChar("asd", -1)).to.equal(expectedOutput);
        expect(lookupChar("asd", 3)).to.equal(expectedOutput);
    });

    //check for index in range
    it('check if index is in range with correct value (lower bound)', () => {
        expect(lookupChar('asd', 0)).to.not.be.undefined;
    });
    it('check if index is in range with correct value (upper bound)', () => {
        expect(lookupChar('asd', 2)).to.not.be.undefined;
    });

    //check if function returns correct value
    it('check if function returns correctly', () => {
        expect(lookupChar('asd', 0)).to.equal('a');
        expect(lookupChar('asd', 2)).to.equal('d');
    });
});