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
        let dummy = new ListNode();
        let resCurr = dummy;
        let carryOver = 0;
        let h1 = l1;
        let h2 = l2;

        //same length arrays
        while(h1 && h2){
            let sum = h1.val + h2.val;
            console.log(sum);

            //carryOver case
            if(sum >= 10){
                console.log("Carry over");
                let val = sum + carryOver;
                carryOver = Math.floor(val / 10);
                val = val % 10;

                //create next node: add it to list: move forward
                let node = new ListNode(val);
                resCurr.next = node;
                resCurr = resCurr.next;
                //move to next digit to add
                h1 = h1.next;
                h2 = h2.next;
            }else{
                console.log("No Carry over");
                if(carryOver > 0){
                    let val = sum + carryOver;
                    carryOver = Math.floor(val / 10);
                    sum = val % 10;
                }
                let node = new ListNode(sum);
                resCurr.next = node;
                resCurr = resCurr.next;
                h1 = h1.next;
                h2 = h2.next;
            }
        }

        //case 2: leftover digits. array not same length
        while(h1 !== null){
            let sum = h1.val + carryOver;
            carryOver = Math.floor(sum / 10);
            sum = sum % 10;

            let node = new ListNode(sum);
            resCurr.next = node;
            resCurr = resCurr.next;
            h1 = h1.next;
        }

        while(h2 !== null){
            let sum = h2.val + carryOver;;
            carryOver = Math.floor(sum / 10);
            sum = sum % 10;

            let node = new ListNode(sum);
            resCurr.next = node;
            resCurr = resCurr.next;
            h2 = h2.next;
        }

        if(carryOver > 0){
            let node = new ListNode(carryOver);
            resCurr.next = node;
            resCurr = resCurr.next;
            carryOver = 0;
        }

        return dummy.next;
    }
}
