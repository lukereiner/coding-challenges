const scores = [10, 5, 6, 2, 9, 8, 10, 3, 1, 5]

function sortScore(scoreArray) {
    const sortedScores = scoreArray.sort((a, b) => b -a);
    //console.log(sortedScores);
    return sortedScores;
}

function computeScore(judgeScores, ...penalties) {
    let baseScore = 0;
    const sortedScores = sortScore(judgeScores);
    const scoreSum = sortedScores.slice(1, 9);
    for (let i = 0; i < scoreSum.length; i++) {
        baseScore += scoreSum[i];
    }
    
    for (let i = 0; i < penalties.length; i++) {
        baseScore -= penalties[i];
    }

    console.log('Base score: ', baseScore);
  return baseScore;
}


computeScore(scores, 1, 5, 5)