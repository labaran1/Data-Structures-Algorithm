/*
Question 
Given a sting , write a function to check if it is a permutation of a palindrom . A palindrome is  a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.



*/


function parlinPerm(string ){
let count = {}
let str = string.replace(/\s/g, '')
str = str.toLowerCase();

// console.log(str)

for (let i =0; i<=str.length-1; i++){

    if (!count[str[i]]){
        count[str[i]] =1
    }else {
        count[str[i]]++;
    }
}

// console.log(count)
let oddCount =0
for(const [key, value] of Object.entries(count)){

    if(value%2===0){
        // console.log("object even")
    }else {
        // console.log("object odd")
        oddCount++
    }
}
if(oddCount!==1){
    return false;
}

    return true;




    }


   console.log( parlinPerm("race car"))
   console.log( parlinPerm("Tact Coa"))