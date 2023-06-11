// Given an array S of n integers, find three integers in S such that the sum is 
// closest to agiven number, target.Return the sum of the three integers.
// Assume that there will only beone solution.
// Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest 
// to the target is 2. (-1 + 2 + 1 = 2)

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; 
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1; // Pointer for the element next to nums[i]
      let right = nums.length - 1; 
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right]; // Calculate the current sum
  
        if (sum === target) {
          return sum; 
        }
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum; 
        }
  
        if (sum < target) {
          left++; 
        } else {
          right--; 
        }
      }
    }
  
    return closestSum; 
  }
 
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2
  