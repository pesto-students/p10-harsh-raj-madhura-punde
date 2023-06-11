// Find the contiguous subarray within an array, A of length N which has the largest 
// sum.Input Format:The first and the only argument contains an integer 
// array, A. Output Format: Return aninteger representing the maximum possible sum 
// of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example:
// Input 1: A = [1, 2, 3, 4, -10]
// Output 1: 10
// Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
// Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
// Output 2: 6
// Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6



// Time complexity O(N^2)
const OldTechniqueForSubArray = (arr)=>{

    let mainSum =0; 

    for(let i =0;i<arr.length;i++){
        let localSum =0;
        for(let j=i;j<arr.length;j++){
            localSum +=arr[j]
            mainSum = Math.max(mainSum, localSum)
        }
    }
    console.log(mainSum)
}




// Time complexity O(N) following Kadane's Algorithm

const maxSum=  (arr)=>{

    let maxSum=arr[0];
    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        maxSum=Math.max(sum,maxSum);
    
        if(sum<0){
            sum=0;
        }
    }

    return maxSum;

}

const k = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log('--------Old Technique--------')
OldTechniqueForSubArray(k)
console.log('--------Optimized--------')
console.log(maxSum(k))
