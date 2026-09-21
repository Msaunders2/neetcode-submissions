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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let stack1 = [];
        let stack2 = [];


        let curr1 = l1;
        let curr2 = l2;

        while (curr1) {
            stack1.push(curr1.val);
            curr1 = curr1.next;
        }
        while (curr2) {
            stack2.push(curr2.val);
            curr2 = curr2.next;
        }

        let one = stack1.reverse().join('');
        let two = stack2.reverse().join('');

        let sum = BigInt(one) + BigInt(two);
        let sumStr = sum.toString();

        let dummy = new ListNode(0);
        let tail = dummy;

        for(let i = sumStr.length - 1; i >= 0; i--){
            tail.next = new ListNode(Number(sumStr[i]));
            tail = tail.next;
        }

        return dummy.next;

    }
}
