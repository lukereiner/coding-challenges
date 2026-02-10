const results = ["1:00:01", "1:00:05", "1:00:10"]

function getRelativeResults(results) {

  function timeToSeconds(timeString) {
  const [ hours, minutes, seconds ] = timeString.split(":").map(Number);
  return (hours * 3600) + (minutes * 60) + seconds;
}

  let timeInSeconds = [];
  let timeResults = [];

  // Convert results to seconds
  for (let i = 0; i < results.length; i++) {
    timeInSeconds.push(timeToSeconds(results[i]));
    //console.log(timeInSeconds);
  }
  
  // Calculate difference in times
  for (let i = 0; i < results.length; i++) {
    if (i === 0) {
      timeResults.push("0");
    } else {
      const diffInTime = timeInSeconds[i] - timeInSeconds[0];
      const convertToMins = (diffInTime) => {
        const mins = Math.floor(diffInTime / 60);
        const secs = diffInTime % 60;

        const padTo2Digits = (num) => {
          return num.toString().padStart(2, '0');
        }

        // Formatting as M:SS
        const conversion = `+${mins}:${padTo2Digits(secs)}`

        return conversion
      }
      timeResults.push(convertToMins(diffInTime));
    }
  }
  console.log(timeResults)
  return timeResults;
}

getRelativeResults(results);