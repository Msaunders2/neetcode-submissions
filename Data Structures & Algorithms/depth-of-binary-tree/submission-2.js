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

    maxDepth(root) {
        let depth = 0;
        let node = root;

        if(node === null){
            return 0;
        }

        let depthR = this.maxDepth(node.right);
        let depthL = this.maxDepth(node.left);

        let res = Math.max(depthR,depthL) + 1;

        return res;
    }

}
