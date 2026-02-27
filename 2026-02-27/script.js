function shiftMatrix(matrix, shift) {
  // Step 1: Flatten matrix
  const flatMatrix = matrix.flat();

  // Step 2: Move numbers by shift
  const move = (arr) => {
    const pivot = (shift < 0 ? 0 : arr.length) - (shift % arr.length);
    const newArray = arr.slice(pivot).concat(arr.slice(0, pivot));
    return newArray;
  };

  // Step 3: Chunk into sub arrays
  const chunkArray = (arr) => {
    const sub = [];
    if (matrix.length > 3) {
      for (let i = 0; i < arr.length; i += 4) {
        sub.push(arr.slice(i, i + 4));
      }
    } else {
            for (let i = 0; i < arr.length; i += 3) {
      sub.push(arr.slice(i, i + 3));
    }
    }
    console.log(sub);

    return sub;
  };

  return chunkArray(move(flatMatrix));
}

shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7)