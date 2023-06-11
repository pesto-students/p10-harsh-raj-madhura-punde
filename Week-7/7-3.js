// Problem 7.3 Sort array of 0's,1's and 2'sGiven an array of size N containing 
// only 0s, 1s, and 2s; sort the array in ascendingorder. 
// Example 1:Input: N = 5
// arr[]= {0 2 1 2 0}
// Output:0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.
// Example 2:Input:N = 3
// arr[] = {0 1 0}
// Output:0 0 1

let countDigitsWithMap = (arr)=>{

    let res = new Map();
    let digitArray= [];
    for(let s=0;s<arr.length;s++){

        if(res.has(arr[s])){
            //If element already exists, get value and update the counter
            res.set(arr[s], res.get(arr[s])+1)
        }
        else{
            //New value, store it.
            res.set(arr[s],1)
        }
    }
    console.log({res})

    for(let[key, value] of res){
        console.log(key,'------>', value);
        digitArray.fill(key, digitArray.length)

        while(value>0){
            digitArray.push(key);
            value--;
        }
        // console.log(digitArray)
    }
    console.log(digitArray.sort());   
}

let s1 = [1,0,1];
let s2 = [0,2,1,2,0,0];
const withMap = countDigitsWithMap(s1)