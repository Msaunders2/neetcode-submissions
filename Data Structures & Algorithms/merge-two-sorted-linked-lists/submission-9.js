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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummyNode = new ListNode();
        let dummy = dummyNode;

        let p1 = list1;
        let p2 = list2;

        while(p1 && p2){
            console.log("iteration",dummyNode);

            if(p1.val > p2.val){
                // let placeholder = p2;
                // placeholder.next = null;
                // dummy.next = placeholder;
                dummy.next = p2;
                p2 = p2.next;
                dummy = dummy.next;
            }else if(p2.val > p1.val){
                // let placeholder = p2;
                // placeholder.next = null;
                // dummy.next = placeholder;
                dummy.next = p1;
                p1 = p1.next;
                dummy = dummy.next;

            }else{
                //equal case
                dummy.next = p1;
                p1 = p1.next;
                dummy = dummy.next;


                dummy.next = p2;
                p2 = p2.next;
                dummy = dummy.next;
            }
        }

        //if one is longer or there is leftover one point not at end. append whats left
        if(p1 !== null){
            dummy.next = p1;
        }else if(p2 !== null){
            dummy.next = p2;
        }

        return dummyNode.next;
    }
}
