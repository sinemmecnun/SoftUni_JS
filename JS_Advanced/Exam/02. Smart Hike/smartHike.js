class SmartHike {
    constructor(username){
        this.username = username;
        
        //{peakName, altitude}
        this.goals = {};

        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude){
        //search for peak
        const searchedPeak = this.findPeak(peak);
        //if exists return
        if(searchedPeak){
            return `${peak} has already been added to your goals`;
        }

        //add
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel){
        //search for peak in goals
        const searchedPeak = this.findPeak(peak);

        //if it doesnt exist throw error
        if(!searchedPeak){
            throw new Error(`${peak} is not in your current goals`);
        }

        //exists but not enough resouces
        if(this.resources == 0){
            throw new Error("You don't have enough resources to start the hike");
        }

        //find the difference
        const difference = this.resources - time*10;

        //it diff is negative return
        if(difference < 0){
            return "You don't have enough resources to complete the hike";
        }

        // subtract resources, add hike to list
        //{ peak, time, difficultyLevel }

        this.resources = difference;
        this.listOfHikes.push({
            peak, time, difficultyLevel
        });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest (time){
        this.resources += time * 10;
        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord (criteria){
        //const possibleCriteria = ['hard', 'easy', 'all'];

        //list of hikes is empty
        if(this.listOfHikes.length == 0){
            return `${this.username} has not done any hiking yet`;
        }

        //if criteria is hard or easy find all hikes with that difficulty
        if(criteria == 'hard' || criteria == 'easy'){
            const searchedHikes = this.findHikeByDifficulty(criteria);

            //if no such hike
            if(searchedHikes.length == 0){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
    
            //and the shortest time (first added)
            const shortestHike = this.findShortestHike(searchedHikes);
            return `${this.username}'s best ${criteria} hike is ${shortestHike.peak} peak, for ${shortestHike.time} hours`
        }
        else if(criteria == 'all'){
            let result = "All hiking records:\n";

            for(let hike of this.listOfHikes){
                result += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
            }

            return result.slice(0, result.length - 1);
        }
    }

    findPeak(peakName){
        if(this.goals.hasOwnProperty(peakName)){
            return this.goals[peakName];
        }
        return;
    }

    findHikeByDifficulty(difficulty){
        let result = [];
        for(let hike of this.listOfHikes){
            if(hike.difficultyLevel == difficulty){
                result.push(hike);
            }
        }

        return result;
    }

    findShortestHike(hikesList){
        let shortestTime = 100000;
        let shortestHike = undefined;
        for(let hike of hikesList){
            if(hike.time < shortestTime){
                shortestTime = hike.time;
                shortestHike = hike;
            }
        }
        return shortestHike;
    }
}

module.exports = { SmartHike };