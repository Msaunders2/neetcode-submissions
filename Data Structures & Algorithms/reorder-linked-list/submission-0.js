/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slowPointer = head;
        let fastPointer = head;

        //iterate to midpoint of linkedlist
        while(fastPointer !== null && fastPointer.next !== null){
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        //add all nodes form mid to end
        let stack = [];
        let node = slowPointer.next
        while(node){
            stack.push(node);
            node = node.next
        }

        slowPointer.next = null;


        //rebuild list 
        let curr = head;

        while(stack.length > 0){
            let next = curr.next;
            curr.next = stack.pop();
            curr.next.next = next;
            curr = next;
        }

    }
}
