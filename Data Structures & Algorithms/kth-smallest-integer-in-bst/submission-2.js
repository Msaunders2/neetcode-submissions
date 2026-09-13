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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let ct = 0;
        let res;

        if(root === null){
            return 0;
        }

        inorderTraversal(root);

        function inorderTraversal(node){
            if(node === null){
                return 0;
            }

            inorderTraversal(node.left);

            ct++;
            if(ct === k){
                res = node.val;
            }
            inorderTraversal(node.right);

            return res;
        }

        return res;
    }
}
