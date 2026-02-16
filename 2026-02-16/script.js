const teams = ["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]

function getSemifinalMatchups(teams) {

   let countryStats = {};

   // Divide strings into country and record
   const grabCountry = teams.forEach((country, index) => {
    const countryKey = country.slice(0,3);
    const countryValues = country.slice(5,12)
    countryStats[countryKey] = countryValues
   });

   let countryRank = {};

   // Split each record, turn into number, compute points based on index
   for (const [country, stat] of Object.entries(countryStats)) {
    const pointsArray = stat.split('-');
    let score = 0;
    const eachPoint = pointsArray.forEach((p, index) => {
      if (index === 0) {
        score += Number(p) * 3
      } else if (index === 1) {
        score += Number(p) * 2
      } else if (index === 2) {
        score += Number(p);
      }
    })    
   countryRank[country] = score    
   }

   // Sort the rankings
   const sortedRank = Object.entries(countryRank).sort(([,a], [,b]) => b - a);
   const sortedScore = Object.fromEntries(sortedRank);
   const sortedTeam = Object.keys(sortedScore)

  console.log(`The semi-final games will be ${sortedTeam[0]} vs ${sortedTeam[3]} and ${sortedTeam[1]} vs ${sortedTeam[2]}.`)
  return (`The semi-final games will be ${sortedTeam[0]} vs ${sortedTeam[3]} and ${sortedTeam[1]} vs ${sortedTeam[2]}.`);
}

getSemifinalMatchups(teams)