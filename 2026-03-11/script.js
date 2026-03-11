function convertWords(str) {

    const stringSplit = (str) => {
        return str.split(' ');
    }

    const wordArr = stringSplit(str);

    const letterCount = (word) => {
        const letterCountArr = [];
        for (let i = 0; i < word.length; i++) {
            let wordLength = word[i].length;
            console.log(wordLength)
            letterCountArr.push(wordLength);
        }
        const returnedCount = letterCountArr.join(' ');
        console.log(returnedCount);
        return returnedCount
        
    }

    return letterCount(wordArr)
}

convertWords('The quick brown fox jumps over the lazy dog');