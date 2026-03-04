const deck = {
    A : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    10 : 10,
    J : 10,
    Q : 10,
    K : 10
};

function cardValues(cards) {

    const values = [];

    // Create function to strip last character of index
    const removeChar = (string) => { 
        return string.slice(0, -1);
    }

    // Loop through given array, strip character, look up value, push to values array
    for (i = 0; i < cards.length; i++) {
        const newValue = removeChar(cards[i])
        values.push(deck[newValue])
    }
    console.log(values);
    
    return values;
}

cardValues(["10H", "JH", "QH", "KH", "AH"])