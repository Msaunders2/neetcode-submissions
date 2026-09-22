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
        let max = -Infinity;

        if(root === null){
            return null;
        }

        checkPaths(root);

        function checkPaths(node){
            if(node === null){
                return null;
            }

            let leftVal = checkPaths(node.left);
            let rightVal = checkPaths(node.right);

            let leftGain = Math.max(0,leftVal);
            let rightGain = Math.max(0,rightVal);

            let bestSide = Math.max(leftGain,rightGain);
            let overallGain = leftGain + node.val + rightGain;

            max = Math.max(overallGain, max);

            return node.val + bestSide;
        }

        return max;
    }
}
