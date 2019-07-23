// First method

// function reverse(str){
// // check input 

// if(!str || str.length<2 || typeof str !== "string"){
// return undefined;

// }else{
// const newString =[];
// const totalItems = str.length -1;

// for( let i=totalItems; i>=0; i++){

//     newString.push(str[i]);



// }



// }
// console.log(newString);

// return newString.join('');
// }


// method2 
function reverse2(str){

    return str.split('').reverse().join('');
}


// method 3
const reverse3 = str => [...str].reverse().join('');

console.log(reverse2('Hello'));