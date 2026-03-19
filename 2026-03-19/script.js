function invertMatrix(matrix) {

    const flattenMatrix = matrix.flat();
    const uniqueElements = [...new Set(flattenMatrix)];
    const matrixLength = matrix.length; 
    const returnMatrix = [];  

    const matrixLoop = matrix.forEach((row) => {
        const loopArr = [];
        row.forEach((element, index) => {
            if (element === uniqueElements[0]) {
                loopArr.push(uniqueElements[1])
            } else {
                loopArr.push(uniqueElements[0])
            };
        });
        returnMatrix.push(loopArr);
       // console.log(loopArr)
    })

    matrixLoop;
    console.log(returnMatrix);
    
  return returnMatrix;
};

invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]])