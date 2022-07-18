class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        //check for space
        if(this.capacity == this.books.length){
            throw new Error("Not enough space in the collection.");
        }

        //add the book
        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName){
        //search for the book | throw error
        const searchedBook = this.findBook(bookName);
        if(searchedBook == undefined){
            throw new Error(`${bookName} is not in the collection.`);
        }

        //check if book has been paid | throw error
        if(searchedBook.payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        //set payed to true
        searchedBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        //search for the book | throw error
        const searchedBook = this.findBook(bookName);
        //const findBook = this.books.find(b => b.bookName == bookName);
        if(searchedBook === undefined){
            throw new Error("The book, you're looking for, is not found.");
        }

        //check if book has been paid | throw error
        if(!searchedBook.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        //remove book from array (splice)
        const index = this.books.indexOf(searchedBook);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){
        if(bookAuthor === undefined){
            const emptySlots = this.capacity - this.books.length;
            let result = `The book collection has ${ emptySlots } empty spots left.\n`;
            const sortedBooks = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            for(let book of sortedBooks){
                //let paid = findBook.payed ? 'Has Paid' : 'Not Paid';
                let hasPaid = undefined;
                if(book.payed){
                    hasPaid = 'Has Paid';
                }
                else{
                    hasPaid = 'Not Paid';
                }
                result += `${book.bookName} == ${book.bookAuthor} - ${hasPaid}.\n`;
            }
            
            return result.slice(0, result.length - 1);
            //return result.join('\n').trim();
        }
        
        if(bookAuthor){
            let result = '';
            for(let book of this.books){
                if(book.bookAuthor == bookAuthor){
                    let hasPaid = undefined;
                    if(book.payed){
                        hasPaid = 'Has Paid';
                    }
                    else{
                        hasPaid = 'Not Paid';
                    }
                    result += `${book.bookName} == ${book.bookAuthor} - ${hasPaid}.\n`;
                }
            }
            if(result){return result.trim();}
            else{throw new Error(`${bookAuthor} is not in the collection.`);}
        }
    }

    //additional method
    findBook(bookName){
        for(let book of this.books){
            if(book.bookName == bookName){
                return book;
            }
        }
        return;
    }
}

module.exports = { LibraryCollection };