// Problem 3: Detect loop in a linked listGiven a linked list of N nodes. 
// The task is to check if the linked list has a loop. 
// Linkedlist can contain self loop.
// Example 1:Input:N = 3 value[] = {1,3,4} x = 2
// Output: True
// Explanation: In above test case N = 3.
// The linked list with nodes N = 3 is given. 
// Then value of x=2 is given which means last node is connected with xth node of linked 
// list. Therefore, there exists a loop.
// Example 2:Input:N = 4value[] = {1,8,3,4}x = 0Output: False
// Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, 
// then the Linked list does not containsany loop.
// Expected Time Complexity: O(N) Expected Auxiliary 
// Space: O(1)Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function isCircularLinklist(head){
    //initialize 2 points
    let slow = head;
    let fast = head;
    
    //if LL is empty, return false
    if(!head || !head.next){
        return false;
    }
    while(fast!==null && fast.next !=null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow===fast){
            return true;
        }
    }
    //if no cycle, fast will reach to null
    return false;
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

//cyclic node
node4.next = node2;

const r = isCircularLinklist(node1)
console.log(r)
