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
     * @return {boolean}
     */
    hasCycle(head) {
        let slowpointer = head;
        let fastpointer = head;
        let res = false;

        while(fastpointer !== null && fastpointer.next !== null){
            slowpointer = slowpointer.next;
            fastpointer = fastpointer.next.next;

            if(slowpointer === fastpointer){
                res = true;
                break;
            }
        }

        return res;
    }
}
