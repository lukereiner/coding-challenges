const teams = ["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]

function getSemifinalMatchups(teams) {

   let countryStats = {};

   const grabCountry = teams.forEach((country, index) => {
    const countryKey = country.slice(0,3);
    const countryValues = country.slice(5,12)
    countryStats[countryKey] = countryValues
   });

   let countryRank = {};

   for (const [country, stat] of Object.entries(countryStats)) {
    const pointsArray = stat.split('-');
    let score = 0;
    const eachPoint = pointsArray.forEach((p, index) => {
      if (index === 0) {
        //console.log('3 points!')
        score += Number(p) * 3
      } else if (index === 1) {
        //console.log('2 points!');
        score += Number(p) * 2
      } else if (index === 2) {
        //console.log('1 point!');
        score += Number(p);
      } else if (index === 3) {
        //console.log('no points')
      }

    })    
    console.log(`country: ${country}, score: ${score}, record: ${stat}`)
    //const countryObject = {country, score}
    //Object.assign(countryRank, countryObject)
   countryRank[country] = score
    //console.log(countryRank);
    
   }

   const sortedRank = Object.entries(countryRank).sort(([,a], [,b]) => b - a);
   const sortedScore = Object.fromEntries(sortedRank);

   console.log(countryRank)
   console.log(sortedScore)
  return teams;
}

getSemifinalMatchups(teams)