function solve(numberOfSteps, lengthOfFootprint, speed){
    let distanceInMeters = numberOfSteps * lengthOfFootprint;
    let speedMS = speed / 3.6;
    let time = distanceInMeters / speedMS;
    let rest = Math.floor(distanceInMeters/500);
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHours = Math.floor(time/3600);
    console.log((timeHours < 10 ? "0": "") + timeHours + ":" + (timeMin + rest < 10 ? "0": "") + (timeMin+ rest) + ":" + (timeSec < 10 ? "0": "") + timeSec);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5)