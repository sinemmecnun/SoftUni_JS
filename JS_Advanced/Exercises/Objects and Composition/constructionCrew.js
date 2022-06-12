function crew(worker){
    if(worker.dizziness){
        const addedWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += addedWater;
        worker.dizziness = false;
    }
    return worker;
}

console.log(crew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
  ));