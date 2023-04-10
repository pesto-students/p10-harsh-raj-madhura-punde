// 1. Create a memoize function that remembers previous inputs and stores 
// them in cache so that it won’t have to compute the same inputs more than once. 
// The function will take an unspecified number of integer inputs and a reducer method.


// Given reducer method:
// function add(...args){

//     let sum = 0;
// 	args.map(item => sum+=item)
//     console.log(sum)
//     return sum
// }
// //Create a method called memoize such that:
// function memoize(...args){


//}

/*
const memoizeAdd = memoize(add);  

//then calling...
memoizeAdd(100,100); //returns 200
memoizeAdd(100);//returns 100
memoizeAdd(100,200)//returns 300
memoizeAdd(100,100)//returns 200 without computing */

// this.#LIKEWISE = 'Hello'
Answer:- 



function add(...args){
	let sum = 0;
	args.map(item => sum+=item)
	console.log(sum)
    return sum
    
}

function memoize(fn){

	 const cache = new Map();

	return(...args)=>{
	 
   const key = args.toString();
   console.log('Keys '+key)
   
   if(cache.has(key)){
      console.log('In if block, cached valuee')
      console.log(cache.get(key))
   
   }
   else{
   console.log('New entry')
   cache.set(key, fn(...args))
   console.log(cache)
   }

	}

}


 const m1 = memoize(add)
 const op1 = m1(22,2)
 const op2 = m1(100)
 const op3 = m1(100, 100)
 const op4 = m1(22,2)
