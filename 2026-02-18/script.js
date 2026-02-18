const score = [118, 125, 122, 120];

function calculateStartDelays(jumpScores) {
    let scoreDelays = [];

    // Step 1: Find the max in array
    const highestScore = Math.max(...jumpScores);

    // Step 2: loop through each index subtracting, multiplying by 1.5, and rounding up to nearly integer
    const delay = jumpScores.forEach((time, index) => {
        scoreDelays.push(Math.ceil((highestScore - time) * 1.5));
    })

    console.log(scoreDelays)
  return scoreDelays
}

calculateStartDelays(score);