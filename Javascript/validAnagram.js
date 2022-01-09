/*
--Write a function to check if a string input 1 is an anagram of string input 2
*/

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  string1 = string1.toLowerCase().split('').sort().join('');
  string2 = string2.toLowerCase().split('').sort().join('');

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};

console.log(validAnagram('Hello', 'lloeH'));
