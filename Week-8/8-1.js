// Given a linked list of N nodes. The task is to reverse this list
// Example 1:
// Input:LinkedList: 1->2->3->4->5->6
// Output: 6 5 4 3 2 1
// Explanation: After reversing the list,elements are 
// 6->5->4->3->2->1.
// Example 2:
// Input:LinkedList: 2->7->8->9->10
// Output: 10 9 8 7 2
// Explanation: After reversing the list,elements are 10->9->8->7->2.
// Expected Time Complexity: O(N). 
// Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 104

class Node{

    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function reverseLinklist(head){

    // let current = this.head
    // let previous = null;
    // let next_to_current = null;

    // while(current){
    //     next_to_current = current.next;
    //     current.next = previous;
    //     //update previous
    //     previous = current;

    //     current = next_to_current;
    // }
    // this.head = previous;

        let previous = null;
        let current = head;
        let next = null;
      
        while (current !== null) {
          next = current.next;
          current.next = previous;
          previous = current;
          current = next;
        }
      
        return previous;
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}


const reversedHead = reverseLinklist(node1);

console.log('Reversed Linked List:');
current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}