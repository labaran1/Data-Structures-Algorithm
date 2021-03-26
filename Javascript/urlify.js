/*
Write a method to replace all spaces in a string with 
"%20". You may assume the string has sufficient space at the end to hold the additional characters , and that you are given the true length of the string 

*/



function replaceString(str){
let newStr =[];
for (let i =0; i<=str.length-1; i++){
if(str[i]== ' '){
    newStr.push("%20")
}else{
    newStr.push(str[i])
}
}

return newStr.join("");
}

console.log(replaceString("Mr John Smith     "))