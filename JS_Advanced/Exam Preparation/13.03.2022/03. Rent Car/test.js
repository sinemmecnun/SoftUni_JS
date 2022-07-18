const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe('Test Suite', function() {

    //test searchCar method
    describe('searchCar Tests', function(){

        //check if shop given not array throws error
        it('non-array shop throws error', function() {
            const invalidInputMessage = 'Invalid input!';
            expect(() => {rentCar.searchCar("asd", "asd")}).to.throw(invalidInputMessage);
            expect(() => {rentCar.searchCar({}, "asd")}).to.throw(invalidInputMessage);
            expect(() => {rentCar.searchCar(5, "asd")}).to.throw(invalidInputMessage);
        });

        //check if model given non string throws error
        it('non-string model throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                rentCar.searchCar([], 5)}).to.throw(invalidInputMessage);
            expect(() => {
                rentCar.searchCar([], [])}).to.throw(invalidInputMessage);
            expect(() => {
                rentCar.searchCar([], {})}).to.throw(invalidInputMessage);
        })

        //if there are no matches throws error
        it('there are no mathes throw error with empty shop', function(){
            expect(() => {
                rentCar.searchCar([], "BMW")
            }).to.throw('There are no such models in the catalog!');
        });

        it('there are no mathes throw error', function(){
            expect(() => {
                rentCar.searchCar(["Audi", "Renault"], "BMW")
            }).to.throw('There are no such models in the catalog!');
        });

        it('there are no mathes throw error with empty model', function(){
            expect(() => {
                rentCar.searchCar(["Audi", "Renault"], "")
            }).to.throw('There are no such models in the catalog!');
        });

        //if there are matches
        it('check with matches', function(){
            const model = "BMW";
            const shop = ["BMW", "Audi"];
            const expectedMessage = `There is 1 car of model ${model} in the catalog!`;

            expect(rentCar.searchCar(shop, model)).to.equal(expectedMessage);
        });
    });

    //test calculatePriceOfCar mathod
    describe('calculatePriceOfCar', function(){
        //check if non-string model throws error
        it('check if non-string model throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                rentCar.calculatePriceOfCar(5, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.calculatePriceOfCar([], 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.calculatePriceOfCar({}, 0)
            }).to.throw(invalidInputMessage);
        });

        //check if non-integer days throws error
        it('check if non-integer days throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                rentCar.calculatePriceOfCar('asd', 'asd')
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.calculatePriceOfCar('asd', [])
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.calculatePriceOfCar('asd', {})
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.calculatePriceOfCar('asd', 4.5)
            }).to.throw(invalidInputMessage);
        });

        //if there is no such model in catalogue
        it('no such model in catalogue throws error', function(){
            const errorMessage = 'No such model in the catalog!';
            expect(() => {
                rentCar.calculatePriceOfCar("Renault", 12)
            }).to.throw(errorMessage);

            expect(() => {
                rentCar.calculatePriceOfCar("", 12)
            }).to.throw(errorMessage);
        });

        //calculates correct cost and returns correct message
        it('calculates correct cost and returns correct message', function(){
            expect(rentCar.calculatePriceOfCar("BMW", 2)).to.equal(`You choose BMW and it will cost $90!`);
            expect(rentCar.calculatePriceOfCar("BMW", 0)).to.equal(`You choose BMW and it will cost $0!`);
            expect(rentCar.calculatePriceOfCar("Toyota", 32)).to.equal(`You choose Toyota and it will cost $${32*40}!`);
        });
    });

    //test checkBudget method
    describe('checkBudget', function(){

        //check if given costPerDay non integer throws error
        it('check if given costPerDay non integer throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                rentCar.checkBudget('asd', 0, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget([], 0, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget({}, 0, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(123.4, 0, 0)
            }).to.throw(invalidInputMessage);
        });

        //check if given non integer days throws error
        it('check if given non integer days throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                rentCar.checkBudget(0, 'asd', 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(0, [], 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(0, {}, 0)
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(0, 123.4, 0)
            }).to.throw(invalidInputMessage);
        });

        //check if non-integer budget throws error
        it('check if given non integer budget throws error', function(){
            const invalidInputMessage = 'Invalid input!';
            expect(() => {
                rentCar.checkBudget(0, 0, 'asd')
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(0, 0, [])
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(0, 0, {})
            }).to.throw(invalidInputMessage);

            expect(() => {
                rentCar.checkBudget(0, 0, 123.4)
            }).to.throw(invalidInputMessage);
        });

        //if budget is enough
        it('if budget is enough', function(){
            const expectedMessage = `You rent a car!`;
            expect(rentCar.checkBudget(20, 10, 300)).to.equal(expectedMessage);
            expect(rentCar.checkBudget(20, 10, 200)).to.equal(expectedMessage);
            expect(rentCar.checkBudget(2, 10, 230)).to.equal(expectedMessage);
        });

        //if budget is not enough
        it('if budget is not enough', function(){
            const expectedMessage = 'You need a bigger budget!';
            expect(rentCar.checkBudget(20, 100, 300)).to.equal(expectedMessage);
            expect(rentCar.checkBudget(20, 10, 23)).to.equal(expectedMessage);
        });
    });
});