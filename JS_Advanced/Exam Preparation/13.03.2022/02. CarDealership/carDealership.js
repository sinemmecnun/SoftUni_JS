class CarDealership{
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage){
        if(typeof model !== 'string' || model === "" || !Number.isInteger(horsepower) || horsepower < 0 
        || typeof price !== 'number' ||price < 0 || typeof mileage !== 'number' || mileage < 0){
            throw new Error("Invalid input!");
        }
        this.availableCars.push({
            model: model,
            horsepower: horsepower,
            price: price,
            mileage: mileage
        });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage){
        //find the car
        let searchedCar = undefined;
        for(let car of this.availableCars){
            if(car.model == model){
                searchedCar = car;
                break;
            }
        }

        //car is not found
        if(!searchedCar){
            throw new Error(`${model} was not found!`);
        }

        //check the mileage
        let soldPrice = 0;
        if(searchedCar.mileage <= desiredMileage){
            soldPrice = searchedCar.price;
        }
        else if(searchedCar.mileage - desiredMileage <= 40000){
            soldPrice = searchedCar.price * 0.95;
        }
        else{
            soldPrice = searchedCar.price * 0.9;
        }

        this.soldCars.push({
            model: searchedCar.model,
            horsepower: searchedCar.horsepower,
            soldPrice: soldPrice
        });

        const indexOfCar = this.availableCars.indexOf(searchedCar);
        this.availableCars.splice(indexOfCar, 1);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }
    
    currentCar(){
        let result = "-Available cars:\n";
        if(this.availableCars.length == 0){
            return "There are no available cars";
        }
        for(let car of this.availableCars){
            result += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`;
        }
        return result.slice(0, result.length - 1);
    }

    salesReport(criteria){
        const possibleCriteria = ['horsepower', 'model'];
        if(!possibleCriteria.includes(criteria)){
            throw new Error("Invalid criteria!");
        }

        if(criteria == 'horsepower'){
            const sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else{
            const sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`

        for(let car of this.soldCars){
            result += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`;
        }
        return result.slice(0, result.length - 1);
    }
}

module.exports = { CarDealership };