const hillType = {
    "Downhill": 1.2,
    "Slalom": 0.9,
    "Giant Slalom": 1.0
}

function getHillRating(drop, distance, type) {
    
    const steepness = drop / distance;
    const adjSteepness = steepness * hillType[type];

    console.log('steepness', typeof steepness)
    console.log('adjSteepness', typeof adjSteepness);
    

    if (adjSteepness <= 0.1) {
        console.log('Green');
        return 'Green'
    } else if (adjSteepness > 0.1 && adjSteepness <= 0.25) {
        console.log('Blue');
        return 'Blue';
    } else if (adjSteepness > 0.25) {
        console.log('Black');
        return "Black";
    } else {
        console.log('Something is not right');
    };
}

getHillRating(620, 2800, "Downhill")