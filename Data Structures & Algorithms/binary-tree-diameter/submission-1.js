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
    diameterOfBinaryTree(root) {
        if(root === null){
            return 0;
        }
        let maxD = 0;

        checkD(root);


        function checkD(root){
             if(root === null){
                return 0;
            }

            let lH = checkD(root.left);
            let rH = checkD(root.right);
            
            let diameter = lH + rH;

            maxD = Math.max(diameter, maxD);

            return 1 + Math.max(lH, rH);
        }

        return maxD;
    }
}
