//hacker Rank HHourglass Sum Problem 


// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let sum = []
    let a =0;
    let b =1;
    let c =2;
    let d =3;
      let j =1; 
    let k =0;
    for(let i =0; i<=3; i++){
      
    
      let s =0; 
      let x =0;
      let w =0 ;
      let f =0;
     s = s +arr[a][i] +arr[a][i+1] +arr[a][i+2] + arr[a+1][j] + arr[a+2][k] + arr[a+2][k+1] + arr[a+2][k+2];
    
    x = x +arr[b][i] +arr[b][i+1] +arr[b][i+2] + arr[b+1][j] + arr[b+2][k] + arr[b+2][k+1] + arr[b+2][k+2];
     
     w = w+arr[c][i] +arr[c][i+1] +arr[c][i+2] + arr[c+1][j] + arr[c+2][k] + arr[c+2][k+1] + arr[c+2][k+2]; 
     
     f = f+arr[d][i] +arr[d][i+1] +arr[d][i+2] + arr[d+1][j] + arr[d+2][k] + arr[d+2][k+1] + arr[d+2][k+2];
     
     sum.push(s)
     sum.push(x)
     sum.push(w)
     sum.push(f)
    j++
    k++
      
    }
    
    console.log(sum)
    let highTotal =Math.max(... sum)
    
    return highTotal;
    
    }