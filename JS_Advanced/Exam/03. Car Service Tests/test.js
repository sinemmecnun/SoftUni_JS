const { expect } = require('chai');
const { carService } = require('./03. Car service_Resources');

describe("Tests Suite", function() {
    //is it expensive tests
    describe("isItExpensive Tests", function() {
        it("test function with engine issue", function() {
            const expectedMessage =`The issue with the car is more severe and it will cost more money`;
            expect(carService.isItExpensive('Engine')).to.equal(expectedMessage);
        });

        it("test function with transmission issue", function() {
            const expectedMessage =`The issue with the car is more severe and it will cost more money`;
            expect(carService.isItExpensive('Transmission')).to.equal(expectedMessage);
            
        });

        it("test function with other issue", function() {
            const expectedMessage = `The overall price will be a bit cheaper`;
            expect(carService.isItExpensive('Other')).to.equal(expectedMessage);
            
        });
    });

    //discount tests
    describe('discount Tests', () => {
        //validate number of parts is a number/ throw error
        it('test if number of parts non-number value throws error', function(){
            const expectedMessage = "Invalid input";
            expect(() => {carService.discount('2', 0)}).to.throw(expectedMessage);
            expect(() => {carService.discount([], 0)}).to.throw(expectedMessage);
            expect(() => {carService.discount({}, 0)}).to.throw(expectedMessage);
            expect(() => {carService.discount('as', 0)}).to.throw(expectedMessage);
        });

        //validate totalPrice is a number/ throw error
        it('test if total Price non-number value throws error', function(){
            const expectedMessage = "Invalid input";
            expect(() => {carService.discount(0, '2')}).to.throw(expectedMessage);
            expect(() => {carService.discount(0, [])}).to.throw(expectedMessage);
            expect(() => {carService.discount(0, {})}).to.throw(expectedMessage);
            expect(() => {carService.discount(0, 'asd')}).to.throw(expectedMessage);
        });

        //number of parts <= 2 / return
        it('test if number of parts are less or equal to 2 returns message', function(){
            const expectedMessage = "You cannot apply a discount";
            expect(carService.discount(1, 0)).to.equal(expectedMessage);
            expect(carService.discount(-2, 0)).to.equal(expectedMessage);
            expect(carService.discount(2, 0)).to.equal(expectedMessage);
        });

        //number of parts > 2 && <= 7
        it('test for number of parts greater than 2 or less or equal to 7', function(){
            //Arrange
            const totalPrice = 200;
            const discountPercentage = 15;
            let result = (discountPercentage / 100) * totalPrice;
            const expectedMessage = `Discount applied! You saved ${result}$`;

            //Act / Assert
            expect(carService.discount(3, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(6, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(7, totalPrice)).to.equal(expectedMessage);
        });

        it('test for number of parts greater than 2 or less or equal to 7 with zero price', function(){
            //Arrange
            const totalPrice = 0;
            // const discountPercentage = 15;
            // let result = (discountPercentage / 100) * totalPrice;
            const expectedMessage = `Discount applied! You saved 0$`;

            //Act / Assert
            expect(carService.discount(3, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(6, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(7, totalPrice)).to.equal(expectedMessage);
        });

        //number of parts > 7
        it('test for number of parts greater than 7', function(){
            //Arrange
            const totalPrice = 200;
            const discountPercentage = 30;
            let result = (discountPercentage / 100) * totalPrice;
            const expectedMessage = `Discount applied! You saved ${result}$`;

            //Act / Assert
            expect(carService.discount(8, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(100, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(45, totalPrice)).to.equal(expectedMessage);
        });

        it('test for number of parts greater than 7 with zero price', function(){
            //Arrange
            const totalPrice = 0;
            // const discountPercentage = 30;
            // let result = (discountPercentage / 100) * totalPrice;
            const expectedMessage = `Discount applied! You saved 0$`;

            //Act / Assert
            expect(carService.discount(8, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(100, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(45, totalPrice)).to.equal(expectedMessage);
        });

        it('test for number of parts greater than 7 with negative price', function(){
            //Arrange
            const totalPrice = -100;
            const discountPercentage = 30;
            let result = (discountPercentage / 100) * totalPrice;
            const expectedMessage = `Discount applied! You saved ${result}$`;

            //Act / Assert
            expect(carService.discount(8, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(100, totalPrice)).to.equal(expectedMessage);
            expect(carService.discount(45, totalPrice)).to.equal(expectedMessage);
        });
    });

    //partsToBuy test
    describe('partsToBuy Tests', function(){
        //validate partsCatalog is an array
        it('test if non-array value for partsCatalog throws error', function(){
            const expectedMessage = "Invalid input";
            expect(() => {carService.partsToBuy('asd', [])}).to.throw(expectedMessage);
            expect(() => {carService.partsToBuy({}, [])}).to.throw(expectedMessage);
            expect(() => {carService.partsToBuy(5.5, [])}).to.throw(expectedMessage);
            expect(() => {carService.partsToBuy(6, [])}).to.throw(expectedMessage);
        });

        //validate neededParts is an array
        it('test if non-array value for neededParts throws error', function(){
            const expectedMessage = "Invalid input";
            expect(() => {carService.partsToBuy([], 'asd')}).to.throw(expectedMessage);
            expect(() => {carService.partsToBuy([], {})}).to.throw(expectedMessage);
            expect(() => {carService.partsToBuy([], 5)}).to.throw(expectedMessage);
            expect(() => {carService.partsToBuy([], 5.7)}).to.throw(expectedMessage);
        });

        //parts catalog is empty => return 0
        it('function returns 0 if partsCatalogue is empty', function(){
            expect(carService.partsToBuy([], [])).to.equal(0);
            expect(carService.partsToBuy([], ['test'])).to.equal(0);
        });

        //returns 0 for zero neededParts
        it('function returns 0 it there are no needed parts', function(){
            const partsCatalogue = [{ part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 }];
            expect(carService.partsToBuy(partsCatalogue, [])).to.equal(0);
        });

        //parts not found
        it('function returns 0 it there needed parts are not found', function(){
            const partsCatalogue = [{ part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 }];
            expect(carService.partsToBuy(partsCatalogue, ['engine', 'tire'])).to.equal(0);
        });

        //parts found
        it('function calculates correctly', function(){
            const partsCatalogue = [{ part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 }];
            expect(carService.partsToBuy(partsCatalogue, ["blowoff valve", "blowoff valve"])).to.equal(290);
            expect(carService.partsToBuy(partsCatalogue, ["blowoff valve", "coil springs"])).to.equal(375);
        });
    });
});
