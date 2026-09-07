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
        let left = node.left;
        let right = node.right;

        node.left = right;
        node.right = left;

        this.invertTree(node.left);
        this.invertTree(node.right);

        return node;
    }

}
