
function tribonacci(signature, n) {
    //your code here


    if (n === 0) {
        return []
    } else if (n === 1) { return [1] }




    else {
        for (let i = 0; i < n - 3; i++) {
            let first = signature[i];
            let second = signature[i + 1];
            let third = signature[i + 2];

            let next = (first + second + third);

            signature.push(next);
        }





    }


    return signature;



}

 console.log(tribonacci([1,1,1],10));