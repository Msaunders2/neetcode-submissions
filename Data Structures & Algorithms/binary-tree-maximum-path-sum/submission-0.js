/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        if(root === null){
            return 0;
        }

        let maxSum = -Infinity;

        checkPath(root);

        function checkPath(root){
            if(root === null){
                return 0;
            }

            let sumL = checkPath(root.left);
            let sumR = checkPath(root.right);

            let leftGain = Math.max(0, sumL);
            let rightGain = Math.max(0, sumR);

    
            // What is the best path that can be RETURNED upward?
            let bestSide = Math.max(leftGain, rightGain);
            
            // What is the best path that goes THROUGH root?
            let throughNode = leftGain + root.val + rightGain;

            maxSum = Math.max(maxSum , throughNode);

            return bestSide + root.val;
        }

        return maxSum;

    }
}
