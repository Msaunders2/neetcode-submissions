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
        let res = 0;

        function checkD(node){
            if(node === null){
                return 0;
            }

            let RHeight = checkD(node.right);
            let LHeight = checkD(node.left);

            let diameter = RHeight + LHeight;
            res = Math.max(diameter,res);
            
            return 1 + Math.max(RHeight, LHeight);
        }

        checkD(root);
        return res;
    }
}
