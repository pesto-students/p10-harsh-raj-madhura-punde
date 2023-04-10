// Q4. Refactor the above stack implementation, using the concept of closure, 
// such that there is noway to access items array outside of 
// createStack() function scope: (2-3 hours)

// function createStack(){
//     return{
//         items:[],
//         push(item) {
//             this.items.push(item);
//         },
//         pop() {
//             returnthis.items.pop();
//         }
//     };
// }
// const stack=createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5s
// tack.items;// => [10]
// stack.items= [10,100,1000];// Encapsulation broken!

// function createStack() 
// {
//     // Write your code here...
// }
// const stack=createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => undefined


Answer:-


function createStack(){
    let items= []
            
        return{
          push(item){
              items.push(item);
              console.log(`You added ${item} now Current data is ${items}`)
          },
          
          pop(){
             let a1 = items.pop();
             console.log(`You removed ${a1} and data is ${items}`)
          }
     }
  }
  
  const stack=createStack();
  stack.push(10, this);
  stack.push(5, this);
  stack.pop();// 
//   console.log(stack)
  console.log(stack.items)


//  Expected Output:-
//   "You added 10 now Current data is 10"
// "You added 5 now Current data is 10,5"
// "You removed 5 and data is 10"