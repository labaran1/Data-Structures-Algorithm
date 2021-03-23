/*
Given two strings. write a method to determine if one is a permutation of another
assume all strings are lowercase

*/


//using sorting method
const Permutation = (str1 , str2)=> {
    let string1 = str1.toLowerCase();
    let string2 = str2.toLowerCase();
    if(string1.length != string2.length)return false;
return string1.split("").sort().join("")==string2.split("").sort().join("");

}



//using value count

const valuePermutation = (str1, str2)=> {
    let string1 = str1.toLowerCase();
    let string2 = str2.toLowerCase();
if(string1.length!= string2.length) return false;


let string1Count= {}
let string2Count={}

for (let i =0; i<=string1.length-1; i++){
if(!string1Count[string1[i]]){
    string1Count[string1[i]] =1
}else {
    string1Count[string1[i]]+1;
}


if(!string2Count[string2[i]]){
    string2Count[string2[i]] =1
}else {
    string2Count[string2[i]]+1;
}


}

// console.log(string1Count, "\n", string2Count)

for(const [key , value ] of Object.entries(string1Count)){
// console.log(key, value)

if( string2Count[key] &&  string2Count[key] ==value){
// console.log("pass")
}else {
return false;
}

}
return true;
}

console.log(valuePermutation("love", "evoL"))

