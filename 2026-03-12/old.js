function isValidDominoChain(dominoes) {
  let domStart = dominoes[0][1];

  console.log("start", domStart);

  dominoes.slice(1).forEach((dom, index) => {
    console.log(dom);

    dom.forEach((domSub, indexSub) => {
      if (domSub === domStart && indexSub === 0) {
        console.log("It's a match!");
      }

      if (indexSub === 1) {
        domStart = domSub;
      }
    });
  });
}

isValidDominoChain([[1, 3], [3, 6], [6, 5]])