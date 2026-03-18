function largestNumber(str) {
  const numArr = [];

  const splitString = (str) => {
    const result = str.split(/[,!?:;]+/);
    result.forEach((num) => {
      numArr.push(Number(num));
    });
  };
  splitString(str);

  const maxNum = Math.max(...numArr);
  console.log(maxNum);
  
  return maxNum
}

largestNumber("12;-50,99.9,49.1!-10.1?88?16");
