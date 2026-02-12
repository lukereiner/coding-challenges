const skater1 = [26.11, 25.80, 25.92, 26.23, 26.07];
const skater2 = [25.93, 25.74, 26.53, 26.11, 26.30];

const skater1Rank = {};
const skater2Rank = {};

function calculateDifferences(skaterArray) {
    const diff = {};
    skaterArray.forEach((time, index) => {
        if (index >= skaterArray.length - 1) {
            return;
        }
        const timeDiff = Math.abs(skaterArray[index + 1] - time);
        diff[(index + 1)] = Number(timeDiff.toFixed(2));
    })
    console.log(diff);
    return diff;
}

function largestDifference(skater1, skater2) {
    skater1Diff = calculateDifferences(skater1);
    skater2Diff = calculateDifferences(skater2);

    const allDiffs = [...Object.values(skater1Diff), ...Object.values(skater2Diff)]
    const allEntries = [Object.entries(skater1Diff), Object.entries(skater2Diff)]
    const largest = Math.max(...allDiffs)

    const largestLap = (object, value) => {
        return Object.keys(object).find(key => object[key] === value)
    }

    console.log('object entries', allEntries)

    console.log(allDiffs)
  return largest;
}

largestDifference(skater1, skater2)