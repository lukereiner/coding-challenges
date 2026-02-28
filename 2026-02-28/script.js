function addPunctuation(sentences) {

    const mySentence = [sentences];
    let buffer = []

    const isUpperCase = (char) => {
        if (/[a-zA-Z]/.test(char)) {
            return char === char.toUpperCase();
        }
        return false;
    };

    const isWhiteSpace = str => {
        try {
            return str.includes(' ');
        } catch (error) {
            return;
        }
        };
    

    // Loop through array and check for space before uppercase
    mySentence[0].split('').forEach((letter, index, array) => {
        //console.log(letter, index);
        if (isWhiteSpace(array[index + 1]) && isUpperCase(array[index + 2])) {
            letter = `${letter}.`
            buffer.push(letter);
        } else {
            buffer.push(letter)
        };
    
        //console.log(letter, index);        
    });
    const finalString = buffer.join('');
    // Add period at end
    console.log(`${finalString}.`);
    return `${finalString}.`
    
}

addPunctuation("JavaScript is great Sometimes")