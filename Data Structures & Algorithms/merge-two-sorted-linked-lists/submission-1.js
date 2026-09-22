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
        //dummy in the case of empty list and so we dont need extra sepceial cases for the first node
        //case 1: empty lists
        let dummy = new ListNode(null);
        let curr = dummy;

        //case2: two val ready to merge
        while(list1 !== null && list2 !== null){
            if(list1.val <= list2.val){
                curr.next = list1;
                list1 = list1.next;
            }else{
                curr.next = list2;
                list2 = list2.next;
            }

            curr = curr.next;
        }

        //case3: only one val just add to end
        if(list1 !== null){
            curr.next = list1;
        }else if(list2 !== null){
            curr.next = list2;
        }

        return dummy.next;
    }
}
