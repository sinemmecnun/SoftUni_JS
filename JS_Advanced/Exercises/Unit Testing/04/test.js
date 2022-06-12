const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('Test Suite', () => {
    //test addFive function
    describe('Add Five', () => {
        //check with incorrect type input
        it('check if function returns undefined with incorrect input', () => {
            expect(mathEnforcer.addFive('asd')).to.be.undefined;
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([1, 2])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        //check for correct result
        it('check for correct result', () => {
            expect(mathEnforcer.addFive(3)).to.equal(8);
            expect(mathEnforcer.addFive(0.4)).to.equal(5.4);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
        });
    });

    //test subtractTen function
    describe('subtract Ten', () => {
        it('check if function returns undefined with incorrect input', () => {
            expect(mathEnforcer.subtractTen('asd')).to.be.undefined;
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        //check for correct result
        it('check for correct result', () => {
            expect(mathEnforcer.subtractTen(3)).to.equal(-7);
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
            expect(mathEnforcer.subtractTen(-12)).to.equal(-22);
            expect(mathEnforcer.subtractTen(0.4)).to.equal(-9.6);
        });

    });

    //test sum function
    describe('sum', function() {
        //check with incorrect type input for num1
        it('check if function returns undefined for incorrect input for num1', () => {
            expect(mathEnforcer.sum('asd', 0)).to.be.undefined;
            expect(mathEnforcer.sum('5', 0)).to.be.undefined;
            expect(mathEnforcer.sum([1, 2], 0)).to.be.undefined;
            expect(mathEnforcer.sum({}, 0)).to.be.undefined;
        });

        //check with incorrect type input for num2
        it('check if function returns undefined for incorrect input for num2', () => {
            expect(mathEnforcer.sum(0, 'asd')).to.be.undefined;
            expect(mathEnforcer.sum(0 ,'5')).to.be.undefined;
            expect(mathEnforcer.sum(0, [1, 2])).to.be.undefined;
            expect(mathEnforcer.sum(0, {})).to.be.undefined;
        });

        //check for correct result
        it('check for correct sum', () => {
            expect(mathEnforcer.sum(3, 5)).to.equal(8);
            expect(mathEnforcer.sum(3, -5)).to.equal(-2);
            expect(mathEnforcer.sum(3, 5.5)).to.equal(8.5);
            expect(mathEnforcer.sum(3.3, 5)).to.equal(8.3);
            expect(mathEnforcer.sum(3.8, 5.2)).to.equal(9);

        });
    });
});