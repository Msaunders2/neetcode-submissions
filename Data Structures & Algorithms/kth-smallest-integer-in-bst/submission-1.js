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

        inorder(root);

        function inorder(node){
            if(node === null){
                return 0;
            }  

            inorder(node.left);

            ct++;
            if(ct === k){
                res = node.val;
            }

            inorder(node.right);
        }

        return res;
    }
}
