// Given an one-dimensional unsorted array A containing N integers.
// You are also given aninteger B, find if there exists a pair of elements in the 
// array whose difference is B.

// Output Format Return 1 if any such pair exists else return 0.
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 
// Input 2: A = [-10, 20] B = 30
// Example Output Output 1: 1 Output 2: 1

// Example Explanation 
// Explanation 1: Pair (80, 2) gives a difference of 78. 
// Explanation 2:Pair (20, -10) gives a difference of 30 
// i.e 20 - (-10) => 20 + 10 => 30

function findPair(arr, B) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const compliment1 = arr[i] + B;
      const compliment2 = arr[i] - B;
      if (map.has(compliment1) || map.has(compliment2)) {
        return 1;
      } else {
        map.set(arr[i], i);
      }
    }
    return -1;
}

console.log(findPair([5, 10, 3, 2, 50, 80], 78));