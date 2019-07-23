// // create an array 

// const strings = ['a', 'b', 'c', 'd'];

// // Arrays store Data in sequential order

// // push 
// // Add at the end of array  //0(1)
// strings.push('e');
// console.log(strings); //['a', 'b', 'c' ,'d' , 'e]


// //Pop // remove last item from an array
// strings.pop();  //big O => o(1)
// console.log(strings); //['a', 'b', 'c' ,'d']



// // unshift  // Add the begining of array 
// strings.unshift('x'); // big o => o(n);
// console.log(strings);  //[ 'x', 'a', 'b', 'c', 'd' ]


// // splice  // add in the middle 
// strings.splice(2, 0, 'labs'); //big O => O(n)
// // 2 => index to sart
// console.log(strings); //[ 'x', 'a', 'labs', 'b', 'c', 'd' ]


// // Accessing 
// strings[2] //  bigO =>O(1)


// // Types of Array 
//     // Dynamic and Static type array  

// // with static type array you define the number storage the array must have
    

// // Dynamic memory => automatic memory sizing 
// // expand as you add more element  

// building a Array 
class MyArray {
constructor(){
    this.length = 0;
    this.data= {};
}

// Accessing
get(index){
    return this.data[index];
}

// push // adding at the end of the array 
push(item){
 this.data[this.length]= item;
 this.length++; 
 return this.length;
}
pop(){
    const lastItem = this.data[this.length]-1;
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
}

// delete 
delete(item){
    const items = this.data[index];
    this.ShiftItems(index);
    delete this.data[this.length-1];
    this.length++;
}

ShiftItems(index){
for(let i=index; i<this.length-1; i++){

    this.dat[i] = this.data[i+1]; 
}

}
}


const newArray = new MyArray();
console.log(newArray.push('hi'));
newArray.push('you')
newArray.push('me')
console.log(newArray); 
newArray.pop();
console.log(newArray);


