// Problem 8.6: Implement a Queue using 2 stack Implement a Queue using 2 stacks s1 and s2. 
// A Query Q is of 2 Types 
// (i) 1 x (a queryof this type means pushing 'x' into the queue.
// (ii) 2 (a query of this type means to popelement from 
// queue and print the poped element)
//  Example 1: Input: 51 2 1 3 2 1 4 2
//  Output: 2 3
//  Explanation:In the first testcase1 2 the queue will be {2}

class Queue {
    constructor() {
        this.s1 = []; 
        this.s2 = []; 
    }

    enqueue(x) {
        this.s1.push(x);
    }

    dequeue() {
        if (this.s2.length === 0) {
            if (this.s1.length === 0) {
                return -1; // Queue is empty
            }

            // Move elements from s1 to s2 to reverse the order
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop());
            }
        }

        return this.s2.pop();
    }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.enqueue(4);

console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(queue.dequeue()); // Output: -1 (Queue is empty)
