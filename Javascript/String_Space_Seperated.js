// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // re turn "9 -5"

// Solution

function highAndLow(numbers) {
  let newArray = [];
  numbers = numbers.split(" ");
  numbers.forEach((aa) => {
    if (aa == " ") {
      console.log("Hello");
    } else {
      newArray.push(+aa);
    }
  });

  let max = newArray.reduce((a, b) => Math.max(a, b));
  let min = newArray.reduce((a, b) => Math.min(a, b));
  let value = max + "" + " " + min;
  return value;
}

console.log(highAndLow("4 5 6 7 8 3 2 10 20 20 40 60 80"));
