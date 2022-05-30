function roadRadar(currentSpeed, area){
    let dict = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }
    let speedLimit = dict[area];
    if(currentSpeed <= speedLimit){
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }
    else{
        let status;
        if(currentSpeed <= speedLimit + 20){
            status = "speeding";
        }
        else if(currentSpeed <= speedLimit + 40){
            status = "excessive speeding";
        }
        else{
            status = "reckless driving";
        }
        let diff = currentSpeed - speedLimit;
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');