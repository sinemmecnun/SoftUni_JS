function tickets(descriptions, criteria){
    class Ticket{
        constructor(destinationName, price, status){
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for(let ticket of descriptions){
        let [destionationName, price, status] = ticket.split("|");
        price = +price;
        const newTicket = new Ticket(destionationName, price, status);
        result.push(newTicket);
    }

    if(criteria == "price"){
        result.sort((a, b) => a.price - b.price);
    }
    else{
        result.sort((a, b) => a.criteria.toUpperCase() - b.criteria.toUpperCase());
    }
    return result;
}

// console.log(tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ));

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));