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
     * @return {boolean}
     */
    isBalanced(root) {
        let maxDiff = 0;
        if(root === null){
            return true;
        }

        getHeightDiff(root);

        if(maxDiff > 1){
            return false;
        }

        return true;

        function getHeightDiff(root){
            if(root === null){
                return true;
            }

            let lCt = getHeightDiff(root.left);
            let rCt = getHeightDiff(root.right);

            maxDiff = Math.max(maxDiff, Math.abs(lCt - rCt)) ;

            return 1 + Math.max(lCt, rCt);

        }
    }
}
