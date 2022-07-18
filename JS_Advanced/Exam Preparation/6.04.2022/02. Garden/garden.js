class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if(spaceRequired > this.spaceAvailable){
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){
        if(quantity <= 0){
            throw new Error("The quantity cannot be zero or negative.");
        }
        const searchedPlant = [];
        for(let plant of this.plants){
            if(plant.plantName == plantName){
                searchedPlant.push(plant);
                break;
            }
        }

        if(searchedPlant.length == 0){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(searchedPlant[0].ripe){
            throw new Error(`The ${plantName} is already ripe.`);
        }
        searchedPlant[0].ripe = true;
        searchedPlant[0].quantity += quantity;
        if(quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName){
        let searchedPlant = undefined;
        for(let plant of this.plants){
            if(plant.plantName == plantName){
                searchedPlant = plant;
                break;
            }
        }
        
        if(searchedPlant === undefined){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if(!searchedPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.storage.push({
            plantName: searchedPlant.plantName,
            quantity: searchedPlant.quantity
        });
        this.spaceAvailable += searchedPlant.spaceRequired;
        const index = this.plants.indexOf(searchedPlant);
        this.plants.splice(index, 1);
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport(){
        let result = `The garden has ${this.spaceAvailable} free space left.\n`;
        
        result += `Plants in the garden: `;

        let sortedPlants = [];
        for(let plant of this.plants){
            sortedPlants.push(plant.plantName);
        }
        sortedPlants.sort((a,b) => a.localeCompare(b));
        // const sortedPlants = this.plants.sort((a, b) => a.localeCompare(b));
        result += `${sortedPlants.join(', ')}\n`;

        result += "Plants in storage: ";
        if(this.storage.length <= 0){
            result += "The storage is empty.\n";
        }
        else{
            for(let plant of this.storage){
               result += `${plant.plantName} (${plant.quantity}), `; 
            }
            result = result.slice(0, result.length - 2);
        }
        return result;
    }
}

module.exports = { Garden };