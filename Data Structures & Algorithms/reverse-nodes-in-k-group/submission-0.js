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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummyNode = new ListNode(0,head);
        let groupPrevTail = dummyNode;
    
        // some connection issues when reattaching two list like dummyNode is prob not attached anymore either 
        while(true){
            //make sure we have k nodes to reverse first
            let check = groupPrevTail.next;
            for (let count = 0; count < k; count++) {
                if (check === null) return dummyNode.next;   // fewer than k left, stop
                check = check.next;
            }

            let groupStart = groupPrevTail.next;
            let groupEnd = groupStart;
            
            //iterate k foward
            for (let count = 0; count < k - 1; count++) {
                groupEnd = groupEnd.next;
            }

            let nextGroupStart = groupEnd.next;
            //cut off rest of list so we can only reverse this portion
            groupEnd.next = null;
            let reversedHead = reverseList(groupStart);

            groupPrevTail.next = reversedHead;   // attach previous group's tail to new head
            groupStart.next = nextGroupStart;    // groupStart is now the TAIL after reversal
            groupPrevTail = groupStart;          // this group's tail becomes "previous" for next round
        }
        
        //need to change to return last element of reverse list 
        function reverseList(head){
            let prev = null;
            let curr = head;

            while(curr !== null){
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            return prev;
        }

    }
}
