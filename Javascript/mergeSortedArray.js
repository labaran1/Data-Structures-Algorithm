//  Write a function that takes two sorted array [0,1,2,10,41] and [3,4,5,6,19]
// and return a single sorted array [0,1,2,3,4,5,6,10,19,41]



function mergeSortedArray(arr1, arr2){

    const mergeArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i =1;    
    let j =1 ;

    if(arr1.length===0){
        return arr2;
    }
    if(arr2.length===0){
        return arr1;
    }

while(arr1Item || arr2Item){
    console.log(arr1Item, arr2Item);
    if(!arr2Item || arr1Item < arr2Item){
        mergeArray.push(arr1Item);
        arr1Item =arr1[i];
        i++;
    }
    else{
        mergeArray.push(arr2Item);
        arr2Item = arr2[j];
        j++;
    }


}

return mergeArray;

}







console.log(mergeSortedArray([0, 1, 2, 10, 41] ,[3, 4, 5, 6, 19]));