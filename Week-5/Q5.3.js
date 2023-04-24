// Write a function called hasDuplicate which accepts an array and returns 
// true or false if that arraycontains a duplicate

// Guidelines:
// 1.ReferencehasDuplicate([1,5,-1,4])
// // falseconsthasDuplicate=arr=>newSet(arr).size!==arr.length
// 2.JS function should have Set API implemented.
// 3.Bonus - if space and time complexity is taken care.

const hasDuplicate=arr=>{
 	
    if (new Set(arr).size!==arr.length){
      
      console.log('Contains duplicate entries, Hence length not matching')
      return(false)
    
    }
    console.log('Hello, They are equal')
    return(true)
  
  }
  
const res = hasDuplicate([1,5,-1,4,1]) 
console.log(res)
// OR
console.log(hasDuplicate([1,5,-1,4]))


// The space complexity is O(1) because it does not create any new data structures.