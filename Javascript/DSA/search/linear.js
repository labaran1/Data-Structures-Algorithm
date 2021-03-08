const linearSearch = (arr , num)=> {

for(let i =0; i< arr.length; i++){
if(arr[i]==num){
    return i
}


}
return 0;

}


let a = linearSearch([1,2,3,4,5,6,7,8] , 4)
let b = linearSearch([1,2,3,4,5,6,7,8] , 9)



console.log(a,b);
