function insertIntoArray(arr, value, index) {
    arr.splice(index, 0, value);
    console.log(arr);
  return arr;
}

insertIntoArray([2, 4, 8, 10], 6, 2)