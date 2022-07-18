const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('Test Suite', () => {
    //test isGenreSuitable function
    describe('isGenreSuitable Tests', () => {

        //test with non-suitable input
        it('check if function returns correct message for inappropriate input', function(){
            //`Books with ${genre} genre are not suitable for kids at ${age} age`;
            expect(bookSelection.isGenreSuitable("Thriller", 11))
            .to.equal("Books with Thriller genre are not suitable for kids at 11 age");

            expect(bookSelection.isGenreSuitable("Horror", 11))
            .to.equal("Books with Horror genre are not suitable for kids at 11 age");

            expect(bookSelection.isGenreSuitable("Horror", 12))
            .to.equal("Books with Horror genre are not suitable for kids at 12 age");
        });

        //test with suitable input
        it('check for correct message for correct input', function(){
            const expectedMessage = `Those books are suitable`;
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal(expectedMessage);
            expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal(expectedMessage);
            expect(bookSelection.isGenreSuitable("Fantasy", 11)).to.equal(expectedMessage);
            expect(bookSelection.isGenreSuitable("Fantasy", 15)).to.equal(expectedMessage);
        });
    });

    //test isItAffordable function
    describe('isItAffordable Tests', () => {
        //check for incorrect price type
        it('function throws error for incorrect price input(string)', function(){
            expect(function(){
                bookSelection.isItAffordable('asd', 0)
            }).to.throw("Invalid input");  
        });

        it('function throws error for incorrect price input(string with number)', function(){
            expect(function(){
                bookSelection.isItAffordable('5', 0)
            }).to.throw("Invalid input");  
        });

        it('function throws error for incorrect price input(array)', function(){
            expect(function(){
                bookSelection.isItAffordable([1, 2], 0)
            }).to.throw("Invalid input");  
        });

        it('function throws error for incorrect price input(object)', function(){
            expect(function(){
                bookSelection.isItAffordable({}, 0)
            }).to.throw("Invalid input");  
        });

        //check for incorrect budget type
        it('function throws error for incorrect budget input(string)', function(){
            expect(function(){
                bookSelection.isItAffordable(0, 'asd')
            }).to.throw("Invalid input");  
        });

        it('function throws error for incorrect budget input(string with number)', function(){
            expect(function(){
                bookSelection.isItAffordable(0, '5')
            }).to.throw("Invalid input");  
        });

        it('function throws error for incorrect budget input(array)', function(){
            expect(function(){
                bookSelection.isItAffordable(0, [1, 2])
            }).to.throw("Invalid input");  
        });

        it('function throws error for incorrect budget input(object)', function(){
            expect(function(){
                bookSelection.isItAffordable(0, {})
            }).to.throw("Invalid input");  
        });

        //case: too expensive
        it('returns correct message if it is too expensive', function(){
            const expectedMessage = "You don't have enough money";
            expect(bookSelection.isItAffordable(21,20)).to.equal(expectedMessage);
            expect(bookSelection.isItAffordable(21.3,20)).to.equal(expectedMessage);
        });

        //case: have enough money
        it('returns correct result and output if book is bougth', function(){
            expect(bookSelection.isItAffordable(20, 21)).to.equal(`Book bought. You have 1$ left`);
            expect(bookSelection.isItAffordable(23.5, 45)).to.equal(`Book bought. You have ${45 - 23.5}$ left`);
        });
    });

    //test suitableTitles function
    describe('suitableTitles Tests', () => {
        //check for throw error with non-array input
        it('check for throw error with non-array input', function(){
            expect(function(){
                bookSelection.suitableTitles("asd", "asd")
            }).to.throw("Invalid input");
            expect(function(){
                bookSelection.suitableTitles(5, "asd")
            }).to.throw("Invalid input");
            expect(function(){
                bookSelection.suitableTitles({}, "asd")
            }).to.throw("Invalid input");
        });

        //check for throw error with non-string genre input
        it('check for throw error with non-string genre input', function(){
            expect(function(){
                bookSelection.suitableTitles([], 5)
            }).to.throw("Invalid input");

            expect(function(){
                bookSelection.suitableTitles([], [1, 2])
            }).to.throw("Invalid input");

            expect(function(){
                bookSelection.suitableTitles([], {})
            }).to.throw("Invalid input");
        });

        //example array
        const arrayExample = [
            {title: "Titanic", genre: "Romance"},
            {title: "nz", genre: "Horror"}
        ];

        //check if result is an empty array
        it('returns empty array for empty input', function(){
            expect(bookSelection.suitableTitles([], "")).to.deep.equal([]);
        });

        it('returns empty array for empty genre input', function(){
            expect(bookSelection.suitableTitles(arrayExample, "")).to.deep.equal([]);
        });

        //check if wanted genre not found
        it('check if empty array returns for genre not found', function(){
            expect(bookSelection.suitableTitles(arrayExample, "Fantasy"))
                .to.deep.equal([]);
        });

        //check if passed array is filtered
        it('returns correct array', function(){
            expect(bookSelection.suitableTitles(arrayExample, "Horror")).to.deep.equal(['nz']);
        })
    });

});
