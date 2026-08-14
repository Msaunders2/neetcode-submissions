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
     * @return {TreeNode}
     */
    invertTree(root) {
        let node = root;

        if(node === null){
            return node;
        }

        let right = node.right;
        let left = node.left;
        node.right = left;
        node.left = right;

        this.invertTree(node.right);
        this.invertTree(node.left);

        return node;
    }

}
