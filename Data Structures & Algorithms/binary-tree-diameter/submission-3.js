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
        let maxDiameter = 0;

        if(root === null){
            return 0;
        }

        getDepth(root);

        function getDepth(node){
            if(node === null){
                return 0;
            }

            let ld = getDepth(node.left);
            let rd = getDepth(node.right);

            let diameter = ld + rd;
            maxDiameter = Math.max(diameter, maxDiameter);
            return 1 + Math.max(ld,rd);
        }

        return maxDiameter;
    }
}
