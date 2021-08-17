/**
 * A magic Index in an array A[0...n-1] is defined to be an 
 * index such that A[i] = i . given a sorted array of distinct Integers 
 * write a method to find a magic index. If one exists in array
 
 * **/

//Iterative approach
const MagicIndex = (arr) => {
  let magicIndexs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
      magicIndexs.push(i);
    }
  }

  return magicIndexs;
};

// console.log(MagicIndex([1, 2, 2, 1, 5, 6]));

// Recursive Approach
