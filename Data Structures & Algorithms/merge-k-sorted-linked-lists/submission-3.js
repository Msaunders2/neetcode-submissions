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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0)return null;

        while(lists.length > 1){
            let merged = [];

            for(let i = 0; i < lists.length; i += 2) {
                if(i + 1 < lists.length) {
                    merged.push(mergeTwoLists(lists[i], lists[i + 1]));
                }else{
                    merged.push(lists[i]);
                }
            }
            lists = merged;
        }

        return lists[0];

        function mergeTwoLists(list1, list2){
            let dummy = new ListNode(0);
            let curr = dummy;

            while (list1 !== null && list2 !== null) {
                if (list1.val <= list2.val) {
                    curr.next = list1;
                    list1 = list1.next;
                } else {
                    curr.next = list2;
                    list2 = list2.next;
                }
                curr = curr.next;
            }

            curr.next = list1 !== null ? list1 : list2;
            return dummy.next;
        }
    }
}
