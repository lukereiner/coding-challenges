const jumperScores = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0];

function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    const myScore = distancePoints + stylePoints + windComp + kPointBonus;

    const rankCheck = (arr) => {
        jumperScores.push(myScore)
        // Step 1: Sort scores
        const sortedScores = jumperScores.sort((a, b) => b - a);

        // Step 2: Map scores to a ranking (1-9)
        const rankMap = new Map();
        sortedScores.forEach((value, index) => {
            rankMap.set(value, index + 1); // index + 1 bc ranks typically start at 1
        });

        // Step 3: Map 
        const ranks = arr.map(value => rankMap.get(value));
        console.log(ranks);

        console.log("Rank Map: ", rankMap);
        console.log("Get from rank Map: ", rankMap.get(myScore));
        
        
        console.log("Sorted Scores: ", sortedScores)
        console.log("My Score: ", myScore)
        return rankMap.get(myScore);
    }
    //rankCheck(jumperScores);

    const medalCheck = (rank) => {
        switch (rank) {
            case 1:
                console.log("Gold");
                return "Gold";
            case 2:
                console.log("Silver");
                return 'Silver';
            case 3:
                console.log("Bronze");
                return 'Bronze';
            default:
                console.log("No Medal");
                return "No Medal"
        }
    }
  return medalCheck(rankCheck(jumperScores));
}


// Tests
//skiJumpMedal(125.0, 58.0, 0.0, 6.0) // returns "Gold"
//skiJumpMedal(119.0, 50.0, 1.0, 4.0) // returns "Bronze"
//skiJumpMedal(122.0, 52.0, -1.0, 4.0) // returns "Silver"
//skiJumpMedal(118.0, 50.5, -1.5, 4.0) // returns "No Medal"
//skiJumpMedal(124.0, 50.5, 2.0, 5.0) // returns "Gold"
skiJumpMedal(119.0, 49.5, 0.0, 3.0) // returns "No Medal"

// Link to challenge: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-09