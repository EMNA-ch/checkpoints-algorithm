function findSum(arr1, arr2) {
  var arr = arr1.concat(arr2);
  arr = arr.sort();
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      sum = sum + arr[i];
    } else {
      i++;
    }
  }
  return sum;
}
