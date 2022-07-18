const { CarDealership } = require('./carDealership');

//1
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

//2
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

//3
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

//4
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

// Unexpected error: expected '-Available cars:\n
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$\n
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$\n
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$\n' to equal 
// '-Available cars:\n
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$\n
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$\n
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$'

