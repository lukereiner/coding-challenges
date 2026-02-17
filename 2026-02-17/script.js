const weightRanges = {
  1: [162, 247],
  2: [170, 390],
  4: [210, 630],
};

function checkEligibility(athleteWeights, sledWeight) {
  const teamSize = athleteWeights.length;
  const totalWeight =
    athleteWeights.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    ) + sledWeight;
  const range = weightRanges[teamSize];

  // Check weight against min and max range
  if (teamSize) {
    if (sledWeight < weightRanges[teamSize][0]) {
      console.log("Not Eligible");
      return "Not Eligible";
    }
    if (totalWeight > weightRanges[teamSize][1]) {
      console.log("Not Eligible");
      return "Not Eligible";
    }
    console.log("Eligible");
    return "Eligible";
  }
}

checkEligibility([85, 90], 170);
