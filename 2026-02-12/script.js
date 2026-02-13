function largestDifference(timeArr1, timeArr2) {
    const timeDiff = []
    timeArr1.forEach((time1, index) => {
        const time2 = timeArr2[index];
        timeDiff.push(Number(Math.abs(time1 - time2).toFixed(2)))
    })
    //console.log('log: ',timeDiff);

    const maxDiff = Math.max(...timeDiff)
    const findLap = (timeDiff.findIndex((time) => {
        return time === maxDiff;
    }) + 1)
    console.log(findLap)
    return findLap;
}

largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23])
