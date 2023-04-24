/*Write a function called vowelCount which accepts a string and returns a map 
where the keys arenumbers and the values are the count of the vowels in the string.

Guidelines:
1.JS function should have Map API implemented.
2.Map’s set functionality should have been used.
3.Bonus - if space and time complexity is taken care.   */

function isVowel(char){
    return"aeiou".includes(char);
    }
    
    
    function vowelCount(str){
    
        const vowelMap=newMap();
     
        for(let char of str){
     
     let lowerCaseChar=char.toLowerCase()
     if(isVowel(lowerCaseChar)){
     
     if(vowelMap.has(lowerCaseChar)) {
         vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar));
     }
     else{
     vowelMap.set(lowerCaseChar,1);
     }
     }
     }
     return vowelMap;
     }
     

