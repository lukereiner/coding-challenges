function isValidDominoChain(dominoes) {
  let domStart = dominoes[0][1];

  const domArrLength = dominoes.length;
  let matchCount = 1;

  for (const dom of dominoes.slice(1)) {
    for (const [index, domSub] of dom.entries()) {
      if (domSub === domStart && index === 0) {
        matchCount++
      }

      if (index === 1) {
        domStart = domSub;
      }
        
    }
  };

  console.log(domArrLength);
  console.log(matchCount);
  
  if (domArrLength === matchCount) {
    return true;
  } else {
    return false;
  }
}

isValidDominoChain([[6, 2], [3, 4], [4, 1]])