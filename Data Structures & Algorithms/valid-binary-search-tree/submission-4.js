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
    isValidBST(root) {
        let res = true;

        if(root === null){
            return res;
        }

        let min = -Infinity;
        let max = Infinity;
        validate(root,min,max);

        function validate(node, min, max){
            if(node === null){
                return res;
            }

            if(node.val <= min || node.val >= max){
                res = false;
            }

            validate(node.right, node.val, max);
            validate(node.left, min, node.val);
        }

        return res
    }
}
