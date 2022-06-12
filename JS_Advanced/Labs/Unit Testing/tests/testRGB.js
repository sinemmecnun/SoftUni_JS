const { expect } = require('chai');
const { rgbToHexColor } = require('../codeForTests/rgb-to-hex');

describe('Test Suite', () => {
    it('check incorrect value with string', () => {
        expect(rgbToHexColor('asd', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'asd', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'asd', 0)).to.be.undefined;
    });
    it('check all incorrect values', () => {
        expect(rgbToHexColor([], 'asd', {})).to.be.undefined;
    });
    it('check for lower bound of values', () => {
        expect(rgbToHexColor(0, 1, 2)).to.not.be.undefined;
        expect(rgbToHexColor(1, 0, 2)).to.not.be.undefined;
        expect(rgbToHexColor(1, 2, 0)).to.not.be.undefined;
    });
    it('check for upper bound of values', () => {
        expect(rgbToHexColor(255, 1, 2)).to.not.be.undefined;
        expect(rgbToHexColor(1, 255, 2)).to.not.be.undefined;
        expect(rgbToHexColor(1, 2, 255)).to.not.be.undefined;
    });
    it('check for out of lower bound', () => {
        expect(rgbToHexColor(-1, 1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, -1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, 2, -1)).to.be.undefined;
    });
    it('check for out of upper bound', () => {
        expect(rgbToHexColor(256, 1, 2)).to.be.undefined;
        expect(rgbToHexColor(1, 256, 2)).to.be.undefined;
        expect(rgbToHexColor(1, 2, 256)).to.be.undefined;
    });
    it('check if returns black correctly', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('check if returns white correctly', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('check if returns correctly a random color', () => {
        expect(rgbToHexColor(36, 248, 31)).to.equal('#24F81F');
    });
});