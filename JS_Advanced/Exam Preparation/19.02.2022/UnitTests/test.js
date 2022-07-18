const { expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe('Test Suite', function(){
    describe('calcPriceOfFlowers Tests', function(){
        //check for flower type string
        it('check if not correct flower input throws error', function() {
            const invalidInputMessage = 'Invalid input!';

            expect(() => {
                flowerShop.calcPriceOfFlowers(0, 0, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers([], 0, 0)
            }).to.throw(invalidInputMessage);
            
            expect(() => {
                flowerShop.calcPriceOfFlowers({}, 0, 0)
            }).to.throw(invalidInputMessage);
        });

        //check for price type integer
        it('check if not correct price input throws error', function() {
            const invalidInputMessage = 'Invalid input!';

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', 'asd', 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', [], 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', {}, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', 1.2, 0)
            }).to.throw(invalidInputMessage);
            
        });

        //check quantity type integer
        it('check if not correct quantity input throws error', function() {
            const invalidInputMessage = 'Invalid input!';

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', 0, 'asd')
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', 0, [])
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', 0, {})
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.calcPriceOfFlowers('asd', 0, 1.2)
            }).to.throw(invalidInputMessage);
        });

        //correct input - correct output?
        it('check if function returns correct data', function(){
            expect(
                flowerShop.calcPriceOfFlowers('rose', 10, 23)
            ).to.equal(`You need $230.00 to buy rose!`);
        });

        it('check if function returns correct data with negative input', function(){
            expect(
                flowerShop.calcPriceOfFlowers('rose', -10, 23)
            ).to.equal(`You need $-230.00 to buy rose!`);
        });
    });

    describe('checkFlowersAvailable Tests', function() {
        //flower is available
        it('case flower is in array', function(){
            expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'tulip'])).to.equal(`The rose are available!`);
            expect(flowerShop.checkFlowersAvailable('tulip', ['rose', 'tulip'])).to.equal(`The tulip are available!`);
        });

        //flower is sold-out
        it('case flower is sold out', function() {
            expect(flowerShop.checkFlowersAvailable('rose', ['tulips'])).to.equal(`The rose are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('', ['tulips'])).to.equal(`The  are sold! You need to purchase more!`);
        });

        //empty shop
        it('case empty shop', function() {
            expect(flowerShop.checkFlowersAvailable('rose', [])).to.equal(`The rose are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('', [])).to.equal(`The  are sold! You need to purchase more!`);
        });
    });

    describe('sellFlowers Tests', function(){

        //check if gardenArr takes array
        it('check if non-array values for garderArr throw error', function(){
            const invalidInputMessage = 'Invalid input!';

            expect(() => {
                flowerShop.sellFlowers(5, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.sellFlowers('asd', 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.sellFlowers({}, 0)
            }).to.throw(invalidInputMessage);
        });

        //check if space takes integer
        it('check if non-integer values for space throw error', function(){
            const invalidInputMessage = 'Invalid input!';

            expect(() => {
                flowerShop.sellFlowers([], 'asd')
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.sellFlowers([], [])
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.sellFlowers([], {})
            }).to.throw(invalidInputMessage);

            expect(() => {
                flowerShop.sellFlowers([], 2.3)
            }).to.throw(invalidInputMessage);
        });

        //cases out of range
        it('space < 0 throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                flowerShop.sellFlowers([], -1)
            }).to.throw(invalidInputMessage);
            
        });

        it('space >= gardenArr.length throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                flowerShop.sellFlowers([], 1)
            }).to.throw(invalidInputMessage); 
            expect(() => {
                flowerShop.sellFlowers([], 0)
            }).to.throw(invalidInputMessage);
        });

        //function works properly
        it('check if func works properly with 0 space', function(){
            expect(flowerShop.sellFlowers(['rose'], 0)).to.deep.equal('');
        });
    
        it('check if func works properly', function(){
            expect(flowerShop.sellFlowers(['rose', 'tulips'], 1)).to.equal('rose');
            expect(flowerShop.sellFlowers(['rose', 'tulips', 'dandelions'], 2)).to.equal('rose / tulips');
        });
    });
});