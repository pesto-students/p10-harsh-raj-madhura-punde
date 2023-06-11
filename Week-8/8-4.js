
import {Stack} from "./stackUsingArray";

function isBalanced(exp){
    let stack = new Stack();
    for(let i =0;i<exp.length;i++){
        let start = exp[i];
        if(start ==="(" || start ==="{" || start ==="["){
            stack.push(start);
        }
        else if(start===")" || start ==="}" || start ==="]"){
            //1st pop 
            let last = stack.pop();
            if((start ===")" && last !=="(") || (start==="}" && last !=="{") ||
            (start==="]" && last!=="[") ){
                return false;
            }

        }
    }
    return stack.isEmpty();

}

console.log(isBalanced("[()}"));

// TC-O(N)
// SC-O(N)