// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

// For example, take 153(3 digits):
// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153

function Narcissistic(value){
    var sum = 0;
    let valueString = value.toString();
for(let i =0; i<valueString.length; i++){
sum += Math.pow(valueString[i],valueString.length) 
}

    if (sum === value) { return `true ${value} is narcissistic`; } else { return `false ${value} is not narcissistic`}
}

console.log(Narcissistic(11505));