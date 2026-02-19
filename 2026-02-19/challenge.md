https://www.freecodecamp.org/learn/daily-coding-challenge/2026-02-19

Given the snow depth and slope of a mountain, determine if there's an avalanche risk.
- The snow depth values are "Shallow", "Moderate", or "Deep".
- Slope values are "Gentle", "Steep", or "Very Steep".

Return "Safe" or "Risky" based on this table:

              SHALLOW, MODERATE, DEEP
Gentle      |   Safe, Safe, Safe
Steep       |   Safe, Risky, Risky
Very Steep  |   Safe, Risky, Risky

TESTS
1. avalancheRisk("Shallow", "Gentle") should return "Safe".
2. avalancheRisk("Shallow", "Steep") should return "Safe".
3. avalancheRisk("Shallow", "Very Steep") should return "Safe".
4. avalancheRisk("Moderate", "Gentle") should return "Safe".
5. avalancheRisk("Moderate", "Steep") should return "Risky".
6. avalancheRisk("Moderate", "Very Steep") should return "Risky".
7. avalancheRisk("Deep", "Gentle") should return "Safe".
8. avalancheRisk("Deep", "Steep") should return "Risky".
9. avalancheRisk("Deep", "Very Steep") should return "Risky".