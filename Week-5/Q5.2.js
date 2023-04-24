/*Write a function called vowelCount which accepts a string and returns a map 
where the keys arenumbers and the values are the count of the vowels in the string.

Guidelines:
1.JS function should have Map API implemented.
2.Map’s set functionality should have been used.
3.Bonus - if space and time complexity is taken care.   */

const vowels = "aeiou";
const str = "Madhura";

function isVowel(char) {
  return vowels.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  
  for (let value of str) {
  
    if (isVowel(value)) {
    
      if (vowelMap.has(value)) {
      
        vowelMap.set(value, vowelMap.get(value) + 1);
        
      } else {
      console.log(value)
      
        vowelMap.set(value, 1);
      }
    }
  }
  return vowelMap;
}


let res = vowelCount(str)
for (let s of res){
console.log(s)
}