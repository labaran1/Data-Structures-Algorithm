const BinarySearch =(arr, num)=> {
let start =0; 
let end = arr.length-1;
let middle = Math.floor((start+end)/2);

while(start <= end){
    middle = Math.floor((start+end)/2);

if(num<arr[middle]){
    end = middle-1;
   
} else if(num> arr[middle]){
start = middle+1;

} else {

return middle
}



}


return -1;




}

// console.log();

let a =BinarySearch([1,2,3,4,5,6],10);
let b =BinarySearch([1,2,3,4,5,6],6)

console.log(a,b);
