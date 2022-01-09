/*
Given an array find the pair of two integers that sum up to a given integer S.

Test case TwoWaySum([3,5,2,-4,8,11]7)
*/

const twoWaySum = (arr, S) => {
  let pairs = [];
  arr = arr.filter((item, i, ar) => ar.indexOf(item) === i);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        continue;
      }
      if (arr[i] + arr[j] == S) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
};

console.log(twoWaySum([3, 5, 2, -4, 8, 11], 7));
