const directions = "SLSLLSRRLSRLRL";

function getDifficulty(track) {
  let points = 0;

  for (let i = 0; i < track.length; i++) {
    if (
      (track[i] === "R" && track[i - 1] === "L") ||
      (track[i] === "L" && track[i - 1] === "R")
    ) {
      points += 15;
    } else if (track[i] === "S") {
      points += 0;
    } else {
      points += 5;
    }
  }

  if (points <= 100) {
    console.log("Easy");
    return "Easy";
  } else if (points >= 101 && points <= 200) {
    console.log("Medium");
    return "Medium";
  } else if (points > 200) {
    console.log("Hard");
    return "Hard";
  } else {
    console.log("no points");
  }
}

getDifficulty(directions);
