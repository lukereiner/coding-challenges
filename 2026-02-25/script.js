function findDifferences(arr) {
  const diffArr = [];

  const diff = arr.map((num, index) => {
    if (index === arr.length - 1) {
      diffArr.push(0);
    } else {
      diffArr.push(arr[index + 1] - arr[index]);
    }
  });
  console.log(diffArr);
  return diffArr;
}

findDifferences([10, 15, 19, 22, 24, 25]);