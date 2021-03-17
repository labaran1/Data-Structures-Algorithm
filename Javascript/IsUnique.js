/*
Question 
Implement an algorithm to determine if a string has all unique characters.
(assuming all strings are lowercase) 
1--what if you cannot use an additional data structure.
2-- what if you cannot use an additional data structure
*/

//Not using an additional data structure
const isUnique1 = (str)=>{
    let arr = str.toLowerCase();

    for (let i =0; i<arr.length-1; i++){
for (let j =i+1; j<arr.length;j++){
if(arr[i]==arr[j]){
    return false
}
}   }

return true 
}

const isUnique2 = (arr)=> {
    let str = arr.toLowerCase();
let unique = {
    
}
for (let i =0; i<=str.length-1; i++){
    if(!unique[str[i]]){
        unique[str[i]] =1
    }else{
        return false 
    }
}
return true;

}



console.log(isUnique2("metadklf"))
console.log(isUnique1("metadasklf"))



// let a =isUnique1("Llove");

// console.log(a)