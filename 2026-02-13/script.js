const distances = [320, 280, 350, 300, 250]

function getFastestSpeed(times) {
    let metersPerSecond = [];
    const calcMetersPerSecond = distances.forEach((dist, index) => {
        const segmentTime = times[index];
        metersPerSecond.push(Number((dist / segmentTime).toFixed(2)));
    })
    const findMax = Math.max(...metersPerSecond);
    const findIndex = (metersPerSecond.findIndex((time) => {
        return time === findMax;
    }) + 1)
    console.log(metersPerSecond);
    console.log(findMax);
    console.log(findIndex)
    console.log(`The luger's fastest speed was ${findMax} m/s on segment ${findIndex}.`)

  return (`The luger's fastest speed was ${findMax} m/s on segment ${findIndex}.`);
}

getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128])