const { expect } = require('chai');
const { createCalculator } = require('../codeForTests/addSubtract');

describe('Test Suite', () => {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('check value of value initially', () => {
        expect(calc.get()).to.equal(0);
    });
    it('check if add works properly', () => {
        expect(calc.get()).to.equal(0);
        calc.add(2);
        calc.add(3);
        expect(calc.get()).to.equal(5);
    });
    it('check if subtract works proprerly', () => {
        expect(calc.get()).to.equal(0);
        calc.subtract(3);
        calc.subtract(4);
        expect(calc.get()).to.equal(-7);
    });
    it('check if both work', () => {
        expect(calc.get()).to.equal(0);
        calc.subtract(3);
        calc.add(4);
        expect(calc.get()).to.equal(1);
    });
    it('check if string number input works', () => {
        expect(calc.get()).to.equal(0);
        calc.subtract('3');
        calc.add('4');
        expect(calc.get()).to.equal(1);
    });
    it('check for decimal numbers and strings', () => {
        expect(calc.get()).to.equal(0);
        calc.subtract(2.4);
        calc.add('4');
        expect(calc.get()).to.equal(1.6);
    });
    it('check if add returns NaN for string input', () => {
        calc.add('asd');
        expect(calc.get()).to.be.NaN;
    });
    it('check if subtract returns NaN for string input', () => {
        calc.subtract('asd');
        expect(calc.get()).to.be.NaN;
    });
});