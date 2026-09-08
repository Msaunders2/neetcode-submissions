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
        let maxD = 0;

        if(root === null){
            return 0;
        }

        checkD(root);

        function checkD(root){
            if(root === null){
                return 0;
            }

            let ltRes = checkD(root.left);
            let rtRes = checkD(root.right);

            let currD = ltRes + rtRes ;
            maxD = Math.max(currD ,maxD);

            return 1 + Math.max(ltRes, rtRes);
        }

        return maxD;

    }
}
