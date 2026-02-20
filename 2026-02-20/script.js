const firstWords = ['Misty', 'Ghost', 'Thunder', 'Solar', 'Sky', 'Phantom', 'Frozen', 'Polar'];
const secondWords = ['Twister', 'Icequake', 'Avalanche', 'Vortex', 'Snowstorm', 'Frostbite', 'Blizzard', 'Shadow'];

function isValidTrick(trickName) {

    // Split string
    const stringSplit = trickName.split(' ');
    console.log(stringSplit);

    // Compare string index
    const foundFirstWord = firstWords.findIndex((string) => string === stringSplit[0]);
    const foundSecondWord = secondWords.findIndex((string) => string === stringSplit[1]);

    if (foundFirstWord === -1 || foundSecondWord === -1) {
        return false;
    } else {
        return true;
    }
  
};

isValidTrick('Polar Vortex');