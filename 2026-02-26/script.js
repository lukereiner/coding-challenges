function countLettersAndNumbers(str) {

    let charCount = 0;
    let numCount = 0;

    // Check if Alphanumeric character
    const isLetter = (char) => {
        return /^[a-z]$/i.test(char);
    };

    const isNum = (char) => {
        return /^\d$/.test(char);
    };

    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            charCount++
        } else if (isNum(str[i])) {
            numCount++
        };
    }
    console.log(`charCount: ${charCount}, numCount: ${numCount}`);
    
    if (charCount === 1 && numCount === 1) {
        return `The string has ${charCount} letter and ${numCount} number.`
    } else {
        return `The string has ${charCount} letters and ${numCount} numbers.`
    }
}

countLettersAndNumbers('A1!');